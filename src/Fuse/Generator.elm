module Fuse.Generator exposing (..)

import Platform
import Fuse


run : (String -> Cmd msg) -> Fuse.Program -> Program Never () msg
run init program =
    Platform.program
        { init = ( (), init <| Fuse.programToUXL program )
        , update = (\_ _ -> ( (), Cmd.none ))
        , subscriptions = (\_ -> Sub.none)
        }
