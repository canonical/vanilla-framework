---
wrapper_template: '_layouts/docs.html'
context:
  title: Chip | Components
---

# Chips

<hr>

Use the chip component to display small actionable or informative pieces of information.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/with-dismiss" class="js-example">
View example of the default chip pattern
</a></div>

### Colour coding

Chips come in 5 colours. The default is neutral (grey). Use any of the following flavours to style values that have semantic or otherwise colour-coded meaning:

<div class="embedded-example"><a href="/docs/examples/patterns/chip/positive" class="js-example">
View example of the positive chip pattern
</a></div>
<div class="embedded-example"><a href="/docs/examples/patterns/chip/caution" class="js-example">
View example of the caution chip pattern
</a></div>
<div class="embedded-example"><a href="/docs/examples/patterns/chip/negative" class="js-example">
View example of the negative chip pattern
</a></div>
<div class="embedded-example"><a href="/docs/examples/patterns/chip/information" class="js-example">
View example of the information chip pattern
</a></div>

The Vanilla docs use colour coded chips to highlight recent changes in component status. You can see them in the side navigation.

### Dense chips

If you need to place a chip in a dense context, use the class `is-dense` to reduce the padding and overall height of the chip:

<div class="embedded-example"><a href="/docs/examples/patterns/chip/dense" class="js-example">
View example of the dense chip pattern
</a></div>

### Inline chips

The default chip has margins and padding set so it aligns to paragraphs and within search fields. If you need to use as an inline element nested inside another element, use the class `is-inline`:

<div class="embedded-example"><a href="/docs/examples/patterns/chip/inline" class="js-example">
View example of the inline chip pattern
</a></div>

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

[See the documentation for our React `Chip` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/chip--default-story#chip)
