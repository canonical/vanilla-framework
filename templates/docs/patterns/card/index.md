---
wrapper_template: '_layouts/docs.html'
context:
  title: Cards | Components
---

There are four card styles available to use in Vanilla: default, header, highlighted and overlay. Our card component will expand to fill the full width of its parent container.

## Default

The purpose of the default card is to display information, without user interaction.

<div class="embedded-example"><a href="/docs/examples/patterns/card/default/" class="js-example">
View example of the default card pattern
</a></div>

## Content bleed

It is possible to have content bleed to the edges by using `u-no-padding` on the `p-card` element. Any content that requires padding can then use the `.p-card__inner` element.

<div class="embedded-example"><a href="/docs/examples/patterns/card/content-bleed/" class="js-example">
View example of card content bleeding
</a></div>

## Header

The purpose of the header card is to display information, grouped under a heading.

<div class="embedded-example"><a href="/docs/examples/patterns/card/header/" class="js-example">
View example of the header card pattern
</a></div>

## Image

Any images used as part of the card content should have a `.p-card__image` class name.

<div class="embedded-example"><a href="/docs/examples/patterns/card/image/" class="js-example">
View example of the card pattern with an image
</a></div>

## Highlighted

The purpose of the highlighted card should be used when you can interact with the content.

<div class="embedded-example"><a href="/docs/examples/patterns/card/highlighted/" class="js-example">
View example of the highlighted card pattern
</a></div>

## Overlay

The purpose of the overlay card is to make the text visible in conjunction with a strip image.

<div class="embedded-example"><a href="/docs/examples/patterns/card/overlay/" class="js-example">
View example of the patterns card overlay
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-card;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use cards in React by installing our react-component library and importing `Card` component.

[See the documentation for our React `Card` component](https://canonical.github.io/react-components/?path=/docs/components-card--docs)
