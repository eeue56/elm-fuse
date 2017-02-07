port module Main exposing (..)

import Fuse exposing (..)
import Fuse.Layout exposing (..)
import Fuse.Generator


port sendUxl : String -> Cmd msg


main : Platform.Program Never () msg
main =
    Fuse.app
        [ stackPanel
            []
            [ button
                [ text "A black button"
                , width 500
                , height 200
                , color "#000"
                ]
                []
            , button
                [ text "A small yellow button"
                , width 300
                , height 100
                , color "#FF0"
                ]
                []
            , nativeViewHost
                []
                [ webview [ url "https://google.com" ] [] ]
            ]
        , rectangle
            [ color "#F00" ]
            []
        ]
        |> Fuse.Generator.run sendUxl
