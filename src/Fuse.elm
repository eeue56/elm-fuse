module Fuse exposing (..)

-- TODO: split this function up in attributes, tags, and magic

import Xml exposing (Value(Tag))
import Xml.Encode as Xml
import Xml.Query
import Json.Encode as Json
import Json.Decode
import Dict exposing (Dict)
import EveryDict exposing (EveryDict)
import FFI


type alias FuseTag =
    Xml.Value


type Attribute msg model
    = Attribute String Xml.Value
    | Reflector (Json.Value -> Attribute msg model) (model -> Json.Value)
    | EventAttribute String msg Int


type alias ObservableUX msg model =
    List (Attribute msg model)


type alias EventHandlers msg model =
    List (Attribute msg model)


type Program msg model
    = Program (List FuseTag) (ObservableUX msg model) (EventHandlers msg model)



-- TODO: make typesafe


attributeToTuple : Attribute msg model -> ( String, Xml.Value )
attributeToTuple attribute =
    case attribute of
        Attribute name value ->
            ( name, value )

        Reflector makeAttr accessor ->
            let
                name =
                    getAttributeName makeAttr
            in
                ( "-Special-" ++ name, FFI.intoElm <| FFI.asIs attribute )

        EventAttribute name msg numberOfArgs ->
            ( "-Event-" ++ name, FFI.intoElm <| FFI.asIs attribute )


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


namedJavaScript : String -> String -> FuseTag
namedJavaScript name content =
    node "JavaScript" [ Attribute "Name" <| Xml.string name ] [ Xml.string content ]


collectObservableValues : Xml.Value -> List (Attribute msg model) -> ObservableUX msg model
collectObservableValues tag xs =
    case tag of
        Tag name dict _ ->
            Dict.toList dict
                |> List.filter (\( name, value ) -> String.startsWith "-Special" name)
                |> List.map (Tuple.second >> FFI.asIs >> FFI.intoElm)
                |> (++) xs

        _ ->
            xs


collectEventValues : Xml.Value -> List (Attribute msg model) -> EventHandlers msg model
collectEventValues tag xs =
    case tag of
        Tag name dict _ ->
            Dict.toList dict
                |> List.filter (\( name, value ) -> String.startsWith "-Event" name)
                |> List.map (Tuple.second >> FFI.asIs >> FFI.intoElm)
                |> (++) xs

        _ ->
            xs


getAttributeName : (Json.Value -> Attribute msg model) -> String
getAttributeName makeAttr =
    case makeAttr (Json.string "") of
        Attribute name _ ->
            name

        _ ->
            ""


collectReflectors : List FuseTag -> ObservableUX msg model
collectReflectors tags =
    tags
        |> Xml.Object
        |> Xml.foldl (collectObservableValues) []
        |> List.filterMap
            (\thing ->
                case thing of
                    Attribute _ _ ->
                        Nothing

                    Reflector makeAttr accessor ->
                        Attribute (functionToString accessor) (FFI.intoElm <| FFI.asIs accessor)
                            |> Just

                    EventAttribute _ _ _ ->
                        Nothing
            )


collectEventHandlers : List FuseTag -> EveryDict msg String -> EventHandlers msg model
collectEventHandlers tags lookup =
    tags
        |> Xml.Object
        |> Xml.foldl (collectEventValues) []
        |> List.filterMap
            (\thing ->
                case thing of
                    Attribute _ _ ->
                        Nothing

                    Reflector makeAttr accessor ->
                        Nothing

                    EventAttribute makeAttr msg numberOfArgs ->
                        EveryDict.get msg lookup
                            |> Maybe.map
                                (\eventName ->
                                    EventAttribute eventName (FFI.intoElm <| FFI.asIs msg) numberOfArgs
                                )
            )


collectEventHandlersWithNames : List FuseTag -> EveryDict msg String
collectEventHandlersWithNames tags =
    tags
        |> Xml.Object
        |> Xml.foldl (collectEventValues) []
        |> List.filterMap
            (\thing ->
                case thing of
                    Attribute _ _ ->
                        Nothing

                    Reflector makeAttr accessor ->
                        Nothing

                    EventAttribute makeAttr msg numberOfArgs ->
                        Just ( makeAttr, msg, numberOfArgs )
            )
        |> List.foldl
            (\( makeAttr, msg, numberOfArgs ) ( i, dict ) ->
                ( i + 1
                , EveryDict.insert msg ("event" ++ toString i ++ "_" ++ toString numberOfArgs) dict
                )
            )
            ( 0, EveryDict.empty )
        |> Tuple.second


xmlToAttribute : Xml.Value -> Attribute msg model
xmlToAttribute =
    FFI.asIs >> FFI.intoElm


insertSpecialItem : String -> Xml.Value -> Dict String Xml.Value -> Dict String Xml.Value
insertSpecialItem name value dict =
    case xmlToAttribute value of
        Attribute name thing ->
            Dict.insert name thing dict

        EventAttribute name msg numberOfArgs ->
            dict

        Reflector makeAttr accessor ->
            let
                attrName =
                    String.dropLeft (String.length "-Special" + 1) name
            in
                Dict.insert attrName (Xml.string <| ("{" ++ functionToString accessor ++ "}")) dict


insertEventItem : String -> Xml.Value -> EveryDict msg String -> Dict String Xml.Value -> Dict String Xml.Value
insertEventItem name value eventDict dict =
    case xmlToAttribute value of
        Attribute name thing ->
            Dict.insert name thing dict

        EventAttribute name msg numberOfArgs ->
            let
                attrName =
                    name

                eventName =
                    EveryDict.get (FFI.intoElm <| FFI.asIs msg) eventDict
                        |> Maybe.withDefault "event_unknown"
            in
                Dict.insert attrName (Xml.string <| ("{" ++ eventName ++ "}")) dict

        Reflector makeAttr accessor ->
            dict


{-|

    Replace all reflectors and events
-}
replaceSpecial : EveryDict msg String -> String -> Dict String Xml.Value -> Xml.Value -> FuseTag
replaceSpecial eventDict name dict tags =
    let
        newDict : Dict String Xml.Value
        newDict =
            Dict.foldl
                (\name value dictA ->
                    if String.startsWith "-Special" name then
                        insertSpecialItem name value dictA
                    else if String.startsWith "-Event" name then
                        insertEventItem name value eventDict dictA
                    else
                        Dict.insert name value dictA
                )
                Dict.empty
                dict
    in
        (Xml.Tag name newDict tags)


app : List FuseTag -> Program msg model
app tags =
    let
        observables =
            collectReflectors tags

        eventHandlersNames =
            collectEventHandlersWithNames tags

        events =
            collectEventHandlers tags eventHandlersNames
                |> Debug.log "events inside"

        newTags =
            tags
                |> List.map (mapTags (replaceSpecial eventHandlersNames))
    in
        Program newTags observables events


mapTags : (String -> Dict String Xml.Value -> Xml.Value -> FuseTag) -> FuseTag -> FuseTag
mapTags fn tag =
    case tag of
        Xml.Tag name dict childrenTag ->
            fn name dict (mapTags fn childrenTag)

        Xml.Object children ->
            Xml.Object (List.map (mapTags fn) children)

        anything ->
            anything


programToUXL : Program msg model -> List String -> List ( String, msg, Int ) -> String -> String
programToUXL (Program tags observables events) sendNames subNames portText =
    [ ( "App", Dict.empty, Xml.list ((javaScript (makeElmBindings sendNames subNames ++ portText)) :: tags) ) ]
        |> Xml.object
        |> Xml.encode 4


makeElmBindings : List String -> List ( String, msg, Int ) -> String
makeElmBindings sendNames subs =
    List.map subNameToJS subs
        |> (++) (List.map sendNameToJS sendNames)
        |> String.join "\n"
        |> (++) elmApp
        |> (\app -> app ++ subsText)
        |> (\body -> body ++ (exports sendNames subs))


exports : List String -> List ( String, msg, Int ) -> String
exports sendNames subs =
    let
        subNames =
            List.map (\( x, _, _ ) -> x) subs

        exportNames =
            ("elm" :: subNames ++ sendNames)
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

var lastModel = null;
elm.ports.modelUpdated.subscribe(function(things){
    var model = things[0];
    var nameToFn = things[1];

    if (model === lastModel) return;
    lastModel = model;

    nameToFn.map(function(thing){
        var name = thing._0;
        var func = thing._1;
        var newValue = func(model);

        if (typeof newValue === "object" && Object.keys(newValue).indexOf('_items') > -1){
            if (module.exports[name].toArray() == newValue['_items']) return;


            module.exports[name].clear();
            module.exports[name].addAll(newValue['_items']);
        } else {
            if (module.exports[name].value == newValue) return;
            module.exports[name].value = newValue;
        }
    });
});
"""


getCtor : msg -> String
getCtor msg =
    FFI.sync """
return _0.ctor || "";
    """
        [ FFI.asIs msg
        ]
        |> FFI.intoElm


{-|

    >>> argsBlock 1
    "_0"

    >>> argsBlock 2
    "_0, _1"

    >>> argsBlock 0
    ""
-}
argsBlock : Int -> String
argsBlock n =
    List.range 0 (n - 1)
        |> List.map toString
        |> List.map (\str -> "_" ++ str)
        |> String.join ", "


argsBlockValues : Int -> String
argsBlockValues n =
    List.range 0 (n - 1)
        |> List.map toString
        |> List.map (\str -> "_" ++ str ++ ".value")
        |> String.join ", "


subNameToJS : ( String, msg, Int ) -> String
subNameToJS ( name, msg, numberOfArgs ) =
    let
        msgToString =
            if numberOfArgs < 1 then
                trueToString msg
            else
                (msg |> FFI.asIs |> FFI.intoElm |> funcToString)

        argParts =
            argsBlock numberOfArgs

        extras =
            if numberOfArgs < 1 then
                ")"
            else
                ")(" ++ argsBlockValues numberOfArgs ++ ")"
    in
        """ function """ ++ name ++ """(""" ++ argParts ++ """){
        elm.ports.eventsPort.send((""" ++ msgToString ++ extras ++ """  );
        }"""


sendNameToJS : String -> String
sendNameToJS name =
    """ var """ ++ name ++ """ = new Observable();"""


reflect : (Json.Value -> Attribute msg model) -> (model -> Json.Value) -> Attribute msg model
reflect attributeMake view =
    Reflector attributeMake view


reflectString : (String -> Attribute msg model) -> (model -> String) -> Attribute msg model
reflectString attributeMake view =
    reflect (FFI.intoElm >> attributeMake) (view >> Json.string)


items : Json.Value -> Attribute msg model
items thing =
    Attribute "Items" <| Xml.jsonToXml thing


each : (model -> List thing) -> (thing -> FuseTag) -> FuseTag
each reflector view =
    node "Each"
        [ reflect items (reflector >> List.map FFI.asIs >> Json.list >> (\x -> Json.object [ ( "_items", x ) ])) ]
        [ view (FFI.intoElm <| FFI.asIs "") ]


secondEach : (model -> List thing) -> (thing -> FuseTag) -> FuseTag
secondEach reflection view =
    node "Each"
        [ reflect items (reflection >> List.map FFI.asIs >> Json.list >> (\x -> Json.object [ ( "_items", x ) ])) ]
        [ view (FFI.intoElm <| FFI.asIs "") ]



-- TODO: this only works if functions aren't the same length


functionToString : (a -> b) -> String
functionToString fn =
    FFI.sync """
    if (typeof window === "undefined") {
        if (typeof global === "undefined") var global = {};
        var window = global;
        window.mapper = {};
    }
    if (typeof window.counter === 'undefined') { window.counter = 0 }
    window.counter++;

    if (typeof window.mapper[_0.toString()] === "undefined")
        window.mapper[_0.toString()] = 'func' + _0.toString().length.toString() + window.counter;

    return window.mapper[_0.toString()];
    """ [ FFI.asIs fn ]
        |> FFI.intoElm


trueToString : a -> String
trueToString a =
    FFI.sync "return JSON.stringify(_0)" [ FFI.asIs a ]
        |> FFI.intoElm


{-| -}
funcToString : (a -> b) -> String
funcToString fn =
    FFI.sync "return _0.toString();" [ FFI.asIs fn ]
        |> FFI.intoElm
