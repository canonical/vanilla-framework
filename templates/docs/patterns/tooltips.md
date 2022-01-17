---
wrapper_template: '_layouts/docs.html'
context:
  title: Tooltips | Components
---

# Tooltips

<hr>

Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element on the screen.

They can be used to provide information about concepts/terms/actions that are not self-explanatory or well known.

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">Avoid:</span>
    <span class="p-notification__message">Using tooltips to provide instructions or guidance. They shouldn't be used to show rich information including images and formatted text and avoid placing over plain text or other places where they are not discoverable.</span>
  </p>
</div>

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">Avoid:</span>
    <span class="p-notification__message">Tooltips shouldn't be used on disabled elements, such as buttons. It should be clear to the user why the button is disabled, without the tooltip needing to be revealed first.</span>
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/tooltips/default" class="js-example">
View example of the tooltips pattern
</a></div>

## Detached

In some cases you may need the tooltip element to exist outside of the element it is a tooltip for, in which case you can use the `is-detached` class with the `u-hide` utility, and JavaScript to set the desired position of the tooltip.

<div class="embedded-example"><a href="/docs/examples/patterns/tooltips/detached"  data-height="120" class="js-example">
View example of the detached tooltips pattern
</a></div>

## Accessibility

### How it works

A tooltip is text that appears in a small overlay on demand, usually when hovering over the thing it describes. It is hidden by default, and becomes available on hover or focus of the control it describes. It should provide information that isn’t self explanatory or well known.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Be sure to include the `aria-describedby` attribute with the `id` of the description.
- They should be discoverable, avoid placing them in over a word in a sentence for example.
- Avoid using tooltips to provide instructions or guidance, or any rich information.
- They shouldn’t be used on disabled elements. It should be clear to the user why the button is disabled without the tooltip.

### Resources

- Inclusive Components by Heydon Pickering
- Guidelines
  - [WCAG21 - Content on hover or focus](https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus)
  - [WCAG21 Techniques - aria](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1)
  - [WAI-ARIA practices - Tooltip](https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-tooltips;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use tooltips in React by installing our react-component library and importing `Tooltip` component.

[See the documentation for our React `Tooltip` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/tooltip--default-story)

## Related

For an alternative way of displaying discoverable information [view our contextual menu component](/docs/patterns/contextual-menu).
