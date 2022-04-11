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
    <h5 class="p-notification__title">Buttons in the search box:</h5>
    <p class="p-notification__message">Space is allocated for the <code>.p-search-box__reset</code> and <code>.p-search-box__button</code> buttons, so both must be included in the implementation to avoid the appearance of excess padding.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/search-box/default/" class="js-example">
View examples of search box patterns
</a></div>

## Expanding search in navigation

The search box component integrates with expanding search functionality in navigation.

Expanding search in main navigation consists of couple of elements: search toggle link (`.p-navigation__link--search-toggle`), expanding search box (`.p-navigation__search`) and an overlay that covers whole screen when search is expanded (`.p-navigation__search-overlay`).

The `.p-navigation__link--search-toggle` class name is used to add a search toggle link to navigation items. The label text of this toggle element should be wrapped in `.p-navigation__search-label` element to make sure it's hidden on smaller screen sizes. Click event handler attached to the toggle element should add `.has-search-open` class on main `.p-navigation` element to expand the search box and show the overlay.

Vanilla Search box component is used for the search field, but it's wrapped into an element with `.p-navigation__search` class name. The search will be hidden by default and only expands when the navigation element has `.has-search-open` class name.

When search box is expanded the overlay element (`p-navigation__search-overlay`) is faded in to cover all the contents of the page (except the search box itself). Clicking anywhere on the overlay (or hitting Escape key) closes the search box.

<div class="embedded-example"><a href="/docs/examples/patterns/navigation/search-light" class="js-example"> View example of the search navigation </a></div>

## Accessibility

### How it works

The search box allows users to search for content by typing in the input, without needing to use the navigation. The input element has a descriptive `aria-label` for screen reader users.

It's a focusable component, and in the expanding search box where only the icon is visible, the search box has an appropriate `aria-label`. If `required` is included in the input, then the browser will display an accessible error message instructing the user to fill out the field.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Make sure to have a descriptive `aria-label` for the search input.
- Usually, it shouldn’t be possible to search with an empty input field, so indicate this with the `required` attribute on the input.
- If a page includes more than one search landmark, each should have a unique label.

### Resources

- [W3C WAI-ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/search.html)
- [Accessible search - handling form errors](https://www.a11ymatters.com/pattern/accessible-search/#handling-form-errors)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
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
