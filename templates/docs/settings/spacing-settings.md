---
wrapper_template: '_layouts/docs.html'
context:
  title: Spacing | Settings
---

Spacing in Vanilla is controlled via a set of variables. There are two kinds of variables - nudges, which keep text aligned to the baseline grid, and multiples of the spacing unit, which define vertical and horizontal spacing.

## The baseline grid

Everything in Vanilla adheres to a `.5rem` baseline grid. This is achieved by ensuring that:

- text baselines are "nudged" until they fall precisely on the grid
- any margin, padding or other positioning happens in multiples of the baseline grid spacing unit.

## Nudges

Nudges apply `padding-top` to text elements to ensure the text's baseline coincides with the baseline grid.
CSS does not allow access to the font metrics embedded in each font, so the precise nudge amount is empirically measured and kept in a `scss` map called `$nudges` in the `_settings_spacing.scss` file.
The nudge amount depends on two things - the `font-size` and the `line-height` of a piece of text. This means that elements that share the same `font-size` and `line-height` use the same nudge amounts.
It also means that, if you change the `font-size` or `line-height` of an element on different breakpoints, you need to adjust the nudge for that breakpoint too.
</a>

## The spacing unit

Apart from nudges, all other spacing variables in Vanilla are multiples (or fractions) of the spacing unit. The value of the spacing unit is `.5rem` (`8px`).

<div class="embedded-example"><a href="/docs/examples/utilities/baseline-grid/" class="js-example">
View example of the baseline grid utility
</a></div>

The example above shows headings sitting on the baseline grid, where the space between each red line is one `$sp-unit`.

## Vertical spacing

Variables starting with `$spv--` are used to denote vertical spacing.

| Spacing variable      | Formula          | Default value |
| --------------------- | ---------------- | ------------- |
| `$spv--x-small`       | `$sp-unit * 0.5` | `0.25rem`     |
| `$spv--small`         | `$sp-unit`       | `0.5rem`      |
| `$spv--medium`        | `$sp-unit * 1.5` | `0.75rem`     |
| `$spv--large`         | `$sp-unit * 2`   | `1rem`        |
| `$spv--x-large`       | `$sp-unit * 3`   | `1.5rem`      |
| `$spv--strip-regular` | `$sp-unit * 8`   | `4rem`        |
| `$spv--strip-deep`    | `$sp-unit * 12`  | `6rem`        |

The last 2 variables are used for strips only, which is why they follow the strip component naming.

<br>

## Horizontal spacing

The variables controlling horizontal spacing are much fewer, as the grid handles more complex scenarios. The table below shows the variables currently in use.

| Spacing variable | Formula        | Default value |
| ---------------- | -------------- | ------------- |
| `$sph--small`    | `$sp-unit`     | `0.5rem`      |
| `$sph--large`    | `$sp-unit * 2` | `1rem`        |
| `$sph--x-large`  | `$sp-unit * 3` | `1.5rem`      |

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

## Text Spacing {{ status("new") }}

In Vanilla 4.27.0, we migrated the `$sp-after`, `$nudges`, `$font-sizes`, and `$line-heights` maps to new per-text type maps `$settings-text-h1`, `$settings-text-h1-large`, `$settings-text-h1-mobile`, `$settings-text-h2`, etc.

These maps can be used to customize the spacing of different type levels in your application.

A list of all of the new text settings maps is given below.

- `$settings-text-display`
- `$settings-text-display-mobile`
- `$settings-text-h1`
- `$settings-text-h1-large`
- `$settings-text-h1-mobile`
- `$settings-text-h2`
- `$settings-text-h2-large`
- `$settings-text-h2-mobile`
- `$settings-text-h3`
- `$settings-text-h3-large`
- `$settings-text-h3-mobile`
- `$settings-text-h4`
- `$settings-text-h4-large`
- `$settings-text-h4-mobile`
- `$settings-text-h5`
- `$settings-text-h5-large`
- `$settings-text-h5-mobile`
- `$settings-text-h6`
- `$settings-text-h6-large`
- `$settings-text-h6-mobile`
- `$settings-text-p`
- `$settings-text-small`
- `$settings-text-small-dense`
- `$settings-text-x-small`
- `$settings-text-default`

Within each map, the following settings can be customised:

| Attribute     | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| `nudge`       | The vertical offset applied to the top of the text to align it to the baseline grid.          |
| `line-height` | The total height of the line for this text type, usually a multiple of the base spacing unit. |
| `font-size`   | The font size for this text type, typically in `rem` units or as a multiplier.                |
| `sp-after`    | The vertical spacing applied after this text element, controlling space between elements.     |
| `sp-before`   | The additional spacing added to the nudge for padding-top when text follows other elements.   |

To customise these settings, you can create overrides for whichever text types you need in your project's settings file. For example:

```scss
// settings.scss (in your project)

// sass:map is needed to merge settings maps
@use 'sass:map';
// Import Vanilla's base settings
@import 'vanilla-framework';

// Define maps that contain settings you want to customise.
// You only need to specify the settings you want to change.
$custom-settings-text-p: (
  nudge: 0.5rem,
  sp-after: $spv--medium,
);

// Merge the custom settings with the default settings.
// Make sure your custom settings map is the second argument, so that it overrides the defaults.
$settings-text-p: map.merge($settings-text-p, $custom-settings-text-p);

// index.scss (in your project)
// Import your custom settings
@import 'settings';

// Include Vanilla AFTER your settings are imported - this causes Vanilla to use your custom settings.
@include vanilla;
// or include only the parts you need - see the customising guide below for more details
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
