---
wrapper_template: '_layouts/docs.html'
context:
  title: Images | Components
---

Enhance images by distinguishing them from their background or controlling their container's aspect ratio.

## Highlighted image

Insulate an image from its surroundings. This can help to emphasize the image
and/or prevent its white space from becoming indistinguishable from the surrounding white space.

<div class="embedded-example"><a href="/docs/examples/patterns/image/container/highlighted" class="js-example">
View example of the image container with a highlighted background
</a></div>

## Image container with aspect ratio

You can modify the aspect ratio of an image container to neatly wrap an image in a container of the desired aspect ratio.
This is useful for aligning images or other content with mismatching aspect ratios.

All image containers center the `.p-image-container__image` element inside them by default.
If you need to change image alignment within the image container, use the [image position utility](/docs/utilities/image-position).

See the [class references section](#class-reference) for more information on the available aspect ratio classes.

<div class="embedded-example"><a href="/docs/examples/patterns/image/container/aspect-ratio/16-9" class="js-example">
View example of image container with 16/9 aspect ratio
</a></div>

## Image with border

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">Image with border is deprecated. Use `.p-image-container` with `.is-highlighted` modifier instead.</p>
  </div>
</div>

A simple key-line around your image.

<div class="embedded-example"><a href="/docs/examples/patterns/image/bordered/" class="js-example">
View example of image with border
</a></div>

## Image with drop shadow

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">Image with drop shadow is deprecated. Use `.p-image-container` with `.is-highlighted` modifier instead.</p>
  </div>
</div>

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

## Class reference

{{ class_reference("image-container") }}

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
