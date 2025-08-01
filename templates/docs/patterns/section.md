---
wrapper_template: '_layouts/docs.html'
context:
  title: Section | Components
---

Use section components to wrap around parts of content on the page. They are used for managing the bottom space after each element.

## Hero sections

Use a hero section component (`.p-section--hero`) to create a hero section with top padding to be placed at the top of the page.

<div class="embedded-example"><a href="/docs/examples/patterns/section/hero" class="js-example">
View example of the hero section
</a></div>

For more information on specific layouts and variants of hero section pattern, see the full [hero pattern documentation](/docs/patterns/hero).

## Regular sections

Use a section component (`.p-section`) for displaying subsequent sections on the page on a same background. They should be used in place of strips for most of the standard page content.

<div class="row">
  <div class="col-6 col-medium-3">
    <div class="p-notification--positive">
      <p class="p-notification__content">
        <span class="p-notification__title">Do:</span>
        <span class="p-notification__message">Use section component to build regular sections of the page that follow each other on the same background.</span>
      </p>
    </div>
  </div>
  <div class="col-6 col-medium-3">
    <div class="p-notification--negative">
      <p class="p-notification__content">
        <span class="p-notification__title">Don't:</span>
        <span class="p-notification__message">If a section of a page has a different background, use the <a href="/docs/patterns/strip">strip</a> component instead.</span>
      </p>
    </div>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/section/section" class="js-example">
View example of the "section" pattern
</a></div>

## Shallow sections

Use a shallow section component (`.p-section--shallow`):

- To group larger chunks of content inside a single section or strip
- To add shallow spacing to a heading
- When a section is followed by a related full-width element, such as an image or table

<div class="embedded-example"><a href="/docs/examples/patterns/section/shallow" class="js-example">
View example of the shallow section
</a></div>

{{ status("deprecated") }}

The block component `.p-block` previously served the same purpose, but is now deprecated and should not be used any more. Use the shallow section component instead.

## Deep sections

In cases when a section needs a deep spacing below it (for example, at the bottom of the page, to create distance from the footer), use a deep section component (`.p-section--deep`).

Please note that to emphasize the sections of the page with both top and bottom spacing, a strip component should be used instead.

<div class="embedded-example"><a href="/docs/examples/patterns/section/deep" class="js-example">
View example of the shallow section
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-section;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
