---
wrapper_template: '_layouts/docs.html'
context:
  title: Badge | Components
---

A badge is a visual indicator only for numeric values. It is static and not interactive. There are two variants:

- Undefined large number: When the amount of items is only relevant for small values, this variant should be used. When the value grows further than 999, the badge should show "999+".
- Rounded large number: When the value of the badge represents a type of information where differences between large amounts of items are relevant, it should include a decimal unit prefix and round the value. Since there is a limit of 4 characters, there are two rules regarding the prefix and the decimals:
  - Prefixes: always the largest possible decimal prefix.
  - Decimals: the rounding should only show one decimal number when the prefixed, simplified value has just one character, i.e. more than 1k but less than 10k; more than 1M but less than 10M.

<div class="embedded-example"><a href="/docs/examples/patterns/badge/default/" class="js-example">
View example of the default badge pattern
</a></div>

## Colour coding

Badges come in 2 colours. The default is black. Use any of the flavours to style badges that have semantic or otherwise colour-coded meaning:

<div class="embedded-example"><a href="/docs/examples/patterns/badge/colors/" class="js-example">
View example of the badge pattern
</a></div>

## Chips with Badges

Badges can be added to chips.

<div class="embedded-example"><a href="/docs/examples/patterns/badge/chips/" class="js-example">
View example of the badge pattern
</a></div>

## Tabs with Badges

Badges can be added to tabs.

<div class="embedded-example"><a href="/docs/examples/patterns/badge/tabs/" class="js-example">
View example of the badge pattern
</a></div>

## Side Navigation with Badges

Badges can be added to side navigation links.

<div class="embedded-example"><a href="/docs/examples/patterns/badge/side-navigation/" class="js-example">
View example of the badge pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;
@include vf-p-badge;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use badge in React by installing our react-component library and importing `Badge` component.

[See the documentation for our React `Badge` component](https://canonical.github.io/react-components/?path=/docs/components-badge--docs)
