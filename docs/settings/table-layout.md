---
layout: default
---

## Table layout

By default, tables in vanilla use table-layout: fixed. It is faster, and ensures more predictable and controllable table behaviour, but requires setting widths explicitly on the first row of the table.

There are cases where you might want to use table-layout: auto - e.g. in automatically generated tables, where specifying column widths is not practical. To do this, you need to set the $table-layout variable to `auto`.

Depending on the value of $table-layout, a utility class is generated to allow overriding if necessary:

• If $table-layout is set to `fixed` (the default), you can use `u-table-layout--auto` to override it.
• if $table-layout is set to `auto` (or anything else like `inherit` etc) it adds a utility called `u-table-layout--fixed`.
