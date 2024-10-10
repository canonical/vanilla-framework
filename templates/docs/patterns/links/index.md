---
wrapper_template: '_layouts/docs.html'
context:
  title: Links | Components
---

Links are used to embed actions or pathways to more information, allowing users to click their way from page to page.

## Default

Default links are a color defined by the current theme.

<div class="embedded-example"><a href="/docs/examples/base/typography/links/" class="js-example">
View example of the default link pattern
</a></div>

## Soft

The `.p-link--soft` class uses the default text colour instead of link colour, and should be used on hyperlinks where many links are grouped together, such as a link cloud.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-soft/" class="js-example">
View example of the soft link pattern
</a></div>

## Dark

Links fully support the theming class names and will change colour based on the theme of their parent container.

[View example of the dark link pattern](/docs/examples/patterns/links/default?theme=dark).

## Inverted

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">Inverted links are deprecated. Standard links in dark theme should be used instead.</p>
  </div>
</div>

When links are surrounded by regular, non-clickable text on backgrounds dark lighter than #2d2d2d, where it is impossible to obtain a blue colour that simultaneously has 3:1 contrast with surrounding white text, and at the same time, 4.5:1 contrast with the background (as per [WCAG rule 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)), for example on top of gradients or photographs, use the `.p-link--inverted` class.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-inverted/" class="js-example">
View example of the inverted link pattern
</a></div>

## Back to top

The `.p-top` link can be used to make it easier to go back to the top on long pages. If the page is divided into different sections, you can use more than one per page.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-back-to-top/" class="js-example">
View example of the back to top pattern
</a></div>

## Skip link

The `.p-link--skip` link is used to help keyboard users navigate quickly to the main content of a page. It should be the first element that can be tabbed to on any page, and should reference either the `<main>` landmark region element, or the ID of an element that contains the main content of the page.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-skip/" class="js-example">
View example of the back to skip link pattern
</a></div>

## Anchor link

The `.p-link--anchor-heading` class is used to add a visual on-hover state to anchor links.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-anchor/" class="js-example">
View example of the back to anchor link pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-links;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use links in React by installing our react-component library and importing `Link` component.

[See the documentation for our React `Link` component](https://canonical.github.io/react-components/?path=/docs/components-link--docs)
