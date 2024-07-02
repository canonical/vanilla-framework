---
wrapper_template: '_layouts/docs.html'
context:
  title: Quote Wrapper | Patterns
---

Use the pull quote pattern to highlight content from different sources in a
visually prominent way.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/default/" class="js-example">
View example of the quote wrapper pattern
</a></div>

## H4 Quote

A variant that uses H4 for the quote text.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/h4/" class="js-example">
View example of the quote wrapper pattern with H4 quote
</a></div>

## H2 Quote

A variant that uses H2 for the quote text. The wrapper title is shrunk to make the quote more prominent and maintain balance.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/h2/" class="js-example">
View example of the quote wrapper pattern with H2 quote
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-grid;
@include vf-p-image;
@include vf-p-quote-wrapper;
@include vf-p-section;

@include vf-u-hide;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
