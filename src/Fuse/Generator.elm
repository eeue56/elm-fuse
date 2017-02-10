port module Fuse.Generator exposing (..)

import Platform
import Dict
import Xml.Encode exposing (Value(Tag))
import Xml.Query
import FFI
import Fuse
import Json.Encode as Json


port sendUxl : String -> Cmd msg


port modelUpdated : ( Json.Value, Json.Value ) -> Cmd msg


port events : (Json.Value -> msg) -> Sub msg



-- TODO: collect subs other than buttons


collectSubs : Fuse.Program msg model -> List String
collectSubs (Fuse.Program tags special) =
    List.map (Xml.Query.tags "Button") tags
        |> List.concat
        |> List.filterMap
            (\tag ->
                case tag of
                    Tag name dict _ ->
                        case Dict.get "Clicked" dict of
                            Just name ->
                                Xml.Query.string name
                                    |> Result.toMaybe

                            Nothing ->
                                Nothing

                    _ ->
                        Nothing
            )
        |> List.map (String.dropLeft 1 >> String.dropRight 1)


collectSends : Fuse.Program msg model -> List String
collectSends (Fuse.Program tags special) =
    special
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
run update model ((Fuse.Program tags special) as program) =
    Platform.program
        { init =
            ( model
            , Cmd.batch
                [ sendUxl <| Fuse.programToUXL program (collectSends program) (collectSubs program)
                , modelUpdated <| ( FFI.asIs model, Json.list <| List.map FFI.asIs special )
                ]
            )
        , update =
            (\msg model ->
                let
                    ( newModel, newCmds ) =
                        update msg model
                in
                    ( newModel, Cmd.batch [ modelUpdated <| ( FFI.asIs newModel, Json.list <| List.map FFI.asIs special ), newCmds ] )
            )
        , subscriptions =
            (\model ->
                events FFI.intoElm
            )
        }
