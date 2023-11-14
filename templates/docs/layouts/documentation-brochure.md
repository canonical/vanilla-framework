---
wrapper_template: '_layouts/docs.html'
context:
  title: Documentation brochure layout | Layouts
---

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Legacy</h5>
    <p class="p-notification__message">Please note that this is a documentation for a legacy documentation layout using our brochure site grid. <a href="/docs/layouts/documentation">New documentation layout</a> is documented separately.</p>
  </div>
</div>

## Structure

The documentation layout is built using Vanilla grid classes and common components. It consists of 3 horizontal areas that span the entire fixed width of the grid: header, content, footer.

![Documentation layout structure](https://assets.ubuntu.com/v1/2725610a-Documentation+layout+text+to+curves.svg)

At the large breakpoint, the content area is further divided into an aside (3 columns) and a main content area (9 columns).

At smaller breakpoints, the aside is moved off-screen and shown / hidden using a toggle.

### Header

Place the [navigation component](/docs/patterns/navigation#global-navigation) and any other full width elements in the header. This could include a strip with a search, a hero element, etc.

Style and contents of the documentation main navigation should be consistent with rest of the site.

#### Search

Documentation pages may have an optional search box in the main navigation.

Alternatively, a search can be added in a full-width area under the top navigation, but above the aside and main content in a [strip component](/docs/patterns/strip) with grid row inside. The specific styling of the strip can be customised to match the site branding or other design requirements.

### Content area

The content area is implemented as a regular strip (`.p-strip`) with a grid row (`.row`) inside. Within the standard Vanilla 12 column grid, 3 of the columns are reserved for the side navigation (`.col-3`) with the rest of the row width (9 columns, `.col-9`) is dedicated to the main documentation content.

The aside area should contain the [side navigation component](/docs/patterns/navigation#side-navigation) with a list of all documentation pages. Grouping and nesting of navigation items should be used to build the logical structure of the documentation navigation. The side navigation component has built-in responsive functionality which makes it appear / go off-screen using a toggle.

If the contents of the side navigation are generated in a way that doesn't provide the specific class names required by Vanilla, use a [raw HTML variant of the pattern](/docs/patterns/navigation#raw-html) to style the basic HTML lists of links.

The main content area is placed in a `col-9` grid container. Note that the number of columns available to use by content inside this container is equal to the number of columns the container spans. For the main content this means 9 available columns.

A visualisation of the grid, and how to nest different layouts inside the main content container:

<div class="grid-demo">
  <div class="row">
    <div class="col-1">.col-1</div>
    <div class="col-1">.col-1</div>
    <div class="col-1">.col-1</div>
    <div class="col-1">.col-1</div>
    <div class="col-1">.col-1</div>
    <div class="col-1">.col-1</div>
    <div class="col-1">.col-1</div>
    <div class="col-1">.col-1</div>
    <div class="col-1">.col-1</div>
  </div>
</div>

To split the main content area into 3 parts, use `col-3`:

<div class="grid-demo">
  <div class="row">
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
  </div>
</div>

To split the main content into 2 parts, use `col-4`:

<div class="grid-demo">
  <div class="row">
    <div class="col-4">.col-4</div>
    <div class="col-4">.col-4</div>
  </div>
</div>

### Footer

The footer is built using a [strip component](/docs/patterns/strip).

## Example

<div class="embedded-example"><a href="/docs/examples/layouts/documentation/" class="js-example" data-height="600">
View an example of the documentation layout
</a></div>

[View full screen example of the documentation layout](/docs/examples/layouts/documentation/).
