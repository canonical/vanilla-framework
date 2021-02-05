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

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_grid';
@include vf-p-grid;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the grid design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Grid), which includes the specification in markdown format and a PNG image.

## Breaking out of the grid

<hr>

In some cases, there might be a good reason to break out of the constraints of a 12 column grid and allow content to bleed into the page margins - for example, tables with many columns that would otherwise result in heavy truncation or wrapping, charts with a lot of detail along the x axis, or card layouts that aim to impress with the abundance of available content. The fluid breakout layout allows you to do this.

### Anatomy of the fluid breakout layout

#### Wrapper

The `.l-fluid-breakout` serves as a wrapper, and allows for an aside and a main area. On screens smaller than `$breakpoint--large`, it acts as a single column. On larger screens it switches to a 3 column layout - a central area and two aside areas on either side.

The wrapper aims to align as much as possible with the 12 column grid. On smaller screens, than is limited to ensuring the padding of both layouts match. Once the window width becomes large enough, the left edges of the regular 12 column grid and the central column of the fluid breakout layout also align. For this to be possible, two conditions need to be met:

- <p>the central area's width needs to match the 12 column grid's width (we achieve this by setting the central area's max-width to the same value as the 12 column grid's max-width)</p>
- <p>The window width is larger than the combined width of the 3 columns of the layout (`$l-fluid-breakout-max-width + 2 * $l-fluid-breakout-aside-width`)</p>

#### Aside

The aside is optional. When present, the order of the aside can be changed from before to after the main area by re-arranging the markup. Depending on the screen width, that would place it above / below (on screens smaller than `$breakpoint--large`) or to the left / right on larger screens.

An aside to the left, main area to the right:

<div class="embedded-example"><a href="/docs/examples/patterns/grid/grid-breakout-left-aside/" class="js-example">
View example of he fluid breakout layout with a left aside
</a></div>

Or vice versa:

<div class="embedded-example"><a href="/docs/examples/patterns/grid/grid-breakout-left-aside/" class="js-example">
View example of he fluid breakout layout with a right aside
</a></div>

#### Main area

The main area occupies the whole page on screens smaller than `$breakpoint-large`, then on larger screens allows a choice between spanning 2 or 3 of the layout's columns.

Use the class `l-fluid-breakout__main` to span 2 columns:

<div class="embedded-example"><a href="/docs/examples/patterns/grid/grid-breakout-left-aside/" class="js-example">
View example of he fluid breakout layout without an aside
</a></div>

Use the class `l-fluid-breakout__full` to span all 3 columns:

<div class="embedded-example"><a href="/docs/examples/patterns/grid/grid-breakout-full/" class="js-example">
View example of he fluid breakout layout without an aside and a main column spanning all 3 columns:
</a></div>

In the absence of an aside, add the `.no-aside` class to the main area, to ensure it starts from the central column of the layout:

<div class="embedded-example"><a href="/docs/examples/patterns/grid/grid-breakout-no-aside/" class="js-example">
View example of he fluid breakout layout without an aside
</a></div>

### Uses

A couple of examples of where this layout might be useful. Both examples include a section with the regular 12 column grid for comparison.

A large table that would require truncation if fitted within the regular 12 column grid:

<div class="embedded-example"><a href="/docs/examples/patterns/grid/grid-breakout-full--cve-table/" class="js-example">
View example of he fluid breakout layout with a large table inside
</a></div>

A card layout where the goal is to fit more cards than the 12 column grid would allow:

<div class="embedded-example"><a href="/docs/examples/patterns/grid/grid-breakout-cards-and-aside/" class="js-example">
View example of he fluid breakout layout with an aside and a series of cards
</a></div>

### Import

To import just the fluid breakout layout component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_grid';
@include vf-l-fluid-breakout;
```

The breakout row allows some customisation. The arguments in the table bellow are all optional.

| Argument                             | Use                              | Default value |
| ------------------------------------ | -------------------------------- | ------------- |
| `$l-fluid-breakout-aside-width`      | Aside width                      | `13rem`       |
| `$l-fluid-breakout-main-child-width` | Width of item in the main column | `13rem`       |
| `$grid-gap`                          | Gap between columns in main area | `1rem`        |
| `$suffix`                            | Class modifier                   | `''`          |

<br>

For example to create a breakout row named `.grid-breakout--custom` that has a `10rem` aside, a main area subdivided into `20rem` columns, with no grid gap in between, you could use:

```scss
@import 'patterns_grid';
@include vf-l-fluid-breakout(10rem, 20rem, 0, '--custom');
```
