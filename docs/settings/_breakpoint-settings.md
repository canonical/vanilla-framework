---
collection: settings
title: Breakpoints
---

Vanilla uses three breakpoints, one for small screens like phones, a medium range that covers larger landscape oriented phones through to tablets and smaller laptops, and finally one for large screens.

Setting  | Default Value
 ------------- | -------------
$breakpoint-small   | 620px
$breakpoint-medium   | 768px
$breakpoint-large   | 1030px

An example of how to use these in a media query

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
