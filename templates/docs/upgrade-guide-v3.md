---
wrapper_template: '_layouts/docs.html'
context:
  title: Vanilla 3.0 upgrade guide
---

# Vanilla 3.0 upgrade guide

<hr>

Vanilla 3.0 introduces a number of breaking changes, and this upgrade guide provides detailed instructions on the actions needed to make the transition a smooth one.

## Base checkbox and radio styles

Previously, base checkbox and radio elements were styled to look like the [`.p-checkbox`](/docs/base/forms#checkbox) and [`.p-radio`](/docs/base/forms#radio-button) patterns. The base styles have been removed, please use the pattern markup instead.

## Breakpoints

The `$breakpoint-medium` variable has been removed from Vanilla. All media queries in components and utilities that used this value have been updated to either `$breakpoint-large` or `$breakpoint-small` (whichever was more relevant). If you use `$breakpoint-medium` in your project it should be replaced with `$breakpoint-large` or `$breakpoint-small`.

The default value of `$breakpoint-navigation-threshold` was previously set to `$breakpoint-medium` and is now `$breakpoint-small`. This value should be overridden in project code to adjust the threshold at which navigation switches to dropdown, based on the number of navigation items.

## Buttons

The neutral button style provided by `p-button--neutral` was exactly the same as the default `p-button` styling, so it has been removed. Please use `p-button` instead.

Additionally, buttons will no longer extend to 100% width on smaller screens.

## External Links

The `.p-link--external` class has been removed, so elements using that class will no longer include an appended external link icon. Any uses of this class can be safely removed.

## Grid

### Column classes

The scss maps defining grid margins and gutters have been simplified. In both `$grid-gutter-widths` and `$grid-margin-widths`, the following keys havechanged:

| Old key  | New key   |
| -------- | --------- |
| `medium` | `default` |
| `large`  | `default` |

### Column classes

Use of `.col` classes outside of `.row` is no longer supported. If you use `.col-X` class names outside of `.row`, or your custom styling depends on specificity of a `.col-X` class name, you will need to review and update your styles accordingly.

### Column layout change

Previously, the grid layout would switch from 6 to 12 columns wide at the medium breakpoint. With the removal of the medium breakpoint, this has been changed so that the switch happens at the large breakpoint instead. We recommend visually checking your layouts at each breakpoint for any adverse effects this change may cause.

### Grid modifications

The `vf-p-grid-modifications` mixin was unnecessary and has been removed. Any references to it can be removed from code.

## Headings

Heading pattern classes with a word suffix have been replaced by classes with a number suffix:

| Old style          | New style      |
| ------------------ | -------------- |
| `p-heading--one`   | `p-heading--1` |
| `p-heading--two`   | `p-heading--2` |
| `p-heading--three` | `p-heading--3` |
| `p-heading--four`  | `p-heading--4` |
| `p-heading--five`  | `p-heading--5` |
| `p-heading--six`   | `p-heading--6` |

## Hidden cell in expanding table

Using `.u-hide` utility inside expanding table to hide table heading placeholder is not recommended. Use [the recommended ARIA attribute](/docs/base/tables#expanding), `aria-hidden="true"`, instead.

## Icons

The `.p-icon--question` icon has been removed. Please use the existing `.p-icon--help` icon instead.
Corresponding mixins `vf-p-icon-question` and `vf-icon-question` have also been removed. Please use `vf-p-icon-help` and `vf-icon-help`, respectively, instead.

The `vf-p-icon-in-button` mixin is no longer necessary and has been removed. Any code that includes this mixin can be removed.

### Social icons

We have removed `.p-icon--canonical` and `.p-icon--ubuntu` from the social icon set, along with their corresponding mixins: `vf-icon-canonical`, `vf-p-icon-canonical`, `vf-icon-ubuntu`, `vf-p-icon-ubuntu`.

Please use alternative icons from our social set or a bespoke branded icon for your project.

## Inline images

We removed the inline images (`p-inline-mages`) component. Please use the [logo section component](/docs/patterns/logo-section) instead.

## Navigation

`.row` class should not be used inside global navigation pattern. Use `.p-navigation__row` for fixed-width or `p-navigation_row--full-width` for full-width navigation.

Navigation classes `.p-navigation__links`, `.p-navigation__link`, and classless `<a>` have been removed. Please use new class names `.p-navigation__items`, `.p-navigation__item`, `.p-navigation__link` instead.

`.p-subnav` has also been removed, it and its associated child elements can be updated simply by substituting the following class names:

| Removed classes           | Replaced by                            |
| ------------------------- | -------------------------------------- |
| `.p-subnav`               | `.p-navigation__item--dropdown-toggle` |
| `.p-subnav__items`        | `.p-navigation__dropdown`              |
| `.p-subnav__items--right` | `.p-navigation__dropdown--right`       |
| `.p-subnav__item`         | `.p-navigation__dropdown-item`         |

The `<a>` element that toggles the dropdown element should have the `.p-navigation__link` class, as well as an `aria-controls` attribute that references the `id` attribute of the dropdown element.

The color variable `$color-navigation-background` has been removed, please use the default light and dark themed navigation patterns.

## Notifications

The notification child classes have been replaced to support new variants. The following class substitutions can be used to support existing functionality:

| Deprecated classes          | Replaced by                |
| --------------------------- | -------------------------- |
| `.p-notification__response` | `.p-notification__content` |
| `.p-notification__status`   | `.p-notification__title`   |
| `.p-icon--close`            | `.p-notification__close`   |

The text content of the notifications should also be wrapped in element with `.p-notification__message` class name. This element didn't exist in previous version of notification pattern and should be added for best compatibility.

## Pagination links

The `.p-article-pagination__link` was removed, as only its variants (`.p-article-pagination__link--next` and `.p-article-pagination__link--previous`) were meant to be used.

## Slider

Adding `.p-slider` class to style `<input type='range'>` is optional, so this class name can be safely removed from HTML if it's used solely to style range inputs. Classes `.p-slider__wrapper` and `.p-slider__input` are still used when building [slider with text input](/docs/patterns/slider) combo.

## Switch

The switch component has been updated with new HTML structure more consistent with how checkbox component is built.
The `p-switch` class name is no longer placed on the checkbox input element, it should be moved to the label element wrapping the input. The class name on the input element itself should be renamed to `p-switch__input`.
If the switch is supposed to have a label next to it, it should be added as an element with `p-switch__label` class name.

See [the switch component documentation](/docs/patterns/switch) page for more details and code example.

## Tables

We removed `p-table-expanding` and `p-table-expanding__panel`. Use `p-table--expanding` and `p-table__expanding-panel` instead.

We removed the `p-table--sortable` that was previously required to enable sorting functionality in the tables. Currently any table with correctly used `aria-sort` attributes on column headers can be sorted. The `p-table--sortable` class name can be removed from HTML (any relevant JavaScript may need to be updated).

## Text element max-width

Max-widths should not be based on font-size. Legacy classes, placeholders, and mixins that used a font-size based max-width setting have been removed.
The sole remaining nvariable to control max-widths was also renamed from `$max-width--default` to `$text-max-width`. All other heading max-width variables have been replaced by `$text-max-width`.

List of removed max width features includes:

- `max-width--p` and `%measure--p` placeholders
- `.measure--p` class name
- `vf-b-typography-max-widths`, `p-max-width`, `heading-max-width--short`, `heading-max-width--long`, `p-max-width--long` mixins.

## Labels

The colour variants of the label pattern have been renamed to use consistent semantic naming with coloured chips. Old class names based on Vanilla component status names have been removed. Previous `p-label--validated` variant doesn't have direct equivalent, please use `p-label--positive` or `p-label--information` depending on your use case.

| Removed classes         | Replaced by                                    |
| ----------------------- | ---------------------------------------------- |
| `.p-label--deprecated`  | `.p-label--negative`                           |
| `.p-label--in-progress` | `.p-label--caution`                            |
| `.p-label--new`         | `.p-label--positive`                           |
| `.p-label--updated`     | `.p-label--information`                        |
| `.p-label--validated`   | `.p-label--information` or `p-label--positive` |

The individual mixins for label variants have been removed. All necessary styles are included in main `vf-p-label` mixin, If you use any of the following individual mixins you can remove them from your code: `vf-p-label-new`, `vf-p-label-updated`, `vf-p-label-deprecated`, `vf-p-label-in-progress` and `vf-p-label-validated`.

## Responsive tables

The `aria-label` attribute on table cells of the responsive table has been replaced by `data-heading`. This is to ensure information in the cells of the table isn't missed by screen readers. Please replace all `aria-label`'s on `<td>` elements in tables using the `p-table--mobile-card` class.

## Chips

By default, chips are not interactive anymore (they don't have hover, focus or active state). Apply the class to a button element to get interactive behaviour, e.g.: `<button class="p-chip">` instead of `<span class="p-chip">`.

The dismiss button in the chip now provides its own icon, so it should not include separate icon element. Please remove any icons from the chips, and only keep the `Dismiss` text in the button.

## Variables

`$grid-margin-width` is has been removed, as the grid margins differ at different breakpont. Use the values in `$grid-margin-widths` instead.

### Variable refactor

We've simplified the spacing variables in Vanilla. Please use the mapping below to update from the old variable names to the new ones:

#### Vertical spacing variables:

| Deprecated variable              | Replaced by                    | Default value |
| -------------------------------- | ------------------------------ | ------------- |
| `$multi`                         | Dropped. Delete any instances  | `–`           |
| `$spv-inner--x-small`            | `$spv--x-small`                | `0.25rem`     |
| `$spv-inner--x-small--scaleable` | `$spv--small`                  | `0.5rem`      |
| `$spv-inner--small`              | `$spv--small`                  | `0.5rem`      |
| `$spv-inner--medium`             | `$spv--medium`                 | `0.75rem`     |
| `$spv-inner--scaleable`          | `$spv--large`                  | `1rem`        |
| `$spv-inner--large`              | `$spv--large`                  | `1rem`        |
| `$spv-inner--x-large`            | Express as a sum of other vars | `2.75rem`     |
| `$spv-outer--small`              | `$spv--small`                  | `0.5rem`      |
| `$spv-outer--small-scaleable`    | `$spv--large`                  | `1rem`        |
| `$spv-outer--medium`             | `$spv--large`                  | `1rem`        |
| `$spv-outer--scaleable`          | `$spv--x-large`                | `1.5rem`      |
| `$spv-outer--shallow-scaleable`  | `$spv--x-large`                | `1.5rem`      |
| `$spv-outer--regular-scaleable`  | `$spv--strip-regular`          | `4rem`        |
| `$spv-outer--deep-scaleable`     | `$spv--strip-deep`             | `6rem`        |

#### Horizontal spacing variables:

| Spacing variable      | Formula                        | Default value |
| --------------------- | ------------------------------ | ------------- |
| `$sph-inner--small`   | `$sph--small`                  | `0.5rem`      |
| `$sph-inner`          | `$sph--large`                  | `1rem`        |
| `$sph-inner--large`   | Express as a sum of other vars | `1.5rem`      |
| `$sph-inner--x-large` | Express as a sum of other vars | `2.5rem`      |
| `$sph-outer`          | `$sph--small`                  | `0.5rem`      |
| `$sph-outer--large`   | Express as sum of above vars   | `1.5rem`      |

The keys in map `$nudges` no longer include the `nudge--` prefix. Please note these fail silently, so it is essential do a thorough search and replace them as part of the upgrade.
So any calls that previously included `nudge--` as in `map-get($nudges, nudge--p)`, should now be renamed to `map-get($nudges, p)`.

Full list of changed keys:

| Old key             | New key      |
| ------------------- | ------------ |
| nudge--h1-large     | h1-large     |
| nudge--h4-large     | h4-large     |
| nudge--h1           | h1           |
| nudge--h1-mobile    | h1-mobile    |
| nudge--h2           | h2           |
| nudge--h2-mobile    | h2-mobile    |
| nudge--h3           | h3           |
| nudge--h3-mobile    | h3-mobile    |
| nudge--h4           | h4           |
| nudge--h4-mobile    | h4-mobile    |
| nudge--h6           | h6           |
| nudge--h6-large     | h6-mobile    |
| nudge--p            | p            |
| nudge--p-ubuntumono | p-ubuntumono |
| nudge--small        | small        |
| nudge--x-small      | x-small      |
