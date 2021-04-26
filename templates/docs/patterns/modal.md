---
wrapper_template: '_layouts/docs.html'
context:
  title: Modal | Components
---

## Modal

<hr>

The modal component can be used to overlay an area of the screen which can contain a prompt, dialog or interaction.

On `p-modal` set display to `display:flex` or `display:none` to toggle the visibility of the modal.

<div class="embedded-example"><a href="/docs/examples/patterns/modal/default/" class="js-example" data-height="400">
View example of the modal pattern
</a></div>

Optional footer element with a `p-modal__footer` class name can be added to the modal dialog to provide additional options.

<div class="embedded-example"><a href="/docs/examples/patterns/modal/footer/" class="js-example" data-height="400">
View example of the modal with a footer
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_modal';
@include vf-p-modal;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Accessibility

For any elements that launch a modal, please ensure that the label contains a trailing ellipsis `…`, e.g. "Launch modal&hellip;". This is a convention used to indicate that the element launches a dialog.

When a modal is launched, focus should be set and contained within the modal dialog, using JavaScript. When the modal is closed, focus should be set back to the element that opened it.

### React

You can use modal dialogs in React by installing our react-component library and importing `Modal` component.

[See the documentation for our React `Modal` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/modal--default-story#modal)
