---
wrapper_template: '_layouts/docs.html'
context:
  title: Accordion | Components
---

## How it works

Accordions are a vertically stacked list of headings. They reduce scrolling with interactive headings that show or hide the related content.

`Tab` and `Shift-Tab` are used to navigate forward and backward through each accordion header and all focusable elements in the accordion should be included in the tab order. `Enter` or `Space` expand and collapse each accordion panel.

The two main components are:

- Accordion heading which is the interactive title or thumbnail for each section. The headings can hide or show content.
- Accordion panel is the content associated with an accordion heading.

## Considerations

This component should follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/). Make sure this effort is maintained when the component is implemented across other projects.

- Accordion headings should clearly describe what is in that accordion section.
- Don’t use an accordion if it hides important information the user needs to complete actions on the page.
- Ensure each tab button element is wrapped by a `div` element with a `p-accordion__heading` class and the `role=heading` attribute. This heading should have an appropriate `aria-level` label, depending on its position in the hierarchy of the page.
- If the accordion panel associated with the heading is visible, then the button within the heading div must have `aria-expanded=”true”`
- The heading button should have an `aria-controls` attribute set to the ID of the related accordion panel.
- Add the `aria-labelledby` attribute to the accordion panel, set to the ID of the button heading.
- Avoid keyboard traps when adding components to the accordion panel. For example, the user expands an accordion, but is unable to tab to the next focusable element.

## Resources

- [W3C WAI-ARIA Accordion (Sections With Show/Hide Functionality)](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [WAI-ARIA Examples: Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/)
- [Carbon design systems - Accordion accessibility](https://carbondesignsystem.com/components/accordion/accessibility)
- Guidelines:
  - [1.3.1: Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships)
  - [2.1.1: Keyboard](https://www.w3.org/TR/WCAG22/#keyboard)
  - [2.1.2: No Keyboard Trap](https://www.w3.org/TR/WCAG22/#no-keyboard-trap)
