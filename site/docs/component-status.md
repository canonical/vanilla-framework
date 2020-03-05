---
wrapper_template: '_layouts/default.html'
context:
  title: Component status
---

## Component status

<hr>

When we add, make significant updates, or deprecate a component we update their status so that it’s clear what’s available to use. Check back here anytime to see current status information.

### What's new in Vanilla 2.8

<table>
  <thead>
    <tr>
      <th style="width: 20%">Component</th>
      <th style="width: 10%">Status</th>
      <th style="width: 10%">Version</th>
      <th style="width: 60%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><a href="/docs/patterns/navigation">Navigation</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.8.0</td>
      <td>New navigation classes (<code>p-navigation__items</code>, <code>p-navigation__item</code>, <code>p-navigation__link</code>) were added to replace existing (<code>p-navigation__links</code>, <code>p-navigation__link</code>, and classless <code>&lt;a&gt;</code>).</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation">Navigation</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.8.0</td>
      <td>Navigation classes <code>p-navigation__links</code>, <code>p-navigation__link</code>, and classless <code>&lt;a&gt;</code> are deprecated and will be removed in future release v3.0. Please use new class names (<code>p-navigation__items</code>, <code>p-navigation__item</code>, <code>p-navigation__link</code>) instead.</td>
    </tr>
  </tbody>
</table>

#### Previously in Vanilla

<table>
  <thead>
    <tr>
      <th style="width: 20%">Component</th>
      <th style="width: 10%">Status</th>
      <th style="width: 10%">Version</th>
      <th style="width: 60%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <!-- 2.7.0 -->
    <tr>
      <th><a href="/docs/patterns/contextual-menu#theming">Contextual menu</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.7.0</td>
      <td>Added dark theme to contextual menu.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/typography#heading-classes">Heading classes</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.7.0</td>
      <td>New heading classes with numbers (<code>p-heading--1</code>, ...) were added for consistency with other class names we use.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/typography#heading-classes">Heading classes</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.7.0</td>
      <td>Heading classes with numbers as words (<code>p-heading--one</code>, <code>--two</code>, ...) are deprecated and will be removed in future release v3.0. Please use class names with numbers (<code>p-heading--1</code>, <code>--2</code>, ...) instead.</td>
    </tr>

    <tr>
      <th><a href="/docs/base/forms/#range">Range input</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.6.0</td>
      <td>Styling of Slider component was added to all <code>&lt;input type="range"&gt;</code> elements by default. This makes <code>p-slider</code> class optional for styling range inputs.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/forms/#checkbox">Checkbox, radio button</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.6.0</td>
      <td>New `is-table-header` added to properly align checkboxes and radio buttons used in table headers.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/slider">Slider</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.6.0</td>
      <td>Styling of Slider component was added to all <code>&lt;input type="range"&gt;</code> elements by default. This makes <code>p-slider</code> class optional for styling range inputs.</td>
    </tr>

    <tr>
      <th><a href="/docs/patterns/contextual-menu/#indicator">Contextual menu</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.5.0</td>
      <td>Optional state indicator was added to contextual menu</td>
    </tr>
    <tr>
      <th><a href="/docs/utilities/font-metrics/">Font metrics</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.5.0</td>
      <td>Added <code>u-visualise-font-metrics</code> utility to visualise font metrics</td>
    </tr>
    <tr>
      <th><a href="/docs/base/typography/#line-length">Line length</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.5.0</td>
      <td>Added <code>$max-width--default</code> variable and <code>u-no-max-width</code> utility to control line length</td>
    </tr>
    <tr>
      <th><a href="/docs/utilities/table-cell-padding-overlap/">Table cell padding overlap</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.5.0</td>
      <td>Added <code>u-table-cell-padding-overlap</code> utility to overlap table cell padding</td>
    </tr>
    <tr>
      <th><a href="/docs/utilities/truncate/">Truncation</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.5.0</td>
      <td>Added <code>u-truncate</code> utility to truncate text with ellipsis</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons/#social">Social icons</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.5.0</td>
      <td>Updated style of social icons. Added new <code>.p-icon--rss</code> and <code>p-icon--email</code> icons.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons/#social">Social icons</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.5.0</td>
      <td>We will be removing <code>p-icon--canonical</code> and <code>p-icon--ubuntu</code> from social icon set in future release v3.0</td>
    </tr>

  </tbody>
</table>

### Status key

<div class="row">
  <div class="col-4 u-equal-height">
    <div class="p-card--highlighted">
      <div class="p-label--new">New</div>
      <p class="p-card__content">Newly released components, utilities or settings that are safe to use in projects.</p>
    </div>
  </div>
  <div class="col-4 u-equal-height">
  <div class="p-card--highlighted">
      <div class="p-label--deprecated">Deprecated</div>
      <p class="p-card__content">These components, utilities or settings are in the process of being removed and should no longer be used in projects.</p>
    </div>
  </div>
  <div class="col-4 u-equal-height">
  <div class="p-card--highlighted">
      <div class="p-label--in-progress">In progress</div>
      <p class="p-card__content">Design spec and code implementation are not yet finished.</p>
    </div>
  </div>
  <div class="col-4 u-equal-height">
  <div class="p-card--highlighted">
      <div class="p-label--updated">Updated</div>
      <p class="p-card__content">These are existing components, utilities or settings that have been updated either through design or code.</p>
    </div>
  </div>
  <div class="col-4 u-equal-height">
  <div class="p-card--highlighted">
      <div class="p-label--validated">Validated</div>
      <p class="p-card__content">Proposal approved in our bi-weekly meeting . A design spec is created and development starts ready for code review.</p>
    </div>
  </div>
</div>
