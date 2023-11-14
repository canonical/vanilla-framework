---
wrapper_template: '_layouts/docs.html'
context:
  title: Hide | Utilities
---

To hide an element from the user, use the class `u-hide`.

## Viewports

To hide only at a specific viewport, add `--small`, `--medium` or `--large` modifiers to the `u-hide` class.

<div class="embedded-example"><a href="/docs/examples/utilities/hide/" class="js-example">
View example of the Hide utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-hide;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
