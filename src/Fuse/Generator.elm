port module Fuse.Generator exposing (..)

import Platform
import Dict
import Xml exposing (Value(Tag))
import Xml.Query
import FFI
import Fuse
import Json.Encode as Json


port sendUxl : String -> Cmd msg


port modelUpdated : ( Json.Value, Json.Value ) -> Cmd msg


port eventsPort : (Json.Value -> msg) -> Sub msg


collectSubs : Fuse.Program msg model -> List ( String, msg, Int )
collectSubs (Fuse.Program tags observables events) =
    events
        |> List.filterMap
            (\thing ->
                case thing of
                    Fuse.EventAttribute name value numberOfArgs ->
                        Just ( name, FFI.intoElm <| FFI.asIs value, numberOfArgs )

                    _ ->
                        Nothing
            )
        |> Debug.log "events"


collectSends : Fuse.Program msg model -> List String
collectSends (Fuse.Program tags observables events) =
    observables
        |> List.filterMap
            (\thing ->
                case thing of
                    Fuse.Attribute name value ->
                        Just name

                    _ ->
                        Nothing
            )



-- TODO: refactor this to infinity
-- TODO: collect subs other than buttons


run : (msg -> model -> ( model, Cmd msg )) -> model -> Fuse.Program msg model -> Program Never model msg
run update model ((Fuse.Program tags observables events) as program) =
    Platform.program
        { init =
            ( model
            , Cmd.batch
                [ sendUxl <| Fuse.programToUXL program (collectSends program) (collectSubs program)
                , modelUpdated <| ( FFI.asIs model, Json.list <| List.map FFI.asIs observables )
                ]
            )
        , update =
            (\msg model ->
                let
                    ( newModel, newCmds ) =
                        update msg model
                in
                    ( newModel, Cmd.batch [ modelUpdated <| ( FFI.asIs newModel, Json.list <| List.map FFI.asIs observables ), newCmds ] )
            )
        , subscriptions =
            (\model ->
                eventsPort FFI.intoElm
            )
        }
