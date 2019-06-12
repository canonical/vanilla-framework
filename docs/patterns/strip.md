---
layout: default
---

## Strip

<hr>

The strip pattern provides a full width strip container in which to wrap a row. A strip can have light (`.p-strip--light`) or dark (`.p-strip--dark`) grey background.

A `.p-strip` container should always be the parent of a `.row` (from the [Grid pattern](/patterns/grid/)) and never the other way around.

<a href="/examples/patterns/strips/strips-light/"
    class="js-example">
View example of the strip light pattern
</a>

<a href="/examples/patterns/strips/strips-dark/"
    class="js-example">
View example of the strip dark pattern
</a>

### Accent strip

The purpose of the strip accent pattern is to display content with a
highlighted strip using the accent colour.

<a href="/examples/patterns/strips/accent/"
  class="js-example">
View example of the pattern strip accent
</a>

### Image strip

This pattern allows for an image background to be appear as a background on a strip.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>Declare the background-image as an inline style attribute in the HTML.
  </p>
</div>

You can also add the classes '.is-light' and '.is-dark' to the strips to describe the background image.
These classes will then override the text color to ensure it remains visible.

<a href="/examples/patterns/strips/image/"
  class="js-example">
View example of the pattern strip image
</a>

### Bordered strip

This pattern is used to add a dividing border at the bottom of the strip.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>This should be used when two strips of the same type are used after each other.
  </p>
</div>

<a href="/examples/patterns/strips/is-bordered/"
  class="js-example">
View example of the pattern strip is-bordered
</a>

### Deep strip

This state gives the strip larger vertical padding.

<a href="/examples/patterns/strips/deep/"
  class="js-example">
View example of the pattern strip is-deep
</a>

### Shallow strip

This state gives the strip smaller vertical padding.

<a href="/examples/patterns/strips/shallow/"
  class="js-example">
View example of the pattern strip is-shallow
</a>

### Design

For more information [view the strip design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Strip), which includes the specification in markdown format and a PNG image.
