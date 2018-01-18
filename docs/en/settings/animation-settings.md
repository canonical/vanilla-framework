---
title: Animations settings
table_of_contents: true
---

## Animations

Vanilla has a cross matrix of duration and easing that can be used to apply
animation to components.

### Durations

Vanilla uses a range of animation durations to dictate the time in which an
animation should complete. These values are stored within a map named
`$animation-duration`.

Components that animate statically, like a button that changes background
color, tend to have a shorter duration than components with motion
animation.

Setting  | Default value
 ------------- | -------------
`snap`   | `.1s`
`fast`   | `.165s`
`brisk`   | `.333s`
`slow`   | `.5s`
`sleepy`   | `1s`

### Easings

Vanilla's easing can be `easeInCubic` or `easeOutCubic`.

Setting  | Default value
 ------------- | -------------
`out`   | `cubic-bezier(.215, .61, .355, 1)`
`in`   | `cubic-bezier(.55, .055, .675, .19)`

### Usage

Animations are preset to components. Components can be modified or extended to
include animation by including the animation mixin.

```scss
@include animation(property: all, duration: brisk, easing: out);
```

<hr />

### Design

* [Animations design](https://github.com/ubuntudesign/vanilla-design/tree/master/Animations)
