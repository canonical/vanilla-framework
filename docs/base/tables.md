---
layout: default
---

## Tables

<hr>

Data tables are used to organize and display all information from a data set.

We recommend that you align the text in table columns that contain only digits
to the right by adding the class `.u-align--right` to each individual cell,
as in the example that follows. This is considered good practice when formatting
data tables as it makes it easier to scan and compare the values quickly.

<a href="/examples/base/table/"
    class="js-example">
View example of the base table
</a>

### Sortable

Using the class `p-table--sortable` and assigning `role="columnheader"` and `aria-sort` to each `<th>` element will show each table column to be sortable. With javascript toggling between `ascending` and `descending` for the `aria-sort` attribute it will change the chevron icon in that direction.

<a href="/examples/patterns/tables/table-sortable/"
  class="js-example">
View example of the table sortable pattern
</a>

### Expanding

Using `.p-table-expanding` in conjunction with the `<table>` element will allow expanding and hidden table cells which take up the full width of the table row element.

This pattern should be used when a table requires configuration fields (add, edit). Expandable rows can also be used to supply additional information not visible on the table row.

Using `p-table-expanding__panel` it can be hidden using the `aria-hidden` attribute. The table must contain all table cells required.

<a href="/examples/patterns/tables/table-expanding/"
  class="js-example">
View example of the expanding table pattern
</a>

### Responsive

Applying the class `.p-table--mobile-card` will give any table a new responsive card view when on smaller screens. Each cell will require
an `[aria-label]` to describe the cell on a mobile screen. We use the content to create a pseudo element and keep it line with the content.

The `<thead>` element is completely hidden from view on a smaller screen and if the table holds a `.p-contextual-menu` pattern all the children elements will be visible and be interactive.

<a href="/examples/patterns/tables/table-mobile-card/"
  class="js-example">
View example of the patterns table mobile card
</a>

### Design

For more information view the [table](https://github.com/ubuntudesign/vanilla-design/tree/master/Table), [sortable](https://github.com/ubuntudesign/vanilla-design/tree/master/Table%20sortable), [expanding](https://github.com/ubuntudesign/vanilla-design/tree/master/Table) or [mobile card design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Table) which includes the specification in markdown format and a PNG image.
