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

Use `.p-suru--50-50` to create a hero section with the main 50/50 suru background. Suru component provides the necessary hero padding, background colour and the suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/50-50" class="js-example">
View example of the main 50/50 Suru component
</a></div>

### Standalone main suru

If needed, suru can be used as a standalone component. This is useful when you need to create a visual separation between two sections of content.

If the top section is a hero, please use the proper `p-suru--25-75` or `p-suru--50-50` section instead.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/standalone" class="js-example">
View example of the default Suru component
</a></div>

## Corner suru

The corner variant of suru provides the background for the hero section of the page. We provide two styles of the corner suru (a fan and a pyramid suru), both with two possible placements.

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Responsiveness</h3>
    <p class="p-notification__message">Corner suru backgrounds are <b>only displayed on large screens</b>, as on smaller screen sizes they would likely overlap with the content.</p>
  </div>
</div>

### Fan suru

Use `.p-suru--fan-top` or `.p-suru--fan-bottom` to create a hero section with the fan Suru background. Suru component provides the necessary hero padding, background colour and the suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/fan-top" class="js-example">
View example of the top fan Suru component
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/suru/fan-bottom" class="js-example">
View example of the bottom fan Suru component
</a></div>

### Pyramid suru

Use `.p-suru--pyramid-left` or `.p-suru--pyramid-right` to create a hero section with the pyramid suru background. Suru component provides the necessary hero padding, background colour and the suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/fan-pyramid-left" class="js-example">
View example of the left pyramid Suru component
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/suru/fan-pyramid-right" class="js-example">
View example of the right pyramid Suru component
</a></div>

## Divider suru

Use `.p-suru--divider` to create a hero section with the divider suru background. Suru component provides the necessary deep padding around the divider, background colour and the suru image.

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Responsiveness</h3>
    <p class="p-notification__message">Divider suru backgrounds are <b>only displayed on large screens</b>, as on smaller screen sizes they would likely overlap with the content.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/suru/divider" class="js-example">
View example of the divider Suru component
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
