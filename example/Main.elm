port module Main exposing (..)

import Model exposing (..)
import Update exposing (..)
import Fuse exposing (..)
import Fuse.Attributes exposing (..)
import Fuse.Events exposing (..)
import Fuse.Layout exposing (..)
import Fuse.Generator
import Fuse.Conditions exposing (viewIf)
import Fuse.Controls exposing (textInput)


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
            , textInput
                [ stringValueChanged (TextChanged)
                , width 300
                , height 200
                ]
                []
            , button
                [ width 300
                , height 200
                , color "#FFA"
                , reflectString text (\model -> "You typed: " ++ model.text)
                ]
                []
            , button
                [ --reflectString text (\model -> "You have a total score of " ++ (toString model.clicks) ++ "!" ++ " and you typed " ++ model.text)
                  width 400
                , height 200
                , color "#FFF"
                ]
                []
            , button
                [ height 50
                , color "#000"
                ]
                []
            , viewIf (\model -> model.clicks >= 5)
                (button
                    [ text "You've got 5 or more things!"
                    , width 400
                    , height 200
                    , color "#FFF"
                    ]
                    []
                )
                (button [] [])
            ]
        , rectangle
            [ color "#FFF" ]
            []
        ]
        |> Fuse.Generator.run update { clicks = 0, text = "" }
