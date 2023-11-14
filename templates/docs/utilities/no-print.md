---
collection: utilities
wrapper_template: '_layouts/docs.html'
context:
  title: No print | Utilities
---

Add the class `u-no-print` to elements you want to hide when the page is printed.

Use your browser's print preview to see the following example working.

<div class="embedded-example"><a href="/docs/examples/utilities/no-print" class="js-example">
View example of the no-print utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-no-print;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
