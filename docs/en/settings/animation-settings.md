---
title: Animations settings
table_of_contents: true
---

## Animations

<hr>

Vanilla has a cross matrix of duration and easing that can be used to apply
animation to components.

### Duration

Vanilla uses a range of animation durations to dictate the time in which an
animation should complete. These values are stored within a map named
`$animation-duration`.

Components that animate statically, like a button that changes background
color, tend to have a shorter duration than components with motion
animation.

| Setting  | Default value |
| -------- | ------------- |
| `snap`   | `.1s`         |
| `fast`   | `.165s`       |
| `brisk`  | `.333s`       |
| `slow`   | `.5s`         |
| `sleepy` | `1s`          |

### Easing

Vanilla's easing can be `easeInCubic` or `easeOutCubic`.

| Setting | Default value                        |
| ------- | ------------------------------------ |
| `out`   | `cubic-bezier(.215, .61, .355, 1)`   |
| `in`    | `cubic-bezier(.55, .055, .675, .19)` |

### Usage

Animations are preset to components. Components can be modified or extended to
include animation by including the animation mixin.

```scss
@include animation(property: all, duration: brisk, easing: out);
```

### Reduced motion

Vanilla implements the [prefers-reduced-motion CSS media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) so that - in supported browsers and operating systems - users with an accessibility need or preference see reduced animation applied to page elements.

Currently, Vanilla's implementation of this feature is a simple media query where both animations and transitions are set to `none !important` for all HTML elements. Nothing needs to be done to use this feature in your pages but we encourage using animations and transitions in a progressive manner so that your web sites and applications are usable without animations being present.

### Design

For more information view the [animations design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Animations) which includes the specification in markdown format and a PNG image.
