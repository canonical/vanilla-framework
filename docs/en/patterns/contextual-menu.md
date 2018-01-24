---
collection: patterns
title: Contextual menu
---

## Contextual menu

A contextual menu can be applied to any button, link or navigation item that requires a secondary menu. To interact with the menu it will require some javascript to hide/show each pattern. This achieved by finding the toggle element `p-contextual-menu__toggle` and what it controls `aria-controls`. The target element will be hidden or shown with `aria-hidden="true"` or `false`. The control element will also change `aria-expanded` so and screen readers will know it's active.

Using direction modifiers will change the placement of the drop-down menu. By default alignment is to the right of the parent pattern.

```
.p-contextual-menu
.p-contextual-menu--left
.p-contextual-menu--center
```

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/contextual-menu/"
  class="js-example">
  View example of the contextual menu pattern
</a>

<hr />

### Design

* [Contextual menu design](https://github.com/ubuntudesign/vanilla-design/tree/master/Contextual%20menu)

### Related

* [Tooltips pattern](/en/patterns/tooltips)
