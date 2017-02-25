port module Main exposing (..)

import Model exposing (..)
import Update exposing (..)
import Fuse exposing (..)
import Fuse.Attributes exposing (..)
import Fuse.Layout exposing (..)
import Fuse.Generator


main : Platform.Program Never Model Msg
main =
    Fuse.app
        [ stackPanel
            []
            [ button
                [ text "Click to decrement"
                , width 500
                , height 200
                , color "#000"
                , onClick BlackClicked
                ]
                []
            , button
                [ text "Click to increment"
                , width 300
                , height 100
                , color "#FF0"
                , onClick YellowClicked
                ]
                []
            , button
                [ reflect text (\model -> "You have a total score of " ++ (toString model.clicks) ++ "!")
                , width 400
                , height 200
                , color "#FFF"
                ]
                []
            ]
        , rectangle
            [ color "#F00" ]
            []
        ]
        |> Fuse.Generator.run update { clicks = 0 }
