---
wrapper_template: '_layouts/docs.html'
context:
  title: Contextual menu | Components
---

## How it works

The contextual menu is a secondary menu which can be applied to any button. The button contains a few aria-attributes:

- An `aria-controls` attribute matching the `id` of the span containing the menu.
- An `aria-expanded` attribute, the value always being the opposite of the `aria-hidden` value on the span containing the menu.
- An `aria-haspopup` with the value of true.
- Keyboard interaction:
  - The Enter and space keys opens the menu
  - The Escape closes the menu
  - When the menu is open, the Tab key will move through the menu items and once it leaves the final item, the menu closes. AT will then announce the pop up has collapsed.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The control element should have the `role=”button”`, in our example we use the native button element.
- JavaScript will be needed to show/hide the content of the menu. The script should find the toggle element `.p-contextual-menu__toggle`, and what it controls via `aria-controls`.
- The target element is shown/hidden by changing `aria-hidden` to true or false accordingly. The `aria-expanded` attribute on the control element should change accordingly.
- When using the `p-contextual-menu__toggle` class on a `button` element, please ensure that the button label contains a trailing ellipsis `...`, e.g. "Take action...". This is a convention used to indicate that the button launches a dialog.
- In cases where a contextual menu is shown on click, focus should be set within the menu element, using JavaScript.

## Resources

- [WAI-ARIA practices - Menu button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [WCAG22 - Understanding Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)
- [WAI-ARIA - Menu role](https://www.w3.org/TR/wai-aria-1.2/#menu)
