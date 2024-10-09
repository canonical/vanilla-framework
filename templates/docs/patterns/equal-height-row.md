---
wrapper_template: '_layouts/docs.html'
context:
  title: Equal height row | Components
---

The equal height row component aims to provide consistent alignment for grid
items within a row format. This is achieved using the CSS `subgrid` feature
which allows column grids to share the same layout used in the parent row grid.

In addition to enforcing column grid item alignment within each row, default
responsive behaviour is shown below:

| Screen size (px)                          | Behaviour                                                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Less than `$breakpoint-small`             | Each column spans across the entire parent grid. Column items are vertically stacked.                                               |
| `$breakpoint-small` - `$breakpoint-large` | Each column spans across the entire parent grid. The first item within each column is placed on the left of the other column items. |
| Greater than `$breakpoint-large`          | Columns within the row are displayed horizontally. Column items are vertically stacked.                                             |

When using the [wrap variant](#wrap-variant), this responsive behaviour is
modified slightly:

| Screen size (px)                          | Behaviour                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| Less than `$breakpoint-small`             | Each column spans across the entire parent grid. Column items are vertically stacked.   |
| `$breakpoint-small` - `$breakpoint-large` | Columns wrap, 2 per row. Column items are vertically stacked.                           |
| Greater than `$breakpoint-large`          | Columns within the row are displayed horizontally. Column items are vertically stacked. |

This component is an extension of the [grid component](/docs/patterns/grid).
There are several usage variations detailed in the examples below.

## Full example

Each column can have up to 4 sub-grid items that will maintain equal heights
between columns.

<div class="embedded-example">
  <a href="/docs/examples/patterns/equal-height-row/4-items-per-column-responsive/" class="js-example">
    View example of the four items per column pattern using equal height row component.
  </a>
</div>

### Cross-column dividers

You can also insert dividers that span across all columns within a row using the
`.has-divider-1`, `.has-divider-2`, and `.has-divider-3` modifier classes.

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">
      You may only have two dividers maximum. For example, if you have
      <code>.has-divider-1</code> and <code>.has-divider-2</code> modifiers set,
      then <code>.has-divider-3</code> will not be shown. This is a limitation
      due to the usage of pseudo elements for visualising these dividers.
    </p>
  </div>
</div>

## Three column row

You may use the equal height row component nested inside the 25/75 grid split
pattern on large screen sizes (`.row--25-75-on-large`). The row
(`.p-equal-height-row`) should be placed within the 75% container with a maximum
of three columns.

<div class="embedded-example">
  <a href="/docs/examples/patterns/equal-height-row/3-column-row-responsive/" class="js-example">
    View example of the three column row pattern using equal height row component.
  </a>
</div>

## Four column row

A four column row grid (`.p-equal-height-row`) spanning the whole width of the
default page grid. Each column (`.p-equal-height-row__col`) within the component
is a sub-grid and may have up to four items (`.p-equal-height-row__item`) within
it.

<div class="embedded-example">
  <a href="/docs/examples/patterns/equal-height-row/default-responsive/" class="js-example">
    View example of the four column row pattern using equal height row component.
  </a>
</div>

## Wrap variant

By applying the modifier class `p-equal-height-row--wrap` to a
[three column row](#three-column-row) or [four column row](#four-column-row)
variant, row items will wrap at medium screen sizes. They will also retain
their vertical orientation across all breakpoints.

<div class="embedded-example">
  <a href="/docs/examples/patterns/equal-height-row/4-items-per-column-wrap-responsive/" class="js-example">
    View example of the four column row pattern using equal height row component.
  </a>
</div>

## Class reference

{{ class_reference("equal-height-row") }}

## Import

To import just this component into your project, copy the snippet below and
include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-equal-height-row;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in
your projects, which includes overrides and importing instructions.
