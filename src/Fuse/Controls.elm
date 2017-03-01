module Fuse.Controls exposing (..)

import Fuse exposing (..)


textInput : List (Attribute msg model) -> List FuseTag -> FuseTag
textInput =
    node "TextInput"
