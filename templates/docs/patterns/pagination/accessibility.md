---
wrapper_template: '_layouts/docs.html'
context:
  title: Pagination | Components
---

## How it works

Our pagination examples are wrapped in `nav` elements, each with an `aria-label=”Pagination”`. This helps distinguish the pagination from other `nav` elements on the page.

An unordered list is used to list the pages, which allows screen readers to voice the number of elements in the Pagination component.

Each page link has an `aria-label` including the word “page” along with the number. This helps orientate the user and clarify they are on a pagination button.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- It’s always recommended to use the native HTML elements where possible, but if you aren’t using a `nav` element to wrap the pagination, add `role=”navigation”` to the wrapping element.
- Provide a descriptive `aria-label` for any Pagination component’s `nav` element that describes its purpose. For example, if the pagination component is used to navigate through a set of search results, an appropriate label could be `aria-label="search results page"`.
- Do not use the landmark role as part of the label, as it will be repeated by the screen reader. For example if you use “Pagination navigation” as the `aria-label` value, then the screen reader will read out “Pagination navigation, navigation” . Use “Pagination” instead.
- If you use more than one Pagination component on a page, each will need a unique `aria-label`.
- Ensure you add `aria-current=”page”` to the current page.
- It helps to add “first page, page x” to the first page and “last page, page x” to the final page in the list.
- If you use chevrons without text labels to move to previous and next pages, make sure screen readers are reading “previous page” and “next page”.

## Resources

- [A11y style guide - Pagination navigation](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
- [Design system digital - Pagination](https://designsystem.digital.gov/components/pagination/)
- Guidelines:
  - [WAI-ARIA practices - General principles of landmark design](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
  - [WAI-ARIA practices - Navigation](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
