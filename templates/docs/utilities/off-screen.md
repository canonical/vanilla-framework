---
wrapper_template: '_layouts/docs.html'
context:
  title: Off screen | Utilities
---

The `.u-off-screen` class will position an element out of the page flow and off-screen, while still making it available to screen readers.

<div class="embedded-example"><a href="/docs/examples/utilities/off-screen/" class="js-example">
View example of the off-screen utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-off-screen;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
