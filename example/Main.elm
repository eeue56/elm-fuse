port module Main exposing (..)

import Fuse exposing (..)
import Fuse.Layout exposing (..)
import Fuse.Generator


type alias Model =
    { clicks : Int }


type Msg
    = YellowClicked
    | BlackClicked


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        YellowClicked ->
            let
                _ =
                    Debug.log "Small yellow button clicked! Incrementing model in Elm.." model.clicks
            in
                ( { model | clicks = model.clicks + 1 }, Cmd.none )

        BlackClicked ->
            let
                _ =
                    Debug.log "Big black button clicked! Decrement model in Elm.." model.clicks
            in
                ( { model | clicks = model.clicks - 1 }, Cmd.none )


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
