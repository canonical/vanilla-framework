---
wrapper_template: '_layouts/docs.html'
context:
  title: Legacy grid | Components
---

## How it works

The grid gives the ability to maintain semantic meaning in the page, while placing the content in whatever visual way required. The distinguishing feature of the grid that enables it to be used for grouping other widgets, is that its cells are containers that preserve the semantics of their descendant elements.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Each column containing text should span a minimum of 3 columns.
- Only columns should be direct children of rows.
- The starting point of your page should be a well structured and accessible source document. Ensure the document remains in a logical order for screen readers, irrespective of how the content looks visually.
- Ensure to use order and the grid-placement properties only for visual, not logical, reordering of content.

## Resources

- [CSS Grid Layout and Accessibility - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid Layout Module Level 2 - Order accessibility](https://drafts.csswg.org/css-grid/#order-accessibility)
- [WAI-ARIA examples - Grid layout](https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/layout-grids/)
- [WAI-ARIA practices - Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- Guidelines
  - [2.4.3: Focus Order](https://www.w3.org/TR/WCAG22/#focus-order)
