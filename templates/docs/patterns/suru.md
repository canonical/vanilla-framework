---
wrapper_template: '_layouts/docs.html'
context:
  title: Suru | Components
---

The Suru component can be used to provide a background for hero section of the page or to display a visual separation between two sections of content.

## Main suru

The main variant of suru component provides a visual separation between two sections of content (usually a hero and rest of the page). It has two layout options that align with 25/75 or 50/50 splits of the grid.

### Main suru 25/75

Use `.p-suru--25-75` to create a hero section with the main 25/75 Suru background. Suru component provides the necessary hero padding, background colour and the Suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/default" class="js-example">
View example of the main 25/75 Suru component
</a></div>

### Main suru 50/50

Use `.p-suru--50/50` to create a hero section with the main 50/50 suru background. Suru component provides the necessary hero padding, background colour and the suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/50-50" class="js-example">
View example of the main 50/50 Suru component
</a></div>

### Standalone main suru

If needed, suru can be used as a standalone component. This is useful when you need to create a visual separation between two sections of content.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/standalone" class="js-example">
View example of the default Suru component
</a></div>

## Corner suru

The corner variant of suru provides the background for the hero section of the page. We provide two styles of the corner suru (a fan and a pyramid suru), both with two possible placements.

### Fan suru

Use `.p-suru--fan-top` or `.p-suru-fan--bottom` to create a hero section with the fan Suru background. Suru component provides the necessary hero padding, background colour and the suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/fan-top" class="js-example">
View example of the top fan Suru component
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/suru/fan-bottom" class="js-example">
View example of the bottom fan Suru component
</a></div>

### Pyramid suru

Use `.p-suru--pyramid-left` or `.p-suru--pyramid-right` to create a hero section with the pyramid suru background. Suru component provides the necessary hero padding, background colour and the suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/fan-top" class="js-example">
View example of the left pyramid Suru component
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/suru/fan-bottom" class="js-example">
View example of the right pyramid Suru component
</a></div>

## Theming

Suru component is supported in paper and dark themes. When used in light theme, the paper version of the Suru component is used.

You can change the theme by setting `is-dark` or `is-paper` modifier class on the component itself, or on any parent element.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/dark" class="js-example">
View example of the dark Suru component
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-suru;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
