---
wrapper_template: '_layouts/docs.html'
context:
  title: Component status
---

## Component status

<hr>

When we add, make significant updates, or deprecate a component we update their status so that it’s clear what’s available to use. Check back here anytime to see current status information.

### What's new in Vanilla 2.22

<table aria-label="What's new in Vanilla 2.22">
  <thead>
    <tr>
      <th style="width: 20%">Component</th>
      <th style="width: 15%">Status</th>
      <th style="width: 10%">Version</th>
      <th style="width: 55%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <!-- 2.23 -->
    <tr>
      <th><a href="/docs/patterns/buttons#active">Active button</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.23.0</td>
      <td>The <code>is-active</code> class was deprecated and given a more appropriate name: <code>is-processing</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#processing">Processing button</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.23.0</td>
      <td>We renamed <code>is-active</code> button state class to <code>is-processing</code>, which can be combined with <code>disabled</code> when a button needs to indicate a process is occurring while also preventing user interaction.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#code-snippet">Code snippet - Dropdowns</a></th>
      <td><div class="p-label--updated">New</div></td>
      <td>2.23.0</td>
      <td>We add the ability to include a contextual menu to a code snippet, allowing users to switch between related code examples.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#code-snippet">Code snippet</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.23.0</td>
      <td>We added a utility class for <code>.p-code-snippet__block</code> that allows content to wrap, rather than horizontally scroll: <code>.is-wrapped</code>.</td>
    </tr>
  </tbody>
  </tbody>
</table>

#### Previously in Vanilla

<table>
  <thead>
    <tr>
      <th style="width: 20%">Component</th>
      <th style="width: 15%">Status</th>
      <th style="width: 10%">Version</th>
      <th style="width: 55%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <!-- 2.22 -->
    <tr>
      <th><a href="/docs/base/separators">Separator</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.22.0</td>
      <td>The new <code>p-separator</code> component has been added to be used as a separator between content blocks.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#code-snippet">Code snippet</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.22.0</td>
      <td>The new <code>.p-code-snippet</code> component has been added, to be used to display code examples in a number of different formats.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#copyable">Code copyable</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.22.0</td>
      <td><code>.p-code-copyable</code> has been deprecated and will be removed in the v3.0 release. Please use <code>.p-code-snippet .p-code-snippet__block--icon</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#numbered">Code numbered</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.22.0</td>
      <td><code>.p-code-numbered</code> has been deprecated and will be removed in the v3.0 release. Please use <code>.p-code-snippet .p-code-snippet__block--numbered</code> instead.</td>
    </tr>
    <!-- 2.21 -->
    <tr>
      <th><a href="/docs/patterns/icons#standard">Icons - Contextual Menu</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.21.0</td>
      <td>The <code>p-icon--contextual-menu</code> has been deprecated and will be removed in future release v3.0. Please use existing <code>.p-icon--chevron-down</code> and <code>.p-icon--chevron-up</code> icons instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons#additional">Icons - Additional</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.21.0</td>
      <td>We added many more icons, outside of the base icon set. These icons are not included in Vanilla by default, but can be individually included as needed.</td>
    </tr>
    <tr>
      <th><a href="/docs/layouts/application#panels">Application layout - panels</a></th>
      <td><div class="p-label--in-progress">In progress</div></td>
      <td>2.21.0</td>
      <td>We continue working on application layout panels styling. We improved the positioning of the logo, title and controls in panel headers.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#application-layout">Application layout - side navigation</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.21.0</td>
      <td>We implemented and documented improvements for <a href="/docs/patterns/navigation#application-layout">side navigation component</a> for the <a href="/docs/layouts/application#side-navigation">application layout</a>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#sticky">Side navigation - Sticky</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.21.0</td>
      <td>Side navigation component used to be sticky by default. We now introduced new <code>is-sticky</code> variant that should be used to optionally make side navigation sticky.</td>
    </tr>
    <!-- 2.20 -->
    <tr>
      <th><a href="/docs/layouts/application#responsive-application-layout">Application layout panels</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.20.0</td>
      <td>We updated the responsive styles of application layout panels and introduced some class names and variables for more flexible customization options.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#small">Small buttons</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.20.0</td>
      <td>We added an <code>is-small</code> modifier class for buttons, which can be combined with <code>is-dense</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#small">Active buttons</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.20.0</td>
      <td>We added an <code>is-active</code> state class for buttons, which can be combined with <code>disabled</code> when a button needs to indicate a process is occurring while also preventing user interaction.</td>
    </tr>
    <!-- 2.19 -->
    <tr>
      <th><a href="/docs/base/tables#expanding">Expanding table column placeholder</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.19.2</td>
      <td>We started using <code>aria-hidden="true"</code> attribute to hide the dummy table header in place of previously used <code>u-hide</code> utility.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#icons">Table icons</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.19.0</td>
      <td>We added a <code>p-table__cell--icon-placeholder</code> class to properly align icons in table cells.</td>
    </tr>
    <!-- 2.18 -->
    <tr>
      <th><a href="/docs/patterns/breadcrumbs">Breadcrumbs</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.18.0</td>
      <td>We updated the markup of the breadcrumbs component to comply with accessibility requirements. The class <code>.p-breadcrumbs</code> is now moved onto a <code>&lt;nav&gt;</code> element, the unordered list has been changed to an ordered one that has a class <code>.p-breadcrumbs__items</code>. </td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/breadcrumbs#deprecated-markup">Breadcrumbs</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.18.0</td>
      <td>Top level <code>&lt;ul&gt;</code> with a class <code>.p-breadcrumbs</code> is now deprecated for the Breadcrumbs pattern.</td>
    </tr>
    <!-- 2.17 -->
    <tr>
      <th><a href="/docs/base/forms#checkbox">Checkbox and radio buttons components</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.17.0</td>
      <td>We introduced new <code>.p-checkbox</code> and <code>.p-radio</code> components. They replace the existing styling of base form inputs.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/forms#deprecated-base-checkboxes">Checkbox and radio buttons elements</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.17.0</td>
      <td>Base styled checkboxes and radio buttons (on <code>&lt;input type="checkbox"&gt;</code> or <code>&lt;input type="radio"&gt;</code> elements) are deprecated and they will be reverted to native browser inputs in future version of Vanilla. Please use on bWe added new layout styles for building responsive full-screen applications.</td>
    </tr>
    <!-- 2.16 -->
    <tr>
      <th><a href="/docs/layouts/application">Application layout</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.16.0</td>
      <td>We added new layout styles for building responsive full-screen applications.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/strip#suru-strip">Suru strip</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.16.0</td>
      <td>We added new strip variants <code>.p-strip--suru</code> and <code>.p-strip--suru-topped</code>.</td>
    </tr>
    <!-- 2.15 -->
    <tr>
      <th><a href="/docs/patterns/chip">Chip</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.15.0</td>
      <td>We added the new <code>.p-chip</code> component to be used to display small actionable pieces of information.</td>
    </tr>
    <!-- 2.14 -->
    <tr>
      <th><a href="/docs/patterns/lists#inline-stretched">List inline stretched</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.14.0</td>
      <td>We added the new <code>.p-inline-list--stretch</code> list variant that arranges items so they span the full width of the parent container.</td>
    </tr>
    <!-- 2.13 -->
    <tr>
      <th><a href="/docs/patterns/accordion#headings">Accordion</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.13.0</td>
      <td>We updated the accordion component with a new <code>.p-accordion__tab--with-title</code> variant that allows using headings in accordion buttons.</td>
    </tr>
    <!-- 2.12 -->
    <tr>
      <th><a href="/docs/base/typography#muted-text">Muted text</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.12.0</td>
      <td>New <code>u-text--muted</code> utility class has been added.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons">Icons</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.12.0</td>
      <td>The icons have been updated to new style.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons#standard">Icons - Question</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>2.12.0</td>
      <td>The <code>p-icon--question</code> has been deprecated will be removed in future release v3.0. Please use existing `.p-icon--help` icon instead.</td>
    </tr>
    <!-- 2.11.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.11.0</td>
      <td>A no-JS fallback was added for the side navigation toggle functionality on small screens.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#raw-html">Side navigation</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.11.0</td>
      <td>A new raw HTML variant of the side navigation component.</td>
    </tr>
    <!-- 2.10.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>2.10.0</td>
      <td>Update to the responsive styling of the side navigation.</td>
    </tr>
    <!-- 2.9.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>2.9.0</td>
      <td>New side navigation component was added.</td>
    </tr>
    <!-- 2.8.0 -->
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

### Upgrade guide

During the development of Vanilla v2 several CSS class names or SCSS mixins and placeholders have been deprecated and will be removed in the upcoming release v3.0.

See [the upgrade guide](/docs/upgrade-guide-v3) to learn about all the breaking changes that will happen when these deprecated features are removed and how to update the code for a future version of Vanilla.

### Status key

<div class="row">
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <div class="p-label--new">New</div>
      <p class="p-card__content">Newly released components, utilities or settings that are safe to use in projects.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
  <div class="p-card--highlighted">
      <div class="p-label--deprecated">Deprecated</div>
      <p class="p-card__content">These components, utilities or settings are in the process of being removed and should no longer be used in projects.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
  <div class="p-card--highlighted">
      <div class="p-label--in-progress">In progress</div>
      <p class="p-card__content">Design spec and code implementation are not yet finished.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
  <div class="p-card--highlighted">
      <div class="p-label--updated">Updated</div>
      <p class="p-card__content">These are existing components, utilities or settings that have been updated either through design or code.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
  <div class="p-card--highlighted">
      <div class="p-label--validated">Validated</div>
      <p class="p-card__content">Proposal approved in our bi-weekly meeting . A design spec is created and development starts ready for code review.</p>
    </div>
  </div>
</div>
