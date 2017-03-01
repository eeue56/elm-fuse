module Fuse.Events exposing (..)

import Fuse exposing (..)
import FFI


onClick : msg -> Attribute msg model
onClick msg =
    EventAttribute "Clicked" msg 0


stringValueChanged : (String -> msg) -> Attribute msg model
stringValueChanged msg =
    EventAttribute "ValueChanged" (constructorToMsg msg) 1


constructorToMsg : (a -> msg) -> msg
constructorToMsg =
    FFI.asIs >> FFI.intoElm
