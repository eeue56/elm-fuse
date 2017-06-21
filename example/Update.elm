module Update exposing (..)

import Model exposing (..)
import List.Zipper as Zipper exposing (Zipper)
import Json.Decode as Json


type Msg
    = StartMoving
    | Tick Float
    | NewTranslations String
    | TextChanged String


fromCurrentToNext : Zipper Viewport -> ( Float, Float )
fromCurrentToNext translations =
    case Zipper.next translations of
        Nothing ->
            ( 0, 0 )

        Just next ->
            let
                nextViewport =
                    Zipper.current next

                currentViewport =
                    Zipper.current translations

                diffX =
                    nextViewport.translationX - currentViewport.translationX

                diffY =
                    nextViewport.translationY - currentViewport.translationY
            in
                ( diffX, diffY )


fromViewportToNext : Viewport -> Viewport -> ( Float, Float )
fromViewportToNext currentViewport nextViewport =
    let
        diffX =
            nextViewport.translationX - currentViewport.translationX

        diffY =
            nextViewport.translationY - currentViewport.translationY
    in
        ( diffX, diffY )


fromCurrentToNextZoom : Zipper Viewport -> Float
fromCurrentToNextZoom translations =
    case Zipper.next translations of
        Nothing ->
            0

        Just next ->
            let
                nextViewport =
                    Zipper.current next

                currentViewport =
                    Zipper.current translations

                diffX =
                    nextViewport.zoomFactor - currentViewport.zoomFactor
            in
                diffX


fromViewportToNextZoom : Viewport -> Viewport -> Float
fromViewportToNextZoom currentViewport nextViewport =
    let
        diffX =
            nextViewport.zoomFactor - currentViewport.zoomFactor
    in
        diffX


isPastCurrent : Model -> Bool
isPastCurrent model =
    model.timeInMilliseconds > (Zipper.current model.translations |> .animationLength)


type RectField
    = FloatField Float
    | StringField String


decodeRectFields : Json.Decoder RectField
decodeRectFields =
    Json.oneOf
        [ Json.map FloatField Json.float
        , Json.map StringField Json.string
        ]


loadViewports : String -> Model -> Model
loadViewports viewports model =
    { model
        | translations =
            String.split "\n" viewports
                |> List.filter (String.startsWith "[Viewport")
                |> List.map (\line -> String.split " " line |> List.drop 1 |> String.join " " |> (\x -> "[" ++ x))
                |> List.filterMap (\line -> Json.decodeString (Json.list Json.float) line |> Result.toMaybe)
                |> List.filterMap
                    (\x ->
                        case x of
                            [ x, y, z, d ] ->
                                Viewport x y z d |> Just

                            _ ->
                                Nothing
                    )
                |> Zipper.fromList
                |> Zipper.withDefault (Zipper.current model.translations)
        , isPaused = String.startsWith "pause" viewports
        , rects =
            String.split "\n" viewports
                |> List.filter (String.startsWith "[Rect")
                |> List.map (\line -> String.split " " line |> List.drop 1 |> String.join " " |> (\x -> "[" ++ x))
                |> List.filterMap (\line -> Json.decodeString (Json.list decodeRectFields) line |> Result.toMaybe)
                |> List.filterMap
                    (\x ->
                        case x of
                            [ FloatField x, FloatField y, StringField z, FloatField d, FloatField n ] ->
                                Rect x y z d n |> Just

                            _ ->
                                Nothing
                    )
        , texts =
            String.split "\n" viewports
                |> List.filter (String.startsWith "[Text")
                |> List.map (\line -> String.split " " line |> List.drop 1 |> String.join " " |> (\x -> "[" ++ x))
                |> List.filterMap (\line -> Json.decodeString (Json.list decodeRectFields) line |> Result.toMaybe)
                |> List.filterMap
                    (\x ->
                        case x of
                            [ FloatField x, FloatField y, StringField z, StringField d, FloatField n ] ->
                                TextBlob x y z d n |> Just

                            _ ->
                                Nothing
                    )
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    if model.isPaused then
        case msg of
            NewTranslations stuff ->
                let
                    newModel =
                        loadViewports stuff model
                in
                    ( { newModel
                        | currentMovement = fromViewportToNext model.currentViewport (Zipper.current newModel.translations)
                        , currentZoomDiff = fromViewportToNextZoom model.currentViewport (Zipper.current newModel.translations)
                        , isMoving = True
                        , timeInMilliseconds = 0
                        , inMiddlePoint = True
                      }
                    , Cmd.none
                    )

            TextChanged text ->
                ( { model | text = text }, Cmd.none )

            _ ->
                ( model, Cmd.none )
    else
        case msg of
            StartMoving ->
                if not model.isPaused then
                    ( { model
                        | isMoving = True
                        , currentMovement = fromCurrentToNext model.translations
                        , timeInMilliseconds = 0
                        , currentZoomDiff = Debug.log "Zoom diff: " <| fromCurrentToNextZoom model.translations
                      }
                    , Cmd.none
                    )
                else
                    ( model, Cmd.none )

            Tick float ->
                if model.isMoving then
                    if isPastCurrent model then
                        if model.inMiddlePoint then
                            ( { model
                                | isMoving = False
                                , currentMovement = ( 0, 0 )
                                , translations = model.translations
                                , currentViewport = Zipper.current model.translations
                                , timeInMilliseconds = 0
                                , inMiddlePoint = False
                              }
                            , Cmd.none
                            )
                        else
                            let
                                nextViewport =
                                    Zipper.next model.translations
                                        |> Zipper.withDefault (Zipper.current model.translations)
                            in
                                ( { model
                                    | isMoving = False
                                    , currentMovement = ( 0, 0 )
                                    , translations = nextViewport
                                    , currentViewport = Zipper.current nextViewport
                                    , timeInMilliseconds = 0
                                  }
                                , Cmd.none
                                )
                    else
                        let
                            ( x, y ) =
                                model.currentMovement

                            currentViewport =
                                model.currentViewport

                            multiplier =
                                Zipper.current model.translations
                                    |> .animationLength
                                    |> (\length -> float / length)

                            nextCenter =
                                { currentViewport
                                    | translationX = currentViewport.translationX + (x * multiplier)
                                    , translationY = currentViewport.translationY + (y * multiplier)
                                    , zoomFactor = currentViewport.zoomFactor + (model.currentZoomDiff * multiplier)
                                }
                        in
                            ( { model
                                | currentViewport = nextCenter
                                , timeInMilliseconds = model.timeInMilliseconds + float
                              }
                            , Cmd.none
                            )
                else
                    ( model, Cmd.none )

            NewTranslations stuff ->
                let
                    newModel =
                        loadViewports stuff model
                in
                    ( { newModel
                        | currentMovement = fromViewportToNext model.currentViewport (Zipper.current newModel.translations)
                        , currentZoomDiff = fromViewportToNextZoom model.currentViewport (Zipper.current newModel.translations)
                        , isMoving = True
                        , timeInMilliseconds = 0
                        , inMiddlePoint = True
                      }
                    , Cmd.none
                    )

            TextChanged text ->
                ( { model | text = text }, Cmd.none )
