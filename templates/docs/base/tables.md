---
wrapper_template: '_layouts/docs.html'
context:
  title: Tables | Base elements
---

Data tables are used to organize and display all information from a data set.

We capitalize table headings and any proper nouns in the table. Use other capitalization and punctuation consistently throughout the table.

<div class="embedded-example"><a href="/docs/examples/base/table/default" class="js-example">
View example of the base table
</a></div>

## Formatting

We recommend that you align the text in table columns that contain only digits
to the right by adding the class `.u-align--right` to each individual cell,
as in the example that follows. This is considered good practice when formatting
data tables as it makes it easier to scan and compare the values quickly.

By default long text in the cells will wrap on word breaks. To prevent that and
truncate long values add the `.u-truncate` class to the cell.

<div class="embedded-example"><a href="/docs/examples/patterns/tables/table-formatting" class="js-example">
View example of formatting in the table
</a></div>

You can find out more about the [truncation](/docs/utilities/truncate) and
[alignment](/docs/utilities/align) utilities on their respective documentation pages.

## Empty

A `<caption>` element can be used to provide a description when there is no data to display in the table. For more examples, see the [Empty states documentation](/docs/patterns/empty-state).

<div class="embedded-example"><a href="/docs/examples/patterns/empty-state/no-content" class="js-example">
View example of the empty state caused by no content
</a></div>

## Icons

If any of the cells in a column has an icon, all cells in the same column (including headers) should have a `.p-table__cell--icon-placeholder` to ensure proper alignment of the text values.

<div class="embedded-example"><a href="/docs/examples/patterns/tables/table-icons" class="js-example">
View example of the base table
</a></div>

## Sortable

Assigning `aria-sort` to `<th>` elements will make given table columns sortable. With javascript toggling between `ascending` and `descending` for the `aria-sort` attribute it will change the chevron icon in that direction.

<div class="embedded-example"><a href="/docs/examples/patterns/tables/table-sortable/" class="js-example">
View example of the table sortable pattern
</a></div>

## Expanding

Using `.p-table--expanding` in conjunction with the `<table>` element will allow expanding and hidden table cells which take up the full width of the table row element.

This pattern should be used when a table requires configuration fields (add, edit). Expandable rows can also be used to supply additional information not visible on the table row.

Using `p-table__expanding-panel` it can be hidden using the `aria-hidden` attribute. The table must contain all table cells required. The expanding panel is implemented as additional cell in each row, so to keep the markup of the table valid, an additional cell is also needed in the table `<thead>`. This placeholder heading cell should be hidden using `aria-hidden="true"` attribute.

<div class="embedded-example"><a href="/docs/examples/patterns/tables/table-expanding/" class="js-example">
View example of the expanding table pattern
</a></div>

## Responsive

Applying the class `.p-table--mobile-card` will give any table a new responsive card view when on smaller screens. Each cell will require
a `[data-heading]` attribute to describe the cell on a mobile screen. We use the content to create a pseudo element and keep it line with the content.

The `<thead>` element is completely hidden from view on a smaller screen and if the table holds a `.p-contextual-menu` pattern all the children elements will be visible and be interactive.

<div class="embedded-example"><a href="/docs/examples/patterns/tables/table-mobile-card/" class="js-example">
View example of the patterns table mobile card
</a></div>

## Overflow

By default, all table cells have `overflow: hidden;` applied to help maintain a table's layout at reduced widths. In some cases it is necessary to allow a cell's contents to overflow, such as when using the [contextual menu](/docs/patterns/contextual-menu) or [tooltip](/docs/patterns/tooltips) patterns, and this can be achieved by applying the `.has-overflow` class to appropriate cells.

<div class="embedded-example"><a href="/docs/examples/patterns/tables/table-overflow" class="js-example">
View example of the patterns table mobile card
</a></div>

## Import

To import either or all of these components into your project, copy the snippets below and include it in your main Sass file.

```scss
@import 'patterns_table-expanding';
```

```scss
@import 'patterns_table-mobile-card';
```

```scss
@import 'patterns_table-sortable';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use tables in React by installing our react-component library and importing `MainTable` or `ModularTable` component.

[See the documentation for our React `MainTable` component](https://canonical.github.io/react-components/?path=/docs/components-maintable--docs)

[See the documentation for our React `ModularTable` component](https://canonical.github.io/react-components/?path=/docs/components-modulartable--docs)
