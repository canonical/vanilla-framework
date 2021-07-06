---
wrapper_template: '_layouts/docs.html'
context:
  title: Links | Components
---

## Links

<hr>

Links are used to embed actions or pathways to more information, allowing users to click their way from page to page.

### Default

Default links are a color defined by `$color-link` and are 10% darker when already visited.

<div class="embedded-example"><a href="/docs/examples/base/links/" class="js-example">
View example of the default link pattern
</a></div>

### External

The `.p-link--external` class should be used on hyperlinks that go to a different domain than the current one.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>The `p-link--external` class makes use of the fairly
    new <a href="http://www.caniuse.com/#search=mask">CSS Masks</a>. For support in more browsers you should run your
    CSS through <a href="https://www.npmjs.com/package/autoprefixer">an autoprefixer</a> before deploying.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-external/" class="js-example">
View example of the external link pattern
</a></div>

### Soft

The `.p-link--soft` class should be used on hyperlinks where many links are grouped together, such as a link cloud.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-soft/" class="js-example">
View example of the soft link pattern
</a></div>

### Inverted

The `.p-link--inverted` class should be used where links are placed on a dark background.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-inverted/" class="js-example">
View example of the inverted link pattern
</a></div>

### Back to top

The `.p-top` link can be used to make it easier to go back to the top on long pages. If the page is divided into different sections, you can use more than one per page.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-back-to-top/" class="js-example">
View example of the back to top pattern
</a></div>

### Skip link

<span class="p-label--new">New</span>

The `.p-link--skip` link is used to help keyboard users navigate quickly to the main content of a page. It should be the first element that can be tabbed to on any page, and should reference either the `<main>` landmark region element, or the ID of an element that contains the main content of the page.

<div class="embedded-example"><a href="/docs/examples/patterns/links/links-skip/" class="js-example">
View example of the back to skip link pattern
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_links';
@include vf-p-links;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use links in React by installing our react-component library and importing `Link` component.

[See the documentation for our React `Link` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/link--default-story#link)
