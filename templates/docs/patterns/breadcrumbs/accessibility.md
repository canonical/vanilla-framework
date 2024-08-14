---
wrapper_template: '_layouts/docs.html'
context:
  title: Breadcrumbs | Components
---

## How it works

It establishes a landmark on the page which assists the user in understanding where they currently are and which pages exist in the current page’s hierarchical order.

It comprises a set of links structured using an ordered list. A `nav` element using `aria-label="Breadcrumbs"` identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate. It can be navigated via keyboard using the `Tab` key.

To prevent screen reader announcement of the visual separators between links, they are added via CSS. The separators are part of the visual presentation that signifies the breadcrumb trail, which is already semantically represented by the `nav` element.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The breadcrumb text should reflect the page title accurately and concisely.
- The breadcrumb should remain in the same relative order and location on each web page.
- The breadcrumb indicating the current page should be visually distinct from the preceding breadcrumbs.
- If the breadcrumb reflecting the current page is a link, it should have an `aria-current="page" `attribute.

## Resources

- [WAI-ARIA practices: Breadcrumbs](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [WAI-ARIA practices: Breadcrumb example](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/)
- Guidelines:
  - [2.4.4: Link Purpose (in Context)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context)
  - [3.2.3: Consistent Navigation](https://www.w3.org/TR/WCAG22/#consistent-navigation)
