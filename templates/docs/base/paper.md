---
wrapper_template: '_layouts/docs.html'
context:
  title: Paper background | Base elements
---

# Paper background

<hr>

In Vanilla 4.0 we are introducing new option for the background colour of brochure site pages that we call a paper background.

It replaces the default white page background with light grey `#f3f3f3` colour.

To use it on the page, add `is-paper` class name to the `body` element.

```html
<body class="is-paper">
  ...
</body>
```

[See an example page with paper background](/docs/examples/layouts/brochure-site/index).

## Components on paper background

Some components by default assume white page background and don't look well on top of new paper background colour. For those we provide a `on-paper` class name that adjusts the theme of the component to match the new background colour.

The `on-paper` class name can be used on following components:

### Inputs

When you are using text inputs on paper background add `on-paper` class name to the input element.

<div class="embedded-example"><a href="/docs/examples/base/paper/input-on-paper/" class="js-example">
View example of a base form
</a></div>

### Search box

When you are using search box component on top of paper background add `on-paper` class name to `.p-search-box` element.

<div class="embedded-example"><a href="/docs/examples/base/paper/search-box-on-paper/" class="js-example">
View example of a base form
</a></div>
