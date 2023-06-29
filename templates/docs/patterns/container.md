---
wrapper_template: '_layouts/docs.html'
context:
  title: Container | Components
---

# Containers

<hr>

Use containers with regular, shallow or deep spacing for different types of elements on the page depending on your markup. They are used for managing the bottom space after each element.

## Regular container

Use a regular container component (`.p-container`) for displaying standard subsequent sections on the page on a same background. They should be used in place of strips for most of the standard page content.

Containers may also be used to add regular section spacing to highlight a single element, such as a heading.

<div class="row">
  <div class="col-6 col-medium-3">
    <div class="p-notification--positive">
      <p class="p-notification__content">
        <span class="p-notification__title">Do:</span>
        <span class="p-notification__message">Use container component to build regular sections of the page that follow each other on the same background.</span>
      </p>
    </div>
  </div>
  <div class="col-6 col-medium-3">
    <div class="p-notification--negative">
      <p class="p-notification__content">
        <span class="p-notification__title">Don't:</span>
        <span class="p-notification__message">If a section of a page has a different background, or needs to be emphasised using deeper spacing both on top and bottom, use the <a href="/docs/patterns/strip">strip</a> component instead.</span>
      </p>
    </div>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/container/default" class="js-example">
View example of the regular container component
</a></div>

## Shallow container

Use a shallow container component (`.p-container--shallow`) to group larger chunks of content inside a regular container or strip.

<div class="embedded-example"><a href="/docs/examples/patterns/container/shallow" class="js-example">
View example of the shallow container component
</a></div>

## Deep container

Use a deep container component (`.p-container--deep`) to highlight a specific element or section of the page with deep spacing.

<div class="embedded-example"><a href="/docs/examples/patterns/container/deep" class="js-example">
View example of the deep container component
</a></div>

## Section and block

<span class="p-status-label--negative">Deprecated</span>

Before releasing Vanilla 4.0 we introduced section and block components. They served similar purpose, but their semantic meaning was too vague and not reflected in the designs. These components are now deprecated and will be removed in future versions of Vanilla. Please use the `p-container` component in place of `p-section` and `p-container--shallow` in place of `p-block`.

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-container;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
