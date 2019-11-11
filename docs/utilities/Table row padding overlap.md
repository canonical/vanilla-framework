---
layout: default
---

## Table cell padding overlap

<hr>

Vanilla applies padding-top and padding bottom to table cells. This is done to prevent row borders from getting too close to text that is not wrapped in a `<p>` or other text element.

In some cases it can be helpful to override this behaviour, e.g. when you have an button in a cell.

There are two ways to do this:

- Apply a `u-no-padding` utility class to the `<td>`. Use when all children of the cell have padding / margin applied
- Apply `u-table-row-padding-overlap` to one element in the table cell. This can be useful if the table cell contains mixed content, e.g. a button next to text that is not wrapped in a tag.
