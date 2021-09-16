---
wrapper_template: '_layouts/docs.html'
context:
  title: Spacing | Settings
---

# Spacing

<hr>

Vanilla uses numerous spacing variables across the codebase in order to ensure consistency in spacing between components, and to ensure typographic elements sit on the baseline grid.

## Spacing unit

Vanilla uses a default spacing unit of `.5rem` (`8px`) as a basis to calculate spacing inside and between components, as well as the line-heights of the different type sizes.

<div class="embedded-example"><a href="/docs/examples/utilities/baseline-grid/" class="js-example">
View example of the baseline grid utility
</a></div>

The example above shows headings sitting on the baseline grid, where the space between each red line is one `$sp-unit`.

## Scaling multiplier

Some spacing values are scalable; in practice, they produce the same values as their non-scalable alternatives but multiplied by the scaling multiplier - `$multi`. The multiplier defaults to 2 but can be modified to apply a global UI scale adjustment.

## Vertical spacing

The `$spv-inner` variables are used to determine vertical spacing inside components, while `$spv-outer` variables are used for spacing between components.

| Spacing variable                 | Formula                        | Default value |
| -------------------------------- | ------------------------------ | ------------- |
| `$spv-inner--x-small`            | `$sp-unit * 0.5`               | `0.25rem`     |
| `$spv-inner--x-small--scaleable` | `$spv-inner--x-small * $multi` | `0.5rem`      |
| `$spv-inner--small`              | `$sp-unit`                     | `0.5rem`      |
| `$spv-inner--scaleable`          | `$sp-unit * $multi`            | `1rem`        |
| `$spv-inner--medium`             | `$sp-unit * 1.5`               | `0.75rem`     |
| `$spv-inner--large`              | `$sp-unit * 2`                 | `1rem`        |
| `$spv-inner--x-large`            | `$sp-unit * 5.5`               | `2.75rem`     |

<br>

| Spacing variable              | Formula                   | Default value |
| ----------------------------- | ------------------------- | ------------- |
| `$spv-outer--small`           | `$sp-unit`                | `0.5rem`      |
| `$spv-outer--small-scaleable` | `$sp-unit * $multi`       | `1rem`        |
| `$spv-outer--medium`          | `$sp-unit * 2`            | `1rem`        |
| `$spv-outer--scaleable`       | `$sp-unit * (1 + $multi)` | `1.5rem`      |

<br>

The following vertical spacing variables are used between a group of components and its wrapper, for example in strips. The names of these variables are based on "depth" rather than the size-based terms of the other variables to give a distinction in their intended use.

| Spacing variable                | Formula                     | Default value |
| ------------------------------- | --------------------------- | ------------- |
| `$spv-outer--shallow-scaleable` | `$sp-unit * 2 * $multi`     | `2rem`        |
| `$spv-outer--regular-scaleable` | `$sp-unit 2 * (2 + $multi)` | `4rem`        |
| `$spv-outer--deep-scaleable`    | `$sp-unit 2 * (4 + $multi)` | `6rem`        |

<br>

## Horizontal spacing

The `$sph-inner` variables are used to determine horizontal spacing inside components, while `$sph-outer` variables are used for spacing between components.

| Spacing variable      | Formula        | Default value |
| --------------------- | -------------- | ------------- |
| `$sph-inner--small`   | `$sp-unit`     | `0.5rem`      |
| `$sph-inner`          | `$sp-unit * 2` | `1rem`        |
| `$sph-inner--large`   | `$sp-unit * 3` | `1.5rem`      |
| `$sph-inner--x-large` | `$sp-unit * 5` | `2.5rem`      |
| `$sph-outer`          | `$sp-unit`     | `0.5rem`      |
| `$sph-outer--large`   | `$sp-unit * 3` | `1.5rem`      |

<br>

## Generic units

There are also generic spacing units for backwards compatibility with components created with Vanilla before `v1.7.0`.

| Spacing variable  | Formula           | Default value |
| ----------------- | ----------------- | ------------- |
| `$sp-xx-small`    | `$sp-unit * 0.25` | `0.125rem`    |
| `$sp-x-small`     | `$sp-unit * 0.5`  | `0.25rem`     |
| `$sp-small`       | `$sp-unit`        | `0.5rem`      |
| `$sp-medium`      | `$sp-unit * 2`    | `1rem`        |
| `$sp-large`       | `$sp-unit * 3`    | `1.5rem`      |
| `$sp-x-large`     | `$sp-unit * 4`    | `2rem`        |
| `$sp-xx-large`    | `$sp-unit * 5`    | `2.5rem`      |
| `$sp-xxx-large`   | `$sp-unit * 6`    | `3rem`        |
| `$sp-xxxx-large`  | `$sp-unit * 8`    | `4rem`        |
| `$sp-xxxxx-large` | `$sp-unit * 12`   | `6rem`        |

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'utilities_vertical-spacing';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
