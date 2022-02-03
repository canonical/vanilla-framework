---
wrapper_template: '_layouts/docs.html'
context:
  title: Buttons | Components
---

# Buttons

<hr>

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

## Brand

You can use the brand button with the main color of your brand.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/brand/" class="js-example">
View example of the brand button pattern
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

When replacing a label in a button with a loading icon make sure to keep the width of the button the same to avoid content moving around. The example below has a snippet of JavaScript to demo how to achieve that or you can use the [`ActionButton` React component](https://canonical-web-and-design.github.io/react-components/?path=/docs/actionbutton--default-story) that has this functionality built-in.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/processing/" class="js-example">
View example of the processing button pattern
</a></div>

## Theming

The buttons use Vanilla's light theme by default. There are two ways to switch between the light and the dark themes:

- Override the default by adding a state to `p-putton`: `is-dark` when the default navigation is light, or `is-light` when the default has been changed to dark:
- Change the default: go to `_settings_themes.scss` and set `$theme-default-p-button` to `dark`

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/dark" class="js-example">
View example of the buttons with an is-dark class
</a></div>

## Accessibility

### How it works

The button component is used to trigger an action or event - this could be opening or closing a modal, navigating to the next page, or cancelling an action. Rather than adding `role=button` to links, it’s always advisable to use the native HTML button element, as native HTML buttons provide keyboard and focus requirements by default and are best supported by assistive technologies.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- A button, once focussed should be activated by using the `Space` or `Enter` keys.
- The button should have an accurate description. This can be as text in the button, or by using `aria-label` or `aria-labelledby`.
- If there is a description of the button, the button should have an `aria-describedby` which matches the ID of the description.
- After the button is activated ensure the focus is set correctly based on the type of action the button performs. See [W3C WAI-ARIA Authoring Practices Button Design Pattern](https://www.w3.org/TR/wai-aria-practices/#button) for a list of examples.
- In some contexts, it may be necessary to indicate to the user that a button is in a pressed state, such as when a button opens a contextual menu. This can be done by adding `aria-pressed="true"` to the button with JavaScript when the button is clicked, and removed when necessary.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/pressed" class="js-example" data-height="270">
View example of the contextual menu pattern
</a></div>

Note: It’s important to use button and link elements accurately. Controls with button-like behaviour (e.g. opening models, submitting forms) should be designed like buttons using the button element, and regular text links (e.g. going to an external page) should be designed like text links using the link element.

### Resources

- [W3C WAI-ARIA Authoring Practices Button Design Pattern](https://www.w3.org/TR/wai-aria-practices/#button)
- [WAI-ARIA Examples: Button](https://www.w3.org/TR/wai-aria-practices-1.1/examples/button/button.html)

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

[See the documentation for our React `Button` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/button--base#button)

[See the documentation for our React `ActionButton` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/actionbutton--default-story#actionbutton)
