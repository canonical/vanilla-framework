---
wrapper_template: '_layouts/docs.html'
context:
  title: Search box | Components
---

# Search box

<hr>

Search boxes enable search functionality on a page and are typically used in a navigation bar.

## Default

The component expands to the full width of its container by default.

A cancel button is shown when the input has content, and a small amount of JavaScript is required to ensure that focus is returned to the relevant input field when the cancel button is clicked.

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Caution:</h5>
    <p class="p-notification__message">Space is allocated for the <code>.p-search-box__reset</code> and <code>.p-search-box__button</code> buttons, so both must be included in the implementation to avoid the appearance of excess padding.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/search-box/default/" class="js-example">
View examples of search box patterns
</a></div>

## Navigation

This component integrates with `.p-navigation__nav` for both small and large screens.

<div class="embedded-example"><a href="/docs/examples/patterns/search-box/navigation/" class="js-example">
View examples of search box navigation patterns
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework/scss/vanilla';
@include vf-base;

@include vf-p-search-box;

// search box uses icons for its buttons, so you need to include them as well
@include vf-p-icons-common;
@include vf-p-icon-close;
@include vf-p-icon-search;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use search box in React by installing our react-component library and importing `SearchBox` component.

[See the documentation for our React `SearchBox` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/searchbox--default-story#searchbox)

## Related

For more interactive information adding search [view the navigation component](/docs/patterns/navigation).
