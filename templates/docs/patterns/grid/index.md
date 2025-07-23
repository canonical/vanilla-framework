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

## Common patterns {{ status("New") }}

On top of the regular row and column classes, we provide shortcut classes to help you build [often used layouts](/docs/layouts/brochure).
Instead of specifying columns at each breakpoint, use one of these classes on the grid container, and the child elements will be arranged automatically as long as they have the `grid-col` class.

N.B.: the shortcut classes are not nestable.
If you need further subdivision inside a shortcut class, please use the regular grid classes.
Take care to specify a number of columns that is available (e.g. 2 columns in a 25% container, 4 columns in a 50% container, etc).
Specifying more columns than are available leads to misalignments.

|                              | Large screens | Medium screens | Small screens   |
| ---------------------------- | ------------- | -------------- | --------------- |
| `.grid-row--50-50`           | 50/50         | 50/50          | 100/100         |
| `.grid-row--50-50-on-medium` | -             | 50/50          | -               |
| `.grid-row--50-50-on-large`  | 50/50         | -              | -               |
| `.grid-row--25-75`           | 25/75         | 25/75          | 100/100         |
| `.grid-row--25-75-on-medium` | -             | 25/75          | -               |
| `.grid-row--25-75-on-large`  | 25/75         | -              | -               |
| `.grid-row--75-25`           | 75/25         | 75/25          | 100/100         |
| `.grid-row--75-25-on-medium` | -             | 75/25          | -               |
| `.grid-row--75-25-on-large`  | 75/25         | -              | -               |
| `.grid-row--25-25-50`        | 25/25/50      | 50/50/100      | 100/100/100     |
| `.grid-row--25-25-25-25`     | 25/25/25/25   | 50/50/50/50    | 100/100/100/100 |

### 50/50

The default variant of 50/50 split sets the layout on large and medium screens, stacking both columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/50-50/" class="js-example">
    View example of 50/50 grid layout
</a></div>

### 25/75

The default variant of 25/75 split sets the layout on large and medium screens, stacking both columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/25-75/" class="js-example">
    View example of 25/75 grid layout
</a></div>

### 75/25

The default variant of 75/25 split sets the layout on large and medium screens, stacking both columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/75-25/" class="js-example">
    View example of 75/25 grid layout
</a></div>

### Responsive 50/50, 25/75, and 75/25

The default `.grid-row--50-50`, `.grid-row--25-75`, and `.grid-row--75-25` splits provide the most common default layouts for all screen sizes, as described in the table above.

To have more direct control over the layout on different screen sizes, you can use the responsive variants of these classes: `.grid-row--50-50-on-medium`, `.grid-row--25-75-on-medium`, and `.grid-row--75-25-on-medium` will only apply given layout on medium screens, while `.grid-row--50-50-on-large`, `.grid-row--25-75-on-large`, and `.grid-row--75-25-on-large` will only apply given layout on large screens.

For example, to only have 25/75 split on large screens, you can use `.grid-row--25-75-on-large`. This is usually useful when main large column splits further with nested grid that would require full width of the page on medium screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/25-75-responsive-large/" class="js-example">
    View example of 25/75 grid layout
</a></div>

This can also be accomplished with the 75/25 split using `.grid-row--75-25-on-large`.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/75-25-responsive-large/" class="js-example">
    View example of 75/25 grid layout
</a></div>

By utilising the responsive variants, you can also create mixed layouts with 50/50 splits on medium screens and 25/75 or 75/25 on large screens, without the need to nest grids.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/25-75-mixed-responsive/" class="js-example">
    View example of 25/75 mixed with 50/50 grid layout
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/75-25-mixed-responsive/" class="js-example">
    View example of 75/25 mixed with 50/50 grid layout
</a></div>

### 25/25/50

The row with 25/25/50 split sets this layout on large screens only, switching to 50/50 stacked on top of full width column on medium screen, and stacking all 3 columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/25-25-50/" class="js-example">
    View example of 25/25/50 grid layout
</a></div>

### 25/25/25/25

The row with 25/25/25/25 split sets this layout on large screens only, switching to 50/50 stacked on top of 50/50 columns on medium screen, and stacking all 4 columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid-8/25-25-25-25/" class="js-example">
    View example of 25/25/25/25 grid layout
</a></div>

## Fixed width containers

If you only want to constrain content so it matches the grid's fixed width, you can use the utility `.u-fixed-width`. It behaves as a grid `.grid-row` with a single 8-column container inside:

<div class="embedded-example"><a href="/docs/examples/utilities/fixed-width-container/" class="js-example">
    View example of a fixed width container
</a></div>

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
