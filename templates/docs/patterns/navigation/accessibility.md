---
wrapper_template: '_layouts/docs.html'
context:
  title: Navigation | Components
---

## How it works

Navigation allows users to navigate different pages or content in a website. The list of navigation items can be displayed on the top or left edge of the viewport.

The component can be navigated via the keyboard. Pressing the `Tab` key will highlight the navigation items. When an element is highlighted, pressing the `Enter` key will open the corresponding view.

We use JavaScript, to ensure the side navigation items are only accessible using the keyboard when the drawer is open and in view. We've controlled the focus, so it lands on the toggle button in the drawer when the drawer opens, and lands on the toggle button outside the drawer when the drawer closes.

The navigation component has the `<nav>` HTML tag to aid assistive technology. It also uses several WAI-ARIA tools to aid assistive technology:

- The navigation component uses `aria-label`, which is the description of it.
- Individual items use several `aria` attributes:
  - `aria-control`, which references the ID of the navigation panel it controls.
  - `aria-hidden`, which takes a boolean value to control the dropdown navigation items.
  - `aria-current="page"`, which is passed to the currently selected item.
  - `aria-expanded`, which is used in expandable variants of side navigation.

Care should be taken to ensure that the label makes sense out of context of the content around it.

Consider the size that navigation elements are displayed at. They should be easily reachable and tappable on mobile views and easy to locate with the pointer on desktop views. Consider that users with reduced mobility may find it harder to locate and operate controls that appear too small on screen.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The visual order of the UI objects that is read by assistive technologies should match with the source code.
- Give each navigation element a unique and clear label. Do not include the word “navigation” in the `aria-label`, as this would be repeated by the screen reader.
- JavaScript will be needed to show/hide a collapsible element. The toggle element should have an `aria-controls` attribute that matches with the collapsible element’s `id`.
- The target element is shown/hidden by changing `aria-hidden` to `true` or `false` accordingly.
- JavaScript will be needed to indicate which navigation element is active. `aria-current="page"` attribute should be given to the navigation item.
- JavaScript should be used to handle both mouse and keyboard interactions.

## Resources

- [Carbon Design System - Navigation](https://www.carbondesignsystem.com/patterns/global-header/#accessibility)
- Guidelines:
  - [WAI-ARIA practices - General principles of landmark design](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
  - [WAI-ARIA practices - Navigation](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
