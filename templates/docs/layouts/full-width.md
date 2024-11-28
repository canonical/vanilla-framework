---
wrapper_template: '_layouts/docs.html'
context:
  title: Full-width site layout | Layouts
---

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">
      The full-width layout was implemented as a proof of concept, but is now deprecated in favour of the new <a href="/docs/layouts/documentation">documentation layout</a>.
    </p>
  </div>
</div>

## Structure

The `.l-full-width` serves as a wrapper for full-width layout and allows for a start (left), main (central) and end (right) areas. Usually, the `l-full-width` class name would be placed on a strip component `p-strip` or an individual element. Additionally, a separate `l-full-width__sidebar` element can be added as a container for side navigation placed on top of the start (left) area of the layout.

On screens smaller than `$breakpoint-large` the sidebar is hidden off-screen and the whole width of the page is occupied by the main content area. On larger screens, the sidebar is visible on the left side of the window.

### Main area

The main content area is placed inside the `l-main` child element of `l-full-width` wrapper. This is the main area for the content of the page, it should be built with standard grid rows and columns.

### Start and end areas

The start `l-start` and end `l-end` areas are placed on the left and right sides of the window. While the main area is centered on the screen, the start and end areas will align to the sides of the window regardless of its size.

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">
      Standard page content should not be placed inside the start or end areas, they are mostly reserved for navigation.
    </p>
  </div>
</div>

In the top navigation in full-width layout the logo is placed in `l-start` area (so is always aligned with left side of the screen, on top of the sidebar) and any right-aligned navigation items (such as login) are placed in the `l-end` area.

<div class="embedded-example"><a href="/docs/examples/layouts/full-width/structure" class="js-example">
View example of the full-width layout structure
</a></div>

[View the full screen example of the full-width layout structure](/docs/examples/layouts/full-width/structure).

### Sidebar

On pages that use side navigation a `.l-full-width__sidebar` element can be added that will position a container for the side navigation component on top of the start area of the full-width layout (on the left side of the screen).

An aside to the left, main area to the right:

<div class="embedded-example"><a href="/docs/examples/layouts/full-width/default" class="js-example">
View example of the full-width layout with a sidebar
</a></div>

[View the full screen example of the full-width layout with a sidebar](/docs/examples/layouts/full-width/default/).

## Import

To import just the fluid breakout layout component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'layouts_full-width';
@include vf-l-full-width;
```
