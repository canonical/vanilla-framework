---
wrapper_template: '_layouts/docs.html'
context:
  title: Truncation | Utilities
---

To truncate text, use the class `u-truncate`.

When applied to a parent container, it will truncate any elements placed inside, so long as the parent's width is set.
When applied to individual elements within a parent, e.g. a table cell, only those elements will be truncated.

<div class="embedded-example"><a href="/docs/examples/utilities/truncate/" class="js-example">
View example of the truncate utility
</a></div>

Note: `u-truncate` will affect any tooltips placed inside.

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-truncate;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
