---
wrapper_template: '_layouts/docs.html'
context:
  title: Documentation layout | Layouts
---

## Structure

The documentation layout utilises the whole width of the screen reserving some space on the left for side bar (with side navigation) and space on the right for additional meta data (usually table of contents). The central main area of the screen is utilising the whole width of 12 column Vanilla grid for main documentation content.

![Documentation layout structure with table of contents below the title](https://assets.ubuntu.com/v1/e25d272e-vanilla-docs-layout-structure-large.png)

This area is split between a title on the top and content below it, to allow placing the table of contents in between on smaller screen sizes.

![Documentation layout structure on large screens with table of contents on the right](https://assets.ubuntu.com/v1/4f55cec2-vanilla-docs-layout-structure-medium.png)

At smaller breakpoints, the sidebar is moved off-screen and shown / hidden using a toggle button.

### Header

The header area (`.l-docs__header`) is meant to contain main top navigation of the site and any other full width elements to be shown above the documentation content, such as search.

The elements within the header area need to use `.l-docs__subgrid` to align with the main content area.

### Sidebar

The sidebar area (`.l-docs__sidebar`) is rendered at the left side of the screen with a predefined fixed width. It's main purpose is to contain the [side navigation component](/docs/patterns/navigation#side-navigation) with a list of all documentation pages. The side navigation component has built-in responsive functionality which makes it appear / go off-screen using a toggle.

### Title

The title area (`.l-docs__title`) is rendered at the top of the main content area. It's main purpose is to contain the title of the documentation page. It's separated from the content to allow placing the table of contents in between on smaller screen sizes.

### Main content

The main content area (`.l-docs__main`) is rendered in the central part of the screen. It's main purpose is to contain the main documentation content. It's separated from the title to allow placing the table of contents in between on smaller screen sizes.

### Meta data

The meta data area (`.l-docs__meta`) is rendered at the right side of the screen with a predefined fixed width. It's main purpose is to contain the [table of contents](/docs/patterns/table-of-contents) component with a list of all sections of the documentation page.

When there is not enough space on the screen to render this area on right side of the screen, it's moved below the title area.

### Footer

The footer (`.l-docs__footer`) is rendered full width below the other areas and is meant to contain the site footer.

The elements within the footer area need to use `.l-docs__subgrid` to align with the main content area.

## Example

<div class="embedded-example"><a href="/docs/examples/layouts/docs/" class="js-example" data-height="600">
View an example of the documentation layout
</a></div>

[View full screen example of the documentation layout](/docs/examples/layouts/docs/).

## Legacy brochure site documentation layout

For reference, you can check the [documentation of the legacy brochure site documentation layout](/docs/layouts/documentation-brochure) using existing 12 column grid and side navigation component.
