# Fuze


## Goals

MVP 


- Define colour blocks

```
block red
block green
```

ends up with a green block

```
block red
block green 50% 
```
Block with red boarders and green middle


- Define view ports

```
view 0 100
animate 10
view 0 50
```

animates transition over 10 seconds between 0..100 to 0..50


- Make a stack-based language for pushing blocks onto the view
- Display a view port
- Animate over time a transition between two view ports

