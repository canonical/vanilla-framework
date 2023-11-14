---
collection: patterns
wrapper_template: '_layouts/docs.html'
context:
  title: Muted heading | Components
---

A muted heading can be used to subtly provide context to content without the heading itself being too prominent.

<div class="embedded-example"><a href="/docs/examples/patterns/headings/muted/" class="js-example">
View example of the pattern muted heading
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-muted-heading;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
