---
wrapper_template: '_layouts/docs.html'
context:
  title: Text with icon | Utilities
---

To place an icon next to some text with correct spacing, use the class `u-has-icon` on the parent element.

<div class="embedded-example"><a href="/docs/examples/utilities/text-with-icon" class="js-example">
View example of the Text with icon utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-has-icon;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
