---
wrapper_template: '_layouts/docs.html'
context:
  title: Matrix | Components
---

The matrix component can be useful to display a selection of items in a format that is less linear than a normal list, using an image to describe each item.

Items will display in one column on small screens. At resolutions above `$breakpoint-small`, items will display three per row.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">To display correctly on large screens, you'll need to add list items in a multiple of three. If you do not have content for all the items, leave them empty but the list item must be present.</span>
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/matrix/" class="js-example">
View example of the matrix pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-matrix;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
