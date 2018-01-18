---
title: Navigation
table_of_contents: true
---

## Navigation

Vanilla includes a simple navigation bar that you can add to the top of your
sites.

The navigation items are collapsed behind a "Menu" link in small screens and
displayed horizontally on larger screens.

Note: You can constrain the width of the navigation to match the
`$grid-max-width` by placing everything inside the header element within a
`.row` wrapper.

The background color of a navigation pattern can be set via the
`$color-navigation-background` variable.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/navigation/default/"
    class="js-example">
    View example of the navigation pattern
</a>

Tip: You can change the breakpoint at which the menu changes to a small screen
menu by adjusting the `$breakpoint-navigation-threshold` in
`_settings_breakpoints.scss`.

### Sidebar Navigation

Vanilla also allows you to use a sidebar navigation, with menu items collapsing
under section titles in an accordion. This example code will expand to fill the
space available to it so it needs to be used in conjunction with the grid to
set the layout. This pattern includes a tagline which sits next to the logo.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/navigation/sidebar/"
    class="js-example">
    View example of the sidebar navigation pattern
</a>

<hr />

### Design

* [Navigation design](https://github.com/ubuntudesign/vanilla-design/tree/master/Navigation)
* [Sidebar navigation design](https://github.com/ubuntudesign/vanilla-design/tree/master/Sidebar%20navigation)
