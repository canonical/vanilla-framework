---
wrapper_template: '_layouts/docs.html'
context:
  title: Align | Utilities
---

## Content

When you need to horizontally align inline or flex elements within a container,
you can use the `u-align` utilities to force them to align center, left or
right.

<div class="embedded-example"><a href="/docs/examples/utilities/align/content" class="js-example">
View example of the content align utility
</a></div>

## Text

If you only need text to be aligned, you can use the `u-align-text` utilities.

<div class="embedded-example"><a href="/docs/examples/utilities/align/text" class="js-example">
View example of the text align utility
</a></div>

## Vertical alignment

If you need to vertically align inline elements to the middle of their
container, you can use the `u-vertical-align--middle` utility.

<div class="embedded-example"><a href="/docs/examples/utilities/align/vertical-align" class="js-example">
View example of the vertical align middle utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and
include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-align;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in
your projects, which includes overrides and importing instructions.
