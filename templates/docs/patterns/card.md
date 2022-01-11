---
wrapper_template: '_layouts/docs.html'
context:
  title: Cards | Components
---

# Cards

<hr>

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

## Accessibility

{# copy doc: https://docs.google.com/document/d/1f_dJS0MquxNm9D6e1OaHohyqXBNG1GwnPfFdxFci60k/edit# #}

### How it works

Cards are content containers. They are useful for creating a responsive site, and help users scroll through similar content at ease. They are used as a teaser, and contain a link to more content.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The headings in the cards should follow the heading hierarchy of the page.
- Make sure the tab order makes sense, and that all appropriate elements are focusable.
- There should also be a logical order within the card, heading first and related content to follow.
- Headings should briefly and accurately describe the content of the card
- Link text must be meaningful and clear.
- Avoid wrapping the entire container in a link, as the entire content of the container will be read out as a link to by the screen reader.
- Avoid multiple elements linking to the same place. Choose one element in the card to link from.
- If an image is used as a link, then the `alt` text of the image should replace the link text. Alternatively, add `aria-label` to the link element wrapping the image.

### Resources

- [W3C Non-text content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
- [What makes an accessible card](https://technica11y.org/what-makes-an-accessible-card)

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

[See the documentation for our React `Card` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/card--default-story)
