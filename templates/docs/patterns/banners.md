---
wrapper_template: '_layouts/docs.html'
context:
  title: Banners | Components
---

# Banners

<hr>

The banner component should be used when you're demonstrating how to document changes in Vanilla.

<div class="embedded-example"><a href="/docs/examples/patterns/banners/default" class="js-example">
View example of the default banners pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework/scss/vanilla';
@include vf-base;

@include vf-p-banners;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
