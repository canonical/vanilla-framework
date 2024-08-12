---
wrapper_template: '_layouts/docs.html'
context:
  title: Search box | Components
---

## How it works

The search box allows users to search for content by typing in the input, without needing to use the navigation. The input element has a descriptive `aria-label` for screen reader users.

It's a focusable component, and in the expanding search box where only the icon is visible, the search box has an appropriate `aria-label`. If `required` is included in the input, then the browser will display an accessible error message instructing the user to fill out the field.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Make sure to have a descriptive `aria-label` for the search input.
- Usually, it shouldn’t be possible to search with an empty input field, so indicate this with the `required` attribute on the input.
- If a page includes more than one search landmark, each should have a unique label.

## Resources

- [W3C WAI-ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/search.html)
- [Accessible search - handling form errors](https://www.a11ymatters.com/pattern/accessible-search/#handling-form-errors)
