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

### Related

* [Icons](/en/patterns/icons)
* [Strip](/en/patterns/strip)
* [Typography](/en/base/typography)
