---
wrapper_template: '_layouts/docs.html'
context:
  title: Text max width | Utilities
---

We aim to limit text to a measure (line width) of around 90 characters. This is done for readability purposes, and is already applied to paragraphs and headings.

To limit the width of text lists to match the line width of paragraphs use the `.u-text-max-width` utility class on the list element itself, or on a parent element.

<div class="embedded-example"><a href="/docs/examples/utilities/text-max-width-divided/" class="js-example">
View example of the text max width utility
</a></div>

When class can't be applied to the list element itself, for example when the list is generated from Markdown or Discourse, you can apply the utility class to a parent element.

<div class="embedded-example"><a href="/docs/examples/utilities/text-max-width-container/" class="js-example">
View example of the text max width utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-text-max-width;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
