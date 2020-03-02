---
wrapper_template: '_layouts/default.html'
context:
  title: Clearfix | Utilities
---

## Clearfix

<hr>

A clearfix is a way for an element to automatically clear its child elements, so that you don't need to add additional markup. It's generally used in float layouts where elements are floated to be stacked horizontally.

The clearfix is a way to combat the zero-height container problem for floated elements.

In the example below, the parent wrapping container does not collapse even though it's only two children are floated.

<a href="/examples/utilities/clearfix/" class="js-example">
View example of the clearfix utility
</a>

### Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'utilities_clearfix';
```

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.
