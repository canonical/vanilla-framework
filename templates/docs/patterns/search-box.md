---
wrapper_template: '_layouts/docs.html'
context:
  title: Search box | Components
---

## Search box

<hr>

Search boxes enable search functionality on a page and are typically used in a navigation bar.

### Default

The component expands to the full width of its container by default.

A cancel button is shown when the input has content, and a small amount of JavaScript is required to ensure that focus is returned to the relevant input field when the cancel button is clicked.

<div class="embedded-example"><a href="/docs/examples/patterns/search-box/default/" class="js-example">
View examples of search box patterns
</a></div>

### Navigation

This component integrates with `.p-navigation__nav` for both small and large screens.

<div class="embedded-example"><a href="/docs/examples/patterns/search-box/navigation/" class="js-example">
View examples of search box navigation patterns
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_search-box';
@include vf-p-search-box;

// search box uses icons for its buttons, so you need to include them as well
@import 'patterns_icons';
@include vf-p-icons-common;
@include vf-p-icon-close;
@include vf-p-icon-search;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the search design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Search), which includes the specification in markdown format and a PNG image.

### Related

For more interactive information adding search [view the navigation component](/docs/patterns/navigation).
