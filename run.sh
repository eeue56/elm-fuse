#!/bin/bash

node runner.js
cd elm-fuse
uno build --target dotnet --run
#uno build --target android --run