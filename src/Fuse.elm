module Fuse exposing (..)

import Xml.Encode as Xml
import Dict exposing (Dict)


type alias FuseTag =
    Xml.Value


type Attribute
    = Attribute String Xml.Value


type Program
    = Program (List FuseTag)


attribute : String -> Xml.Value -> Attribute
attribute name value =
    Attribute name value


attributesToDict : List Attribute -> Dict String Xml.Value
attributesToDict attributes =
    attributes
        |> List.map (\(Attribute name value) -> ( name, value ))
        |> Dict.fromList


node : String -> List Attribute -> List FuseTag -> FuseTag
node name attrs children =
    Xml.Tag name (attributesToDict attrs) (Xml.list children)


button : List Attribute -> List FuseTag -> FuseTag
button =
    node "Button"


rectangle : List Attribute -> List FuseTag -> FuseTag
rectangle =
    node "Rectangle"


height : Int -> Attribute
height =
    Xml.int
        >> Attribute "Height"


width : Int -> Attribute
width =
    Xml.int
        >> Attribute "Width"


color : String -> Attribute
color =
    Xml.string
        >> Attribute "Color"


url : String -> Attribute
url =
    Xml.string
        >> Attribute "Url"


text : String -> Attribute
text words =
    Attribute "Text" (Xml.string words)


webview : List Attribute -> List FuseTag -> FuseTag
webview =
    node "WebView"


nativeViewHost : List Attribute -> List FuseTag -> FuseTag
nativeViewHost =
    node "NativeViewHost"


app : List FuseTag -> Program
app tags =
    Program tags


programToUXL : Program -> String
programToUXL (Program tags) =
    [ ( "App", Dict.empty, Xml.list tags ) ]
        |> Xml.object
        |> Xml.encode 4
