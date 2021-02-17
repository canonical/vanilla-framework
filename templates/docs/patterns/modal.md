---
wrapper_template: '_layouts/docs.html'
context:
  title: Modal | Components
---

## Modal

<hr>

The modal component can be used to overlay an area of the screen which can contain a prompt, dialog or interaction.

On `p-modal` set display to `display:flex` or `display:none` to toggle the visibility of the modal.

<div class="embedded-example"><a href="/docs/examples/patterns/modal/default/" class="js-example">
View example of the modal pattern
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

### Design

For more information view the [modal design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Modal) which includes the specification in markdown format and a PNG image.
