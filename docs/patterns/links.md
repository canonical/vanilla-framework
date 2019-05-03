---
layout: default
---

## Links

<hr>

Links are used to embed actions or pathways to more information, allowing users to click their way from page to page.

### Default

Default links are a color defined by `$color-link` and are 10% darker when already visited.

<a href="/examples/base/links/"
    class="js-example">
View example of the default link pattern
</a>

### External

The `.p-link--external` class should be used on hyperlinks that go to a different domain than the current one.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>The `p-link--external` class makes use of the fairly
    new <a href="http://www.caniuse.com/#search=mask">CSS Masks</a>. For support in more browsers you should run your
    CSS through <a href="https://www.npmjs.com/package/autoprefixer">an autoprefixer</a> before deploying.
  </p>
</div>

<a href="/examples/patterns/links/links-external/"
    class="js-example">
View example of the external link pattern
</a>

### Soft

The `.p-link--soft` class should be used on hyperlinks where many links are grouped together, such as a link cloud.

<a href="/examples/patterns/links/links-soft/"
    class="js-example">
View example of the soft link pattern
</a>

### Inverted

The `.p-link--inverted` class should be used where links are placed on a dark background.

<a href="/examples/patterns/links/links-inverted/"
    class="js-example">
View example of the inverted link pattern
</a>

### Back to top

The `.p-top` link can be used to make it easier to go back to the top on long pages. If the page is divided into different sections, you can use more than one per page.

<a href="/examples/patterns/links/links-back-to-top/"
    class="js-example">
View example of the back to top pattern
</a>

### Design

For more information view the [links design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Links) which includes the specification in markdown format and a PNG image.
