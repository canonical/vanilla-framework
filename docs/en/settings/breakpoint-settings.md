---
title: Breakpoints settings
table_of_contents: true
---

## Breakpoints

Vanilla uses four main breakpoints for screen sizes: `$breakpoint-x-small` and `$breakpoint-small` for mobile screen sizes, `$breakpoint-medium` for tablets, and `$breakpoint-large` for desktop/laptop screens.

Setting  | Default value
 ------------- | -------------
`$breakpoint-x-small`   | `460px`
`$breakpoint-small`   | `620px`
`$breakpoint-medium`   | `768px`
`$breakpoint-large`   | `1030px`
`$breakpoint-navigation-threshold`   | `$breakpoint-medium`
`$breakpoint-heading-threshold`   | `$breakpoint-medium`

### Target extra small screens

```css
@media screen and (max-width: $breakpoint-small) {
    // css
}
```

### Target small screens

```css
@media screen and (min-width: $breakpoint-small) and (max-width: $breakpoint-medium) {
    // css
}
```

### Target medium screens

```css
@media screen and (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
    // css
}
```

### Target large screens

```css
@media screen and (min-width: $breakpoint-large) {
    //css
}
```

### Modifying the navigation breakpoint threshold

The `$breakpoint-navigation-threshold` is the breakpoint in which the navigation switches from horizontal (large screen) navigation to a burger style menu (small screen).

If you have a large number of menu items, you may consider overriding this value to a large breakpoint so the navigation snaps to a burger menu at a larger breakpoint.

### Modifying the heading breakpoint threshold

`$breakpoint-heading-threshold` is the breakpoint in which the heading sizes switch from a 1:2 modular scale ratio (large screens) to a 2:3 ratio (small screens).
