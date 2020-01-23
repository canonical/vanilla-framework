---
collection: patterns
wrapper_template: '_layouts/default.html'
---

## Media object

<hr>

A media object should be used to display events or articles.

<a href="/examples/patterns/media-object/media-object/" class="js-example">
View example of the pattern media object
</a>

### Circular

You can add an `is-round` state to the `.p-media-object__image` element to create a circular image style, which we recommend to be used for head shots of people. In order for this variant to work, the original image must be square.

<a href="/examples/patterns/media-object/media-object-circ-img/" class="js-example">
View example of the pattern media object
</a>

### Large

Use a large variant of the component to display details of a single object on a page.

<a href="/examples/patterns/media-object/media-object-large/" class="js-example">
View example of the pattern media object large
</a>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_media-object';
@include vf-p-media-object;
```

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information view the [media object design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Media%20object) which includes the specification in markdown format and a PNG image.
