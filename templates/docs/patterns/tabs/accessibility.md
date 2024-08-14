---
wrapper_template: '_layouts/docs.html'
context:
  title: Tabs | Components
---

## How it works

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

The component can be navigated to via the keyboard: pressing the `Tab` key will highlight the active tab, and navigating between the tabs is achieved by pressing the `Left` and `Right` keys. When a new tab is selected, the corresponding panel is automatically shown.

This component does not have a semantic counterpart in HTML, so it uses several WAI-ARIA tools to aid assistive technology:

- The tabs are contained within a wrapper that has `role=”tablist”`, indicating to assistive technology that this component is not just a series of buttons or links.
- Individual tabs use several `aria` attributes:
  - `role=”tab”`
  - `aria-selected`, which takes a boolean value to indicate whether it is the currently selected tab.
  - `aria-controls`, which references the ID of the tab panel it controls
- Tab panels also have several `aria` attributes:
  - `role=”tabpanel”`,
  - `aria-labelledby`, which references the ID of the tab it is controlled by

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Tab text should be concise and make it clear what content they link to/nest.
- There should be a clear relationship between the tabs and the tab panels.
- JavaScript should be used to handle both mouse and keyboard interactions.
- Content included in tab panels should also be accessible, i.e. images should include appropriate `alt` text.
- Avoid tabs that wrap over more than one line. This can make it harder for users to distinguish the selected tab from its content.

## Resources

- [Example of Tabs with Automatic Activation](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/)
- [WAI-ARIA practices: Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- Guidelines:
  - [1.3.1: Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships)
  - [2.1.1: Keyboard](https://www.w3.org/TR/WCAG22/#keyboard)
  - [2.1.2: No Keyboard Trap](https://www.w3.org/TR/WCAG22/#no-keyboard-trap)
