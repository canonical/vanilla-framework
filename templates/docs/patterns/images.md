---
wrapper_template: '_layouts/docs.html'
context:
  title: Images | Components
---

Enhance images by adding a variant style with a border or drop shadow.

## Image with border

A simple key-line around your image.

<div class="embedded-example"><a href="/docs/examples/patterns/image/bordered/" class="js-example">
View example of image with border
</a></div>

## Image with drop shadow

Add depth using our drop shadow around your image.

<div class="embedded-example"><a href="/docs/examples/patterns/image/shadowed/" class="js-example">
View example of image with shadow
</a></div>

## Image with caption

When an image needs a caption, it can be wrapped in a `<figure>` element, along with a `<figcaption>`.

<div class="embedded-example"><a href="/docs/examples/patterns/image/caption/" class="js-example">
View example of image with a caption
</a></div>

## Media element with spacing

Adds spacing to the top of a media element. This is usually needed when image or video is placed below the horizontal rule component to avoid media touching the line.

<div class="embedded-example"><a href="/docs/examples/patterns/image/spacing/" class="js-example">
View example of media element with spacing
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-image;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
