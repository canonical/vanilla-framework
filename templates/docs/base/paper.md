---
wrapper_template: '_layouts/docs.html'
context:
  title: Paper background | Base elements
---

# Paper background

<hr>

In Vanilla 4.0 we are introducing a new option for the background colour of brochure site pages that we call a paper background.

It replaces the default white page background with a light grey `#f3f3f3` colour.

Add the `is-paper` class name to the `body` element to use it on the page.

```html
<body class="is-paper">
  ...
</body>
```

[See an example page with paper background](/docs/examples/layouts/brochure-site/index).

## Components on paper background

Some components by default assume white page background and don't look well on top of the new paper background colour. For those, we provide an `on-paper` class name that adjusts the component's theme to match the new background colour.

The `on-paper` class name can be used on the following components:

### Inputs

When using text inputs on a paper background add the `on-paper` class name to the input element.

<div class="embedded-example"><a href="/docs/examples/base/paper/input-on-paper/" class="js-example">
View an example of a base form
</a></div>

### Search box

When using the search box component on top of the paper background add the `on-paper` class name to the `.p-search-box` element.

<div class="embedded-example"><a href="/docs/examples/base/paper/search-box-on-paper/" class="js-example">
View an example of a base form
</a></div>
