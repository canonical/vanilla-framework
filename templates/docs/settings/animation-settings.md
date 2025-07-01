---
wrapper_template: '_layouts/docs.html'
context:
  title: Animations | Settings
---

Vanilla provides a choice of duration and easing for animating components.

## Duration

Recommended durations for animations are stored in the map `$animation-duration`.

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

<hr />

## Easing

Recommended durations for easing can be `easeInCubic` or `easeOutCubic`.

| Setting | Default value                        |
| ------- | ------------------------------------ |
| `out`   | `cubic-bezier(.215, .61, .355, 1)`   |
| `in`    | `cubic-bezier(.55, .055, .675, .19)` |

<hr />

## Spin

Add a spin animation to an element with the following utility class.

<div class="embedded-example"><a href="/docs/examples/utilities/animations/spin/" class="js-example">
View example of the spin animation utility
</a></div>

## Reduced motion

Vanilla implements the [prefers-reduced-motion CSS media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) so that - in supported browsers and operating systems - users with an accessibility need or preference see reduced animation applied to page elements.

Currently, Vanilla's implementation of this feature is a simple media query where both animations and transitions are set to `none !important` for all HTML elements. Nothing needs to be done to use this feature in your pages but we encourage using animations and transitions in a progressive manner so that your web sites and applications are usable without animations being present.

## Usage

Animations are preset to components. Components can be modified or extended to
include animation by including the animation mixin.

The format is as follows:

```scss
@include vf-transition(PROPERTY, DURATION, EASING);
```

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">The list of valid <code>DURATION</code> and <code>EASING</code> options are shown in the <a href="#duration">duration</a> and <a href="#easing">easing</a> sections of the documentation.</span>
  </p>
</div>

A valid use could be, for example:

```scss
@include vf-transition(height, brisk, out);
```

If you require multiple properties then the list must be interpolated as shown in the following example:

```scss
@include vf-transition(#{height, width}, brisk, out);
```

{{ status("deprecated") }}

The previously used `vf-animation` mixin has been deprecated in 3.7.0 and will be removed in future versions of Vanilla. Please use `vf-transition` instead.
