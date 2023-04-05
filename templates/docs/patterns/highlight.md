---
wrapper_template: '_layouts/docs.html'
context:
  title: Highlight | Components
---

# Highlight

<hr>

Use `.p-highlight` to add a horizontal or vertical line to emphasize the content.

## Top

<div class="embedded-example"><a href="/docs/examples/patterns/highlight/top" class="js-example">
View example of the highlight component, horizontal version
</a></div>

## Left

<div class="embedded-example"><a href="/docs/examples/patterns/highlight/left" class="js-example">
View example of the highlight component, vertical version
</a></div>

## Import

To import either or all of these components into your project, copy the snippets below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-highlight;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
