---
collection: patterns
wrapper_template: '_layouts/docs.html'
context:
  title: Media object | Components
---

A media object should be used to display events or articles.

<div class="embedded-example"><a href="/docs/examples/patterns/media-object/media-object/" class="js-example">
View example of the pattern media object
</a></div>

## Circular

You can add an `is-round` state to the `.p-media-object__image` element to create a circular image style, which we recommend to be used for head shots of people. In order for this variant to work, the original image must be square.

<div class="embedded-example"><a href="/docs/examples/patterns/media-object/media-object-circ-img/" class="js-example">
View example of the pattern media object
</a></div>

## Large

Use a large variant of the component to display details of a single object on a page.

<div class="embedded-example"><a href="/docs/examples/patterns/media-object/media-object-large/" class="js-example">
View example of the pattern media object large
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-media-object;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
