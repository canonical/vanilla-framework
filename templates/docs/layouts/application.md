---
wrapper_template: '_layouts/docs.html'
context:
  title: Application | Layouts
---

## Application layout

<hr>

### Structure

The application layout is a full-screen grid (represented by a root element with `l-application` class) consisting of several areas (represented by elements with class names such as `l-navigation`, `l-main`, etc.). The application layout styling defines the positioning and size of all the areas on different screen sizes. An example of this would be, the navigation sidebar will be fully expanded on large screens, but collapsible on small screens.

The minimal application layout should consist of the root element (`l-application`) and a navigation area (`l-navigation-bar`, `l-navigation`) with a main content area (`l-main`). The other areas (`l-aside` and `l-status`) are optional and may be added to provide additional information as required by given application use case.

#### Root element

The root of application layout, usually a direct child of the document `body` is an element with `l-application` class. This element defines the layout grid, all areas of the application layout need to be direct children.

#### Navigation

To provide fully responsive behaviour for small and large screen navigation. The navigation of this layout consists of two areas.

Element with `l-navigation-bar` class name represents a navigation bar on top of a small screen that is used to toggle the navigation sidebar drawer.

Element with `l-navigation` represents the navigation sidebar. Its direct child needs to be a `l-navigation__drawer` element which represents the responsive collapsible side navigation drawer which has different behaviours on various screen sizes.

On a small screen, the `l-navigation-bar` is visible on top of the screen and side navigation drawer renders as an off-canvas overlay from the left side of the screen. The drawer can be fully collapsed by adding `is-collapsed` class to the `l-navigation` element, which should be done by a button or a link in the `l-navigation-bar`.

On medium or large screen sizes `l-navigation-bar` is not needed and is hidden, because side navigation is always visible on the left side of the screen.

On medium screens, the side navigation drawer will be collapsed to a width of `3rem`. Which expends with an overlay on hover. Users can also be given the option to pin the side navigation, which can be achieved by adding `is-pinned` class to the `l-navigation` element.

On large screen sizes the side navigation drawer will be always expanded and the `is-pinned` or `is-collapsed` classes will have no effect.

#### Main content area

The main content area is an element with `l-main` class. On any screen size it's going to take all available space not occupied by other areas of the application layout.

#### Aside area

The aside area is used to display additional content, usually triggered from within main content area. It is an element with `l-aside` class. By default it is rendered as an overlay on top of main content, aligned to the right side, stretched from top to bottom of the main content area. The width of the aside content area is flexible and determined by the width of its contents.

The aside content area can be detached from right, top or bottom by adding a respective margin to it with JavaScript.

It can also be pinned, similarly to the side navigation area, by adding `is-pinned` class to the `l-aside` element. Pinned aside area is rendered to the right of the main content and makes the main content area narrower.

#### Status area

The status area is positioned on the bottom of the screen and stretches over the full width of main and aside areas. It's meant to contain a status bar or short always-available information. Its height is defined by its contents.

### Example structure

Below you can see an example of the full application layout structure with all the areas included.

<div class="embedded-example"><a href="/docs/examples/layouts/application/application-structure/" class="js-example" data-height="600">
View an example of the application layout structure
</a></div>

[View the full screen example of the application layout structure](/docs/examples/layouts/application/application-structure/).

### Panels

<span class="p-label--in-progress">In progress</span>

<div class="p-notification--caution">
  <p class="p-notification__response">
    <span class="p-notification__status">In progress:</span>Current implementation of panel component is created to provide minimal consistent styling of panels, but is still work in progress and may change in future when Vanilla framework fully supports application layout components.
  </p>
</div>

As the layout areas provide only minimal styling (for example drop shadows on overlay areas) the contents of the areas need to provide any spacing, backgrounds and internal layout for the panels.

To achieve consistent styling and positioning of all the application panels use the panel component (`p-panel`). It should be used as the only direct child of respective layout area (`l-navigation`, `l-main`, `l-aside`, ...). It consists of a header (`p-panel__header`) that may contain panel title, logo or any action buttons and the content of the panel in `p-panel__content`. Panel header can be optionally made sticky while scrolling with `p-panel__header--sticky`.

### Panels example

Below you can see an example of application layout with some basic panels applied.

<div class="p-notification--caution">
  <p class="p-notification__response">
    The contents of the panels (most notably the navigation side bar) are custom built for the sake of the demo and are currently not part of Vanilla framework.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/layouts/application/application/" class="js-example" data-height="600">
View an example of the application layout demo
</a></div>

[View the full screen example of the application layout panels](/docs/examples/layouts/application/application/).

### Responsive application layout

Application layout is fully responsive and adapts to screen size. It's controlled by breakpoint variables that define the screen widths at which the layout should change.

On smallest screens the side navigation panel (`l-navigation`) is not visible on the screen. Instead the top navigation bar (`l-navigation-bar`) is displayed on top of the screen. It should contain application logo and a button to toggle visibility of the side navigation panel. All content panels (`l-main`, `l-aside`) will occupy whole screen width. If aside panel is open it will overlay the contents of the main panel.

On the screens wider than `$application-layout--breakpoint-side-nav-collapsed` (which defaults to the value of `$breakpoint-medium`: `772px`) application layout will render collapsed side navigation. The side navigation panel (`l-navigation`) will be always visible on screen as a collapsed vertical bar that when hovered or focused expands to its whole width and reveals side navigation contents. In this state side navigation panel (`l-navigation`) can be pinned (by adding `is-pinned` class) to make it temporary expanded.

On the screens wider than `$application-layout--breakpoint-side-nav-expanded` (which defaults to the value of `$breakpoint-large`: `1036px`) application layout will render with side navigation panel expanded and always visible. Adding `is-pinned` class to `l-navigation` has no effect in this state (as the side navigation by default behaves as it was pinned).

### Aside panel width

Application layout provides built-in classes to control the desired width of the aside panel (`l-aside`). By default the aside panel will have width of 8 columns of standard Vanilla grid (like `col-8` element of the grid). Using `is-narrow` class name changes the width to equivalent of 4 grid columns (`col-4`) and `is-wide` variant has the width of full 12 column grid.

While these built-in widths can be used to provide good fit for variety of content it's the best for application developers to create custom widths specific for the needs of their application. This is described in more detail in the following section.

### Customizing the application layout

Application layout can be customised by adjusting the values of one of the following setting variables.

| Setting                                              | Default value        | Comment                                                                   |
| ---------------------------------------------------- | -------------------- | ------------------------------------------------------------------------- |
| `$application-layout--breakpoint-side-nav-collapsed` | `$breakpoint-medium` | screen width breakpoint (min-width) at which side navigation is collapsed |
| `$application-layout--breakpoint-side-nav-expanded`  | `$breakpoint-large`  | screen width breakpoint (min-width) at which side navigation is expanded  |
| `$application-layout--side-nav-width-collapsed`      | `3rem`               | width of the collapsed side navigation                                    |
| `$application-layout--side-nav-width-expanded`       | `15rem`              | width of the expanded side navigation                                     |
| `$application-layout--aside-panel-max-width`         | `50vw`               | max width of the pinned aside panel                                       |

Additionally custom size variants can be built for aside panel to provide the best fit for specific content in the application.
We recommend using `calc()` and application layout variables to calculate the desired max-widths of the panel.

For example to set the aside panel width to always be the same as main panel (to create 50-50 split) max-width should be calculated by subtracting side navigation width from full screen width (`100vw`) and dividing it by 2:

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

[View the full screen example of the application layout with custom split panels](/docs/examples/layouts/application/application-split/).

If a certain width of main panel should always be in view it can be achieved by subtracting both side navigation width and desired visible space from full screen width:

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

[View the full screen example of the application layout with custom JAAS panels](/docs/examples/layouts/application/application-JAAS/).
