---
wrapper_template: '_layouts/docs.html'
context:
  title: Table layout | Settings
---

By default, tables in Vanilla use `table-layout: fixed`.

There are cases where you might want to use `table-layout: auto` - e.g. in automatically generated tables. To do this, you need to set the `$table-layout-fixed` variable to `true`.

Two utility classes are generated to allow overriding if necessary:

- `u-table-layout--auto` sets the table or any descendant tables of the element it's put on to `table-layout: auto`.
- `u-table-layout--fixed` sets the table or any descendant tables of the element it's put on to `table-layout: fixed`.

<div class="embedded-example"><a href="/docs/examples/utilities/table-layout/table-layout-auto" class="js-example" data-height="120">
View example of the automatic table layout
</a></div>

The table layout utility classes also apply to tables nested inside an element with the utility class.

<div class="embedded-example"><a href="/docs/examples/utilities/table-layout/table-layout-auto-nested" class="js-example" data-height="120">
View example of the automatic table layout applied to a nested table
</a></div>
