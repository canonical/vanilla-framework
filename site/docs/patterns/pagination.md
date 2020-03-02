---
wrapper_template: '_layouts/default.html'
context:
  title: Pagination | Components
---

## Pagination

<hr>

The pagination component should be used to navigate between pages of content. Depending on the length provided, the pagination component will automatically scale.

<a href="/docs/examples/patterns/pagination/pagination" class="js-example">
View example of the pagination pattern
</a>

### Truncated

When it is not possible to fit all pages into the component, a truncated option should be used to give the first, last and as many siblings of the current page as possible.

<a href="/docs/examples/patterns/pagination/pagination-truncated" class="js-example">
View example of the pagination pattern
</a>

### Disabled controls

When a user is at the first or last item then the previous or next button, respectively, should be disabled.

<a href="/docs/examples/patterns/pagination/pagination-disabled" class="js-example">
View example of the pagination pattern
</a>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_pagination';
@include vf-p-pagination;

// pagination uses icons for previous and next page buttons
@import 'patterns_icons';
@include vf-p-icons-common;
@include vf-p-icon-contextual-menu;
```

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the pagination design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Pagination), which includes the specification in markdown format and a PNG image.
