---
wrapper_template: '_layouts/docs.html'
context:
  title: Grid | Components
---

# Grid

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
      <td><code>$breakpoint-small</code> - <code>$breakpoint-large</code></td>
      <td>6</td>
      <td>2.0rem</td>
      <td>1.5rem</td>
    </tr>
    <tr>
      <td>Greater than <code>$breakpoint-large</code></td>
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

## Fixed width containers

If you only want to constrain content so it matches the grid's fixed width, you can use the utility `.u-fixed-width`. It behaves as a grid `.row` with a single 12 column container inside:

<div class="embedded-example"><a href="/docs/examples/utilities/fixed-width-container/" class="js-example">
    View example of a fixed width container
</a></div>

## Nested columns

Columns can be nested infinitely by adding `.row` classes within columns. When nesting, remember to:
• keep track of the context (available columns), which is equal to the number of columns spanned by the parent element.
• Ensure `.col-*` classes are direct descendants of `.row` classes. Failing to do so will result in a broken layout.

<div class="embedded-example"><a href="/docs/examples/patterns/grid/nested/" class="js-example">
    View example of the nested columns within the grid
</a></div>

## Empty columns

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

## Breaking out of the grid

In some cases, there might be a good reason to break out of the constraints of a 12 column grid and allow content to bleed into the page margins. Vanilla provides a separate [fluid breakout layout](/docs/layouts/fluid-breakout) for this purpose.

## Accessibility

### How it works

The grid gives the ability to maintain semantic meaning in the page, while placing the content in whatever visual way required. The distinguishing feature of the grid that enables it to be used for grouping other widgets, is that its cells are containers that preserve the semantics of their descendant elements.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Each column containing text should span a minimum of 3 columns.
- Only columns should be direct children of rows.
- The starting point of your page should be a well structured and accessible source document. Ensure the document remains in a logical order for screen readers, irrespective of how the content looks visually.
- Ensure to use order and the grid-placement properties only for visual, not logical, reordering of content.

## Resources

- [CSS Grid Layout and Accessibility - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid Layout Module Level 2 - Order accessibility](https://drafts.csswg.org/css-grid/#order-accessibility)
- [WAI-ARIA examples - Grid layout ](https://www.w3.org/TR/wai-aria-practices/examples/grid/LayoutGrids.html)
- [WAI-ARIA practices - Grid](https://www.w3.org/TR/wai-aria-practices-1.1/#grid)
- Guidelines
  - [WCAG 2.1 - 2.4.3 Focus order](https://www.w3.org/TR/WCAG21/#focus-order)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-grid;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use grid in React by installing our react-component library and importing `Row` and `Col` components.

[See the documentation for our React `Row` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/row--default-story#row)

[See the documentation for our React `Col` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/col--default-story#col)
