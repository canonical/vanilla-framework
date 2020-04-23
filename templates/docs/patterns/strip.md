---
wrapper_template: '_layouts/docs.html'
context:
  title: Strip | Components
---

## Strip

<hr>

The strip pattern provides a full width strip container in which to wrap a row. A strip can have light (`.p-strip--light`) or dark (`.p-strip--dark`) grey background.

A `.p-strip` container should always be the parent of a `.row` (from the [Grid pattern](/docs/patterns/grid/)) and never the other way around.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/strips-light/" class="js-example">
View example of the strip light pattern
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/strips/strips-dark/" class="js-example">
View example of the strip dark pattern
</a></div>

### Accent strip

The purpose of the strip accent pattern is to display content with a
highlighted strip using the accent colour.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/accent/" class="js-example">
View example of the pattern strip accent
</a></div>

### Image strip

This pattern allows for an image background to be appear as a background on a strip.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>Declare the background-image as an inline style attribute in the HTML.
  </p>
</div>

You can also add the classes '.is-light' and '.is-dark' to the strips to describe the background image.
These classes will then override the text color to ensure it remains visible.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/image/" class="js-example">
View example of the pattern strip image
</a></div>

### Bordered strip

This pattern is used to add a dividing border at the bottom of the strip.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>This should be used when two strips of the same type are used after each other.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/strips/is-bordered/" class="js-example">
View example of the pattern strip is-bordered
</a></div>

### Deep strip

This state gives the strip larger vertical padding.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/deep/" class="js-example">
View example of the pattern strip is-deep
</a></div>

### Shallow strip

This state gives the strip smaller vertical padding.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/shallow/" class="js-example">
View example of the pattern strip is-shallow
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_strip';
@include vf-p-strip;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the strip design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Strip), which includes the specification in markdown format and a PNG image.
