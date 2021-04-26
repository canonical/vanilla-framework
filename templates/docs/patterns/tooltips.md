---
wrapper_template: '_layouts/docs.html'
context:
  title: Tooltips | Components
---

## Tooltips

<hr>

Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element on the screen.

They can be used to provide information about concepts/terms/actions that are not self-explanatory or well known.

<div class="p-notification--caution">
  <p class="p-notification__response">
    <span class="p-notification__status">Avoid:</span>Using tooltips to provide instructions or guidance. They shouldn't be used to show rich information including images and formatted text and avoid placing over plain text or other places where they are not discoverable.
  </p>
</div>

<div class="p-notification--caution">
  <p class="p-notification__response">
    <span class="p-notification__status">Avoid:</span>Tooltips shouldn't be used on disabled elements, such as buttons. It should be clear to the user why the button is disabled, without the tooltip needing to be revealed first.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/tooltips/default" class="js-example">
View example of the tooltips pattern
</a></div>

### Detached

In some cases you may need the tooltip element to exist outside of the element it is a tooltip for, in which case you can use the `is-detached` class with the `u-hide` utility, and JavaScript to set the desired position of the tooltip.

<div class="embedded-example"><a href="/docs/examples/patterns/tooltips/detached"  data-height="120" class="js-example">
View example of the detached tooltips pattern
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_tooltips';
@include vf-p-tooltips;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use tooltips in React by installing our react-component library and importing `Tooltip` component.

[See the documentation for our React `Tooltip` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/tooltip--default-story)

### Related

For an alternative way of displaying discoverable information [view our contextual menu component](/docs/patterns/contextual-menu).
