---
wrapper_template: '_layouts/docs.html'
context:
  title: Breadcrumbs | Components
---

# Breadcrumbs

<hr>

You can use the breadcrumbs pattern to indicate where the current page sits in the site's navigation.

- A `<nav>` element with an `aria-label` "Breadcrumb" identifies the structure as a breadcrumb trail
- The set of links is structured using an ordered list
- The separators between each item are added via CSS, so you don't have to include them manually.

<div class="embedded-example"><a href="/docs/examples/patterns/breadcrumbs/" class="js-example">
View example of the breadcrumbs pattern
</a></div>

## Accessibility

{# copy doc: https://docs.google.com/document/d/1qglleNv0WU-DLACF87fBkccYk49V2hwWnurTm_t1Ux4/edit#heading=h.tab4i4y8yac #}

### How it works

It establishes a landmark on the page which assists the user in understanding where they currently are and which pages exist in the current page’s hierarchical order.

It comprises a set of links structured using an ordered list. A `nav` element using `aria-label="Breadcrumbs"` identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate. It can be navigated via keyboard using the `Tab` key.

To prevent screen reader announcement of the visual separators between links, they are added via CSS. The separators are part of the visual presentation that signifies the breadcrumb trail, which is already semantically represented by the `nav` element.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The breadcrumb text should reflect the page title accurately and concisely.
- The breadcrumb should remain in the same relative order and location on each web page.
- The breadcrumb indicating the current page should be visually distinct from the preceding breadcrumbs.
- If the breadcrumb reflecting the current page is a link, it should have an `aria-current="page" `attribute.

### Resources

- [WAI-ARIA practices: Breadcrumbs](https://www.w3.org/TR/wai-aria-practices/#breadcrumb)
- [WAI-ARIA practices: Breadcrumb example](https://www.w3.org/TR/wai-aria-practices/#breadcrumb)
- Guidelines:
  - [2.4.4: Link Purpose in Context](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - [3.2.3: Consistent Navigation](https://www.w3.org/TR/WCAG21/#consistent-navigation)

## Deprecated markup

<span class="p-label--deprecated">Deprecated</span>

The breadcrumb markup has been updated for accessibility reasons. Support for the <a href="/docs/examples/patterns/breadcrumbs-deprecated/">old markup</a> may be removed in future versions.

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-breadcrumbs;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## Design

For more information [view the breadcrumbs design spec](https://github.com/canonical-web-and-design/design-vanilla-framework/tree/main/Breadcrumbs), which includes the specification in markdown format and a PNG image.
