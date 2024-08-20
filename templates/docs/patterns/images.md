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

### Responsive aspect ratio

It can be useful to change the aspect ratio of an image container, depending on the screen size.
Using a tall aspect ratio on a small screen, or a wide aspect ratio on a large screen, may waste page space or make the image's details less visible.
For example, the cinematic aspect ratio (2.4:1) is great in cases where there are at least 9 columns available.
However, using this aspect ratio on a small screen may make the image too small to see its details, so aspect ratios like 16:9 or 3:2 may be more appropriate.

You can apply different aspect ratios on different screen sizes by using the responsive aspect ratio classes.
See the table below for a list of all aspect ratio class names and their corresponding aspect ratios on each breakpoint.

<table>
  <thead>
    <tr>
      <th style="width: 400px; max-width: 75svw;">Class name</th>
      <th>Large</th>
      <th>Medium</th>
      <th>Small</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.p-image-container--16-9</code></td>
      <td>16:9</td>
      <td>16:9</td>
      <td>16:9</td>
    </tr>
    <tr>
      <td><code>.p-image-container--16-9-on-large</code></td>
      <td>16:9</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--16-9-on-medium</code></td>
      <td>-</td>
      <td>16:9</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--16-9-on-small</code></td>
      <td>-</td>
      <td>-</td>
      <td>16:9</td>
    </tr>
    <tr>
      <td><code>.p-image-container--3-2</code></td>
      <td>3:2</td>
      <td>3:2</td>
      <td>3:2</td>
    </tr>
    <tr>
      <td><code>.p-image-container--3-2-on-large</code></td>
      <td>3:2</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--3-2-on-medium</code></td>
      <td>-</td>
      <td>3:2</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--3-2-on-small</code></td>
      <td>-</td>
      <td>-</td>
      <td>3:2</td>
    </tr>
    <tr>
      <td><code>.p-image-container--2-3</code></td>
      <td>2:3</td>
      <td>2:3</td>
      <td>2:3</td>
    </tr>
    <tr>
      <td><code>.p-image-container--2-3-on-large</code></td>
      <td>2:3</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--2-3-on-medium</code></td>
      <td>-</td>
      <td>2:3</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--2-3-on-small</code></td>
      <td>-</td>
      <td>-</td>
      <td>2:3</td>
    </tr>
    <tr>
      <td><code>.p-image-container--cinematic</code></td>
      <td>2.4:1</td>
      <td>2.4:1</td>
      <td>2.4:1</td>
    </tr>
    <tr>
      <td><code>.p-image-container--cinematic-on-large</code></td>
      <td>2.4:1</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--cinematic-on-medium</code></td>
      <td>-</td>
      <td>2.4:1</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--cinematic-on-small</code></td>
      <td>-</td>
      <td>-</td>
      <td>2.4:1</td>
    </tr>
    <tr>
      <td><code>.p-image-container--square</code></td>
      <td>1:1</td>
      <td>1:1</td>
      <td>1:1</td>
    </tr>
    <tr>
      <td><code>.p-image-container--square-on-large</code></td>
      <td>1:1</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--square-on-medium</code></td>
      <td>-</td>
      <td>1:1</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>.p-image-container--square-on-small</code></td>
      <td>-</td>
      <td>-</td>
      <td>1:1</td>
    </tr>
  </tbody>
</table>

<div class="embedded-example"><a href="/docs/examples/patterns/image/container/aspect-ratio/responsive" class="js-example">
View example of an image container with aspect ratios that respond to the screen size
</a></div>

## Cover image

Cover images are used to fill the entire container, cropping the image if necessary. This can be combined with the aspect ratio modifier to crop the image to a specific aspect ratio.

<div class="embedded-example"><a href="/docs/examples/patterns/image/container/cover" class="js-example">
View example of cover image
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
