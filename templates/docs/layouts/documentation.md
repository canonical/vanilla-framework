---
wrapper_template: '_layouts/docs.html'
context:
  title: Documentation | Layouts
---

## Documentation layout

<hr>

### Structure

The documentation page layout can be built using the Vanilla grid classes and common components. It consists of 3 horizontal areas that span the entire fixed width of the grid: header, content, footer.

![Documentation layout structure](https://assets.ubuntu.com/v1/cdf09557-Documentation+layout%401x.svg)

At the large breakpoint, the content area is further divided into an aside (3 columns) and a main content area (9 columns).

At smaller breakpoints, the aside is moved offscreen and shown / hidden using a toggle.

#### Header

The header with the main navigation, built with the [navigation component](/docs/patterns/navigation#global-navigation).

Style and contents of the documentation main navigation should be consistent with rest of the site.

##### Search

Documentation pages may have an optional search box in the main navigation.

Alternatively search can be added in a full-width area under the top navigation, but above the aside and main content in a [strip component](/docs/patterns/strip) with grid row inside. Usually, it would be shallow light strip (`.p-strip--light is-shallow`), but the specific styling can be customised to match the site branding or other design requirements.

#### Content area

The content area is implemented as a regular strip (`.p-strip`) with a grid row (`.row`) inside. Within the standard Vanilla 12 column grid, 3 of the columns are reserved for the side navigation (`.col-3`) with the rest of the row width (9 columns, `.col-9`) is deadicated to the main documentation content.

Sidebar should contain only the [side navigation component](/docs/patterns/navigation#side-navigation) with a list of all documentation pages. Grouping and nesting of navigation items should be used to build the logical structure of documentation navigation. Side navigation component has built-in responsive functionality which makes the sidebar expandable on small screens.

The main content area is placed in `col-9` grid container. Within this area 9 grid columns are available. For most of the documentation content standard flow of the document should be enough in the main content. Default base styling of Vanilla will provide proper spacing for the documentation content.

In cases when grid is used in documentation content for some specific layout, the maximum of 9 columns should be used.

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

To create 3 part split of the page use `col-3`:

<div class="grid-demo">
  <div class="row">
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
  </div>
</div>

To create 2 part split of the page use `col-4`:

<div class="grid-demo">
  <div class="row">
    <div class="col-4">.col-4</div>
    <div class="col-4">.col-4</div>
  </div>
</div>

#### Footer

Footer is build with a [strip component](/docs/patterns/strip). Footer documentation pages should be consistent with the rest of the site.

### Example

<div class="embedded-example"><a href="/docs/examples/layouts/documentation/" class="js-example" data-height="600">
View example of the documentation layout
</a></div>

[View full screen example of the documentation layout](/docs/examples/layouts/documentation/).
