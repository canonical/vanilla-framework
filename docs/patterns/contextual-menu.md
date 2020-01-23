---
collection: patterns
wrapper_template: '_layouts/default.html'
---

## Contextual menu

<hr>

A contextual menu can be applied to any button, link or navigation item that requires a secondary menu. To interact with the menu it will require some javascript to hide/show each pattern. This achieved by finding the toggle element `p-contextual-menu__toggle` and what it controls `aria-controls`.

The target element will be hidden or shown with `aria-hidden="true"` or `false`. The control element will change to `aria-expanded` so screen readers will know it's active.

Using direction modifiers will change the placement of the drop-down menu. By default alignment is to the right of the parent pattern.

<div class="row">
  <div class="col-4">
  <pre><code>.p-contextual-menu</code></pre>
  </div>
  <div class="col-4">
  <pre><code>.p-contextual-menu--left</code></pre>
  </div>
  <div class="col-4">
  <pre><code>.p-contextual-menu--center</code></pre>
  </div>
</div>

<a href="/examples/patterns/contextual-menu/default" class="js-example">
View example of the contextual menu pattern
</a>

### Indicator

<span class="p-label--new">New</span>

If you require a drop-down button with a state indicator then the `p-contextual-menu__toggle` class can be used alongside the `p-icon` and `p-button` components.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Information:</span>This example makes use of additional components
  </p>
</div>

<a href="/examples/patterns/contextual-menu/with-indicator" class="js-example">
View example of the contextual menu pattern
</a>

### Functionality

Please ensure the `aria-control` attribute matches an ID of an element. If `aria-expanded` is true, then the contextual menu will be open by default. When clicking on the `p-contextual-menu__toggle`, you must toggle the `aria-expanded` attribute on the toggle and the `aria-hidden` attribute on the drop-down.

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_contextual-menu';
```

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the contextual menu design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Contextual%20menu), which includes the specification in markdown format and a PNG image.

### Related

For more interactive elements that hide/show content[view the tooltips component](https://docs.vanillaframework.io/patterns/tooltips).
