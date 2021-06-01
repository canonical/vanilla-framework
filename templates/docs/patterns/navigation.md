---
wrapper_template: '_layouts/docs.html'
context:
  title: Navigation | Components
---

## Navigation

<hr>

### Global navigation

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

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/default/" class="js-example">
View example of the navigation pattern
</a></div>

<span class="p-label--deprecated">Deprecated</span>

In Vanilla 2.8 we deprecated the use of `p-navigation__links`, `p-navigation__link` and classless `<a>` in the navigation. Support for these classes will be removed in future version 3.0.

You should use `p-navigation__items`, `p-navigation__item` and `<a class="p-navigation__link">` instead.

To update to new class names:

- rename all occurrences of `p-navigation__links` to `p-navigation__items`
- rename all occurrences of `p-navigation__link` to `p-navigation__item`
- add `p-navigation__link` class to all `<a>` elements that are direct child of `p-navigation__item`

### Dropdown

Drop-down menus can be added to the navigation by including one or more `p-navigation__item--dropdown-toggle` components.

To open the dropdown you need to set the `is-active` class on `p-navigation__item--dropdown-toggle` element, but also set `aria-hidden` to `false` on `p-navigation__dropdown`.

By default, dropdowns are left-aligned with their parent; if you'd prefer the menu to be positioned from the right, use the `p-navigation__dropdown--right` modifier. This can be seen in the "My account" menu in the example.

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/dropdown" class="js-example">
View example of the dropdown pattern
</a></div>

### Sub-navigation

<span class="p-label--deprecated">Deprecated</span>

`.p-subnav` is now deprecated, it and its associated child elements can be updated simply by substituting the following class names:

| Deprecated classes        | Replaced by                            |
| ------------------------- | -------------------------------------- |
| `.p-subnav`               | `.p-navigation__item--dropdown-toggle` |
| `.p-subnav__items`        | `.p-navigation__dropdown`              |
| `.p-subnav__items--right` | `.p-navigation__dropdown--right`       |
| `.p-subnav__item`         | `.p-navigation__dropdown-item`         |

### Side navigation

The side navigation pattern can be used to provide more detailed navigation alongside your content.

It allows grouping the links into navigation sections and nesting them up to three levels.

Current page in the side navigation should be highlighted by adding `aria-current="page"` attribute to the corresponding `p-side-navigation__link` element. Alternatively, if `aria-current` attribute cannot be set, the `is-active` class can be used instead.

Use `p-side-navigation__status` inside `p-side-navigation__link` elements to add status labels or icons on right side of navigation items.

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/docs" class="js-example">
View example of the side navigation pattern
</a></div>

#### Icons

To add icons on the left side of the items in side navigation use the `.p-side-navigation--items` class.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>Icons should only be used on the items in the first level of side navigation.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/icons" class="js-example">
View example of the side navigation pattern with icons
</a></div>

#### Sticky

On pages with content significantly longer than the side navigation contents you can make the navigation sticky to keep it visible when scrolling by adding `.is-sticky` class to the root element of `.p-side-navigation`.

<div class="p-notification--caution">
  <p class="p-notification__response"><span class="p-notification__status">Breaking change:</span>Side navigation used to be sticky by default, but since Vanilla 2.21.0 <code>.is-sticky</code> class is needed to add this functionality.</p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/sticky" class="js-example">
View example of the sticky side navigation pattern
</a></div>

#### Raw HTML

When the HTML markup of the side navigation links is generated by an external service and Vanilla class names cannot be added to the elements, use the `p-side-navigation--raw-html` modifier.

In this variant, the side navigation pattern will style headings (`h2`, `h3`, etc.) and lists (`ul`, `li`) with links or text elements (`a`, `strong`, `span`) consistently with default side navigation component:

- headings (`h2`, `h3`, etc.) get the styling of `p-side-navigation__item--title`
- lists: `ul` tags are styled as `p-side-navigation__list`, and `li` tags as `p-side-navigation__item`
  - nesting lists (`ul > li > ul > li ...`) is possible up to 3 levels
- text elements (`span`, `strong`) inside `li` are styled as `p-side-navigation__text`
- links (`a`) inside `li` are styled as `p-side-navigation__link`
  - `is-active` class needs to be added to a link element to mark the active page

Because of the limitations of raw HTML markup without class names, it's not possible to use icons or status labels in the raw HTML variant of side navigation.

<div class="p-strip is-shallow">
  <div class="row">
     <div class="col-4">
       <div class="p-notification--positive">
        <p class="p-notification__response"><span class="p-notification__status">Do:</span>Use the  raw HTML variant when the backend serving the navigation content won't allow custom class names on HTML elements.</p>
       </div>
     </div>
    <div class="col-4">
      <div class="p-notification--negative">
        <p class="p-notification__response"><span class="p-notification__status">Don't:</span>Use raw HTML variant when the markup can be fully controlled and class names can be properly added to all elements.</p>
      </div>
    </div>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/raw-html" class="js-example">
View example of the side navigation pattern for raw HTML
</a></div>

#### JavaScript functionality

On small screens side navigation is rendered off-screen as a drawer. To open the side navigation drawer, add `is-expanded` class to
main `.p-side-navigation` element. To close the drawer (with the animation) remove `is-expanded` class and replace it with `is-collapsed` class.

To make sure side navigation toggle works without JavaScript the toggle button for opening the side navigation drawer should be an anchor with `href` attribute pointing to the `id` attribute of the side navigation element (for example: `<a href="#drawer" class="p-side-navigation__toggle">`).

#### Application layout

For applications built with [the application layout](/docs/layouts/application) the size and positioning of the navigation panel is handled by the layout itself, so the side navigation component doesn't need it's own drawer, overlay or toggle buttons.

To use side navigation in the application place `.p-side-navigation--icons` in the `l-navigation` element. You don't use `p-side-navigation__toggle`, `p-side-navigation__overlay` or `p-side-navigation__drawer` elements, just put the lists of the links `p-side-navigation__list` as direct children of `.p-side-navigation` element.

Additionally, in order for application layout to fully control side navigation elements when expanding and collapsing you need to wrap the text of the side navigation items in `<span class="p-side-navigation__label">`. This will allow to fade them out when navigation collapses.

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/application" class="js-example">
View example of the side navigation pattern for raw HTML
</a></div>

For more information, read the dedicated [application layout documentation](/docs/layouts/application).

#### Theming

The side navigation is available in a light and a dark theme. The colours used by both themes in the [colour settings file](https://github.com/canonical-web-and-design/vanilla-framework/blob/master/scss/_settings_colors.scss).
Overriding the colours of individual elements of the side navigation is discouraged, as this may lead to accessibility issues, or inconsistencies with other components that use the same theme.

By default, the side navigation uses the light theme. To change the global default, set `$theme-default-p-side-navigation` to `dark`.

To change the appearance of an individual instance of the side navigation, you can use the `is-dark` class.

For more details about themes in Vanilla refer to the [Color theming](/docs/settings/color-settings#color-theming) section of the documentation.

[See example of side navigation with dark theme](/docs/examples/patterns/side-navigation/dark).

### Import

To import just navigation or sub-navigation component into your project, copy snippets below and include it in your main Sass file.

```scss
@import 'patterns_navigation';
@include vf-p-navigation;

// sub-navigation is optional you can include it alongside navigation component
@import 'patterns_subnav';
@include vf-p-subnav;
```

To import side navigation, copy snippet below:

```scss
@import 'patterns_side-navigation';
@include vf-p-side-navigation;

// optionally add icons and/or labels if you use them in side navigation__nav
@import 'patterns_label';
@include vf-p-label;

@import 'patterns_icons';
@include vf-p-icons;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the navigation and sub-navigation design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Navigation), which includes the specification in markdown format and a PNG image.
