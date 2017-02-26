module Fuse.Conditions exposing (..)

import Json.Encode as Json
import Fuse exposing (..)
import Fuse.Attributes exposing (bool, value)
import Xml


match : List (Attribute msg model) -> List FuseTag -> FuseTag
match =
    node "Match"


matchCase : List (Attribute msg model) -> List FuseTag -> FuseTag
matchCase =
    node "Case"


viewIf : (model -> Bool) -> FuseTag -> FuseTag -> FuseTag
viewIf conditionFn ifTrueView ifFalseView =
    match
        [ reflect (Xml.jsonToXml >> value) (conditionFn >> Json.bool) ]
        [ matchCase [ bool True ] [ ifTrueView ]
        , matchCase [ bool False ] [ ifFalseView ]
        ]
