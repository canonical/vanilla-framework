---
wrapper_template: '_layouts/docs.html'
context:
  title: Cards | Components
---

## Cards

<hr>

There are four card styles available to use in Vanilla: default, header, highlighted and overlay. Our card component will expand to fill the full width of its parent container.

### Default

The purpose of the default card is to display information, without user interaction.

<div class="embedded-example"><a href="/docs/examples/patterns/card/default/" class="js-example">
View example of the default card pattern
</a></div>

### Header

The purpose of the header card is to display information, grouped under a heading.

<div class="embedded-example"><a href="/docs/examples/patterns/card/header/" class="js-example">
View example of the header card pattern
</a></div>

### Highlighted

The purpose of the highlighted card should be used when you can interact with the content.

<div class="embedded-example"><a href="/docs/examples/patterns/card/highlighted/" class="js-example">
View example of the highlighted card pattern
</a></div>

### Overlay

The purpose of the overlay card is to make the text visible in conjunction with a strip image.

<div class="embedded-example"><a href="/docs/examples/patterns/card/overlay/" class="js-example">
View example of the patterns card overlay
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_card';
@include vf-p-card;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use cards in React by installing our react-component library and importing `Card` component.

[See the documentation for our React `Card` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/card--default-story)
