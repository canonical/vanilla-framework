---
wrapper_template: '_layouts/docs.html'
context:
  title: Suru | Components
---

# Suru

<hr>

The Suru component can be used to display a visual separation between two sections of content.

By default, Suru should be used on the paper background. When used on dark background, add `is-dark` modifier class.

<div class="embedded-example"><a href="/docs/examples/patterns/suru/default" class="js-example">
View example of the default Suru component
</a></div>

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
