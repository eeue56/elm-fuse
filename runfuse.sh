#!/bin/bash

( node runner.js ) &
cd elm-fuse
fuse preview
