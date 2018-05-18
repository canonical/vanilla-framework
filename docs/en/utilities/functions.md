---
title: Functions
table_of_contents: true
---

## Functions

Vanilla has several global functions used across multiple components or utilities, which can be also be used when building custom components.


### URL-friendly color

This function is used to inject Vanilla color variables into inline vector graphics by converting all `#` with the HTML encoded `%23`.

``` scss
@function vf-url-friendly-color($color) {
  @if type-of($color) != 'color' {
    @warn '#{$color} is not a color.';
    @return false;
  } @else {
    @return '%23' + str-slice('#{$color}', 2, -1);
  }
}
```

### Determine text color

This function tests the value of the background's colour and returns light or dark text accordingly.

``` scss
@function vf-determine-text-color($background-color) {
  @if (lightness($background-color) > 50) {
    @return $color-dark;
  } @else {
    @return $color-x-light;
  }
}
```

### Power function

This function raises a given number to a given power.

``` scss
@function pow($number, $exponent) {
  $value: 1;

  @if $exponent > 0 {
    @for $i from 1 through $exponent {
      $value: $value * $number;
    }
  } @else if $exponent < 0 {
    @for $i from 1 through -$exponent {
      $value: $value / $number;
    }
  }

  @return $value;
}
```

### Highlight bar

This function adds a `3px` thick, coloured bar to the top or bottom of a component (for example in Notification, Navigation and Tab components). The `$over-border` argument determines whether the bar sits on top of a component with borders.

``` scss
@mixin vf-highlight-bar($bg-color: $color-mid-dark, $position: top, $over-border: false) {
  @extend %vf-pseudo-bar;

  &::before {
    background-color: $bg-color;
    #{$position}: 0;

    @if $over-border == true {
      left: -1px;
      right: -1px;
      z-index: 1;
    }
  }
}
```

### Related

* [Icons](/en/patterns/icons)
* [Strip](/en/patterns/strip)
* [Typography](/en/base/typography)
