---
wrapper_template: '_layouts/docs.html'
context:
  title: Grid | Components
---

<div class="p-notification--positive">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Default grid updated</h3>
    <p class="p-notification__message">
      Vanilla version 4.18.0 introduced a new 8-column grid with <code>.grid-row</code> and <code>.grid-col</code>.<br>
      The new grid has different column counts than the <a href="/docs/patterns/grid-legacy">legacy grid</a>.<br>
      Evaluate the <a href="#structure">grid structure</a> and ensure that you use the correct grid for your desired layout.
    </p>
  </div>
</div>

## Structure

Vanilla has a responsive grid with the following columns and gutters:

<table>
  <thead>
    <tr>
      <th style="width: 50ch">Screen size (px)</th>
      <th>Columns</th>
      <th>Grid gap (gutters)</th>
      <th>Outer margins</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Less than <code>$breakpoint-small</code></td>
      <td>4</td>
      <td>1.5rem</td>
      <td>1.0rem</td>
    </tr>
    <tr>
      <td><code>$breakpoint-small</code> - <code>$breakpoint-large</code></td>
      <td>4</td>
      <td>2.0rem</td>
      <td>1.5rem</td>
    </tr>
    <tr>
      <td>Greater than <code>$breakpoint-large</code></td>
      <td>8</td>
      <td>2.0rem</td>
      <td>1.5rem</td>
    </tr>
  </tbody>
</table>

<br>

- The page structure must be laid out using rows (`.grid-row`)
- All content must be within columns (`.grid-col-*`)
- Only columns should be direct children of a row

Layouts can be created combining rows with different number of columns to an ideal maximum of 4 columns per row. Each column containing text should span a minimum of 2 columns.

Read also: [Breakpoints](/docs/settings/breakpoint-settings)

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/default/" class="js-example">
    View example of the default grid
</a></div>

## Common patterns

<div class="p-notification--information">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Coming soon</h3>
    <p class="p-notification__message">
      Grid shorthands (such as <code>.grid-row--50-50</code>) for the new grid are a work-in-progress.<br>
      If you need to use a grid shorthand, use the <a href="/docs/patterns/grid-legacy#common-patterns">legacy grid</a>.
    </p>
  </div>
</div>

## Nested columns

Columns can be nested infinitely by adding `.grid-row` classes within columns. When nesting, remember to:

- Keep track of the context (available columns), which is equal to the number of columns spanned by the parent element.
- Ensure `.grid-col-*` classes are direct descendants of `.grid-row` classes. Failing to do so will result in a broken layout.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/nested/" class="js-example">
    View example of the nested columns within the grid
</a></div>

## Empty columns

To leave gap columns, use `grid-col-start-{breakpoint}{index}`, e.g.: `grid-col-start-large-2`.

`{breakpoint}` options: "`small`", "`medium`", "`large`".

`{index}` options: an integer between 1 and the available columns.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/empty-columns/" class="js-example">
    View example of the empty columns within the grid
</a></div>

Please note, specifying a value that exceeds the available number of columns will result in incorrect offsets. This happens because the grid implicitly creates additional columns to accommodate the `grid-column-start property`. You should always keep track of how many available columns you have, especially when nesting. In the example below, we are indicating we want a `div` to span 1 column, and start at position 5. This requires 6 total columns inside a `div` spanning only 2.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/incorrect-empty-columns/" class="js-example">
View example of the incorrect column offset within a nested grid
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-grid-8;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
