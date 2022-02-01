---
wrapper_template: '_layouts/docs.html'
context:
  title: Empty states | Components
---

# Empty states

<hr>

State zero or the empty state is a state where there is no data to display in the UI. It is most commonly used when a new feature is developed or a user interacts with the page for the first time. It can also be used when all data is deleted or unavailable. Empty states inform, support, and provide constructive guidance about the next steps when there is nothing to display.

## No content

No data available denotes the empty state scenario for when we cannot display data.

<div class="embedded-example"><a href="/docs/examples/patterns/empty-state/no-content" class="js-example">
View example of the first variation of no content state
</a></div>

## Import

To import either or all of these components into your project, copy the snippets below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

// dependencies for the no content empty state example
@include vf-p-grid;
@include vf-u-align;
@include vf-p-buttons;
@include vf-p-strip;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
