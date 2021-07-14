---
wrapper_template: '_layouts/docs.html'
context:
  title: Upgrade guide for upcoming Vanilla v3.0
---

## Upgrade guide for upcoming Vanilla v3.0

<hr>

During the development of Vanilla v2 several CSS class names or SCSS mixins and placeholders have been deprecated and will be removed in the upcoming release v3.0.

This guide documents all the breaking changes that will happen when these deprecated features are removed.

Once version 3.0 is released, this will be used as the update guide for developers when upgrading to a new version.
All these changes can be already applied to code that uses Vanilla v2 so that future update to Vanilla v3.0 has a smaller impact.

### Icons

The `.p-icon--question` icon has been deprecated will be removed. Please use the existing `.p-icon--help` icon instead.
Corresponding mixins `vf-p-icon-question` and `vf-icon-question` will be removed as well. Please use `vf-p-icon-help` and `vf-icon-help` instead accordingly.

The `vf-p-icon-in-button` mixin is no longer necessary and will be removed. Any code that includes this mixin can be removed.

#### Social icons

We will be removing `.p-icon--canonical` and `.p-icon--ubuntu` from social icon set.
This applies also to corresponding mixins: `vf-icon-canonical`, `vf-p-icon-canonical`, `vf-icon-ubuntu`, `vf-p-icon-ubuntu`.

Please use alternative icons from our social set or branded icon bespoke for the project.

### Headings

Heading pattern classes with word suffix (`p-heading--one`, `p-heading--two`, etc.) have been replaced with number suffixed class names `p-heading--1`, `p-heading--2`, ...

### Navigation

`.row` class should not be used inside global navigation pattern. Use `.p-navigation__row` for fixed-width or `p-navigation_row--full-width` for full-width navigation.

Navigation classes `.p-navigation__links`, `.p-navigation__link`, and classless `<a>` are deprecated and will be removed. Please use new class names `.p-navigation__items`, `.p-navigation__item`, `.p-navigation__link` instead.

`.p-subnav` is now deprecated, it and its associated child elements can be updated simply by substituting the following class names:

| Deprecated classes        | Replaced by                            |
| ------------------------- | -------------------------------------- |
| `.p-subnav`               | `.p-navigation__item--dropdown-toggle` |
| `.p-subnav__items`        | `.p-navigation__dropdown`              |
| `.p-subnav__items--right` | `.p-navigation__dropdown--right`       |
| `.p-subnav__item`         | `.p-navigation__dropdown-item`         |

The `<a>` element that toggles the dropdown element should have the `.p-navigation__link` class, as well as an `aria-controls` attribute that references the `id` attribute of the dropdown element.

### Text element max-width

Max-widths should not be based on font-size. Any legacy classes, placeholders, or mixins that used a font-size based max-width setting will be removed. Use `map-get($max-widths, default)` instead.

List of removed max width features includes: `max-width--p` and `%measure--p` placeholders, `.measure--p` class name, and `vf-b-typography-max-widths`, `p-max-width`, `heading-max-width--short`, `heading-max-width--long`, `p-max-width--long` mixins.

### Grid modifications

Unnecessary mixin `vf-p-grid-modifications` will be removed. Any references to it can be removed from code.

### Slider

Adding `.p-slider` class to style `<input type='range'>` is optional, so this class name can be safely removed from HTML if it's used solely to style range inputs. Classes `.p-slider__wrapper` and `.p-slider__input` are still used when building [slider with text input](/docs/patterns/slider) combo.

### Hidden cell in expanding table

Using `.u-hide` utility inside expanding table to hide table heading placeholder is not recommended. Use [the recommended ARIA attribute](/docs/base/tables#expanding) (`aria-hidden="true"`) instead.

### Grid

Use of `.col` classes outside of `.row` is deprecated. If you use `.col-X` class names outside of `.row` or your custom styling depends on specificity of `.col-X` class name you will need to review and update your styles accordingly.

### Tables

We renamed and deprecated `p-table-expanding` and `p-table-expanding__panel`. Use `p-table--expanding` and `p-table__expanding-panel` instead.

We removed the `p-table--sortable` that was previously required to enable sorting functionality in the tables. Currently any table with correctly used `aria-sort` attributes on column headers can be sorted. The `p-table--sortable` class name can be removed from HTML (any relevant JavaScript may need to be updated).

### Inline images

We deprecated the inline images component. Please use the logo section component instead.

### Buttons

The neutral button style provided by `p-button--neutral` is exactly the same as default `p-button` styling, so neutral variant is deprecated and will be removed in future version 3.0 of Vanilla. Please use `p-button` instead.

### Variables

$grid-margin-width is deprecated, as the grid margins differ at different breakpont. Use the values in $grid-margin-widths instead.

### Notifications

The notification child classes have been replaced to support new variants. The following class substitutions can be used to support existing functionality:

| Deprecated classes          | Replaced by                |
| --------------------------- | -------------------------- |
| `.p-notification__response` | `.p-notification__content` |
| `.p-notification__status`   | `.p-notification__title`   |
| `.p-icon--close`            | `.p-notification__close`   |
