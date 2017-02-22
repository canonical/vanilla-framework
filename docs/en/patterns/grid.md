---
title: Grid
---

# Grid

Vanilla's default grid has 12 columns and `20px` gutters. On large screens, each column takes up 6.3053% of the total width.

- The page structure must be laid out using rows (`.row`)
- All content must be within columns (`.col-*`)
- Only columns should be direct children of a row

Layouts can be created combining rows with different number of columns to an ideal maximum of 4 columns per row. Each column should span a minimum of 3 columns.

Read also: [Breakpoints](/settings/breakpoints)

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/grid/default/"
    class="js-example">
    View example of the default grid
</a>

## Empty columns

Adding empty columns before or after an element might be useful when you need extra space between elements and columns than that provided by the default grid.

The classes `.prefix-1`, `.prefix-2`, `.prefix-3`, and so on, will add empty columns before the element to the number of columns specified in the class.

The classes `.suffix-1`, `.suffix-2`, `.suffix-3`, and so on, will add empty columns after the element to the number of columns specified in the class.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/grid/empty-columns/"
    class="js-example">
    View example of the empty columns within the grid
</a>
