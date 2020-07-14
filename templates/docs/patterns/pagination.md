---
wrapper_template: '_layouts/docs.html'
context:
  title: Pagination | Components
---

## Pagination

<hr>

Use the pagination component to paginate large sets of data:

<div class="embedded-example"><a href="/docs/examples/patterns/pagination/pagination" class="js-example">
View example of the pagination pattern
</a></div>

### Truncated

Use the truncated version when the number of pages is too large to comfortably display a button for each page:

<div class="embedded-example"><a href="/docs/examples/patterns/pagination/pagination-truncated" class="js-example">
View example of the pagination pattern
</a></div>

### Previous / next buttons only

If the total number of pages is not known, you may use the previous / next buttons only. Consider using text labels in addition to the chevrons:

<div class="embedded-example"><a href="/docs/examples/patterns/pagination/pagination-verbose" class="js-example">
View example of the pagination pattern
</a></div>

### Disabled controls

Disable or omit the previous and next buttons when displaying the first or last page of the paginated set:

<div class="embedded-example"><a href="/docs/examples/patterns/pagination/pagination-disabled" class="js-example">
View example of the pagination pattern
</a></div>

### Import the pagination component

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_pagination';
@include vf-p-pagination;

// pagination uses icons for previous and next page buttons
@import 'patterns_icons';
@include vf-p-icons-common;
@include vf-p-icon-contextual-menu;
```

### Providing context

In some cases, providing information about the previous / next item in the set may be more important than being able to quckly jump to an arbitrary page. Examples of this could be chronologically ordered blog posts, articles, a sequence of instructions that need to be performed in a sequence, etc. In those cases, consider using the article pagination pattern:

<div class="embedded-example"><a href="/docs/examples/patterns/article-pagination" class="js-example">
View example of the article pagination pattern
</a></div>

### Import the article pagination component

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_article-pagination';
@include vf-p-article-pagination;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
