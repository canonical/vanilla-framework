---
wrapper_template: '_layouts/docs.html'
context:
  title: Sticky footer | Layouts
---

To implement a footer that sticks to the bottom of the viewport even when there is little content on the page use the `l-site` element (that should be a wrapper around whole contents of the page and direct child of the `<body>` element) with `l-footer--sticky` inside it.

<div class="embedded-example"><a href="/docs/examples/layouts/sticky-footer/" class="js-example" data-height="400">
View an example of the website layout with sticky footer
</a></div>

[View full screen example of the website layout with sticky footer](/docs/examples/layouts/sticky-footer/).

## Import

To import just this sticky footer into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-l-site;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
