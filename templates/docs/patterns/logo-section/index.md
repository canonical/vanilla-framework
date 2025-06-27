---
wrapper_template: '_layouts/docs.html'
context:
  title: Logo section | Components
---

The logo section pattern can be used to showcase a group of related images, such as a group of customer or partner logos.
For best results, ensure that the images have identical dimensions.

In the case of logos, we recommend adjusting scale and position within the bounding box to ensure a well balanced result.

The logo section ensures each logo has the same height, and the width depends on the image aspect ratio.

- When you need to span the whole width of the grid, place the logo section within parent container with the class `.u-fixed-width`. (This class matches the overall fixed width of the grid, but doesn't create a css grid context for its children)

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/default" class="js-example">
View example of the logo section pattern
</a></div>

- When you need to span a certain number of columns, place the logo section within a parent container with a column class, e.g. `.col-6`, which is a direct child of a parent with class `.row`.

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/logo-section-in-six-column-parent/" class="js-example">
View example of the logo section pattern inside a six column parent container
</a></div>

## Dense

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">The dense variant is deprecated. Use the default <code>.p-logo-section</code> instead.</p>
  </div>
</div>

If you need to show more smaller logos you can use dense version of logo section with `p-logo-section--dense`.

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/logo-section-dense/" class="js-example">
View example of the dense logo section pattern
</a></div>

## Line breaks

To prevent orphaned logos on the last line, you can add line breaks with `<br>` elements. Usually you will only need this line break on large screens, so it should be hidden on smaller screens with the `.u-hide--small` class to allow logos to flow naturally.

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/logo-section-line-breaks/" class="js-example">
View example of the logo section pattern with line breaks
</a></div>

## Title element {{ status("deprecated") }}

The title element within logo section `p-logo-section__title` is deprecated and should not be used. Instead, if needed, use a heading element of an appropriate level based on the context of the page.

## Fallback for misaligned logos

In Vanilla 4.2 we introduced update to logo section component that breaks some old logo sections that were using images not aligned by design team. If you have logos that are not aligned properly, you can use the `.has-misaligned-images` class as a workaround to apply some basic styling to them, before you replace images with correctly spaced.

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/logo-section-fallback/" class="js-example">
View example of the logo section pattern with misaligned images
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-logo-section;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
