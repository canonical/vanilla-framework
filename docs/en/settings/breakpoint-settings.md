---
title: Breakpoints settings
table_of_contents: true
---

## Breakpoints

Vanilla uses three breakpoints: one for small screens (like phones), one for medium sized screens and a third for large screens.

Setting  | Default value
 ------------- | -------------
`$breakpoint-x-small`   | `460px`
`$breakpoint-small`   | `620px`
`$breakpoint-medium`   | `768px`
`$breakpoint-large`   | `1030px`
`$breakpoint-navigation-threshold`   | `$breakpoint-medium`

### Target small screens

```css
@media screen and (max-width: $breakpoint-medium) {
    // css
}
```

### Target medium screens

```css
@media (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
    // css
}
```

### Target large screens

```css
@media screen and (min-width: $breakpoint-large) {
    //css
}
```

### Modifying the navigation threshold
The `$breakpoint-navigation-threshold` is the breakpoint in which the
navigation switches from horizontal (large screen) navigation to a burger style
menu (small screen).

If you have a large number of menu items, you may consider overriding this
value to a large breakpoint so the navigation snaps to a burger menu at a
larger breakpoint.
