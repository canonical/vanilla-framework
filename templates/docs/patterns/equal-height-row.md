---
wrapper_template: '_layouts/docs.html'
context:
  title: Equal height row | Components
---

The equal height row component aims to provide consistent alignment for grid items within a row format. This is achieved using the CSS `subgrid` feature which allows column grids to share the same layout used in the parent row grid.

In addition to enforcing column grid items alignment within each row, responsive behaviour is provided out of the box as shown below:

<table>
  <thead>
    <tr>
      <th style="width: 50ch">Screen size (px)</th>
      <th>Behaviour</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Less than <code>$breakpoint-small</code></td>
      <td>Each column spans across the entire parent grid. Column items are vertically stacked.</td>
    </tr>
    <tr>
      <td><code>$breakpoint-small</code> - <code>$breakpoint-large</code></td>
      <td>Each column spans across the entire parent grid. The first item within each column is placed on the left of the other column items.</td>
    </tr>
    <tr>
      <td>Greater than <code>$breakpoint-large</code></td>
      <td>Columns within the row are displayed horizontally. Column items are vertically stacked.</td>
    </tr>
  </tbody>
</table>

This component is an extension of the [grid component](/docs/patterns/grid). There are several usage variations detailed in the examples below.

## Full example

Each column of the component can have up to 4 sub-grid items that will keep equal heights between the columns.

<div class="embedded-example"><a href="/docs/examples/patterns/equal-height-row/4-items-per-column/" class="js-example">
View example of the four items per column pattern using equal height row component.
</a></div>

### Cross-column dividers

You can also insert dividers that span across all columns within a row using `.has-1st-divider`, `.has-2nd-divider` and `.has-3rd-divider`.

<div class="p-notification--information">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Note:</h5>
    <p class="p-notification__message">For smaller screen sizes i.e. <code>< $breakpoint-large</code> the divider will appear below relevant items within each column.</p>
  </div>
</div>

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">You may only have two dividers maximum. For example, if you have <code>.has-1st-divider</code> and <code>.has-2nd-divider</code> set for the row, then <code>.has-3rd-divider</code> will not be shown. This is a limitation due to usage of pseudo elements for visualising dividers that is capable of spanning across grid gaps.</p>
  </div>
</div>

## Three column row

You may use the equal height row component nested inside the 25/75 grid split pattern on large screen size (`.row--25-75-on-large`). The row (`.p-equal-height-row`) should be placed within the 75% container with a maximum of three columns.

<div class="embedded-example"><a href="/docs/examples/patterns/equal-height-row/3-column-row/" class="js-example">
View example of the three column row pattern using equal height row component.
</a></div>

## Four column row

Used as a four column row grid (`.p-equal-height-row`) spanning the whole width of the default page grid. Each column (`.p-equal-height-row__col`) within the component is a sub-grid and may have up to four items (`.p-equal-height-row__item`).

<div class="embedded-example"><a href="/docs/examples/patterns/equal-height-row/default/" class="js-example">
View example of the four column row pattern using equal height row component.
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-equal-height-row;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
