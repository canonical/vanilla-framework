---
wrapper_template: '_layouts/docs.html'
context:
  title: Vertically center | Utilities
---

The `.u-vertically-center` class will vertically center the direct child of the element it is placed on.

Note: only affects medium and large screens.

<div class="embedded-example"><a href="/docs/examples/utilities/vertically-center/" class="js-example">
View example of the vertically center utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-vertically-center;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
