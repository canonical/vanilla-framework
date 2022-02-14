---
wrapper_template: '_layouts/docs.html'
context:
  title: Modal | Components
---

# Modal

<hr>

The modal component can be used to overlay an area of the screen which can contain a prompt, dialog or interaction.

On `p-modal` set display to `display:flex` or `display:none` to toggle the visibility of the modal.

<div class="p-notification--information">
  <div class="p-notification__content">
    <p class="p-notification__message">The element that launches a given modal should include a trailing ellipsis, e.g. "Launch modal&hellip;". This is a convention used to indicate that the element launches a dialog.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/modal/default/" class="js-example" data-height="400">
View example of the modal pattern
</a></div>

## With footer

Optional footer element with a `p-modal__footer` class name can be added to the modal dialog to provide additional options.

<div class="embedded-example"><a href="/docs/examples/patterns/modal/footer/" class="js-example" data-height="400">
View example of the modal with a footer
</a></div>

## Accessibility

### How it works

Modal is used to overlay an area of the screen with a prompt, dialog or interaction and prevents users from interacting with content outside of it until it’s closed.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The element that serves as the modal container should have a role of dialog and `aria-modal` set to `true`.
- The dialog has a label specified by `aria-labelledby` property that refers to a visible modal title.

JavaScript needs to be used to ensure:

- When a modal opens, focus moves to the first focusable element inside the modal.
- Focus is trapped within an open modal preventing any elements outside of the modal from receiving focus
- Tab, Shift+Tab move focus within the modal
- Escape closes the modal
- When a modal closes, focus returns to the element that triggered the modal

### Resources

- [Modal Dialog Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html)
- [WAI-ARIA practices: Dialog (Modal)](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal)
- [No Keyboard Trap: Understanding SC 2.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-modal;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use modal dialogs in React by installing our react-component library and importing `Modal` component.

[See the documentation for our React `Modal` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/modal--default-story#modal)
