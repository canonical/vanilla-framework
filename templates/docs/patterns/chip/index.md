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

## Chip with icon {{ status("new") }}

Chips can include an <a href="/docs/patterns/icon">icon</a> to provide additional context or visual interest.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/with-icon" class="js-example">
View example of the with-icon chip pattern
</a></div>

## Chip with dismiss

Chips have the option to be dismissed by including a button with a `p-chip__dismiss` class.
Dismissible chips should use the non-interactive `<span class="p-chip">` rather than interactive `<a>` or `<button>` elements.

Dismissible chips should not include an icon, and should not use any of the semantic colours, as the dismiss button is already a visual indicator of the chip's state.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/with-dismiss" class="js-example">
View example of the dismiss chip pattern
</a></div>

## Chip with badge {{ status("new") }}

Chips can be accompanied by a <a href="/docs/patterns/badge">badge</a> to indicate a count or other information.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/with-badge" class="js-example">
View example of the with-badge chip pattern
</a></div>

### Chip with badge and dismiss

Chips with badges can also include a dismiss button. The dismiss button should be placed after the badge.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/with-badge-with-dismiss" class="js-example">
View example of the with-badge chip pattern with a dismiss button.
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

If you need to align the chip vertically within the text, use the [vertical alignment utility](/docs/utilities/align#vertical-alignment):

<div class="embedded-example"><a href="/docs/examples/utilities/align/vertical-align" class="js-example">
View example of the vertical align middle utility
</a></div>

## Read-only {{ status("new") }}

Chips can be used to display read-only information, such as semantic statuses.
To create a read-only chip, use `<span class="p-chip is-read-only">`.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/read-only" class="js-example">
View example of the read-only chip pattern
</a></div>

### Inline read-only chips

Read-only chips can also be displayed inline using [`is-inline`](#inline-chips). This is useful for displaying status-related information in inline contexts, such as tables and [side navigation](#/docs/patterns/navigation#side-navigation), where the default margin of the chip is not desired.

When including a chip in an environment with limited vertical space, you can use the `is-dense` class to reduce the height of the chip and prevent the chip from increasing the height of paragraph-sized elements.

<div class="embedded-example"><a href="/docs/examples/patterns/chip/read-only-inline-table" class="js-example">
View example of the dense inline read-only chip pattern
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/chip/read-only-inline-sidenav" class="js-example">
View example of the dense inline read-only chip pattern
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
@include vf-p-badge;
// when using icons, include their individual icon mixins as well
// @include vf-p-icon-edit;
// @include vf-p-icon-warning;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use chips in React by installing our react-component library and importing `Chip` component.

[See the documentation for our React `Chip` component](https://canonical.github.io/react-components/?path=/docs/components-chip--docs)
