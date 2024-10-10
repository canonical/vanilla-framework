---
wrapper_template: '_layouts/docs.html'
context:
  title: Themes | Base elements
---

Vanilla (since version 4.8.0) supports client-side theming based on CSS properties (instead of previously used build-time SCSS based theming).

We currently support the following themes:

- light (default, or provided by `is-light` class)
- paper (provided by `is-paper` class, recommended for websites) which extents the light theme, but uses a light grey background
- dark (provided by `is-dark` class)

It's recommended to apply the theme on the page level, by adding the relevant class name to the `body` element. Theme can also be set on any other element and will apply to that element and any of its descendants (via CSS inheritance).

```html
<body class="is-paper">
  ...
</body>
```

[See an example page in paper theme](/docs/examples/brochure/index).
