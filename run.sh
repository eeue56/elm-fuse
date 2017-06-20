#!/bin/bash

node runner.js
cd elm-fuse
uno build --target dotnet
uno build --target android --run