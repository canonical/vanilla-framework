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

The navigation pattern is one of the first patterns to implement the new theming architecture in Vanilla. The default is light. But, to switch to a dark navigation, you can either:

- Change the value of the `nav` key in the `$theme-default--dark` map (located in `_settings_themes.scss`) to `true`
- Add a state class to the `p-navigation` class: `is-dark` when the default nav is light, or `is-light` when the default has been changed to dark

You can also manually override the background color of the nav using the variable `$color-navigation-background`. If the lightness of the background is above 70%, the text colour will switch to dark to improve readibility.

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

By default the sub-navigation menus are left-aligned with their parent, if you'd prefer the menu to be positioned from the right, use the `p-subnav__items--right` modifier. This can be seen in the "My account" menu in the example.

<div class="p-notification--caution">
  <p class="p-notification__response">
    <span class="p-notification__status">Warning:</span> This component's functionality requires JavaScript. The <a href="https://docs.vanillaframework.io/examples/patterns/navigation/subnav/">sub-navigation example</a> provides an example implementation.
  </p>
</div>

<a href="/examples/patterns/navigation/subnav"
    class="js-example">
View example of the sub-navigation pattern
</a>

### Design

For more information [view the navigation and sub-navigation design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Navigation), which includes the specification in markdown format and a PNG image.
