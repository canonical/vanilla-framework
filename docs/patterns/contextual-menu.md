---
collection: patterns
layout: default
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

<div class="p-notification--caution">
  <p class="p-notification__response">
    <span class="p-notification__status">Warning:</span>This pattern requires JS to be functional.
  </p>
</div>

<a href="/examples/patterns/contextual-menu/contextual-menu"
  class="js-example">
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

<a href="/examples/patterns/contextual-menu/contextual-menu-indicator"
  class="js-example">
View example of the contextual menu pattern
</a>

### Functionality

Please ensure the `aria-control` attribute matches an ID of an element. If `aria-expanded` is true, then the contextual menu will be open by default. When clicking on the `p-contextual-menu__toggle`, you must toggle the `aria-expanded` attribute on the toggle and the `aria-hidden` attribute on the drop-down.

### Design

For more information [view the contextual menu design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Contextual%20menu), which includes the specification in markdown format and a PNG image.

### Related

For more interactive elements that hide/show content[view the tooltips component](https://docs.vanillaframework.io/patterns/tooltips).
