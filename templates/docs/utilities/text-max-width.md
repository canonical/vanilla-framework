---
wrapper_template: '_layouts/docs.html'
context:
  title: Text max width | Utilities
---

# Text max width

<hr>

By default, unordered/ordered lists do not have a max-width, as they may be used for various purposes (e.g. navigation). When they contain text only, we recommend adding the `.u-text-max-width` utility to the `ul/ol` element to ensure the list's width matches that of a paragraph:

<div class="embedded-example"><a href="/docs/examples/utilities/text-max-width/" class="js-example">
View example of the off-screen utility
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
