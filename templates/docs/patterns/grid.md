---
wrapper_template: '_layouts/docs.html'
context:
  title: Grid | Components
---

## Grid

<hr>

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
      <td><code>$breakpoint-small</code> - <code>$breakpoint-medium</code></td>
      <td>6</td>
      <td>2.0rem</td>
      <td>1.5rem</td>
    </tr>
    <tr>
      <td>Greater than <code>$breakpoint-medium</code></td>
      <td>12</td>
      <td>2.0rem</td>
      <td>1.5rem</td>
    </tr>
  </tbody>
</table>

<br>

- The page structure must be laid out using rows (`.row`)
- All content must be within columns (`.col-*`)
- Only columns should be direct children of a row

Layouts can be created combining rows with different number of columns to an ideal maximum of 4 columns per row. Each column containing text should span a minimum of 3 columns.

Read also: [Breakpoints](/docs/settings/breakpoint-settings)

<div class="embedded-example"><a href="/docs/examples/patterns/grid/default/" class="js-example">
    View example of the default grid
</a></div>

### Fixed width containers

If you only want to constrain content so it matches the grid's fixed width, you can use the utility `.u-fixed-width`. It behaves as a grid `.row` with a single 12 column container inside:

<div class="embedded-example"><a href="/docs/examples/utilities/fixed-width-container/" class="js-example">
    View example of a fixed width container
</a></div>

### Nested columns

Columns can be nested infinitely by adding `.row` classes within columns. When nesting, remember to:
• keep track of the context (available columns), which is equal to the number of columns spanned by the parent element.
• Ensure `.col-*` classes are direct descendants of `.row` classes. Failing to do so will result in a broken layout.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/nested/" class="js-example">
    View example of the nested columns within the grid
</a></div>

### Empty columns

To leave gap columns, use `col-start-{breakpoint}{index}`, e.g.: `col-start-large-2`.

`{breakpoint}` options: "`small`", "`medium`", "`large`".

`{index}` options: an integer between 1 and the available columns.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/empty-columns/" class="js-example">
    View example of the empty columns within the grid
</a></div>

Please note, specifying a value that exceeds the available number of columns will result in incorrect offsets. This happens because the grid implicitly creates additional columns to accommodate the grid-column-start property. You should always keep track of how many available columns you have, especially when nesting. In the example below, we are indicating we want a `div` to span 3 columns, and start at position 7. This requires 10 total columns inside a `div` spanning only 4.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/incorrect-empty-columns/" class="js-example">
View example of the incorrect column offset within a nested grid
</a></div>

### Breaking out of the grid

In some cases, there might be a good reason to break out of the constraints of a 12 column grid and allow content to bleed into the page margins. Vanilla provides a separate [fluid breakout layout](/docs/layouts/fluid-breakout) for this purpose.

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_grid';
@include vf-p-grid;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use grid in React by installing our react-component library and importing `Row` and `Col` components.

[See the documentation for our React `Row` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/row--default-story#row)

[See the documentation for our React `Col` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/col--default-story#col)
