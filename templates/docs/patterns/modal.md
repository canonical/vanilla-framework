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

JavaScript should be used with the modal pattern to trap focus within an open modal, preventing elements behind the modal from unintentionally receiving focus via keyboard input. The examples on this page include JavaScript that can help to achieve this.

See [WCAG Success Criterion 2.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html) for further information.

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework/scss/vanilla';
@include vf-base;

@include vf-p-modal;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use modal dialogs in React by installing our react-component library and importing `Modal` component.

[See the documentation for our React `Modal` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/modal--default-story#modal)
