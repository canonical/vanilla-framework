---
wrapper_template: '_layouts/docs.html'
context:
  title: Clearfix | Utilities
---

A clearfix is a way for an element to automatically clear its child elements, so that you don't need to add additional markup. It's generally used in float layouts where elements are floated to be stacked horizontally.

The clearfix is a way to combat the zero-height container problem for floated elements.

In the example below, the parent wrapping container does not collapse even though it's only two children are floated.

<div class="embedded-example"><a href="/docs/examples/utilities/clearfix/" class="js-example">
View example of the clearfix utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-clearfix;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
