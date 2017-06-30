port module Main exposing (..)

import Model exposing (..)
import Update exposing (..)
import Fuse exposing (..)
import Fuse.Attributes exposing (..)
import Fuse.Events exposing (..)
import Fuse.Layout exposing (..)
import Fuse.Generator
import Fuse.Conditions exposing (viewIf)
import Fuse.Controls exposing (textInput, interactiveTransform)
import List.Zipper as Zipper exposing (Zipper)
import Xml
import Xml.Encode as Xml
import Json.Decode as Json
import Json.Encode


port tick : (Float -> msg) -> Sub msg


port listen : (String -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ tick Tick
        , listen NewTranslations
        ]


timer : String
timer =
    """

var Timer = require("FuseJS/Timer");

var last = new Date().getTime();

Timer.create(function() {
    var _new = new Date().getTime();
    elm.ports.tick.send(_new - last);
    last = _new;
}, 16, true);


var socket = new WebSocket('ws://cca26b37.ngrok.io');

try {
    socket.addEventListener('message', function (event) {
        elm.ports.listen.send(event.data);
    });
} catch (e) {

}

"""


translations : Zipper Viewport
translations =
    [ Viewport 1000 0 0 1 False
    , Viewport 1000 -50 -50 6 False
    , Viewport 1000 50 0 1 False
    , Viewport 1000 45 -50 1.5 False
    , Viewport 1000 0 0 1 False
    ]
        |> Zipper.fromList
        |> Zipper.withDefault (Viewport 1000 0 0 1 False)


modelToTranslation : Model -> Json.Value
modelToTranslation model =
    Xml.list [ Xml.float model.currentViewport.translationX, Xml.float model.currentViewport.translationY ]
        |> Xml.xmlToJson


translationReflector : Json.Value -> Attribute msg model
translationReflector json =
    case Json.decodeValue (Json.list Json.float) json of
        Ok [ x, y ] ->
            translation x y

        _ ->
            translation 0 0


modelToZoom : Model -> Json.Value
modelToZoom model =
    Xml.float model.currentViewport.zoomFactor
        |> Xml.xmlToJson


zoomReflector : Json.Value -> Attribute msg model
zoomReflector json =
    case Json.decodeValue (Json.float) json of
        Ok x ->
            zoomFactor x

        _ ->
            zoomFactor 1


textReflector : Json.Value -> Attribute msg model
textReflector json =
    case Json.decodeValue (Json.string) json of
        Ok x ->
            value <| Xml.string x

        _ ->
            value <| Xml.string "failed to load code"


oneRect : Rect -> FuseTag
oneRect rect =
    rectangle
        [ attribute "X" <| Xml.string "{x}"
        , attribute "Y" <| Xml.string "{y}"
        , attribute "Width" <| Xml.string "{width}"
        , attribute "Height" <| Xml.string "{height}"
        , attribute "Color" <| Xml.string "{color}"
        ]
        []


oneText : TextBlob -> FuseTag
oneText blob =
    Fuse.Controls.text
        [ attribute "FontSize" <| Xml.string "{fontSize}"
        , attribute "Value" <| Xml.string "{text}"
        , attribute "X" <| Xml.string "{x}"
        , attribute "Y" <| Xml.string "{y}"
        , attribute "Color" <| Xml.string "{color}"
        ]
        []


main : Platform.Program Never Model Msg
main =
    Fuse.app
        [ panel
            [ onClick StartMoving, transformOrigin "TopLeft" ]
            [ interactiveTransform [ reflect translationReflector modelToTranslation, reflect zoomReflector modelToZoom ] []
            , secondEach (\modeler -> modeler.texts) oneText
            , each (\model -> model.rects) oneRect
            ]
        ]
        |> Fuse.Generator.run
            update
            { translations = translations
            , isMoving = False
            , currentMovement = ( 0, 0 )
            , currentViewport = Viewport 1000 0 0 1 False
            , timeInMilliseconds = 0
            , currentZoomDiff = 0
            , inMiddlePoint = False
            , text = "Sample"
            , isPaused = False
            , rects =
                [ Rect 50 50 "#000" 300 300
                , Rect 200 200 "#F0F" 300 300
                , Rect 0 0 "#0F0" 1000 1000
                ]
            , texts =
                [ TextBlob 50 50 "Start here" "#00F" 42
                ]
            }
            subscriptions
            timer
