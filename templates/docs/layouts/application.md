---
wrapper_template: '_layouts/docs.html'
context:
  title: Application layout | Layouts
---

## Structure

The application layout is a CSS grid based layout that occupies the entire window. Its root element has a class called `l-application`. The layout defines several areas represented by elements with class names such as `l-navigation`, `l-main`, etc.

The application layout is responsive out of the box, aiming to provide a useable set of defaults. For example, the navigation sidebar is fully expanded on large screens, but collapses on small screens.

The application layout requires a root element (`l-application`), a navigation area (`l-navigation-bar`, `l-navigation`) and a main content area (`l-main`).

It also includes optional sidebars (`l-aside`) and a status bar (`l-status`).

### Root element

The root of the application layout is usually a direct child of the document `body`. It is denoted with the class `l-application`. This element defines the layout grid. All areas of the application layout need to be direct children of this root element.

### Navigation

The navigation of this layout consists of two areas:

An element with class `l-navigation-bar` which represents a horizontal navigation bar visible on small screens only. It toggles the navigation sidebar drawer. We recommend using the `<header>` tag for this element, as this ensures it acts as an <a href="https://www.w3.org/TR/wai-aria-practices/examples/landmarks/region.html">ARIA region landmark</a>. E.g.: `<header class="l-navigation">`.

Next, as a direct child, add an `l-navigation__drawer` element, which represents the responsive collapsible side navigation drawer. The drawer behaves differently depending on screen width.

Directly inside the drawer you can place one or more navigation components. They should be wrapped in `<nav>` tags, which act as region landmarks. Ensure appropriate ARIA labels for each `<nav>`.

On a small screen, the `l-navigation-bar` appears horizontally at the top of the screen. It toggles the side navigation drawer, which is an off-canvas overlay on the left side of the screen. The drawer can be fully collapsed by adding the `is-collapsed` class to the `l-navigation` element. This behaviour can also be invoked using a button or a link in `l-navigation-bar`.

On medium or large screen sizes `l-navigation-bar` is not meant to be used and is therefore hidden. Beyond `$breakpoint-large` the side navigation is always visible on the left side of the screen.

On medium screens, the side navigation drawer is by default collapsed to a width of `3rem`. It expands on hover. It can be pinned by adding the `is-pinned` class to the `l-navigation` element.

On large screens, the side navigation drawer will be always expanded and the `is-pinned` or `is-collapsed` classes have no effect.

### Main content area

The main content area is an element with class `l-main`. Use `<main class="l-main">` element to make sure it acts as the ARIA region landmark `main`. Please note that there should be only one `<main>` element in the document.

The main area occupies all available space not taken by other areas of the application layout.

### Aside area

The aside area is used to display additional content, usually triggered from within the main content area. It is denoted with the class `l-aside`. Use `<aside class="l-aside">` tag to ensure it acts as an aside region landmark.

By default, the aside area is rendered as an overlay on top of the main area. It is attached to the right edge of the screen, covering the entire height of the screen except for the status bar. The width of the aside content area is flexible and determined by the width of its contents.

The aside content area can be detached from right, top or bottom by adding a margin to it with JavaScript.

It can also be pinned, similarly to the side navigation area, by adding class `is-pinned` to the `l-aside` element. Pinning the aside area transforms it from an overlay to split panel, making the main content area narrower.

Toggling the `is-collapsed` class on the `l-aside` element allows the animated closing of the aside panel.

### Status area

The status area is meant to contain a status bar or other information that needs to be visible regardless of scroll position.

It is positioned at the bottom of the screen and spans the full width of the main and aside areas. The height is flexible, depending on content.
Use `<aside class="l-status">` element to ensure it acts as a region landmark.

## Example structure

Below you can see an example of the full application layout structure with all areas included.

<div class="embedded-example"><a href="/docs/examples/layouts/application/structure/" class="js-example" data-height="600">
View an example of the application layout structure
</a></div>

[View the full screen example of the application layout structure](/docs/examples/layouts/application/structure/).

## Panels

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">In progress:</span>
    <span class="p-notification__message">The current implementation of the panel component is created to provide minimal consistent styling of panels, but is still work in progress and may change in the future.</span>
  </p>
</div>

The layout areas provide minimal styling (for example drop shadows on overlay areas). Spacing, background, should be defined by the content inside.

The panel component (`p-panel`) is an integral part of the application layout. It should be used as the only direct child of respective layout area (`l-navigation`, `l-main`, `l-aside`, ...). It consists of a header (`p-panel__header`) and a content block (`p-panel__content`).

### Panel header

The panel header (`p-panel__header`) may contain the panel title (`p-panel__title`) or logo (`p-panel__logo`) on the left and any action buttons (`p-panel__controls`) to the right. Panel header can be optionally made sticky while scrolling by adding `is-sticky` modifier class to the `p-panel__header` element.

## Panels example

Below you can see an example of application layout with some basic panels applied.

<div class="embedded-example"><a href="/docs/examples/layouts/application/default/" class="js-example" data-height="600">
View an example of the application layout demo
</a></div>

[View the full screen example of the default panels in application layout](/docs/examples/layouts/application/default/).

## Side navigation

Use the [side navigation component](/docs/patterns/navigation#side-navigation) to build the contents of main navigation for the application layout. You can find detailed documentation in the ["Application layout" section of the Navigation page](/docs/patterns/navigation#application-layout).

<div class="embedded-example"><a href="/docs/examples/patterns/side-navigation/application" class="js-example">
View example of the side navigation pattern in application layout
</a></div>

Side navigation component has a built-in support for responsive collapsing and expanding of the side navigation. When proper HTML structure and element class names are used, the side navigation elements and icons will be correctly positioned, and unnecessary elements will fade out when navigation collapses.

Additionally, if certain custom elements need to be hidden when navigation panel is collapsed, add the `.is-fading-when-collapsed` class to them.

### Nested levels of navigation items

When the navigation is collapsed to vertical bar, all nested navigation items are automatically hidden to remove the space between icons of first level items.

In a case when one of nested items is highlighted as active, in order to preserve the visual indication of the active element when navigation is collapsed, a `has-active-child` class needs to be added on a top level navigation item when one of its children is active. This class name is used to highlight the top level item when only in collapsed view.

## Responsive application layout

The application layout is fully responsive. It is controlled by breakpoint variables that define the screen widths at which layout change occur.

On smallest screens the side navigation panel (`l-navigation`) is not visible on the screen. Instead the top navigation bar (`l-navigation-bar`) is displayed on top of the screen. It should contain an application logo and a button to toggle visibility of the side navigation panel. All content panels (`l-main`, `l-aside`) will occupy whole screen width. If the aside panel is open it will overlay the contents of the main panel.

On screens wider than `$application-layout--breakpoint-side-nav-collapsed` (which defaults to the value of `$breakpoint-small`: `620px`), the side navigation is collapsed. The side navigation panel (`l-navigation`) will be always visible on screen as a collapsed vertical bar that when hovered or focused expands to its whole width and reveals side navigation contents. In this state the side navigation panel (`l-navigation`) can be pinned (by adding `is-pinned` class) to make it temporary expanded.

On screens wider than `$application-layout--breakpoint-side-nav-expanded` (which defaults to the value of `$breakpoint-large`: `1036px`) the side navigation panel is expanded and always visible. Adding `is-pinned` class to `l-navigation` has no effect in this state (as the side navigation by default behaves as it was pinned).

## Aside panel width

Ideally, decisions about panel widths should be made once the content is known. That said, it is useful to have a few default values for prototyping purposes. The application layout provides 3 panel widths. These panel widths are derived from the static widths of 4, 8, 12 column containers as measured at window width bigger than `$grid-max-width`:

- narrow: Matches the width of a 4 column container. Invoked with class `is-narrow`.
- default: Matches the width of an 8 column container. No need for additional classed.
- wide: Matches the width of a 12 column container. Invoked with class `is-wide`.

## Customizing the application layout

The application layout can be customised. The following variables are exposed for customisation:

| Setting                                              | Default value       | Comment                                                                   |
| ---------------------------------------------------- | ------------------- | ------------------------------------------------------------------------- |
| `$application-layout--breakpoint-side-nav-collapsed` | `$breakpoint-small` | screen width breakpoint (min-width) at which side navigation is collapsed |
| `$application-layout--breakpoint-side-nav-expanded`  | `$breakpoint-large` | screen width breakpoint (min-width) at which side navigation is expanded  |
| `$application-layout--side-nav-width-collapsed`      | `3rem`              | width of the collapsed side navigation                                    |
| `$application-layout--side-nav-width-expanded`       | `15rem`             | width of the expanded side navigation                                     |
| `$application-layout--aside-panel-max-width`         | `50vw`              | max width of the pinned aside panel                                       |

We also recommend deriving the width of any aside panels based on the specific circumstances of your app. For example, you could use `calc()` and application layout variables to calculate the desired max-widths of a panel.

In the following example we set the aside panel's `max-width` to match the width of the main area, creating a 50-50 split panel interface):

```
.l-aside.is-split {
  @media (min-width: $application-layout--breakpoint-side-nav-collapsed) {
    max-width: calc((100vw - $application-layout--side-nav-width-collapsed) / 2)
  }

  @media (min-width: $application-layout--breakpoint-side-nav-expanded) {
    max-width: calc((100vw - $application-layout--side-nav-width-expanded) / 2)
  }
}
```

[View the full screen example of the application layout with custom split panels](/docs/examples/layouts/application/split/).

In this next example, the panel has a flexible width, but it leaves the same width available to the main area. This can be useful when you want to ensure certain elements in the main area are never overlapped:

```
$main-panel-visible-width: 20rem;

.l-aside.is-jaas {
  @media (min-width: $application-layout--breakpoint-side-nav-collapsed) {
    max-width: calc(100vw - $application-layout--side-nav-width-collapsed - $main-panel-visible-width)
  }

  @media (min-width: $application-layout--breakpoint-side-nav-expanded) {
    max-width: calc(100vw - $application-layout--side-nav-width-expanded - $main-panel-visible-width)
  }
}
```

[View the full screen example of the application layout with custom JAAS panels](/docs/examples/layouts/application/JAAS/).

## Import

To import just this layout into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-l-application;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
