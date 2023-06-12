---
wrapper_template: '_layouts/docs.html'
context:
  title: Text max width | Utilities
---

# Text max width

<hr>

To limit the width of text elements, such as lists to match the max width of paragraphs and headings use the `.u-text-max-width` utility class on the list element itself, or on a parent element.

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
