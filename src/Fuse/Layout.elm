module Fuse.Layout exposing (..)

import Fuse exposing (Attribute, FuseTag)


element : List (Attribute msg model) -> List FuseTag -> FuseTag
element =
    Fuse.node "Element"


stackPanel : List (Attribute msg model) -> List FuseTag -> FuseTag
stackPanel =
    Fuse.node "StackPanel"


dockPanel : List (Attribute msg model) -> List FuseTag -> FuseTag
dockPanel =
    Fuse.node "DockPanel"


grid : List (Attribute msg model) -> List FuseTag -> FuseTag
grid =
    Fuse.node "Grid"


wrapPanel : List (Attribute msg model) -> List FuseTag -> FuseTag
wrapPanel =
    Fuse.node "WrapPanel"


columnLayout : List (Attribute msg model) -> List FuseTag -> FuseTag
columnLayout =
    Fuse.node "ColumnLayout"


circleLayout : List (Attribute msg model) -> List FuseTag -> FuseTag
circleLayout =
    Fuse.node "CircleLayout"


scrollView : List (Attribute msg model) -> List FuseTag -> FuseTag
scrollView =
    Fuse.node "ScrollView"
