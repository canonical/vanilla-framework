---
wrapper_template: '_layouts/docs.html'
context:
  title: Divider | Components
---

## Responsive divider

A responsive divider inserts divider lines between sections of content. On small screens (up to `$breakpoint-large`), the divider lines appear horizontally. On screens bigger than `$breakpoint-large`, the divider lines appear vertically, centered in the column gutters. This behaviour can be overridden for medium screens by applying `col-medium-...` to each column which will cause the divider lines to remain vertical for medium and large screens.

<div class="embedded-example"><a href="/docs/examples/patterns/divider/default/" class="js-example">
View example of lists with a responsive divider
</a></div>

## Theming

The responsive divider is available in a light and a dark theme. The colours used by both themes in the [colour settings file](https://github.com/canonical/vanilla-framework/blob/main/scss/_settings_colors.scss).
Overriding the colours of individual elements of the responsive is discouraged, as this may lead to accessibility issues, or inconsistencies with other components that use the same theme.

By default, the responsive divider uses the current theme of the page or its parent element. To change the appearance of an individual instance of the responsive divider pattern, you can use the `is-dark` class.

For more details about themes in Vanilla refer to the [Color theming](/docs/settings/color-settings#color-theming) section of the documentation.

[See an example of a divider list with an is-dark class](/docs/examples/patterns/divider/default?theme=dark)

## Import

To add dividers into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import '../vanilla';
@include vf-base;

@include vf-p-divider;

// grid column classes are used within divider component, so you need to include grid pattern as well
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import '../vanilla';
@include vf-base;

@include vf-p-grid;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
