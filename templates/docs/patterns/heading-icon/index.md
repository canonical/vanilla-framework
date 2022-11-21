---
collection: patterns
wrapper_template: '_layouts/docs.html'
context:
  title: Heading icon | Components
---

A heading can be emphasised by adding an icon alongside the text.

<div class="embedded-example"><a href="/docs/examples/patterns/heading-icon/heading-icon/" class="js-example">
View example of the pattern heading icons
</a></div>

## Stacked

This variant positions the icon vertically with the text content for an alternate layout.

<div class="embedded-example"><a href="/docs/examples/patterns/heading-icon/heading-icon-stacked/" class="js-example">
View example of the pattern heading icon stacked
</a></div>

## Small

The icon for this component is also available at a smaller size of 32 × 32 pixels rather than our default size of 60 × 60 pixels.

<div class="embedded-example"><a href="/docs/examples/patterns/heading-icon/heading-icon-small/" class="js-example">
View example of the pattern heading icon small
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-heading-icon;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
