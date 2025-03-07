---
wrapper_template: '_layouts/docs.html'
context:
  title: Layout | Settings
---

These settings are used specifically to configure the grid which will determine your overall site layout. Patterns
placed within the grid structure will then adapt to fill the space available to them.

| Setting                                                                   | Default value |
| ------------------------------------------------------------------------- | ------------- |
| `$grid-gutter-width`                                                      | `2rem`        |
| `$grid-8-columns` (new [8 column grid](/docs/patterns/grid))              | `8`           |
| `$grid-columns` (deprecated [12 column grid](/docs/patterns/grid-legacy)) | `12`          |
| `$grid-max-width`                                                         | `80rem`       |

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'utilities_layout';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides
and importing instructions.
