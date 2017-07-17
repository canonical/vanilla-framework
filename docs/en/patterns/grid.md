---
title: Grid
table_of_contents: true
---

# Grid

Vanilla's default grid has 12 columns and `20px` gutters. On large screens, each column takes up 6.3053% of the total width.

- The page structure must be laid out using rows (`.row`)
- All content must be within columns (`.col-*`)
- Only columns should be direct children of a row

Layouts can be created combining rows with different number of columns to an ideal maximum of 4 columns per row. Each column should span a minimum of 3 columns.

Read also: [Breakpoints](/en/settings/breakpoints)

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/grid/default/"
    class="js-example">
    View example of the default grid
</a>

## Empty columns

Prefixes and suffixes add extra horizontal padding to columns, creating some negative space between or around them.

To add some space to the left of the column add a `.prefix-[n]` class, where `n` is the number of grid units the space should take up.

To add some space to the right add a `.suffix-[n]` class.

By default, prefixes and suffixes only work on top level columns.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/grid/empty-columns/"
    class="js-example">
    View example of the empty columns within the grid
</a>
