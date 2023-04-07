---
wrapper_template: '_layouts/docs.html'
context:
  title: Section and block | Components
---

# Sections and blocks

<hr>

Use sections and blocks for different types of elements on the page depending on your markup. They are used for managing the bottom space after each element.

## Blocks

Use `.p-block` class for siblings inside a section:

<div class="embedded-example"><a href="/docs/examples/patterns/section-and-block/block" class="js-example">
View example of the "block" pattern
</a></div>

## Sections

Use `.p-section` class for displaying sections on the page:

<div class="embedded-example"><a href="/docs/examples/patterns/section-and-block/section" class="js-example">
View example of the "section" pattern
</a></div>

## Deep sections

Use `.p-section--deep` class in for special cases, like making a large heading / CTA stand out, or at the end of the main content of a page, just before the dark footer:

<div class="embedded-example"><a href="/docs/examples/patterns/section-and-block/deep-section" class="js-example">
View example of the "deep section" pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-container;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
