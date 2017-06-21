module Model exposing (..)

import List.Zipper exposing (Zipper)


type alias Viewport =
    { animationLength : Float
    , translationX : Float
    , translationY : Float
    , zoomFactor : Float
    }


type alias Rect =
    { x : Float
    , y : Float
    , color : String
    , width : Float
    , height : Float
    }


type alias TextBlob =
    { x : Float
    , y : Float
    , text : String
    , color : String
    , fontSize : Float
    }


type alias Model =
    { translations : Zipper Viewport
    , currentViewport : Viewport
    , currentMovement : ( Float, Float )
    , currentZoomDiff : Float
    , timeInMilliseconds : Float
    , isMoving : Bool
    , inMiddlePoint : Bool
    , text : String
    , isPaused : Bool
    , rects : List Rect
    , texts : List TextBlob
    }
