---
wrapper_template: '_layouts/docs.html'
context:
  title: Strip | Components
---

# Strip

<hr>

The strip pattern provides a full width strip container in which to wrap a row. A strip can have light (`.p-strip--light`) or dark (`.p-strip--dark`) grey background.

A `.p-strip` container should always be the parent of a `.row` (from the [Grid pattern](/docs/patterns/grid/)) and never the other way around.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/strips-light/" class="js-example">
View example of the strip light pattern
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/strips/strips-dark/" class="js-example">
View example of the strip dark pattern
</a></div>

## Accent strip

The purpose of the strip accent pattern is to display content with a
highlighted strip using the accent colour.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/accent/" class="js-example">
View example of the pattern strip accent
</a></div>

## Image strip

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

## Deep strip

This state gives the strip larger vertical padding.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/deep/" class="js-example">
View example of the pattern strip is-deep
</a></div>

## Shallow strip

This state gives the strip smaller vertical padding.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/shallow/" class="js-example">
View example of the pattern strip is-shallow
</a></div>

## Suru strip

This is a patterned strip that is ideal for overview or main pages, and can be used with images.

The colours of the solid gradient are based on `$color-brand` by default. The gradient colours can be customised by overriding the `$color-suru-start`, `$color-suru-middle` and `$color-suru-end` variables. A dark colour scheme is recommended, as the text colour is light by default.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/suru/" class="js-example">
View example of the Suru strip pattern
</a></div>

## Topped Suru strip

This is a patterned strip that is ideal for content pages.

The colours of the solid gradient are based on `$color-brand` by default. The gradient colours can be customised by overriding the `$color-suru-start`, `$color-suru-middle` and `$color-suru-end` variables.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/suru-topped/" class="js-example">
View example of the topped Suru strip pattern
</a></div>

## Accessibility

### How it works

A Strip is a full-width content container. They provide visual interest and break up long scrolling pages into sections.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The starting point of your page should be a well structured and accessible source document. Ensure the document remains in a logical order for screen readers, irrespective of how the content looks visually
- The headings in the Strips should follow the heading hierarchy of the page.
- Make sure the tab order makes sense, and that all appropriate elements are focusable.
- There should be a logical order within the Strip, heading first and related content to follow.
- Headings should briefly and accurately describe the content of the Strip
- Link text must be meaningful and clear.
- Avoid wrapping the entire container in a link, as the entire content of the container will be read out as a link to by the screen reader.
- Image strips should ensure image accessibility is maintained with appropriate descriptive text for relevant images
- If the image is the link, then the alt text of the image should replace the link text Alternatively, add aria-label to the link element wrapping the image

### Resources

[W3C Non-text content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-strip;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use strip in React by installing our react-component library and importing `Strip` component.

[See the documentation for our React `Strip` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/strip--light-strip#strip)
