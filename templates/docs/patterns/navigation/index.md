---
wrapper_template: '_layouts/docs.html'
context:
  title: Navigation | Components
---

## Global navigation

Vanilla includes a simple navigation bar that you can add to the top of your
sites.

The navigation items are collapsed behind a "Menu" link in small screens and
displayed horizontally on larger screens.

You can change the breakpoint at which the menu changes to a small screen menu
by adjusting the `$breakpoint-navigation-threshold` variable from `_settings_breakpoints.scss`.

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/default/" class="js-example">
View example of the navigation pattern
</a></div>

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">New in Vanilla 4.7.0:</span>
    <span class="p-notification__message">Starting with Vanilla 4.7.0 we recommend using new <code>p-navigation__row--25-75</code> in place of <code>p-navigation__row</code> on brochure websites to better align with the grid.</span>
  </p>
</div>

## Dropdown

Drop-down menus can be added to the navigation by including one or more `p-navigation__item--dropdown-toggle` components.

To open the dropdown you need to set the `is-active` class on `p-navigation__item--dropdown-toggle` element, but also set `aria-hidden` to `false` on `p-navigation__dropdown`.

By default, dropdowns are left-aligned with their parent; if you'd prefer the menu to be positioned from the right, use the `p-navigation__dropdown--right` modifier. This can be seen in the "My account" menu in the example.

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/dropdown-dark" class="js-example">
View example of the dropdown pattern
</a></div>

## Sliding

To use the sliding navigation pattern, add the `p-navigation--sliding` class to the root element of the navigation.

You can add nested dropdowns to the navigation by nesting one or more `p-navigation__dropdown` in `p-navigation__item--dropdown-toggle` components.
They will be rendered as sliding panels that slide in from the right side of the screen on small screens and as dropdowns on larger screens.

<div class="embedded-example" style="max-width: 40rem"><a href="/docs/examples/patterns/navigation/sliding-search" class="js-example" data-height="600">
View example of the sliding pattern
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

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/search-dark" class="js-example"> View example of the search navigation </a></div>

## Sticky

Top navigation can be made sticky by adding the `is-sticky` class to the root element of the navigation.

## Reduced

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Work in progress:</h3>
    <p class="p-notification__message">Reduced navigation is part of a larger piece of work to upstream the ubuntu.com navigation to Vanilla. These changes are introduced gradualy and may not be fully functional or documented yet.</p>
  </div>
</div>

When used on websites with more complex information archutecture there may be a need to provide two levels of top navigation. In such case the reduced navigation pattern can be used to provide a top level navigation (that would contain the top level navigation items, as on website home page), followed by standard navigation, that would serve as a secondary navigation for the current section of the website.

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/reduced" class="js-example">View example of the reduced navigation pattern</a></div>

## Full-width dropdowns

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Work in progress:</h3>
    <p class="p-notification__message">Full-width dropdowns are part of a larger piece of work to upstream the ubuntu.com navigation to Vanilla. These changes are introduced gradualy and may not be fully functional or documented yet.</p>
  </div>
</div>

Instead of standard navigation dropdown menus a full-width dropdowns can be used to provide more space for the content of the dropdown.

To use them add `.is-full-width` class name to `.p-navigation__dropdown` element. Inside of it you need two containers for full-width desktop dropdown content `.p-navigation__dropdown-content--full-width` and mobile sliding navigation `.p-navigation__dropdown-content--sliding` content. The mobile content will be displayed on small screens only and desktop content on larger screens (based on the value of `$breakpoint-navigation-threshold`).

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/dropdown-full-width" class="js-example">View example of the full-width dropdown pattern</a></div>

## Side navigation

The side navigation pattern can be used to provide more detailed navigation alongside your content.

It allows grouping the links into navigation sections and nesting them up to four levels.

Current page in the side navigation should be highlighted by adding `aria-current="page"` attribute to the corresponding `p-side-navigation__link` element. Alternatively, if `aria-current` attribute cannot be set, the `is-active` class can be used instead.

Use `p-side-navigation__status` inside `p-side-navigation__link` elements to add [read-only chips](/docs/patterns/chip#inline-read-only-chips) or [icons](/docs/patterns/icons) on the right side of navigation items.

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/docs" class="js-example" data-height="600">
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

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/icons" class="js-example" data-height="600">
View example of the side navigation pattern with icons
</a></div>

### Sticky

On pages with content significantly longer than the side navigation contents you can make the navigation sticky to keep it visible when scrolling by adding `.is-sticky` class to the root element of `.p-side-navigation`.

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">Breaking change:</span>
    <span class="p-notification__message">Side navigation used to be sticky by default, but since Vanilla 2.21.0 <code>.is-sticky</code> class is needed to add this functionality.</p></span>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/sticky" class="js-example" data-height="600">
View example of the sticky side navigation pattern
</a></div>

### Accordion

To add accordions within side navigation use the `.p-side-navigation--accordion` class on the root element of the side navigation and `.p-side-navigation__accordion-button` to accordion `button` elements. The accordion will be collapsed by default and can be expanded by clicking on the accordion button.

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/accordion" class="js-example" data-height="600">
View example of the accordion side navigation pattern
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

Because of the limitations of raw HTML markup without class names, it's not possible to use icons or read-only chips in the raw HTML variant of side navigation.

<div class="p-strip is-shallow">
  <div class="row">
     <div class="col-4">
       <div class="p-notification--positive">
        <p class="p-notification__content">
          <span class="p-notification__title">Do:</span>
          <span class="p-notification__message">Use the raw HTML variant when the backend serving the navigation content won't allow custom class names on HTML elements.</span>
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

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/raw-html" class="js-example" data-height="600">
View example of the side navigation pattern for raw HTML
</a></div>

### Class reference

{{ class_reference("side-navigation") }}

### JavaScript functionality

On small screens side navigation is rendered off-screen as a drawer. To open the side navigation drawer, add `is-drawer-expanded` class to
main `.p-side-navigation` element. To close the drawer (with the animation) remove `is-drawer-expanded` class and replace it with `is-drawer-collapsed` class.

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

The side navigation is available in a light and a dark theme. The colours used by both themes in the [colour settings file](https://github.com/canonical/vanilla-framework/blob/main/scss/_settings_colors.scss).
Overriding the colours of individual elements of the side navigation is discouraged, as this may lead to accessibility issues, or inconsistencies with other components that use the same theme.

By default, the side navigation uses the current theme of the page. To change the appearance of an individual instance of the side navigation, you can use the `is-dark` class.

For more details about themes in Vanilla refer to the [Color theming](/docs/settings/color-settings#color-theming) section of the documentation.

[See example of side navigation with dark theme](/docs/examples/patterns/side-navigation/default?theme=dark).

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
@include vf-p-chip;
@include vf-p-icons;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use navigation in React by installing our react-component library and importing `Navigation` component.

[See the documentation for our React `Navigation` component](https://canonical.github.io/react-components/?path=/docs/components-navigation--docs)
