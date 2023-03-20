---
wrapper_template: '_layouts/docs.html'
context:
  title: Pull quote | Components
---

Use the pull quote pattern to highlight content from different sources in a
visually prominent way.

<div class="embedded-example"><a href="/docs/examples/patterns/pull-quotes/default/" class="js-example">
View example of the pull quote pattern
</a></div>

## Small

A small variant is available which displays the quote text at the same size as normal paragraph text.

<div class="embedded-example"><a href="/docs/examples/patterns/pull-quotes/small/" class="js-example">
View example of the small pull quote pattern
</a></div>

## Large

To give more prominence to a quote, there is also a large variant.

<div class="embedded-example"><a href="/docs/examples/patterns/pull-quotes/large/" class="js-example">
View example of the small pull quote pattern
</a></div>

## Image

To add an image to any size of pull-quote, add the class `has-image` and use the following markup for the image.

<div class="embedded-example"><a href="/docs/examples/patterns/pull-quotes/default-image/" class="js-example">
View example of the small pull quote pattern with an image
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-pull-quotes;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## Related

For more typographic related information view the [blockquotes and citations](/docs/base/typography#blockquotes-and-citations) in base typography.
