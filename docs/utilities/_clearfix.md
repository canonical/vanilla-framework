---
collection: utilities
title: Clearfix
---

A clearfix is a way for an element to automatically clear its child elements, so that you don't need to add additional markup. It's generally used in float layouts where elements are floated to be stacked horizontally.

The clearfix is a way to combat the zero-height container problem for floated elements.

In the example below, the parent wrapping container does not collapse even though it's only two children are floated.

<div class="u-clearfix theme__outline">
    <div class="u-float--left theme__outline--inner">Content floated left</div>
    <div class="u-float--right theme__outline--inner">Content floated left</div>
</div>

```html
<div class="u-clearfix">
    <div class="u-float--left">Content floated left</div>
    <div class="u-float--right">Content floated right</div>
</div>
```
