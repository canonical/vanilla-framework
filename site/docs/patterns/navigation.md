---
wrapper_template: '_layouts/default.html'
context:
  title: Navigation | Components
---

## Navigation

<hr>

<span class="p-label--updated">Updated</span>

Vanilla includes a simple navigation bar that you can add to the top of your
sites.

The navigation items are collapsed behind a "Menu" link in small screens and
displayed horizontally on larger screens.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>By default, the width of the navigation is constrained to <code>$grid-max-width</code>. To make the navigation full width, replace <code>.p-navigation__row</code> with <code>.p-navigation__row--full-width</code>.
  </p>
</div>

The navigation pattern is one of the first patterns to implement the new theming architecture in Vanilla. The default is light. But, to switch to a dark navigation, you can either:

- Override the value of the `$theme-default-nav` in `_settings_themes.scss` to `dark`
- Add a state class to the `p-navigation` class: `is-dark` when the default navigation is light, or `is-light` when the default has been changed to dark

You can also manually override the background color of the navigation using the variable `$color-navigation-background`. If the lightness of the background is above 70%, the text colour will switch to dark to improve readability.

You can change the breakpoint at which the menu changes to a small screen menu
by adjusting the `$breakpoint-navigation-threshold` in `_settings_breakpoints.scss`.

<a href="/examples/patterns/navigation/default/" class="js-example">
View example of the navigation pattern
</a>

<span class="p-label--deprecated">Deprecated</span>

In Vanilla 2.8 we deprecated the use of `p-navigation__links`, `p-navigation__link` and classless `<a>` in the navigation. Support for these classes will be removed in future version 3.0.

You should use `p-navigation__items`, `p-navigation__item` and `<a class="p-navigation__link">` instead.

To update to new class names:

- rename all occurrences of `p-navigation__links` to `p-navigation__items`
- rename all occurrences of `p-navigation__link` to `p-navigation__item`
- add `p-navigation__link` class to all `<a>` elements that are direct child of `p-navigation__item`

### Sub-navigation

Sub-navigation drop-down menus can be added to the navigation by including one
or more `p-subnav` components.

To open the subnav-menu you need to set the `is-active` class on `p-subnav` element, but also set `aria-hidden` to `false` on `p-subnav__items`.

By default the sub-navigation menus are left-aligned with their parent, if you'd prefer the menu to be positioned from the right, use the `p-subnav__items--right` modifier. This can be seen in the "My account" menu in the example.

<a href="/examples/patterns/navigation/subnav" class="js-example">
View example of the sub-navigation pattern
</a>

### Import

To import just navigation or sub-navigation component into your project, copy snippets below and include it in your main Sass file.

```scss
@import 'patterns_navigation';
@include vf-p-navigation;

// sub-navigation is optional you can include it alongside navigation component
@import 'patterns_subnav';
@include vf-p-subnav;
```

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the navigation and sub-navigation design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Navigation), which includes the specification in markdown format and a PNG image.
