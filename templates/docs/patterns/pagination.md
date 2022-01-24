---
wrapper_template: '_layouts/docs.html'
context:
  title: Pagination | Components
---

# Pagination

<hr>

Use the pagination component to paginate large sets of data:

<div class="embedded-example"><a href="/docs/examples/patterns/pagination/pagination" class="js-example">
View example of the pagination pattern
</a></div>

## Truncated

Use the truncated version when the number of pages is too large to comfortably display a button for each page:

<div class="embedded-example"><a href="/docs/examples/patterns/pagination/pagination-truncated" class="js-example">
View example of the pagination pattern
</a></div>

## Previous / next buttons only

If the total number of pages is not known, you may use the previous / next buttons only. Consider using text labels in addition to the chevrons:

<div class="embedded-example"><a href="/docs/examples/patterns/pagination/pagination-verbose" class="js-example">
View example of the pagination with previous / next buttons only
</a></div>

## Disabled controls

Disable or omit the previous and next buttons when displaying the first or last page of the paginated set:

<div class="embedded-example"><a href="/docs/examples/patterns/pagination/pagination-disabled" class="js-example">
View example of the pagination pattern
</a></div>

## Article pagination

In some cases, providing information about the previous / next item in the set may be more important than being able to quickly jump to an arbitrary page. Examples of this could be chronologically ordered blog posts, articles, a sequence of instructions that need to be performed in a sequence, etc. In those cases, consider using the article pagination pattern:

<div class="embedded-example"><a href="/docs/examples/patterns/article-pagination" class="js-example">
View example of the article pagination pattern
</a></div>

## Accessibility

### How it works

Our pagination examples are wrapped in `nav` elements, each with an `aria-label=”Pagination”`. This helps distinguish the pagination from other `nav` elements on the page.

An unordered list is used to list the pages, which allows screen readers to voice the number of elements in the Pagination component.

Each page link has an `aria-label` including the word “page” along with the number. This helps orientate the user and clarify they are on a pagination button.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- It’s always recommended to use the native HTML elements where possible, but if you aren’t using a `nav` element to wrap the pagination, add `role=”navigation”` to the wrapping element.
- Provide a descriptive `aria-label` for any Pagination component’s `nav` element that describes its purpose. For example, if the pagination component is used to navigate through a set of search results, an appropriate label could be `aria-label="search results page"`.
- Do not use the landmark role as part of the label, as it will be repeated by the screen reader. For example if you use “Pagination navigation” as the `aria-label` value, then the screen reader will read out “Pagination navigation, navigation” . Use “Pagination” instead.
- If you use more than one Pagination component on a page, each will need a unique `aria-label`.
- Ensure you add `aria-current=”page”` to the current page.
- It helps to add “first page, page x” to the first page and “last page, page x” to the final page in the list.
- If you use chevrons without text labels to move to previous and next pages, make sure screen readers are reading “previous page” and “next page”.

### Resources

- [A11y style guide - Pagination navigation](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
- [Design system digital - Pagination](https://designsystem.digital.gov/components/pagination/)
- Guidelines:
  - [WAI-ARIA practices - General principles of landmark design](https://www.w3.org/TR/wai-aria-practices-1.1/#general-principles-of-landmark-design)
  - [WAI-ARIA practices - Navigation](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_lh_navigation)

## Import

### Pagination component

To import the pagination component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-pagination;

// pagination uses icons for previous and next page buttons
@include vf-p-icons-common;
@include vf-p-icon-chevron;
```

### Article pagination component

To import the article pagination component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_article-pagination';
@include vf-p-article-pagination;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use pagination in React by installing our react-component library and importing `Pagination` or `ArticlePagination` component.

[See the documentation for our React `Pagination` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/pagination--default-story#pagination)

[See the documentation for our React `ArticlePagination` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/articlepagination--default-story#articlepagination)
