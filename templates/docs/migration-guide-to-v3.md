---
wrapper_template: '_layouts/docs.html'
context:
  title: Migrating to Vanilla 3.0
---

Vanilla 3.0 introduces a number of breaking changes, and this upgrade guide provides detailed instructions on the actions needed to make the transition a smooth one.

## Building and importing

Vanilla 3.0 requires use of latest `sass` library and drops support for `node-sass`. If you are still using `node-sass` to build your styles, you need to switch to `sass` instead.

Additionally, with introduction of `sass` we improved the way Vanilla can be imported to your project. Instead of importing source files directly by their path (`@import "vanilla-framework/build/vanilla"`), you can now simply import Vanilla package `@import "vanilla-framework";`. Make sure to `@include vanilla` after the import. This is now a recommended way of importing Vanilla, please update any imports you have:

```scss
@import 'vanilla-framework';
@include vanilla;
```

You'll need to make sure you're on the latest version of sass, check our [building documentation](/docs/building-vanilla) for more information on how to use `sass` to import and build Vanilla.

## Spacing variables

We've simplified the spacing variables in Vanilla. Please use the mapping below to update from the old variable names to the new ones:

### Vertical spacing variables:

| Removed variable                 | Replaced by                    | Default value |
| -------------------------------- | ------------------------------ | ------------- |
| `$multi`                         | Dropped. Delete any instances  | `–`           |
| `$spv-inner--small`              | `$spv--small`                  | `0.5rem`      |
| `$spv-inner--x-small--scaleable` | `$spv--small`                  | `0.5rem`      |
| `$spv-inner--x-small`            | `$spv--x-small`                | `0.25rem`     |
| `$spv-inner--medium`             | `$spv--medium`                 | `0.75rem`     |
| `$spv-inner--scaleable`          | `$spv--large`                  | `1rem`        |
| `$spv-inner--large`              | `$spv--large`                  | `1rem`        |
| `$spv-inner--x-large`            | Express as a sum of other vars | `2.75rem`     |
| `$spv-outer--small-scaleable`    | `$spv--large`                  | `1rem`        |
| `$spv-outer--small`              | `$spv--small`                  | `0.5rem`      |
| `$spv-outer--medium`             | `$spv--large`                  | `1rem`        |
| `$spv-outer--scaleable`          | `$spv--x-large`                | `1.5rem`      |
| `$spv-outer--shallow-scaleable`  | `$spv--x-large`                | `1.5rem`      |
| `$spv-outer--regular-scaleable`  | `$spv--strip-regular`          | `4rem`        |
| `$spv-outer--deep-scaleable`     | `$spv--strip-deep`             | `6rem`        |

### Horizontal spacing variables:

| Removed variable      | Replaced by                    | Default value |
| --------------------- | ------------------------------ | ------------- |
| `$sph-inner--x-large` | Express as a sum of other vars | `2.5rem`      |
| `$sph-inner--large`   | Express as a sum of other vars | `1.5rem`      |
| `$sph-inner--small`   | `$sph--small`                  | `0.5rem`      |
| `$sph-inner--x-small` | `$sph--x-small`                | `0.25rem`     |
| `$sph-inner`          | `$sph--large`                  | `1rem`        |
| `$sph-outer--large`   | Express as a sum of other vars | `1.5rem`      |
| `$sph-outer`          | `$sph--large`                  | `1rem`        |

<div class="p-notification--information">
  <div class="p-notification__content">
    <p class="p-notification__message">In cases where your build fails because of a missing variable and you can't figure out what to replace it with, feel free to hardcode its value in <code>rem</code> temporarily, but leave a <code>FIXME</code> comment around it, to update it later when your styles build without errors.</p>
  </div>
</div>

### Text element max-width

Max-widths should not be based on font-size. Legacy classes, placeholders, and mixins that used a font-size based max-width setting have been removed.
All heading related max-width variables have been replaced by one single variable - `$text-max-width`, which is an updated version of the `$max-width--default` variable.

Removed max width features include: `max-width--p` and `%measure--p` placeholders, `measure--p` class name, `vf-b-typography-max-widths`, `p-max-width`, `heading-max-width--short`, `heading-max-width--long`, `p-max-width--long` mixins.

You can add `max-width: $text-max-width` to replace them.

### Nudges map

The keys in map `$nudges` no longer include the `nudge--` prefix. Please note these fail silently, so it is essential do a thorough search and replace them as part of the upgrade.
So any calls that previously included `nudge--` as in `map-get($nudges, nudge--p)`, should now be renamed to `map-get($nudges, p)`.

Full list of changed keys:

| Removed map key       | Replaced by    |
| --------------------- | -------------- |
| `nudge--h1-mobile`    | `h1-mobile`    |
| `nudge--h1-large`     | `h1-large`     |
| `nudge--h1`           | `h1`           |
| `nudge--h2-mobile`    | `h2-mobile`    |
| `nudge--h2`           | `h2`           |
| `nudge--h3-mobile`    | `h3-mobile`    |
| `nudge--h3`           | `h3`           |
| `nudge--h4-large`     | `h4-large`     |
| `nudge--h4-mobile`    | `h4-mobile`    |
| `nudge--h4`           | `h4`           |
| `nudge--h6-large`     | `h6-mobile`    |
| `nudge--h6`           | `h6`           |
| `nudge--p-ubuntumono` | `p-ubuntumono` |
| `nudge--p`            | `p`            |
| `nudge--small`        | `small`        |
| `nudge--x-small`      | `x-small`      |

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">Sass will not throw errors or warn you if the key doesn't exist in the map. Please make sure you correctly search and replace any map keys and verify that affected styles render correctly in the browser.</p>
  </div>
</div>

### Icon sizes

The `accordion` key in map `$icon-sizes` has been renamed to `small`. It is currently used in chips, and is suitable to other situations where the icons sits next to small text.

| Removed map call                  | Replaced by                   |
| --------------------------------- | ----------------------------- |
| `map-get($icon-sizes, accordion)` | `map-get($icon-sizes, small)` |

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">Sass will not throw errors or warn you if the key doesn't exist in the map. Please make sure you correctly search and replace any map keys and verify that affected styles render correctly in the browser.</p>
  </div>
</div>

## Breakpoints

Vanilla v3.0 introduces several changes and updates to media query breakpoints and responsive behaviour of utilities and components.

In Vanilla 3.0 there are 2 main breakpoints used by media queries: `$breakpoint-large` and `$breakpoint-small`, and they divide the possible screen widths into 3 ranges:

- small screens (smaller than `$breakpoint-small`)
- medium screens (starting at `$breakpoint-small` and smaller than `$breakpoint-large`)
- large screens (from `$breakpoint-large` and bigger)

Additionally some components that require more granular responsiveness use `$breakpoint-x-small` (to target mobile screens in portrait mode) or `$breakpoint-x-large` (to target large widescreen displays).

The `$breakpoint-medium` variable has been removed from Vanilla. All media queries in components and utilities that used this value have been updated to either `$breakpoint-large` or `$breakpoint-small` (whichever was more relevant). If you use `$breakpoint-medium` in your project it should be replaced with `$breakpoint-large` or `$breakpoint-small`.

The default value of `$breakpoint-navigation-threshold` was previously set to `$breakpoint-medium` and is now, since Vanilla 3.8, `$breakpoint-large` (it used to be `$breakpoint-small` in Vanilla 3.0 - 3.7.1). This value should be overridden in project code to adjust the threshold at which navigation switches to dropdown, based on the number of navigation items.

### Using min-width and max-width media queries

By default we follow mobile first approach and it is recommended to use `min-width` queries.

```scss
.your-styles {
  // default styles for all screen sizes
  // ...

  @media (min-width: $breakpoint-small) {
    // styles for medium and large screens
    // ...
  }

  @media (min-width: $breakpoint-large) {
    // styles for large screens
    // ...
  }
}
```

To ensure the consistency of media queries and avoid conflicting styles you can build media queries without overlapping ranges.

```scss
.your-styles {
  // default styles for all screen sizes
  // ...

  @media (max-width: $breakpoint-large - 1) {
    // styles for small screens only
  }

  @media (min-width: $breakpoint-small) and (max-width: $breakpoint-large - 1) {
    // styles for medium screens only
  }

  @media (min-width: $breakpoint-large) {
    // styles for large screens only
  }
}
```

Make sure to use `$breakpoint - 1` whenever you use `max-width` in media query.

Refer to our [breakpoints settings documentation](/docs/settings/breakpoint-settings) for more information.

### Show/hide utils

The changes to the responsive breakpoint affect how the show/hide utilities behave. In previous version of Vanilla it was quite inconsistent between different utils and grid.

In Vanilla v3.0, any utils with `--small` modifier only affect small screens (below `$breakpoint-small`), with `--medium` modifier affect medium screens (between `$breakpoint-small` and `$breakpoint-large`), and with `--large` the large screens respectively.

This change may affect the current usage of responsive `u-hide` variants. Most notably, in places where the `u-hide--small` class is currently used, `u-hide--medium` may need to be added (to cover both small and medium screens). This is to replicate current behaviour of `u-hide--small`, ensuring the element is hidden on small and medium screens.

Please make sure to properly QA any changes around media queries or responsive utilities to verify if they work as expected in given context.

Refer to [show](/docs/utilities/show) and [hide utils documentation](/docs/utilities/hide) for more details and examples.

## Grid

### Grid spacing maps

Previously used `$grid-margin-width` is has been removed, as the grid margins differ at different breakpoints. Use the values in `$grid-margin-widths` instead.

The SCSS maps defining grid margins and gutters have been simplified. In both `$grid-gutter-widths` and `$grid-margin-widths`, the `medium` and `large` keys have changed to `default`. So any calls that previously included `medium` or `large` as in `map-get($grid-gutter-widths, medium)`, should now be renamed to `map-get($grid-gutter-widths, default)`.

| Removed map key | Replaced by |
| --------------- | ----------- |
| `medium`        | `default`   |
| `large`         | `default`   |

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">Sass will not throw errors or warn you if the key doesn't exist in the map. Please make sure you correctly search and replace any map keys and verify that affected styles render correctly in the browser.</p>
  </div>
</div>

### Grid modifications

The `vf-p-grid-modifications` mixin was unnecessary and has been removed. Any references to it can be removed from code.

### Column classes

Use of `col` classes outside of `row` is no longer supported. If you use `col-X` class names outside of `row`, or your custom styling depends on specificity of a `col-X` class name, you will need to review and update your styles accordingly.

### Column layout change

Previously, the grid layout would switch from 6 to 12 columns wide at the medium breakpoint. With the removal of the medium breakpoint, this has been changed so that the switch happens at the large breakpoint instead. We recommend visually checking your layouts at each breakpoint for any adverse effects this change may cause.

Refer to [grid documentation](/docs/patterns/grid) for more details and examples.

## Buttons

### Neutral buttons have been removed

The neutral button style provided by `p-button--neutral` was exactly the same as the default `p-button` styling, so it has been removed. Please use `p-button` or class-less `<button>` element instead.

### Full width mobile buttons have been removed

In Vanilla 2.0 buttons on smallest screens (below `$breakpoint-x-small`) were extended to full 100% width. This was causing issues on some layouts and with some utilities, so is no longer part of Vanilla 3.0. If your project has any custom code that was needed because of full width buttons you may need to update or remove it.

### "Active" button state has been renamed to "processing"

The state initially implemented as "active" via `is-active` class name on the buttons has been renamed to `is-processing` to avoid confusion with native active state of the interactive elements. If you use `is-active` class on any buttons (to keep them opaque even when disabled) you need to change the class name to `is-processing`.

| Removed class      | Replaced by            |
| ------------------ | ---------------------- |
| `button.is-active` | `button.is-processing` |

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">We use the <code>is-active</code> class name in various components to denote the active state, so make sure you rename it <b>only</b> in the context of buttons.</p>
  </div>
</div>

The previous `vf-button-active` mixin was renamed to `vf-button-processing`. Additionally the `vf-button-white-success-icon` mixin has been removed (it is not needed anymore as the `%vf-button-white-success-icon` placeholder it used to provide is part of the Vanilla base styles now).

Refer to [button documentation](/docs/patterns/buttons#processing) for more details and examples.

## Text elements

### Headings

Heading pattern classes with a word suffix have been replaced by classes with a number suffix:

| Removed classes    | Replaced by    |
| ------------------ | -------------- |
| `p-heading--one`   | `p-heading--1` |
| `p-heading--two`   | `p-heading--2` |
| `p-heading--three` | `p-heading--3` |
| `p-heading--four`  | `p-heading--4` |
| `p-heading--five`  | `p-heading--5` |
| `p-heading--six`   | `p-heading--6` |

Refer to [headings documentation](/docs/base/typography#heading-classes) for more details and examples.

### External links

The `p-link--external` class has been removed, so elements using that class will no longer include an appended external link icon. Any uses of this class can be safely removed.

<h2 id="navigation-title">Navigation</h2>

### Custom navigation background colour has been removed

The color variable `$color-navigation-background` has been removed, please use the default light and dark themed navigation patterns.

### Navigation class names have been updated

The `row` class should not be used inside global navigation pattern. Use `p-navigation__row` for fixed-width or `p-navigation_row--full-width` for full-width navigation.

Navigation classes `p-navigation__links`, `p-navigation__link`, and classless `<a>` have been removed. Please use new class names `p-navigation__items`, `p-navigation__item`, `p-navigation__link` instead.

| Removed classes             | Replaced by                                    |
| --------------------------- | ---------------------------------------------- |
| `p-navigation__links`       | `p-navigation__items`                          |
| `p-navigation__link`        | `p-navigation__item`                           |
| `li.p-navigation__link > a` | `li.p-navigation__item > a.p-navigation__link` |

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">Please note that <code>.p-navigation__link</code> class name is used in both deprecated and new versions, but on different elements. When upgrading make sure not to replace valid new uses of <code>.p-navigation__link</code> applied to links (<code>&lt;a&gt;</code>), but only old ones applied to list items (<code>&lt;li&gt;</code>).</p>
  </div>
</div>

Refer to [navigation documentation](/docs/patterns/navigation) for more details and code examples.

### Sub-navigation component was replaced by navigation dropdowns

Navigation dropdowns implemented with separate `p-subnav` classes have also been removed. This class name and its associated child elements should be updated simply by substituting the following class names:

| Removed classes          | Replaced by                           |
| ------------------------ | ------------------------------------- |
| `p-subnav__items--right` | `p-navigation__dropdown--right`       |
| `p-subnav__items`        | `p-navigation__dropdown`              |
| `p-subnav__item`         | `p-navigation__dropdown-item`         |
| `p-subnav`               | `p-navigation__item--dropdown-toggle` |

The `<a>` element that toggles the dropdown element should have the `p-navigation__link` class, as well as an `aria-controls` attribute that references the `id` attribute of the dropdown element.

The `vf-p-subnav` mixin was also removed. navigation dropdown styles are part of the main `vf-p-navigation` mixin, so they don't need to be included separately anymore.

Refer to [navigation dropdowns documentation](/docs/patterns/navigation#dropdown) for more details and code examples.

### Expanding search box

If a search box is being used in the top navigation, you now have the option to use the new [expanding search](/docs/examples/patterns/navigation/search-dark) component. We haven't removed the old search box, so this update is completely optional.

## Form elements

### Base checkbox and radio styles

Previously, base checkbox and radio elements were styled to look like the [`.p-checkbox`](/docs/base/forms#checkbox) and [`.p-radio`](/docs/base/forms#radio-button) patterns. The base styles have been removed, please use the pattern markup instead.

### Switch

The switch component has been updated with new HTML structure more consistent with how checkbox component is built.
The `p-switch` class name is no longer placed on the checkbox input element, it should be moved to the label element wrapping the input. The class name on the input element itself should be renamed to `p-switch__input`.
If the switch is supposed to have a label next to it, it should be added as an element with `p-switch__label` class name.

Refer to [the switch component documentation](/docs/patterns/switch) page for more details and code example.

### Slider

Adding `p-slider` class to style `<input type='range'>` is optional, so this class name can be safely removed from HTML if it's used solely to style range inputs. Classes `p-slider__wrapper` and `p-slider__input` are still used when building [slider with text input](/docs/patterns/slider) combo.

Refer to [the slider component documentation](/docs/patterns/slider) page for more details and code example.

## Tables

### Renamed expanding and sortable tables

We removed `p-table-expanding` and `p-table-expanding__panel`. Use `p-table--expanding` and `p-table__expanding-panel` instead.

We removed the `p-table--sortable` that was previously required to enable sorting functionality in the tables. Currently any table with correctly used `aria-sort` attributes on column headers can be sorted. The `p-table--sortable` class name can be removed from HTML (any relevant JavaScript may need to be updated).

| Removed classes            | Replaced by                |
| -------------------------- | -------------------------- |
| `p-table-expanding`        | `p-table--expanding`       |
| `p-table-expanding__panel` | `p-table__expanding-panel` |
| `p-table--sortable`        | `aria-sort="none"`         |

### Hidden cell in expanding table

Using `u-hide` utility inside expanding table to hide table heading placeholder is not recommended. Use [the recommended ARIA attribute](/docs/base/tables#expanding), `aria-hidden="true"`, instead.

### Responsive tables

The `aria-label` attribute on table cells of the responsive table has been replaced by `data-heading`. This is to ensure information in the cells of the table isn't missed by screen readers. Please replace all `aria-label`'s on `<td>` elements in tables using the `p-table--mobile-card` class.

Refer to [the table component documentation](/docs/base/tables) page for more details and code examples.

## Accordion

We updated the HTML structure of the accordion component and removed the classes `p-accordion__title` and `p-accordion__tab--with-title` used for accordion headings, in favour of a more accessible accordion structure. If headings are used in accordion, the HTML structure needs to be updated.

Refer to [the accordion component documentation](/docs/patterns/accordion) page for more details and code examples.

## Breadcrumbs

We updated the markup of the breadcrumbs component to comply with accessibility requirements. The `p-breadcrumbs` class has moved from the `<ul>` element to a a parent `<nav>` element, with an additional `aria-label` description of "Breadcrumbs". An `<ol>` element replaces the `<ul>` with the class `p-breadcrumbs__items`.

Refer to [the breadcrumbs component documentation](/docs/patterns/breadcrumbs) page for more details and code examples.

## Chips

As chips are meant to be interactive by default, they now use the `<button>` element. Any chips that don't have a dismiss button should be built using `<button class="p-chip">` instead of `<span class="p-chip">`. Only chips that have the dismiss button still use span as their main element.

Also, the dismiss button in chips has been updated. It now provides its own icon, so it should not include a separate icon element. Please remove any icons from the chips, and keep only the `Dismiss` text in the button.

Refer to [the chips component documentation](/docs/patterns/chip) page for more details and code examples.

## Code

There have been some changes to the code pattern. We removed the copy to clipboard option, so the `vf-p-code-copyable` mixin and `p-code-copyable` class have both been removed.

The `p-code-numbered` class has been removed, along with the mixin `vf-p-code-numbered`. Please use `p-code-snippet` and `p-code-snippet__block--numbered` from the new [code snippet](/docs/base/code#numbered-code-snippet) pattern instead.

Refer to [the code snippet component documentation](/docs/base/code#code-snippet) page for more details and code examples.

## Icons

The `p-icon--question` icon has been removed. Please use the existing `p-icon--help` icon instead. Corresponding mixins `vf-p-icon-question` and `vf-icon-question` have also been removed. Please use `vf-p-icon-help` and `vf-icon-help`, respectively, instead.

The `p-icon--contextual-menu` icon has been removed and replaced by the chevron `p-icon--chevron-down` or `p-icon--chevron-up` icons. The mixin `vf-icon-contextual-menu` has also been removed.

The `vf-p-icon-in-button` mixin is no longer necessary and has been removed. Any code that includes this mixin can be removed.

The `p-icon--canonical` and `p-icon--ubuntu` from the social icon set have been removed, along with their corresponding mixins: `vf-icon-canonical`, `vf-p-icon-canonical`, `vf-icon-ubuntu`, `vf-p-icon-ubuntu`. Please use alternative icons from our social set or a bespoke branded icon for your project.

| Removed classes           | Replaced by               |
| ------------------------- | ------------------------- |
| `p-icon--question`        | `p-icon--help`            |
| `p-icon--contextual-menu` | `p-icon--chevron-down`    |
| `p-icon--canonical`       | Dropped, use another icon |
| `p-icon--ubuntu`          | Dropped, use another icon |

Refer to [the icons documentation](/docs/patterns/icons) page for more details and code examples.

## Inline images

We removed the inline images (`p-inline-images`) component. Please use the [logo section component](/docs/patterns/logo-section) instead.

<div class="p-notification--caution">
  <div class="p-notification__content">
    <p class="p-notification__message">The logo section component requires images to have identical dimensions, so you will not only need to update the HTML markup of the component, but also change the URLs of logo images to new ones.</p>
  </div>
</div>

Refer to [the logo section component documentation](/docs/patterns/logo-section) page for more details and code examples.

## Labels

The colour variants of the label pattern have been renamed to use consistent semantic naming with coloured chips. Old class names based on Vanilla component status names have been removed. Previous `p-label--validated` variant doesn't have direct equivalent, please use `p-label--positive` or `p-label--information` depending on your use case.

| Removed classes        | Replaced by                                   |
| ---------------------- | --------------------------------------------- |
| `p-label--deprecated`  | `p-label--negative`                           |
| `p-label--in-progress` | `p-label--caution`                            |
| `p-label--new`         | `p-label--positive`                           |
| `p-label--updated`     | `p-label--information`                        |
| `p-label--validated`   | `p-label--information` or `p-label--positive` |

The individual mixins for label variants have been removed. All necessary styles are included in main `vf-p-label` mixin. If you use any of the following individual mixins you can remove them from your code: `vf-p-label-new`, `vf-p-label-updated`, `vf-p-label-deprecated`, `vf-p-label-in-progress` and `vf-p-label-validated`.

<div class="p-notification--information">
  <div class="p-notification__content">
    <p class="p-notification__message">Since Vanilla 3.2 the label component has been renamed to status label. Refer to the <a href="/docs/patterns/status-labels">status label component</a> page for more details and code examples.
  </div>
</div>

## Notifications

The notification child classes have been replaced to support new variants. The following class substitutions can be used to support existing functionality:

| Removed classes            | Replaced by               |
| -------------------------- | ------------------------- |
| `p-notification__response` | `p-notification__content` |
| `p-notification__status`   | `p-notification__title`   |
| `p-icon--close`            | `p-notification__close`   |

The text content of the notifications should also be wrapped in element with `p-notification__message` class name. This element didn't exist in previous version of notification pattern and should be added for best compatibility.

Additionally the `p-notification__action` class should no longer be used for links in notification text. Instead, it should be used for notification action buttons.

Refer to [the notification component documentation](/docs/patterns/notification#actions) page for more details and code examples.

## Pagination links

The `p-article-pagination__link` was removed, as only its variants (`.p-article-pagination__link--next` and `p-article-pagination__link--previous`) were meant to be used.

Refer to [the pagination component documentation](/docs/patterns/pagination) page for more details and code examples.
