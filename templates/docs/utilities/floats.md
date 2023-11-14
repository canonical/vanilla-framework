---
wrapper_template: '_layouts/docs.html'
context:
  title: Floats | Utilities
---

The float utilities allow you to float an element left or right.

## All screens

You can use the following to float an element on left or right on all screen
sizes.

<div class="embedded-example"><a href="/docs/examples/utilities/floats/default/" class="js-example">
View example of the all screen floats utility
</a></div>

## Only large screens

You can limit floats to only large screen sizes using the following example.

<div class="embedded-example"><a href="/docs/examples/utilities/floats/large-screens/" class="js-example">
View example of the large screen floats utility
</a></div>

## Only medium screens

You can limit floats to only medium screen sizes using the following example.

<div class="embedded-example"><a href="/docs/examples/utilities/floats/medium-screens/" class="js-example">
View example of the medium screen floats utility
</a></div>

## Only small screens

You can limit floats to only small screen sizes using the following example.

<div class="embedded-example"><a href="/docs/examples/utilities/floats/small-screens/" class="js-example">
View example of the small screen floats utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-floats;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
