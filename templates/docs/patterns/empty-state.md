---
wrapper_template: '_layouts/docs.html'
context:
  title: Empty states | Components
---

State zero or the empty state is the moment in the app where there is no data to display in the UI. It is most commonly used when a new feature is developed or a user interacts with the page for the first time. It can also be used when all data is deleted or unavailable.

Empty states should inform, support, and guide users to next steps when there is nothing to display.

## No content

No data available denotes the empty state scenario for when we cannot display data.

<div class="embedded-example"><a href="/docs/examples/patterns/empty-state/no-content" class="js-example">
View example of the empty state caused by no content
</a></div>

## User action triggers empty state

This scenario describes when there is no content available to show as a result of an action. For instance, searching or filtering items in a list, table, page, or results that shows up in cards.

<div class="embedded-example"><a href="/docs/examples/patterns/empty-state/user-triggered" class="js-example">
View example of the empty state caused by user action
</a></div>

## Error management empty state

This scenario describes when there is no content available to show as a result of errors such as no server connection, entering the wrong page, or something went wrong with the http requests.

<div class="embedded-example"><a href="/docs/examples/patterns/empty-state/error-management" class="js-example">
View example of the empty state caused by error
</a></div>

## Import

To import either or all of these components into your project, copy the snippets below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

// dependencies for no content empty state example
@include vf-p-headings;
@include vf-p-grid;
@include vf-u-align;
@include vf-p-buttons;
@include vf-p-strip;

// dependencies for user action triggered empty state example
@include vf-p-strip;
@include vf-p-lists;
@include vf-p-search-box;
@include vf-p-icons-common;
@include vf-p-icon-search;
@include vf-u-layout;

// Dependencies for error management empty state example
@include vf-u-hide;
@include vf-p-section;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
