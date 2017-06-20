module Fuse.Attributes exposing (..)

import Json.Encode as Json
import Xml
import Xml.Encode as Xml
import Fuse exposing (..)


attribute : String -> Xml.Value -> Attribute msg model
attribute name value =
    Attribute name value


height : Int -> Attribute msg model
height =
    Xml.int
        >> Attribute "Height"


width : Int -> Attribute msg model
width =
    Xml.int
        >> Attribute "Width"


x : Int -> Attribute msg model
x =
    Xml.int
        >> Attribute "X"


y : Int -> Attribute msg model
y =
    Xml.int
        >> Attribute "Y"


fontSize : Int -> Attribute msg model
fontSize =
    Xml.int
        >> Attribute "FontSize"


color : String -> Attribute msg model
color =
    Xml.string
        >> Attribute "Color"


url : String -> Attribute msg model
url =
    Xml.string
        >> Attribute "Url"


text : String -> Attribute msg model
text words =
    Attribute "Text" (Xml.string words)


bool : Bool -> Attribute msg model
bool =
    Xml.bool
        >> Attribute "Bool"


value : Xml.Value -> Attribute msg model
value =
    Attribute "Value"


anchor : Int -> Int -> Attribute msg model
anchor x y =
    Xml.string (toString x ++ "%," ++ toString y ++ "%")
        |> Attribute "Anchor"


perspective : Float -> Attribute msg model
perspective =
    Xml.float
        >> Attribute "Perspective"


mode : String -> Attribute msg model
mode =
    Xml.string
        >> Attribute "Mode"


transformOrigin : String -> Attribute msg model
transformOrigin =
    Xml.string
        >> Attribute "TransformOrigin"


rotation : Float -> Attribute msg model
rotation =
    Xml.float
        >> Attribute "Rotation"


zoomFactor : Float -> Attribute msg model
zoomFactor =
    Xml.float
        >> Attribute "ZoomFactor"


translation : Float -> Float -> Attribute msg model
translation x y =
    toString x
        ++ ","
        ++ toString y
        |> Xml.string
        |> Attribute "Translation"


stringTranslation : String -> Attribute msg model
stringTranslation =
    Xml.string
        >> Attribute "Translation"
