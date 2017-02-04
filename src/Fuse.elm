module Fuse exposing (..)

import Xml.Encode as Xml
import Dict exposing (Dict)


type FuseTag
    = Tag String (List FuseTag)


xmlEncodeList : List Xml.Value -> Xml.Value
xmlEncodeList xs =
    List.map (\x -> ( "", Dict.empty, x )) xs
        |> Xml.object


toUX : FuseTag -> Xml.Value
toUX tag =
    case tag of
        Tag name [] ->
            Xml.object
                [ ( name, Dict.empty, Xml.null ) ]

        Tag name children ->
            Xml.object
                [ ( name, Dict.empty, xmlEncodeList <| List.map toUX children ) ]
