---
collection: patterns
wrapper_template: '_layouts/docs.html'
context:
  title: Contextual menu | Components
---

## Contextual menu

<hr>

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

### Indicator

If you require a drop-down button with a state indicator then the `p-contextual-menu__toggle` class can be used alongside the `p-icon` and `p-button` components.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Information:</span>This example makes use of additional components
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/contextual-menu/with-indicator" class="js-example">
View example of the contextual menu pattern
</a></div>

### Functionality

Please ensure the `aria-control` attribute matches an ID of an element. If `aria-expanded` is true, then the contextual menu will be open by default. When clicking on the `p-contextual-menu__toggle`, you must toggle the `aria-expanded` attribute on the toggle and the `aria-hidden` attribute on the drop-down.

### Accessibility

When using the `p-contextual-menu__toggle` class on a `button` element, please ensure that the button label contains a trailing ellipsis `…`, e.g. "Take action&hellip;". This is a convention used to indicate that the button launches a dialog.

In cases where a contextual menu is shown on click, focus should be set within the menu element, using JavaScript.

### Theming

The contextual menu uses Vanilla's light theme by default. There are two ways to switch between the light and the dark themes:

- Change the default: go to `_settings_themes.scss` and set `$theme-default-p-contextual-menu` to `dark`
- Override the default by adding a state to `p-contextual-menu`: `is-dark` when the default navigation is light, or `is-light` when the default has been changed to dark:

<div class="embedded-example"><a href="/docs/examples/patterns/contextual-menu/dark" class="js-example">
View example of the contextual menu with an is-dark class
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_contextual-menu';
@include vf-p-contextual-menu;

// when using the menu with dropdown button you need to include buttons and icon as well
@import 'patterns_buttons';
@include vf-p-buttons;

@import 'patterns_icons';
@include vf-p-icons-common;
@include vf-p-icon-chevron;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use contextual menu in React by installing our react-component library and importing `ContextualMenu` component.

[See the documentation for our React `ContextualMenu` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/contextualmenu--default-story#contextual-menu)

### Related

For more interactive elements that hide/show content[view the tooltips component](/docs/patterns/tooltips).
