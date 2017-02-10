module Update exposing (..)

import Model exposing (..)


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
