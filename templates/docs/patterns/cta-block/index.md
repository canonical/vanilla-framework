---
collection: patterns
wrapper_template: '_layouts/docs.html'
context:
  title: CTA Block | Patterns
---

A CTA (call to action) block is a pattern that is used to encourage users to take a specific action. This could be to learn more details about a product, contact someone, or to download a file.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-block/default" class="js-example">
View example of the CTA block pattern
</a></div>

## Borderless

The CTA block can be used without a border. This is useful when the CTA block is stacked beneath related content.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-block/borderless" class="js-example">
View example of the CTA block pattern with no border
</a></div>

## Class reference

{{ class_reference("cta-block") }}

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-cta-block;
@include vf-p-buttons;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
