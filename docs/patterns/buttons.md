---
wrapper_template: '_layouts/default.html'
context:
  title: Buttons
---

## Buttons

<hr>

Buttons are clickable elements used to perform an action, you can apply `button` classes on buttons and link elements.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>Do not use multiple button classes on one HTML element.
  </p>
</div>

### Base

A base button is usually used alongside a neutral button.

<a href="/examples/patterns/buttons/base/" class="js-example">
View example of the base button pattern
</a>

### Neutral

A neutral button can be used to indicate a positive action that isn't necessarily the main call-to-action.

<a href="/examples/patterns/buttons/neutral/" class="js-example">
View example of the neutral button pattern
</a>

### Positive

A positive button can be used to indicate a positive action that is the main call-to-action.

<a href="/examples/patterns/buttons/positive/" class="js-example">
View example of the positive button pattern
</a>

### Negative

A negative button can be used to indicate a negative action that is destructive or permanent.

<a href="/examples/patterns/buttons/negative/" class="js-example">
View example of the negative button pattern
</a>

### Brand

You can use the brand button with the main color of your brand.

<a href="/examples/patterns/buttons/brand/" class="js-example">
View example of the brand button pattern
</a>

### Inline

Should you wish to place a button after a line of inline text, as a CTA for example, you can do so by adding the state class `is-inline` to the button element.

<a href="/examples/patterns/buttons/inline/" class="js-example">
View example of the inline button pattern
</a>

### Dense

In contexts where vertical space is limited, you might want a button with reduced vertical padding. Add class `.is-dense` to achieve that:

<a href="/examples/patterns/buttons/dense/" class="js-example">
View example of the dense button pattern
</a>

### Icon

Should you wish to place an icon in a button. You will not want to button to become full width on small screens. Therefore, you can add the state class `has-icon` to the button. If the contrast between the icon chosen and the button background is not sufficient then the `is-dark` or `is-light` classes can be added to the icon where appropriate.

<a href="/examples/patterns/buttons/icon/" class="js-example">
View example of the icon button pattern
</a>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_buttons';
@include vf-p-buttons;

// when using icons within buttons you need to include icons as well
@import 'patterns_icons';
@include vf-p-icons;
```

If you only need a small subset of the icons consider [including them individually](/patterns/icons/#import) to reduce the size of your CSS file.

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information view the [buttons design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Buttons) which includes the specification in markdown format and a PNG image.
