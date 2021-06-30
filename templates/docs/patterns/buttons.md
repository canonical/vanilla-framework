---
wrapper_template: '_layouts/docs.html'
context:
  title: Buttons | Components
---

## Buttons

<hr>

Buttons are clickable elements used to perform an action, you can apply `button` classes on buttons and link elements.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>Do not use multiple button classes on one HTML element.
  </p>
</div>

### Default

A default button can be used to indicate a positive action that isn't necessarily the main call-to-action.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/default/" class="js-example">
View example of the default button pattern
</a></div>

### Neutral

<span class="p-label--deprecated">Deprecated</span>

The neutral button style provided by `p-button--neutral` is exactly the same as default `p-button` styling, so neutral variant is deprecated and will be removed in future version 3.0 of Vanilla. Please use `p-button` instead.

### Base

A base button can be used to discretely indicate a secondary action. It is often used alongside a default button.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/base/" class="js-example">
View example of the base button pattern
</a></div>

### Positive

A positive button can be used to indicate a positive action that is the main call-to-action.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/positive/" class="js-example">
View example of the positive button pattern
</a></div>

### Negative

A negative button can be used to indicate a negative action that is destructive or permanent.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/negative/" class="js-example">
View example of the negative button pattern
</a></div>

### Brand

You can use the brand button with the main color of your brand.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/brand/" class="js-example">
View example of the brand button pattern
</a></div>

### Link

<span class="p-label--new">New</span>

In some contexts you may need a button to look visually identical to a link.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/link/" class="js-example">
View example of the link button pattern
</a></div>

### Inline

Should you wish to place a button after a line of inline text, as a CTA for example, you can do so by adding the state class `is-inline` to the button element.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/inline/" class="js-example">
View example of the inline button pattern
</a></div>

### Dense

In contexts where vertical space is limited, you might want a button with reduced vertical padding. Add class `.is-dense` to achieve that:

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/dense/" class="js-example">
View example of the dense button pattern
</a></div>

### Small

If you are working with small text and need a suitably sized button, add class `.is-small`. It can be combined with `.is-dense` for an even tighter look:

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/small/" class="js-example">
View example of the small button pattern
</a></div>

### Icon

Should you wish to place an icon in a button. You will not want to button to become full width on small screens. Therefore, you can add the state class `has-icon` to the button. If the contrast between the icon chosen and the button background is not sufficient then the `is-dark` or `is-light` classes can be added to the icon where appropriate.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/icon/" class="js-example">
View example of the icon button pattern
</a></div>

### Processing

In cases where a button needs to indicate that an action is occurring (e.g. saving data, processing a payment) while also preventing user interaction, the state class `is-processing` can be added to a disabled button to maintain full opacity.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/processing/" class="js-example">
View example of the processing button pattern
</a></div>

### Active

<span class="p-label--deprecated">Deprecated</span>

The `is-active` utility class was renamed to the more appropriate `is-processing`, as mentioned above.

### Theming

The buttons use Vanilla's light theme by default. There are two ways to switch between the light and the dark themes:

- Override the default by adding a state to `p-putton`: `is-dark` when the default navigation is light, or `is-light` when the default has been changed to dark:
- Change the default: go to `_settings_themes.scss` and set `$theme-default-p-button` to `dark`

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/dark" class="js-example">
View example of the buttons with an is-dark class
</a></div>

### Accessibility

In some contexts, it may be necessary to indicate to the user that a button is in a pressed state, such as when a button opens a contextual menu. This can be done by adding `aria-pressed="true"` to the button with JavaScript when the button is clicked, and removed when necessary.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/pressed" class="js-example" data-height="270">
View example of the contextual menu pattern
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_buttons';
@include vf-p-buttons;

// when using icons within buttons you need to include icons as well
@import 'patterns_icons';
@include vf-p-icons;
```

If you only need a small subset of the icons consider [including them individually](/docs/patterns/icons/#import) to reduce the size of your CSS file.

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use buttons in React by installing our react-component library and importing `Button` or `ActionButton` component.

[See the documentation for our React `Button` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/button--base#button)

[See the documentation for our React `ActionButton` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/actionbutton--default-story#actionbutton)
