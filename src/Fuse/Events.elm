module Fuse.Events exposing (..)

import Json.Encode as Json
import Xml
import Xml.Encode as Xml
import Fuse exposing (..)


onClick : msg -> Attribute msg model
onClick msg =
    Attribute "Clicked" (Xml.string <| "{" ++ (toString msg) ++ "}")
