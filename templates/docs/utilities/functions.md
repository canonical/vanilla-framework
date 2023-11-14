---
wrapper_template: '_layouts/docs.html'
context:
  title: Functions | Utilities
---

Vanilla has several global functions used across multiple components or utilities, which can be also be used when building custom components.

## URL-friendly color

This function is used to inject Vanilla color variables into inline vector graphics by converting all `#` with the HTML encoded `%23`.

```scss
@function vf-url-friendly-color($color) {
  @if type-of($color) != 'color' {
    @warn '#{$color} is not a color.';
    @return $color;
  } @else {
    @return '%23' + str-slice('#{$color}', 2, -1);
  }
}
```

## Determine text color

This function tests the value of the background's colour and returns light or dark text accordingly.

```scss
@function vf-determine-text-color($background-color) {
  @if (lightness($background-color) > 50) {
    @return $colors--light-theme--text-default;
  } @else {
    @return $colors--dark-theme--text-default;
  }
}
```

## Power function

This function raises a given number to a given power.

```scss
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

## Highlight bar

This function adds a `3px` thick, coloured bar to one side of a component (for example in Notification, Navigation and Tab components). The `$over-border` argument determines whether the bar sits on top of a component with borders.

```scss
@mixin vf-highlight-bar($bg-color: $color-mid-dark, $position: top, $over-border: false) {
  position: relative;

  &::before {
    #{$position}: 0;
    background-color: $bg-color;
    content: '';
    position: absolute;
  }

  @if $position == top or $position == bottom {
    &::before {
      height: $bar-thickness;
      width: auto;

      @if $over-border == true {
        left: -1px;
        right: -1px;
        z-index: 1;
      } @else {
        left: 0;
        right: 0;
      }
    }
  } @else if $position == left or $position == right {
    &::before {
      height: auto;
      width: $bar-thickness;

      @if $over-border == true {
        bottom: -1px;
        top: -1px;
        z-index: 1;
      } @else {
        bottom: 0;
        top: 0;
      }
    }
  }
}
```

## Related

- [Icons](/docs/patterns/icons)
- [Strip](/docs/patterns/strip)
- [Typography](/docs/base/typography)
