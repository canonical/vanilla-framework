---
layout: default
---

## Grid

<hr>

Vanilla has a responsive grid with the following columns and gutters:

| Screen size (px)                       | Columns | Grid gap (gutters) | Outer margins |
| -------------------------------------- | ------- | ------------------ | ------------- |
| 0 - $breakpoint-small                  | 4       | 1.5rem             | 1.0rem        |
| $breakpoint-small - $breakpoint-medium | 6       | 2.0rem             | 1.5rem        |
| above $breakpoint-medium               | 12      | 2.0rem             | 1.5rem        |

<br>

- The page structure must be laid out using rows (`.row`)
- All content must be within columns (`.col-*`)
- Only columns should be direct children of a row

Layouts can be created combining rows with different number of columns to an ideal maximum of 4 columns per row. Each column containing text should span a minimum of 3 columns.

Read also: [Breakpoints](/settings/breakpoint-settings)

<a href="/examples/patterns/grid/default/" class="js-example">
    View example of the default grid
</a>

### Nested columns

Columns can be nested infinitely by adding `.row` classes within columns. When nesting, remember to:
• keep track of the context (available columns), which is equal to the number of columns spanned by the parent element.
• Ensure `.col-*` classes are direct descendants of `.row` classes. Failing to do so will result in a broken layout.

<a href="/examples/patterns/grid/nested/" class="js-example">
    View example of the nested columns within the grid
</a>

### Empty columns

To leave gap columns, use `col-start-{breakpoint}{index}`, e.g.: `col-start-large-2`.

`{breakpoint}` options: "`small`", "`medium`", "`large`".

`{index}` options: an integer between 1 and the available columns.

<a href="/examples/patterns/grid/empty-columns/" class="js-example">
    View example of the empty columns within the grid
</a>

Please note, specifying a value that exceeds the available number of columns will result in incorrect offsets. This happens because the grid implicitly creates additional columns to accommodate the grid-column-start property. You should always keep track of how many available columns you have, especially when nesting. In the example below, we are indicating we want a `div` to span 3 columns, and start at position 7. This requires 10 total columns inside a `div` spanning only 4.
<a href="/examples/patterns/grid/incorrect-empty-columns/" class="js-example">
View example of the incorrect column offset within a nested grid
</a>

<hr>

### Design

For more information [view the grid design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Grid), which includes the specification in markdown format and a PNG image.
