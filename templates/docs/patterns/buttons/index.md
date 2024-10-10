---
wrapper_template: '_layouts/docs.html'
context:
  title: Buttons | Components
---

Buttons are clickable elements used to perform an action, you can apply `button` classes on buttons and link elements.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">Do not use multiple button classes on one HTML element.</span>
  </p>
</div>

## Default

A default button can be used to indicate a positive action that isn't necessarily the main call-to-action.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/default/" class="js-example">
View example of the default button pattern
</a></div>

## Base

A base button can be used to discretely indicate a secondary action. It is often used alongside a default button.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/base/" class="js-example">
View example of the base button pattern
</a></div>

## Positive

A positive button can be used to indicate a positive action that is the main call-to-action.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/positive/" class="js-example">
View example of the positive button pattern
</a></div>

## Negative

A negative button can be used to indicate a negative action that is destructive or permanent.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/negative/" class="js-example">
View example of the negative button pattern
</a></div>

## Link

In some contexts you may need a button to look visually identical to a link.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/link/" class="js-example">
View example of the link button pattern
</a></div>

## Inline

Should you wish to place a button after a line of inline text, as a CTA for example, you can do so by adding the state class `is-inline` to the button element.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/inline/" class="js-example">
View example of the inline button pattern
</a></div>

## Dense

In contexts where vertical space is limited, you might want a button with reduced vertical padding. Add class `.is-dense` to achieve that:

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/dense/" class="js-example">
View example of the dense button pattern
</a></div>

## Small

If you are working with small text and need a suitably sized button, add class `.is-small`. It can be combined with `.is-dense` for an even tighter look:

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/small/" class="js-example">
View example of the small button pattern
</a></div>

## Icon

Should you wish to place an icon in a button. You will not want to button to become full width on small screens. Therefore, you can add the state class `has-icon` to the button. If the contrast between the icon chosen and the button background is not sufficient then the `is-dark` or `is-light` classes can be added to the icon where appropriate.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/icon/" class="js-example">
View example of the icon button pattern
</a></div>

## Processing

In cases where a button needs to indicate that an action is occurring (e.g. saving data, processing a payment) while also preventing user interaction, the state class `is-processing` can be added to a disabled button to maintain full opacity.

When replacing a label in a button with a loading icon make sure to keep the width of the button the same to avoid content moving around. The example below has a snippet of JavaScript to demo how to achieve that or you can use the [`ActionButton` React component](https://canonical.github.io/react-components/?path=/docs/components-actionbutton--docs) that has this functionality built-in.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/processing/" class="js-example">
View example of the processing button pattern
</a></div>

## Theming

The buttons use Vanilla's theme colours. You can switch the theme by adding `is-dark`, `is-light` or `is-paper` class name on any parent element or the button itself.

[View example of a dark theme button](/docs/examples/patterns/buttons/default?theme=dark)

## Brand

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">Brand-coloured buttons are deprecated since Vanilla 4.9.0 and will be removed in future version of Vanilla. Please use another type of button instead.</p>
  </div>
</div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-buttons;

// when using icons within buttons you need to include icons as well
@include vf-p-icons;
```

If you only need a small subset of the icons consider [including them individually](/docs/patterns/icons/#import) to reduce the size of your CSS file.

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use buttons in React by installing our react-component library and importing `Button` or `ActionButton` component.

[See the documentation for our React `Button` component](https://canonical.github.io/react-components/?path=/docs/components-button--docs)

[See the documentation for our React `ActionButton` component](https://canonical.github.io/react-components/?path=/docs/components-actionbutton--docs)
