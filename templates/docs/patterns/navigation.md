---
wrapper_template: '_layouts/docs.html'
context:
  title: Navigation | Components
---

# Navigation

<hr>

## Global navigation

Vanilla includes a simple navigation bar that you can add to the top of your
sites.

The navigation items are collapsed behind a "Menu" link in small screens and
displayed horizontally on larger screens.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">By default, the width of the navigation is constrained to <code>$grid-max-width</code>. To make the navigation full width, replace <code>.p-navigation__row</code> with <code>.p-navigation__row--full-width</code>.</span>
  </p>
</div>

The navigation pattern is one of the first patterns to implement the new theming architecture in Vanilla. The default is light. But, to switch to a dark navigation, you can either:

- Override the value of the `$theme-default-nav` in `_settings_themes.scss` to `dark`
- Add a state class to the `p-navigation` class: `is-dark` when the default navigation is light, or `is-light` when the default has been changed to dark

You can change the breakpoint at which the menu changes to a small screen menu
by adjusting the `$breakpoint-navigation-threshold` variable from `_settings_breakpoints.scss`.

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/default/" class="js-example">
View example of the navigation pattern
</a></div>

## Dropdown

Drop-down menus can be added to the navigation by including one or more `p-navigation__item--dropdown-toggle` components.

To open the dropdown you need to set the `is-active` class on `p-navigation__item--dropdown-toggle` element, but also set `aria-hidden` to `false` on `p-navigation__dropdown`.

By default, dropdowns are left-aligned with their parent; if you'd prefer the menu to be positioned from the right, use the `p-navigation__dropdown--right` modifier. This can be seen in the "My account" menu in the example.

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/dropdown" class="js-example">
View example of the dropdown pattern
</a></div>

## Expanding search box

Expanding search in main navigation consists of couple of elements: two search toggle links (`.p-navigation__link--search-toggle`) - one inside `.p-navigation__banner` for mobile view and another in `.p-navigation__nav` as one of standard view items, the expanding search box (`.p-navigation__search`) and an overlay that covers whole screen when search is expanded (`.p-navigation__search-overlay`).

The `.p-navigation__link--search-toggle` class name is used to add a search toggle link to navigation items. The label text of this toggle element should be wrapped in `.p-navigation__search-label` element to make sure it's hidden on smaller screen sizes. Click event handler attached to the toggle element should add `.has-search-open` class on main `.p-navigation` element to expand the search box and show the overlay.

Vanilla Search box component is used for the search field, but it's wrapped into an element with `.p-navigation__search` class name. The search will be hidden by default and only expands when the navigation element has `.has-search-open` class name.

When search box is expanded the overlay element (`p-navigation__search-overlay`) is faded in to cover all the contents of the page (except the search box itself). Clicking anywhere on the overlay (or hitting Escape key) closes the search box.

On small screens the search box and menu items can be expanded individually as their own separate dropdowns.

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">Mobile search:</span>
    <span class="p-notification__message">In Vanilla 3.2 we updated the way expanding search works on small screens and now it requires some changes to the HTML structure of menu items for small screens and additional JavaScript functionality for toggling the small screen navigation dropdowns.</p></span>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/search-light" class="js-example"> View example of the search navigation </a></div>

## Side navigation

The side navigation pattern can be used to provide more detailed navigation alongside your content.

It allows grouping the links into navigation sections and nesting them up to three levels.

Current page in the side navigation should be highlighted by adding `aria-current="page"` attribute to the corresponding `p-side-navigation__link` element. Alternatively, if `aria-current` attribute cannot be set, the `is-active` class can be used instead.

Use `p-side-navigation__status` inside `p-side-navigation__link` elements to add status labels or icons on right side of navigation items.

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/docs" class="js-example">
View example of the side navigation pattern
</a></div>

### Icons

To add icons on the left side of the items in side navigation use the `.p-side-navigation--items` class.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">Icons should only be used on the items in the first level of side navigation.</span>
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/icons" class="js-example">
View example of the side navigation pattern with icons
</a></div>

### Sticky

On pages with content significantly longer than the side navigation contents you can make the navigation sticky to keep it visible when scrolling by adding `.is-sticky` class to the root element of `.p-side-navigation`.

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">Breaking change:</span>
    <span class="p-notification__message">Side navigation used to be sticky by default, but since Vanilla 2.21.0 <code>.is-sticky</code> class is needed to add this functionality.</p></span>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/sticky" class="js-example">
View example of the sticky side navigation pattern
</a></div>

### Raw HTML

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
        <p class="p-notification__content">
          <span class="p-notification__title">Do:</span>
          <span class="p-notification__message">Use the  raw HTML variant when the backend serving the navigation content won't allow custom class names on HTML elements.</span>
          </p>
       </div>
     </div>
    <div class="col-4">
      <div class="p-notification--negative">
        <p class="p-notification__content">
          <span class="p-notification__title">Don't:</span>
          <span class="p-notification__message">Use raw HTML variant when the markup can be fully controlled and class names can be properly added to all elements.</span</p>
      </div>
    </div>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/raw-html" class="js-example">
View example of the side navigation pattern for raw HTML
</a></div>

### Class reference

{% include "_class-references/side-navigation.html" %}

### JavaScript functionality

On small screens side navigation is rendered off-screen as a drawer. To open the side navigation drawer, add `is-expanded` class to
main `.p-side-navigation` element. To close the drawer (with the animation) remove `is-expanded` class and replace it with `is-collapsed` class.

To make sure side navigation toggle works without JavaScript the toggle button for opening the side navigation drawer should be an anchor with `href` attribute pointing to the `id` attribute of the side navigation element (for example: `<a href="#drawer" class="p-side-navigation__toggle">`).

### Application layout

For applications built with [the application layout](/docs/layouts/application) the size and positioning of the navigation panel is handled by the layout itself, so the side navigation component doesn't need it's own drawer, overlay or toggle buttons.

To use side navigation in the application place `.p-side-navigation--icons` in the `l-navigation` element. You don't use `p-side-navigation__toggle`, `p-side-navigation__overlay` or `p-side-navigation__drawer` elements, just put the lists of the links `p-side-navigation__list` as direct children of `.p-side-navigation` element.

Additionally, in order for application layout to fully control side navigation elements when expanding and collapsing you need to wrap the text of the side navigation items in `<span class="p-side-navigation__label">`. This will allow to fade them out when navigation collapses.

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/application" class="js-example">
View example of the side navigation pattern for raw HTML
</a></div>

For more information, read the dedicated [application layout documentation](/docs/layouts/application).

### Theming

The side navigation is available in a light and a dark theme. The colours used by both themes in the [colour settings file](https://github.com/canonical-web-and-design/vanilla-framework/blob/main/scss/_settings_colors.scss).
Overriding the colours of individual elements of the side navigation is discouraged, as this may lead to accessibility issues, or inconsistencies with other components that use the same theme.

By default, the side navigation uses the light theme. To change the global default, set `$theme-default-p-side-navigation` to `dark`.

To change the appearance of an individual instance of the side navigation, you can use the `is-dark` class.

For more details about themes in Vanilla refer to the [Color theming](/docs/settings/color-settings#color-theming) section of the documentation.

[See example of side navigation with dark theme](/docs/examples/patterns/side-navigation/dark).

## Accessibility

### How it works

Navigation allows users to navigate different pages or content in a website. The list of navigation items can be displayed on the top or left edge of the viewport.

The component can be navigated to via the keyboard. Pressing the `Tab` key will highlight the navigation items. When an element is highlighted, pressing the `Enter` key will open the corresponding view.

The navigation component has the `<nav>` HTML tag to aid assistive technology. Also it uses several WAI-ARIA tools to aid assistive technology:

- Navigation component uses `aria-label`, which is the description of it.
- Individual items use several `aria` attributes:
  - `aria-control`, which references the ID of the navigation panel it controls.
  - `aria-hidden`, which takes a boolean value to control the dropdown navigation items.
  - `aria-current="page"`, which is passed to the currently selected item.

Care should be taken to ensure that the label makes sense out of context of the content around it.

Consider the size that navigation elements are displayed at. They should be easily reachable and tappable on mobile views and easy to locate with the pointer on desktop views. Consider that users with reduced mobility may find it harder to locate and operate controls that appear too small on screen.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The visual order of the UI objects that is read by assistive technologies should match with the source code.
- Each navigation element should have a unique and clear label. Be sure not to include the word “navigation” in the `aria-label`, as this would be repeated by the screen reader.
- Javascript will be needed to show/hide a collapsible element. The toggle element should have an `aria-controls` attribute that matches with the collapsible element’s `id`.
- The target element is shown/hidden by changing `aria-hidden` to `true` or `false` accordingly.
- Javascript will be needed to indicate which navigation element is active. `aria-current="page"` attribute should be given to the navigation item.
- JavaScript should be used to handle both mouse and keyboard interactions.

### Resources

- [Carbon Design System - Navigation](https://www.carbondesignsystem.com/patterns/global-header/#accessibility)
- Guidelines:
  - [WAI-ARIA practices - General principles of landmark design](https://www.w3.org/TR/wai-aria-practices-1.1/#general-principles-of-landmark-design)
  - [WAI-ARIA practices - Navigation](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_lh_navigation)

## Import

To import just navigation component into your project, copy snippets below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-navigation;
```

To import side navigation, copy snippet below:

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-side-navigation;

// optionally add icons and/or labels if you use them in side navigation__nav
@include vf-p-label;
@include vf-p-icons;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
