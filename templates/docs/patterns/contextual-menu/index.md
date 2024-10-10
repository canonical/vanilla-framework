---
collection: patterns
wrapper_template: '_layouts/docs.html'
context:
  title: Contextual menu | Components
---

A contextual menu can be applied to any button, link or navigation item that requires a secondary menu. To interact with the menu it will require some javascript to hide/show each pattern. This is achieved by finding the toggle element `p-contextual-menu__toggle` and what it controls `aria-controls`.

The target element will be hidden or shown with `aria-hidden="true"` or `false`. The control element will change to `aria-expanded` so screen readers will know it's active.

Using direction modifiers will change the placement of the drop-down menu. By default alignment is to the right of the parent pattern.

<div class="row">
  <div class="col-3">
  <pre><code>.p-contextual-menu</code></pre>
  </div>
  <div class="col-3">
  <pre><code>.p-contextual-menu--left</code></pre>
  </div>
  <div class="col-3">
  <pre><code>.p-contextual-menu--center</code></pre>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/contextual-menu/default" class="js-example">
View example of the contextual menu pattern
</a></div>

## Indicator

If you require a drop-down button with a state indicator then the `p-contextual-menu__toggle` class can be used alongside the `p-icon` and `p-button` components.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Information:</span>
    <span class="p-notification__message">This example makes use of additional components</span>
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/contextual-menu/with-indicator" class="js-example">
View example of the contextual menu pattern
</a></div>

## Functionality

Please ensure the `aria-control` attribute matches an ID of an element. If `aria-expanded` is true, then the contextual menu will be open by default. When clicking on the `p-contextual-menu__toggle`, you must toggle the `aria-expanded` attribute on the toggle and the `aria-hidden` attribute on the drop-down.

## Theming

The contextual menu uses the default inherited theme of the page or parent element. To override the default add `is-dark` or `is-light` class to the contextual menu.

[View example of the contextual menu with an is-dark class](/docs/examples/patterns/contextual-menu/default?theme=dark)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;
@include vf-p-contextual-menu;

// when using the menu with dropdown button you need to include buttons and icon as well
@include vf-p-buttons;
@include vf-p-icons-common;
@include vf-p-icon-chevron;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use contextual menu in React by installing our react-component library and importing `ContextualMenu` component.

[See the documentation for our React `ContextualMenu` component](https://canonical.github.io/react-components/?path=/docs/components-contextualmenu--docs)

## Related

For more interactive elements that hide/show content[view the tooltips component](/docs/patterns/tooltips).
