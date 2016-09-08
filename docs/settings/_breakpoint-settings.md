---
collection: settings
title: Breakpoints
---

Vanilla uses three breakpoints: one for small screens (like phones), one for medium sized screens and a third for large screens.

Setting  | Default value
 ------------- | -------------
`$breakpoint-small`   | 620px
`$breakpoint-medium`   | 768px
`$breakpoint-large`   | 1030px

### Targeting small screens

```css
@media screen and (max-width: $breakpoint-medium) {
    // css
}
```

### Targeting medium screens

```css
@media (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
    // css
}
```

### Targeting large screens

```css
@media screen and (min-width: $breakpoint-large) {
    //css
}
```
