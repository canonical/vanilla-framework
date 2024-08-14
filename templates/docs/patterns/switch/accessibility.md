---
wrapper_template: '_layouts/docs.html'
context:
  title: Switch | Components
---

## How it works

The switch component is used to display on and off content. It includes the `role=”switch”` attribute so the screen reader distinguishes it from a checkbox. The `span` with class name `p-switch__label` acts as the label, and is associated with the status of the switch input.

The element is focusable, and the `Spacebar` changes the state of the switch the same way a click would.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Each switch should have a clear and concise label
- Adding `aria-checked=”true”` or `aria-checked=”false”` will set the switch to on or off respectively.
- `aria-readonly` is set to false as default, meaning the user can change the value of the switch. Change this to true if the switch is meant to be read only (i.e. disabled).

## Resources

- [WAI-ARIA names and descriptions definition](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/)
- [MDN Web accessibility - Switch role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
- Guidelines:
  - [WCAG22 - Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
  - [WCAG22 - On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input)
