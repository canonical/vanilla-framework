---
wrapper_template: '_layouts/docs.html'
context:
  title: Separators | Base elements
---

## Separators

<hr>

Vanilla gives you multiple ways to separate parts of the content with a horizontal line.

### Horizontal line

Standard `<hr>` element can be used to separate parts of the longer pieces of text.

<div class="embedded-example"><a href="/docs/examples/base/hr/" class="js-example">
View example of the horizontal line
</a></div>

### Separator

To separate block sections of the page, use the separator component `<hr class="p-separator">`.

<div class="embedded-example"><a href="/docs/examples/patterns/separator/" class="js-example">
View example of the separator component
</a></div>

### Bordered strips

For content contained in strips, use [the bordered strip variant](/docs/patterns/strip#bordered-strip).

<div class="embedded-example"><a href="/docs/examples/patterns/strips/is-bordered/" class="js-example">
View example of the pattern strip is-bordered
</a></div>

### Import

The styles for the horizontal line element are included in Vanilla base.

To import the separator component copy the snippets below and include it in your main Sass file.

```scss
@import 'patterns_separator';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
