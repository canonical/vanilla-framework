---
wrapper_template: '_layouts/docs.html'
context:
  title: Margin collapse | Utilities
---

# Margin collapse

<hr>

Remove one or more margins of an element.

<div class="embedded-example"><a href="/docs/examples/utilities/margin-collapse/" class="js-example">
View example of the margin collapse utility
</a></div>

## Responsive margin collapse

In some cases, you may want to remove a bottom margin only on certain breakpoints. You can use `u-no-margin--bottom-large`, `u-no-margin--bottom-medium` and `u-no-margin--bottom-small` to achieve this.

<div class="embedded-example"><a href="/docs/examples/utilities/margin-collapse-responsive/" class="js-example">
View example of the responsive margin collapse utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework/scss/vanilla';
@include vf-base;

@include vf-u-margin-collapse;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
