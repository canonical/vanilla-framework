---
wrapper_template: '_layouts/docs.html'
context:
  title: Customising Vanilla
---

Here you will find information on customising Vanilla to suit your project.

## Overriding default settings

To override the default settings you must do so _before_ you include Vanilla in your main Sass file. It is good practice to include custom styles in a separate settings file. A list of configurable settings can be found in the [Related settings section](#related-settings).

```
// Override default Vanilla settings in your main Sass file
$breakpoint-navigation-threshold: 900px;
$color-accent: #7cf0ee;
$font-base-family: 'Merriweather';
$grid-max-width: 1440px;

// ...or include it from a separate settings file in the same folder
@import 'settings';

// Import Vanilla framework
@import 'vanilla-framework';

// Include all of Vanilla Framework
@include vanilla;
```

## Importing individual components

Your project may not warrant including all of Vanilla, in which case you can include components modularly. We recommend including `vf-base` as many components depend on the base styling. As a bare minimum, you need to include `vf-b-placeholders`, as many patterns extend these placeholders and will generate errors if they are missing. Below is an example of how to include Vanilla components on an as-needed basis:

```
// Import Vanilla framework
@import 'vanilla-framework';

// Include base Vanilla styles
@include vf-base;

// Include the components you want
@include vf-p-buttons;
@include vf-p-forms;
@include vf-p-links;
```

## Related settings

<div class="row">
  <div class="col-3">
  <ul class="p-list--divided">
  <li class="p-list__item"><a href="/docs/settings/animation-settings">Animation</a></li>
  <li class="p-list__item"><a href="/docs/settings/assets-settings">Assets</a></li>
  <li class="p-list__item"><a href="/docs/settings/breakpoint-settings">Breakpoint</a></li>
  </ul>
  </div>
  <div class="col-3">
  <ul class="p-list--divided">
  <li class="p-list__item"><a href="/docs/settings/color-settings">Color</a></li>
  <li class="p-list__item"><a href="/docs/settings/font-settings">Font</a></li>
  <li class="p-list__item"><a href="/docs/settings/layout-settings">Layout</a></li>
  </ul>
  </div>
  <div class="col-3">
  <ul class="p-list--divided">
  <li class="p-list__item"><a href="/docs/settings/placeholder-settings">Placeholder</a></li>
  <li class="p-list__item"><a href="/docs/settings/spacing-settings">Spacing</a></li>
  </ul>
  </div>
</div>
