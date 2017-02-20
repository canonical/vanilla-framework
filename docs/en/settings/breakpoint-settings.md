---
title: Breakpoints
---

# Breakpoints

Vanilla uses three breakpoints: one for small screens (like phones), one for medium sized screens and a third for large screens.

Setting  | Default value
 ------------- | -------------
`$breakpoint-small`   | `620px`
`$breakpoint-medium`   | `768px`
`$breakpoint-large`   | `1030px`

## Target small screens

```css
@media screen and (max-width: $breakpoint-medium) {
    // css
}
```

## Target medium screens

```css
@media (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
    // css
}
```

## Target large screens

```css
@media screen and (min-width: $breakpoint-large) {
    //css
}
```
