---
wrapper_template: '_layouts/docs.html'
context:
  title: Color | Settings
---

## Color

<hr>

These guidelines are the framework upon which we have built our system for how color is used in Vanilla, we use a fairly neutral color palette along with a traffic light palette.

<div class="p-strip is-shallow">
  <div class="row">
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #fff"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-x-light<br><span class="p-muted-heading">#fff</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #f7f7f7"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-light<br><span class="p-muted-heading">#f7f7f7</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #e5e5e5"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-mid-x-light<br><span class="p-muted-heading">#e5e5e5</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #cdcdcd"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-mid-light<br><span class="p-muted-heading">#cdcdcd</span>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #666"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-mid-dark<br><span class="p-muted-heading">#666</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #111"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-dark<br><span class="p-muted-heading">#111</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #000"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-x-dark<br><span class="p-muted-heading">#000</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #333"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-brand<br><span class="p-muted-heading">#333</span>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #c7162b"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-negative<br><span class="p-muted-heading">#c7162b</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #f99b11"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-caution<br><span class="p-muted-heading">#f99b11</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #0e8420"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-positive<br><span class="p-muted-heading">#0e8420</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #24598f"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-information<br><span class="p-muted-heading">#24598f</span>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #06c"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-link<br><span class="p-muted-heading">#06c</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #e95420"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-accent<br><span class="p-muted-heading">#e95420</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #333"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-accent-background<br><span class="p-muted-heading">#333</span>
      </p>
    </div>
    <div class="col-2 p-card u-no-padding">
      <div class="p-strip is-shallow is-bordered" style="background-color: #fff"></div>
      <p class="p-card__content u-no-margin" style="padding: 1rem">
        $color-navigation-background<br><span class="p-muted-heading">#fff</span>
      </p>
    </div>
  </div>
</div>

You can define a brand color (`$color-brand`) that can be used for call-to-action buttons and other highlights across the framework. The default Vanilla brand color is `$color-dark`.

<img class="p-image--bordered" src="https://assets.ubuntu.com/v1/7446a44a-basics-brand-color.png" alt="">

### Accessibility

It’s important for us to meet all web accessibility standards. Vanilla encourages meeting the minimum contrast ratios specified by WCAG 2.1 Level AA for text, icons and background colors.

<div class="p-strip is-shallow">
  <div class="row">
     <div class="col-4">
       <div class="p-notification--positive">
        <p class="p-notification__response"><span class="p-notification__status">Do:</span>Use a minimum contrast ratio of 4.5 for normal text and UI components</p>
       </div>
       <img class="p-image--bordered" src="https://assets.ubuntu.com/v1/e1183cd5-basics-text-color-do.png" alt="text-color-do">
       <img class="p-image--bordered" src="https://assets.ubuntu.com/v1/92607803-basics-button-color-do.png" alt="button-color-do">
     </div>
    <div class="col-4">
      <div class="p-notification--negative">
        <p class="p-notification__response"><span class="p-notification__status">Don't:</span>Use low-contrast text and background combinations.</p>
      </div>
      <img class="p-image--bordered" src="https://assets.ubuntu.com/v1/66aa056d-basics-text-color-don%27t.png" alt="text-color-don't">
      <img class="p-image--bordered" src="https://assets.ubuntu.com/v1/0929f834-basics-button-color-don%27t.png" alt="button-color-don't">
    </div>
  </div>
</div>

### Color theming

Starting with the [2.3.0](https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.3.0) release, Vanilla framework introduces a theming mechanism. The current default for all components is referred to as the light theme. A subset of elements and components now offer a dark theme:

- [Checkbox](/docs/base/forms#checkbox) and [radio](/docs/base/forms#radio-button) form inputs
- Horizontal rule element `<hr />`
- [Contextual menu](/docs/patterns/contextual-menu)
- [Lists / Divider](/docs/patterns/lists#responsive-divider)
- [Lists / Middot](/docs/patterns/lists#middot)
- [Navigation](/docs/patterns/navigation)
- [Side navigation](/docs/patterns/navigation#side-navigation)
- [Search box](/docs/patterns/search-box)

| Element / Component | Variable                               | Default value |
| ------------------- | -------------------------------------- | ------------- |
| checkbox            | `$theme-default-forms`                 | `light`       |
| radio               | `$theme-default-forms`                 | `light`       |
| hr                  | `$theme-default-hr`                    | `light`       |
| Contextual menu     | `$theme-default-p-contextual-menu`     | `light`       |
| Lists / Divider     | `$theme-default-p-divider`             | `light`       |
| Lists / Middot      | `$theme-default-p-inline-list--middot` | `light`       |
| Navigation          | `$theme-default-nav`                   | `light`       |
| Side navigation     | `$theme-default-p-side-navigation`     | `light`       |
| Search box          | `$theme-default-p-search-box`          | `light`       |

Future releases will expand this list to include all elements and components.

#### Setting the default color theme per element / component

To set the default theme to dark on any of the elements / components listed above:

- Go to `_settings_themes.scss`
- Set the value of the respective variable in the table above to 'dark'

#### Invoking a theme that is not currently a default

Besides setting the default, you can invoke the non-default theme by adding a class to your markup. For the list of themed elements above, add `is-dark` (if the default for the respective element or component is `light`, or `is-light` if the default is dark.

### Design

For more information [view the color design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Color), which includes the specification in markdown format and a PNG image.
