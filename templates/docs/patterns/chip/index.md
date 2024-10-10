---
wrapper_template: '_layouts/docs.html'
context:
  title: Chips | Components
---

Use the chip component to display small actionable pieces of information.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/default" class="js-example">
View example of the default chip pattern
</a></div>

## Colour coding

Chips come in 5 colours. The default is neutral (grey). Use any of the following flavours to style values that have semantic or otherwise colour-coded meaning:

<div class="embedded-example"><a href="/docs/examples/patterns/chip/colors" class="js-example">
View example of the coloured chip pattern
</a></div>

## Chip with dismiss

Chips have the option to be dismissed by including a button with a `p-chip__dismiss` class. Please note that by default the chip main element is a `<button class="p-chip">`, but to include a dismiss button it needs to be changed to non-interactive `<span class="p-chip">`.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/with-dismiss" class="js-example">
View example of the dismiss chip pattern
</a></div>

## Dense chips

If you need to place a chip in a dense context, use the class `is-dense` to reduce the padding and overall height of the chip:

<div class="embedded-example"><a href="/docs/examples/patterns/chip/dense" class="js-example">
View example of the dense chip pattern
</a></div>

## Inline chips

The default chip has margins and padding set so it aligns to paragraphs and within search fields. If you need to use as an inline element nested inside another element, use the class `is-inline`:

<div class="embedded-example"><a href="/docs/examples/patterns/chip/inline" class="js-example">
View example of the inline chip pattern
</a></div>

## Link chips

Chips can be used as links. A link chip should not include a dismiss button, as [interactive elements should not contain other interactive elements](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html).

<div class="embedded-example"><a href="/docs/examples/patterns/chip/link" class="js-example">
View example of the link chip pattern
</a></div>

## Dark chips

To use chips on a dark background the `is-dark` class can be applied. If the chip includes the dismiss icon, you'll need to add the `is-light` class to the icon. To ensure the dark chips are accessible, the background colour used must `#2b2b2b` or darker.

[See an example of chips on dark background](/docs/examples/patterns/chip/default?theme=dark)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-chip;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use chips in React by installing our react-component library and importing `Chip` component.

[See the documentation for our React `Chip` component](https://canonical.github.io/react-components/?path=/docs/chip--default-story#chip)
