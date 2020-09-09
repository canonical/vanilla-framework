---
wrapper_template: '_layouts/docs.html'
context:
  title: Breadcrumbs | Components
---

## Breadcrumbs

<hr>

You can use the breadcrumbs pattern to indicate where the current page sits in the site's navigation.

- A nav element with an `aria-label` "Breadcrumb" identifies the structure as a breadcrumb trail
- The set of links is structured using an ordered list
- The separators between each item are added via CSS, so you don't have to include them manually.

<div class="embedded-example"><a href="/docs/examples/patterns/breadcrumbs/" class="js-example">
View example of the breadcrumbs pattern
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_breadcrumbs';
@include vf-p-breadcrumbs;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the breadcrumbs design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Breadcrumbs), which includes the specification in markdown format and a PNG image.
