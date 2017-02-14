---
collection: settings
title: Animations
---

Vanilla has a cross matrix of duration and easing to apply animation across
it required components. Components that animate staticly such as, the
background of buttons. Have a much shorter duration then components with
motion.

## Durations

Vanilla uses a range of animation durations to dictate the speed in which an
animation should complete. These values are stored within a map named
`$animation-duration`.

Setting  | Default value
 ------------- | -------------
`snap`   | `.1s`
`fast`   | `.165s`
`brisk`   | `.333s`
`slow`   | `.5s`
`sleepy`   | `1s`

## Easings

Vanilla's easing consists of `easeInCubic` and `easeOutCubic`.

Setting  | Default value
 ------------- | -------------
`out`   | `cubic-bezier(.215, .61, .355, 1)`
`in`   | `cubic-bezier(.55, .055, .675, .19)`

### Usage

Animations are preset to components. Components can we modified or extended to
include animation by including the animation mixin.

```css
@include animation(property: all, duration: brisk, easing: out);
```
