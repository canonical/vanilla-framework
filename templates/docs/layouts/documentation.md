---
wrapper_template: '_layouts/docs.html'
context:
  title: Documentation | Layouts
---

<style>
  .u-thumb-row {
    --grid-gap: .5rem;
    display: grid;
    grid-gap: var(--grid-gap);
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .u-thumb-aside {
    grid-column-end: span 4;
  }

  .u-thumb-main-content {
    grid-column-end: span 8;
  }

  .u-thumb-area {
    --padding: .5rem;
    --grid-gap: .5rem;
    background: rgba(199, 22, 43, 0.1);
    margin-bottom: var(--grid-gap);
    padding: var(--padding) var(--padding) 0 var(--padding);
    overflow: auto;
  }

  .u-thumb {

  }
</style>

## Documentation layout

<hr>

The Documentation page layout can be built using the Vanilla grid classes and common components.

### Structure

<div class="u-thumb">
  <header class="u-thumb-area">
      <p class="-p-muted-heading">Header</p>
  </header>
  <section>
    <div class="u-thumb-row">
      <div class="u-thumb-area u-thumb-aside">
        <p class="-p-muted-heading">Aside</p>
      </div>
      <div class="u-thumb-area u-thumb-main-content">
        <p class="-p-muted-heading">Main content</p>
      </div>
    </div>
  </section>
  <footer class="u-thumb-area">
    <p class="-p-muted-heading">Footer</p>
  </footer>
</div>

The Documentation layout splits the page into 3 horizontal areas that span the entire fixed width of the grid: header, content, footer.

At the large breakpoint, the content area is further divided into an aside (4 columns) and a main content area (8 columns).

At smaller breakpoints, the aside is moved offscreen and shown / hidden using a toggle.

#### Header

Heading with the main navigation is build with [navigation component](/docs/patterns/navigation#global-navigation).

Style and contents of documentation main navigation should be consistent with rest of the site.

Documentation pages may have an optional search box in the main navigation.

#### Hero

Documentation pages can have a hero area above main content area. This part of the page will usually contain a search field.

Hero area is build with strip component with grid row inside. Usually it would be shallow light strip (`.p-strip--light is-shallow`), but the specific styling can be customised to match the site branding or other design requirements.

#### Content area

Content area is placed inside a regular strip (`.p-strip`) and a grid row (`.row`). Within standard Vanilla 12 column grid, 3 of the columns are reserved for the side navigation (`.col-3`) with the rest of the row width (9 columns, `.col-9`) reserved for main documentation content.

Sidebar should contain only the [side navigation component](/docs/patterns/navigation#side-navigation) with a list of all documentation pages. Grouping and nesting of navigation items in side navigation component should be used to build the logical structure of documentation navigation. Side navigation component has built-in responsive functionality which makes the sidebar expandable on small screens.

Main navigation area is placed in `col-9` grid container. Within this area 9 grid columns are available. For most of documentation content standard flow of the document should be enough in the main content. Default base styling of Vanilla will provide proper spacing for the documentation content.

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
