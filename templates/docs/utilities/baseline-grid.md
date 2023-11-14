---
wrapper_template: '_layouts/docs.html'
context:
  title: Font metrics | Utilities
---

You can apply this utility to an element (such as `<body>`) to visualise the `.5rem` baseline grid to which text elements adhere.

<div class="embedded-example"><a href="/docs/examples/utilities/baseline-grid/" class="js-example">
View example of the baseline grid utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-baseline-grid;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
