---
collection: patterns
wrapper_template: '_layouts/docs.html'
context:
  title: CTA Block | Patterns
---

A CTA (call to action) block is a pattern that is used to encourage users to take a specific action. This could be to learn more details about a product, contact someone, or to download a file.

<div class="embedded-example"><a href="/docs/examples/patterns/cta/block/default" class="js-example">
View example of the CTA block pattern
</a></div>

## Borderless

By default, the CTA block has a top border to separate it from preceding content. To remove the border, add the `.is-borderless` class to the `p-cta-block`.

<div class="embedded-example"><a href="/docs/examples/patterns/cta/block/borderless" class="js-example">
View example of the borderless CTA block pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-cta;
@include vf-p-buttons;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
