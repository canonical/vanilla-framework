---
wrapper_template: '_layouts/docs.html'
context:
  title: Empty States | Base elements
---

# Empty States

<hr>

State zero or the empty state is a state where there is no data to display in the UI. It is most commonly used when a new feature is developed or a user interacts with the page for the first time. It can also be used when all data is deleted or unavailable. Empty states inform, support, and provide constructive guidance about the next steps when there is nothing to display.

## No content

No data available denotes the empty state scenario for when we cannot display data.

### Table format

<div class="embedded-example"><a href="/docs/examples/base/empty-state/no-content-table" class="js-example">
View example of the first variation of no content state in table format
</a></div>

### Card format

<div class="embedded-example"><a href="/docs/examples/base/empty-state/no-content-card" class="js-example">
View example of the first variation of no content state in card format
</a></div>

### Page view format

<div class="embedded-example"><a href="/docs/examples/base/empty-state/no-content-page-view" class="js-example">
View example of the first variation of no content state in page view format
</a></div>

## Import

To import either or all of these components into your project, copy the snippets below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@import 'patterns_headings';
@include vf-base;

// dependencies for no content empty state's card view example
@include vf-u-align;
@include vf-p-buttons;
@include vf-p-strip;

// dependencies for no content empty state's page view example
@include vf-p-buttons;
@include vf-p-strip;

// dependencies for no content empty state's page view example
@include vf-p-grid;
@include vf-u-align;
@include vf-p-buttons;
@include vf-p-strip;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
