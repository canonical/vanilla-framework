---
wrapper_template: '_layouts/docs.html'
context:
  title: Suru | Components
---

The Suru component can be used to display a visual separation between two sections of content.

By default, Suru should be used on the paper background. When used on dark background, add `is-dark` modifier class.

## Main 25/75

Use `.p-suru--25-75` to create a hero section with the main 25/75 Suru background. Suru component provides the necessary hero padding, background colour and the Suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/default" class="js-example">
View example of the main 25/75 Suru component
</a></div>

## Main 50/50

Use `.p-suru--50/50` to create a hero section with the main 50/50 Suru background. Suru component provides the necessary hero padding, background colour and the Suru image.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/50-50" class="js-example">
View example of the main 50/50 Suru component
</a></div>

## Standalone

If needed, Suru can be used as a standalone component. This is useful when you need to create a visual separation between two sections of content.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/standalone" class="js-example">
View example of the default Suru component
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
