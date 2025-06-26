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

## Bordered {{ status("deprecated") }}

In Vanilla v4.25.0, the borderless variant of the CTA block pattern was made the default variant.
The bordered variant is now deprecated and will be removed in the next major version.

In case you need to use the bordered variant in the meantime, you can include the top border and
padding by using the `.has-border` class. Note that this class will be removed in the next major version.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-block/bordered" class="js-example">
View example of the CTA block pattern with a border
</a></div>

## Borderless {{ status("deprecated") }}

In Vanilla v4.25.0, the borderless variant of the CTA block pattern was made the default variant.
The `.is-borderless` class will be removed in the next major version, as it has no effect anymore.

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
