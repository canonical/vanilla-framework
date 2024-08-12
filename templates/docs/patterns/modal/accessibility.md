---
wrapper_template: '_layouts/docs.html'
context:
  title: Modal | Components
---

## How it works

Modal is used to overlay an area of the screen with a prompt, dialog or interaction and prevents users from interacting with content outside of it until it’s closed.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The element that serves as the modal container should have a role of dialog and `aria-modal` set to `true`.
- The dialog has a label specified by `aria-labelledby` property that refers to a visible modal title.

JavaScript needs to be used to ensure:

- When a modal opens, focus moves to the first focusable element inside the modal.
- Focus is trapped within an open modal preventing any elements outside of the modal from receiving focus
- Tab, Shift+Tab move focus within the modal
- Escape closes the modal
- When a modal closes, focus returns to the element that triggered the modal

## Resources

- [Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [WAI-ARIA practices: Dialog (Modal)](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal)
- [WCAG22 - No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap)
