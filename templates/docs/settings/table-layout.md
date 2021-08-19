---
wrapper_template: '_layouts/docs.html'
context:
  title: Table layout | Settings
---

# Table layout

<hr>

By default, tables in Vanilla use `table-layout: fixed`.

There are cases where you might want to use `table-layout: auto` - e.g. in automatically generated tables. To do this, you need to set the `$table-layout-fixed` variable to `true`.

Depending on the value of `$table-layout-fixed`, a utility class is generated to allow overriding if necessary:

- If `$table-layout-fixed` is set to `true` (the default), you can use `u-table-layout--auto` to override it.
- if `$table-layout-fixed` is set to `auto` it adds a utility called `u-table-layout--fixed`.
