port module Main exposing (..)

import Fuse exposing (..)
import Fuse.Generator


port sendUxl : String -> Cmd msg


main : Platform.Program Never () msg
main =
    Fuse.app
        [ button
            [ text "A black button"
            , width 500
            , height 200
            , color "#000"
            ]
            []
        , rectangle
            [ color "#F00" ]
            []
        ]
        |> Fuse.Generator.run sendUxl
