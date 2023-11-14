---
wrapper_template: '_layouts/docs.html'
context:
  title: Equal height | Utilities
---

To ensure two or more elements have an equal height regardless of their content, add the class `.u-equal-height` to their wrapping parent element.

<div class="embedded-example"><a href="/docs/examples/utilities/equal-height/" class="js-example">
View example of the equal height utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-equal-height;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
