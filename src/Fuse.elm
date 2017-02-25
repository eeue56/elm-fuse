module Fuse exposing (..)

-- TODO: split this function up in attributes, tags, and magic

import Xml.Encode as Xml exposing (Value(Tag))
import Xml.Query
import Json.Encode as Json
import Json.Decode
import Dict exposing (Dict)
import FFI


type alias FuseTag =
    Xml.Value


type Attribute msg model
    = Attribute String Xml.Value
    | Reflector (Json.Value -> Attribute msg model) (model -> Json.Value)


type Program msg model
    = Program (List FuseTag) (List (Attribute msg model))


type Observable
    = Observable



-- TODO: make typesafe


attributeToTuple : Attribute msg model -> ( String, Xml.Value )
attributeToTuple attribute =
    case attribute of
        Attribute name value ->
            ( name, value )

        Reflector makeAttr accessor ->
            ( "-Special", FFI.intoElm <| FFI.asIs attribute )


attributesToDict : List (Attribute msg model) -> Dict String Xml.Value
attributesToDict attributes =
    attributes
        |> List.map attributeToTuple
        |> Dict.fromList


node : String -> List (Attribute msg model) -> List FuseTag -> FuseTag
node name attrs children =
    Xml.Tag name (attributesToDict attrs) (Xml.list children)


button : List (Attribute msg model) -> List FuseTag -> FuseTag
button =
    node "Button"


rectangle : List (Attribute msg model) -> List FuseTag -> FuseTag
rectangle =
    node "Rectangle"


webview : List (Attribute msg model) -> List FuseTag -> FuseTag
webview =
    node "WebView"


nativeViewHost : List (Attribute msg model) -> List FuseTag -> FuseTag
nativeViewHost =
    node "NativeViewHost"


javaScript : String -> FuseTag
javaScript content =
    node "JavaScript" [] [ Xml.string content ]



-- TODO: this function is probably one of the worst I've ever written
-- It's magic, not typesafe, and in dire need of refactoring ASAP.


app : List FuseTag -> Program msg model
app tags =
    let
        special : List (Attribute msg model)
        special =
            List.map (Xml.Query.tags "Button") tags
                |> List.concat
                |> List.filterMap
                    (\tag ->
                        case tag of
                            Tag name dict _ ->
                                case Dict.get "-Special" dict of
                                    Just attr ->
                                        FFI.asIs attr
                                            |> FFI.intoElm
                                            |> Just

                                    Nothing ->
                                        Nothing

                            _ ->
                                Nothing
                    )
                |> List.filterMap
                    (\thing ->
                        case thing of
                            Attribute _ _ ->
                                Nothing

                            Reflector makeAttr accessor ->
                                let
                                    name =
                                        makeAttr (Json.string "")
                                            |> (\a ->
                                                    case a of
                                                        Attribute nameA _ ->
                                                            nameA

                                                        _ ->
                                                            ""
                                               )
                                in
                                    Attribute (functionToString accessor) (FFI.intoElm <| FFI.asIs accessor)
                                        |> Just
                    )

        replaceSpecial : String -> Dict String Xml.Value -> Xml.Value -> FuseTag
        replaceSpecial name dict tags =
            let
                newDict =
                    Dict.foldl
                        (\name value dictA ->
                            if name == "-Special" then
                                case FFI.asIs value |> FFI.intoElm of
                                    Attribute name thing ->
                                        Dict.insert name thing dictA

                                    Reflector makeAttr accessor ->
                                        let
                                            name =
                                                makeAttr (Json.string "")
                                                    |> (\a ->
                                                            case a of
                                                                Attribute nameA _ ->
                                                                    nameA

                                                                _ ->
                                                                    ""
                                                       )
                                        in
                                            Dict.insert name (Xml.string <| ("{" ++ functionToString accessor ++ "}")) dictA
                            else
                                Dict.insert name value dictA
                        )
                        Dict.empty
                        dict
            in
                (Xml.Tag name newDict tags)

        newTags =
            List.map (mapTags replaceSpecial) tags
    in
        Program newTags special


mapTags : (String -> Dict String Xml.Value -> Xml.Value -> FuseTag) -> FuseTag -> FuseTag
mapTags fn tag =
    case tag of
        Xml.Tag name dict childrenTag ->
            fn name dict (mapTags fn childrenTag)

        Xml.Object children ->
            Xml.Object (List.map (mapTags fn) children)

        anything ->
            anything


programToUXL : Program msg model -> List String -> List String -> String
programToUXL (Program tags special) sendNames subNames =
    [ ( "App", Dict.empty, Xml.list ((javaScript (makeElmBindings sendNames subNames)) :: tags) ) ]
        |> Xml.object
        |> Xml.encode 4


makeElmBindings : List String -> List String -> String
makeElmBindings sendNames subNames =
    List.map subNameToJS subNames
        |> (++) (List.map sendNameToJS sendNames)
        |> String.join "\n"
        |> (++) elmApp
        |> (\app -> app ++ subsText)
        |> (\body -> body ++ (exports sendNames subNames))


exports : List String -> List String -> String
exports sendNames subNames =
    let
        exportNames =
            (subNames ++ sendNames)
                |> List.map (\name -> name ++ ":" ++ name)
                |> String.join ","
    in
        "module.exports = {" ++ exportNames ++ "}"


elmApp : String
elmApp =
    """
var Observable = require("FuseJS/Observable");
var Elm = require('./elm.js');
var elm = Elm.Main.worker();
    """


subsText : String
subsText =
    """
elm.ports.modelUpdated.subscribe(function(things){
    var model = things[0];
    var nameToFn = things[1];

    nameToFn.map(function(thing){
        var name = thing._0;
        var func = thing._1;
        module.exports[name].value = func(model);
    });
});
"""


subNameToJS : String -> String
subNameToJS name =
    """ function """ ++ name ++ """(){
    elm.ports.events.send({ctor: '""" ++ name ++ """'});
}
    """


sendNameToJS : String -> String
sendNameToJS name =
    """ var """ ++ name ++ """ = new Observable();"""


reflect : (Json.Value -> Attribute msg model) -> (model -> Json.Value) -> Attribute msg model
reflect attributeMake view =
    Reflector attributeMake view


reflectString : (String -> Attribute msg model) -> (model -> String) -> Attribute msg model
reflectString attributeMake view =
    reflect (FFI.intoElm >> attributeMake) (view >> Json.string)



-- TODO: this only works if functions aren't the same length


functionToString : (a -> b) -> String
functionToString fn =
    FFI.sync "return 'func' + _0.toString().length.toString();" [ FFI.asIs fn ]
        |> FFI.intoElm
