---
wrapper_template: '_layouts/docs.html'
context:
  title: Deprecated strips | Components
---

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">This page contains legacy documentation of the deprecated variants of the strip component and is only meant for reference until these variants are removed in future version of Vanilla.</p>
  </div>
</div>

## Light and dark

The strip pattern provides a full width strip container in which to wrap a row. A strip can have light (`.p-strip--light`) or dark (`.p-strip--dark`) grey background.

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">Light strips are now deprecated. Use the new <a href="/docs/patterns/strip#highlighted-strip">highlighted strip</a> instead.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/strips/strips-light/" class="js-example">
View example of the strip light pattern
</a></div>

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">Dark strips (<code>.p-strip--dark</code>) are now deprecated. Use the <a href="/docs/patterns/strip#themes">new theming</a> by applying <code>is-dark</code> class name to the strip instead.</p>
  </div>
</div>

<p></p>

<div class="embedded-example"><a href="/docs/examples/patterns/strips/strips-dark/" class="js-example">
View example of the strip dark pattern
</a></div>

## White strip

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">White strips (<code>.p-strip--white</code>) are now deprecated. Use the new <a href="/docs/patterns/strip#highlighted-strip">highlighted strip</a> instead.</p>
  </div>
</div>

The purpose of the white strip is to display some highlighted content on white background when page background is non-white (for when using paper page background).

<div class="embedded-example"><a href="/docs/examples/patterns/strips/white/" class="js-example">
View example of the white strip
</a></div>

## Accent strip

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">Accent strips (<code>.p-strip--accent</code>) are now deprecated. Use the new <a href="/docs/patterns/strip#highlighted-strip">highlighted strip</a> instead.</p>
  </div>
</div>

The purpose of the strip accent pattern is to display content with a
highlighted strip using the accent colour.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/accent/" class="js-example">
View example of the pattern strip accent
</a></div>

## Image strip

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">Image strips (<code>.p-strip--image</code>) are now deprecated. For a hero section with a background use the new <a href="/docs/patterns/suru">Suru component</a> instead.</p>
  </div>
</div>

This pattern allows for an image background to be appear as a background on a strip.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">Declare the background-image as an inline style attribute in the HTML.</span>
  </p>
</div>

You can also add the classes '.is-light' and '.is-dark' to the strips to describe the background image.
These classes will then override the text color to ensure it remains visible.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/image/" class="js-example">
View example of the pattern strip image
</a></div>

## Bordered strip

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">Bordered strips are now deprecated. If a horizontal line is needed to separate parts of content use standard <a href="/docs/patterns/section">sections</a> and <a href="/docs/patterns/rule">the rule component</a> instead.</p>
  </div>
</div>

This pattern is used to add a dividing border at the bottom of the strip.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">This should be used when two strips of the same type are used after each other.</span>
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/strips/is-bordered/" class="js-example">
View example of the pattern strip is-bordered
</a></div>

## Suru strip

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">Strips with old style of the Suru are now deprecated and should not be used on any new pages. Use a blank strip or <a href="/docs/patterns/suru">new Suru component</a> instead.</p>
  </div>
</div>

This is a patterned strip that is ideal for overview or main pages, and can be used with images.

The colours of the solid gradient are based on `$color-brand` by default. The gradient colours can be customised by overriding the `$color-suru-start`, `$color-suru-middle` and `$color-suru-end` variables. A dark colour scheme is recommended, as the text colour is light by default.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/suru/" class="js-example">
View example of the Suru strip pattern
</a></div>

## Topped Suru strip

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">Strips with old style of the Suru are now deprecated and should not be used on any new pages. Use a blank strip or <a href="/docs/patterns/suru">new Suru component</a> instead.</p>
  </div>
</div>

This is a patterned strip that is ideal for content pages.

The colours of the solid gradient are based on `$color-brand` by default. The gradient colours can be customised by overriding the `$color-suru-start`, `$color-suru-middle` and `$color-suru-end` variables.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/suru-topped/" class="js-example">
View example of the topped Suru strip pattern
</a></div>
