module Fuse.Controls exposing (..)

import Fuse exposing (..)


textInput : List (Attribute msg model) -> List FuseTag -> FuseTag
textInput =
    node "TextInput"


interactiveTransform : List (Attribute msg model) -> List FuseTag -> FuseTag
interactiveTransform =
    node "InteractiveTransform"


text : List (Attribute msg model) -> List FuseTag -> FuseTag
text =
    node "Text"
