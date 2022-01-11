---
wrapper_template: '_layouts/docs.html'
context:
  title: Links | Components
---

# Links

<hr>

Links are used to embed actions or pathways to more information, allowing users to click their way from page to page.

## Default

Default links are a color defined by `$color-link` and are 10% darker when already visited.

<div class="embedded-example"><a href="/docs/examples/base/links/" class="js-example">
View example of the default link pattern
</a></div>

## Soft

The `.p-link--soft` class should be used on hyperlinks where many links are grouped together, such as a link cloud.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-soft/" class="js-example">
View example of the soft link pattern
</a></div>

## Inverted

The `.p-link--inverted` class should be used where links are placed on a dark background.

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

## Accessibility

{# copy doc: https://docs.google.com/document/d/1DcYBpmuLKZGLIWR6jgjYfZc1X64d8HtDt9uKMoB0POE/edit#heading=h.6xtxk46lmbik #}

### How it works

Links are used as navigational elements and can be used on their own or inline with text. It's possible to use the `Tab` key to navigate to the link, and the `Enter` key activates the link.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

#### Link text

- As screen reader users can choose to read link text in isolation, avoid using non descriptive text like “Read more”, “Learn more”, “Click here” etc. Out of context, it isn’t obvious where these links take you.
- Use unique link text where possible. Speech recognition software users may have a bad experience with duplicated link text.
- Avoid using anything longer than a full sentence for a link.
- Use judgement when linking URLs, think about how these may be read out.

#### Images

- Using images as links should be avoided where possible, but if they are used, the `alt` text should be a replacement for the link text instead of describing the image.

#### Adjacent links

- Having adjacent links to the same place (e.g. header, image and link in text of card) should be avoided. Choose one element, or wrap all the elements together.

#### ARIA attributes

- `aria-describedby` can be used to add some additional information about the link. It will be read out directly after the link text.
- Be aware when using `aria-label` or `aria-labelledby`, the screen reader will skip the link text completely and read out these values only.

Note: It’s important to use button and link elements accurately. Controls with button-like behaviour (e.g. opening models, submitting forms) should be designed like buttons using the button element, and regular text links (e.g. going to an external page) should be designed like text links using the link element.

### Resources

- [WAI-ARIA practices: Links ](https://www.w3.org/TR/wai-aria-practices/#link)
- [Yale usability & Web Accessibility - Links](https://usability.yale.edu/web-accessibility/articles/links)
- Guidelines:
  - [2.4.4: Link Purpose in Context](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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

[See the documentation for our React `Link` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/link--default-story#link)
