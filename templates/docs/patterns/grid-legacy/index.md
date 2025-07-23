---
wrapper_template: '_layouts/docs.html'
context:
  title: Legacy grid | Components
---

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">
      The 12-column legacy grid (<code>.row</code> and <code>.col</code>) is deprecated.<br>
      New layouts should be built with the <a href="/docs/patterns/grid">new grid</a> instead.
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
      <td>6</td>
      <td>2.0rem</td>
      <td>1.5rem</td>
    </tr>
    <tr>
      <td>Greater than <code>$breakpoint-large</code></td>
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

## Common patterns

On top of the regular row and column classes, we provide shortcut classes to help you build [often used layouts](/docs/layouts/brochure). Instead of specifying columns at each breakpoint, use one of these classes on the grid container, and the child elements will be arranged automatically as long as they have the `col` class.

N.B.: the shortcut classes are not nestable. If you need further subdivision inside a shortcut class, please use the regular grid classes. Take care to specify a number of columns that is available (e.g. 3 columns in a 25% container, 6 columns in a 50% container, etc). Specifying more columns than are available leads to misalignemnts.

|                         | Large screens | Medium screens | Small screens   |
| ----------------------- | ------------- | -------------- | --------------- |
| `.row--50-50`           | 50/50         | 50/50          | 100/100         |
| `.row--50-50-on-medium` | -             | 50/50          | -               |
| `.row--50-50-on-large`  | 50/50         | -              | -               |
| `.row--25-75`           | 25/75         | 33/66          | 100/100         |
| `.row--25-75-on-medium` | -             | 33/66          | -               |
| `.row--25-75-on-large`  | 25/75         | -              | -               |
| `.row--75-25`           | 75/25         | 66/33          | 100/100         |
| `.row--75-25-on-medium` | -             | 66/33          | -               |
| `.row--75-25-on-large`  | 75/25         | -              | -               |
| `.row--25-25-50`        | 25/25/50      | 50/50/100      | 100/100/100     |
| `.row--25-25-25-25`     | 25/25/25/25   | 50/50/50/50    | 100/100/100/100 |

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Nesting</h5>
    <p class="p-notification__message">
      These common patterns are meant for top level rows only and are <strong>not intended to be nested</strong>. You should not nest <code>row--50-50</code> inside another column.
      For nested rows, use the standard <code>.row</code> class, as described in <a href="#nested-columns">section about nested columns</a> later on this page.</p>
  </div>
</div>

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h5 class="p-notification__title">25/75 split changes in Vanilla 4.6.0</h5>
    <p class="p-notification__message">
      Vanilla 4.6.0, with introduction of responsive variants of row changed previous responsive behaviour of <code>.row--25-75</code>. The <code>is-split-on-medium</code> variant class was removed, as <code>.row--25-75</code> by default uses split layout on medium screens. See <a href="#responsive-5050-and-2575">responsive 50/50 and 25/75</a> section below for more details.
    </p>
  </div>
</div>

### 50/50

The default variant of 50/50 split sets the layout on large and medium screens, stacking both columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/50-50/" class="js-example">
    View example of 50/50 grid layout
</a></div>

### 25/75

The default variant of 25/75 split sets the layout on large and medium screens, stacking both columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/25-75/" class="js-example">
    View example of 25/75 grid layout
</a></div>

### 75/25

The default variant of 75/25 split sets the layout on large and medium screens, stacking both columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/75-25/" class="js-example">
    View example of 75/25 grid layout
</a></div>

### Responsive 50/50, 25/75, and 75/25

The default `.row--50-50`, `.row--25-75`, and `.row--75-25` splits provide the most common default layouts for all screen sizes, as described in the table above.

To have more direct control over the layout on different screen sizes, you can use the responsive variants of these classes: `.row--50-50-on-medium`, `.row--25-75-on-medium`, and `.row--75-25-on-medium` will only apply given layout on medium screens, while `.row--50-50-on-large`, `.row--25-75-on-large`, and `.row--75-25-on-large` will only apply given layout on large screens.

For example, to only have 25/75 split on large screens, you can use `.row--25-75-on-large`. This is usually useful when main large column splits further with nested grid that would require full width of the page on medium screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/25-75-responsive-large/" class="js-example">
    View example of 25/75 grid layout
</a></div>

This can also be accomplished with the 75/25 split using `.row--75-25-on-large`.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/75-25-responsive-large/" class="js-example">
    View example of 75/25 grid layout
</a></div>

By utilising the responsive variants, you can also create mixed layouts with 50/50 splits on medium screens and 25/75 or 75/25 on large screens, without the need to nest grids.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/25-75-mixed-responsive/" class="js-example">
    View example of 25/75 mixed with 50/50 grid layout
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/grid/75-25-mixed-responsive/" class="js-example">
    View example of 75/25 mixed with 50/50 grid layout
</a></div>

{{ status("removed") }}

The `.is-split-on-medium` class has been removed in Vanilla 4.6.0 as `.row--25-75` how implements same responsive behaviour by default. If you want to only use 25/75 split on large screens, use `.row--25-75-on-large`.

### 25/25/50

The row with 25/25/50 split sets this layout on large screens only, switching to 50/50 stacked on top of full width column on medium screen, and stacking all 3 columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/25-25-50/" class="js-example">
    View example of 25/25/50 grid layout
</a></div>

### 25/25/25/25

The row with 25/25/25/25 split sets this layout on large screens only, switching to 50/50 stacked on top of 50/50 columns on medium screen, and stacking all 4 columns on top of each other on small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/25-25-25-25/" class="js-example">
    View example of 25/25/25/25 grid layout
</a></div>

## Fixed width containers

If you only want to constrain content so it matches the grid's fixed width, you can use the utility `.u-fixed-width`. It behaves as a grid `.row` with a single 12 column container inside:

<div class="embedded-example"><a href="/docs/examples/utilities/fixed-width-container/" class="js-example">
    View example of a fixed width container
</a></div>

## Nested columns

Columns can be nested infinitely by adding `.row` classes within columns. When nesting, remember to:

- Keep track of the context (available columns), which is equal to the number of columns spanned by the parent element.
- Ensure `.col-*` classes are direct descendants of `.row` classes. Failing to do so will result in a broken layout.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/nested/" class="js-example">
    View example of the nested columns within the grid
</a></div>

## Empty columns

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

## Breaking out of the grid

In some cases, there might be a good reason to break out of the constraints of a 12 column grid and allow content to bleed into the page margins. Vanilla provides a separate [fluid breakout layout](/docs/layouts/fluid-breakout) for this purpose.

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-grid;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use grid in React by installing our react-component library and importing `Row` and `Col` components.

[See the documentation for our React `Row` component](https://canonical.github.io/react-components/?path=/docs/components-row--docs)

[See the documentation for our React `Col` component](https://canonical.github.io/react-components/?path=/docs/components-col--docs)
