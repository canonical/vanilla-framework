---
layout: default
---

## Navigation

<hr>

Vanilla includes a simple navigation bar that you can add to the top of your
sites.

The navigation items are collapsed behind a "Menu" link in small screens and
displayed horizontally on larger screens.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>By default, the width of the navigation is constrained to <code>$grid-max-width</code>. To make the nav full width, replace <code>.p-navigation__row</code> with <code>.p-navigation__row--full-width</code>.
  </p>
</div>

The background color of a navigation pattern can be set via the
`$color-navigation-background` variable.

You can change the breakpoint at which the menu changes to a small screen menu
by adjusting the `$breakpoint-navigation-threshold` in `_settings_breakpoints.scss`.

<a href="/examples/patterns/navigation/default/"
    class="js-example">
View example of the navigation pattern
</a>

### Sub-navigation <span class="p-label--new" style="margin-left: 0.5rem;">New</span>

Sub-navigation drop-down menus can be added to the navigation by including one
or more `p-subnav` components.

To open the subnav-menu you need to set the `is-active` class on `p-subnav` element, but also set `aria-hidden` to `false` on `p-subnav__items`.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span> This component's functionality requires JavaScript. The <a href="https://docs.vanillaframework.io/examples/patterns/navigation/subnav/">sub-navigation example</a> provides an example implementation.
  </p>
</div>

<div class="p-notification--caution">
  <p class="p-notification__response">
    <span class="p-notification__status">Warning:</span>This pattern requires JS to be functional.
  </p>
</div>

<a href="/examples/patterns/navigation/subnav"
    class="js-example">
View example of the sub-navigation pattern
</a>

### Design

For more information [view the navigation and sub-navigation design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Navigation), which includes the specification in markdown format and a PNG image.
