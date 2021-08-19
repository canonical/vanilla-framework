---
wrapper_template: '_layouts/docs.html'
context:
  title: Breakpoints | Settings
---

# Breakpoints

<hr>

Vanilla uses four main breakpoints for screen sizes, below you can see the setting, default width and device examples at which the content will scale.

| Setting                            | Default value        | Device example |
| ---------------------------------- | -------------------- | -------------- |
| `$breakpoint-x-small`              | `460px`              | Mobile         |
| `$breakpoint-small`                | `620px`              | Mobile         |
| `$breakpoint-medium`               | `772px`              | Tablet         |
| `$breakpoint-large`                | `1036px`             | Desktop        |
| `$breakpoint-x-large`              | `1681px`             | Large desktop  |
| `$breakpoint-navigation-threshold` | `$breakpoint-medium` | Tablet         |
| `$breakpoint-heading-threshold`    | `$breakpoint-medium` | Tablet         |

<br>

## Target extra small screens

```css
@media screen and (max-width: $breakpoint-small) {
  // css
}
```

## Target small screens

```css
@media screen and (min-width: $breakpoint-small) and (max-width: $breakpoint-medium) {
  // css
}
```

## Target medium screens

```css
@media screen and (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
  // css
}
```

## Target large screens

```css
@media screen and (min-width: $breakpoint-large) {
  //css
}
```

## Target extra large screens

```css
@media screen and (min-width: $breakpoint-x-large) {
  //css
}
```

## Modifying the navigation breakpoint threshold

The `$breakpoint-navigation-threshold` is the breakpoint in which the navigation switches from horizontal (desktop devices) navigation to a burger style menu (mobile devices).

<img class="p-image--bordered" src="https://assets.ubuntu.com/v1/68db306c-global-layout-breakpoint-navigation.png" alt="navigation-breakpoint">

If you have a large number of menu items, you may consider overriding this value to a large breakpoint so the navigation snaps to a burger menu at a larger breakpoint.

## Modifying the heading breakpoint threshold

`$breakpoint-heading-threshold` is the breakpoint in which the heading sizes switch from a 1:2 modular scale ratio (desktop devices) to a 2:3 ratio (mobile devices).
