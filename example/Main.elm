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


var socket = new WebSocket('ws://0046ffee.ngrok.io');

try {
    socket.addEventListener('message', function (event) {
        console.log('Message from server', event.data);
        elm.ports.listen.send(event.data);
    });
} catch (e) {

}

"""


translations : Zipper Viewport
translations =
    [ Viewport 1000 0 0 1
    , Viewport 1000 -50 -50 6
    , Viewport 1000 50 0 1
    , Viewport 1000 45 -50 1.5
    , Viewport 1000 0 0 1
    ]
        |> Zipper.fromList
        |> Zipper.withDefault (Viewport 1000 0 0 1)


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


main : Platform.Program Never Model Msg
main =
    Fuse.app
        [ panel
            [ onClick StartMoving, transformOrigin "TopLeft" ]
            [ interactiveTransform [ reflect translationReflector modelToTranslation, reflect zoomReflector modelToZoom ] []
            , rectangle [ color "#F00", x -500, width 300, height 200 ]
                [ textInput
                    [ stringValueChanged (TextChanged)
                    , width 300
                    , height 200
                    ]
                    []
                ]
            , Fuse.Controls.text
                [ x 600
                , y 600
                , fontSize 42
                , reflect textReflector (\model -> Json.Encode.string model.text)
                ]
                []
            , rectangle
                [ color "#F00"
                , x 50
                , y 50
                , height 300
                , width 300
                ]
                [ Fuse.Controls.text
                    [ fontSize 42
                    , value <| Xml.string "Start here"
                    ]
                    []
                ]
            , rectangle
                [ color "#F0F"
                , x 200
                , y 200
                , height 300
                , width 300
                ]
                []
            , rectangle
                [ color "#0F0" ]
                []
            ]
        ]
        |> Fuse.Generator.run
            update
            { translations = translations
            , isMoving = False
            , currentMovement = ( 0, 0 )
            , currentViewport = Viewport 1000 0 0 1
            , timeInMilliseconds = 0
            , currentZoomDiff = 0
            , inMiddlePoint = False
            , text = "Sample"
            , isPaused = False
            }
            subscriptions
            timer
