---
wrapper_template: '_layouts/docs.html'
context:
  title: Separators | Base elements
---

# Separators

<hr>

Vanilla gives you multiple ways to separate parts of the content with a horizontal line.

## Horizontal rule

Use the standard `<hr>` element to introduce section breaks.

<div class="embedded-example"><a href="/docs/examples/base/hr/" class="js-example">
View example of the horizontal line
</a></div>

### Muted horizontal rule

Add the `is-muted` class to an `<hr>` to make the horizontal rule lighter in colour.
This can be useful when trying to create a more subtle partitioning within a section within a container, or between standard horizontal rules.

<div class="embedded-example"><a href="/docs/examples/base/hr-muted/" class="js-example">
View example of the muted horizontal line
</a></div>

### Fixed width horizontal rule

Often it is useful to add a rule that aligns with content placed in a grid `row` class. One way to do that is to wrap an `<hr>` in a `div` with class `row`. To avoid the need for a wrapping element, add the class `is-fixed-width` directly on the `<hr>`.

<div class="embedded-example"><a href="/docs/examples/base/hr-fixed-width/" class="js-example">
View example of the fixed-width horizontal line
</a></div>

## Separator

To separate block sections of the page, use the separator component `<hr class="p-separator">`.

<div class="embedded-example"><a href="/docs/examples/patterns/separator/" class="js-example">
View example of the separator component
</a></div>

## Bordered strips

For content contained in strips, use [the bordered strip variant](/docs/patterns/strip#bordered-strip).

<div class="embedded-example"><a href="/docs/examples/patterns/strips/is-bordered/" class="js-example">
View example of the pattern strip is-bordered
</a></div>

## Import

The styles for the horizontal line element are included in Vanilla base.

To import the separator component copy the snippets below and include it in your main Sass file.

```scss
@import 'patterns_separator';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
