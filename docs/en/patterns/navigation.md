---
title: Navigation
table_of_contents: true
---

## Navigation

<hr>

Vanilla includes a simple navigation bar that you can add to the top of your
sites.

The navigation items are collapsed behind a "Menu" link in small screens and
displayed horizontally on larger screens.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>You can constrain the width of the navigation to match the `$grid-max-width` by placing everything inside the header element within a `.row` wrapper.
  </p>
</div>

The background color of a navigation pattern can be set via the
`$color-navigation-background` variable.

You can change the breakpoint at which the menu changes to a small screen menu
by adjusting the `$breakpoint-navigation-threshold` in `_settings_breakpoints.scss`.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/navigation/default/"
    class="js-example">
View example of the navigation pattern
</a>

### Sub-navigation

Sub-navigation drop-down menus can be added to the navigation by including one
or more `p-subnav` components.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span> This component's functionality requires JavaScript. The <a href="https://github.com/vanilla-framework/vanilla-framework/blob/develop/examples/patterns/navigation/subnav.html">sub-navigation example</a> provides an example implementation.
  </p>
</div>

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/navigation/subnav"
    class="js-example">
View example of the sub-navigation pattern
</a>

### Design

For more information [view the navigation and sub-navigation design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Navigation), which includes the specification in markdown format and a PNG image.
