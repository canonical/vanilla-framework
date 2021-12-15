---
wrapper_template: '_layouts/docs.html'
context:
  title: What's new in Vanilla
---

# What's new in Vanilla {{versionMinor}}

<hr>

When we add, make significant updates, or deprecate a component we update their status so that it’s clear what’s available to use. Check back here anytime to see current status information.

<table aria-label="What's new in Vanilla {{versionMinor}}">
  <thead>
    <tr>
      <th style="width: 20%">Component</th>
      <th style="width: 15%">Status</th>
      <th style="width: 10%">Version</th>
      <th style="width: 55%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <!-- 3.00 -->
    <tr>
      <th><a href="/docs/patterns/labels">Labels</a></th>
      <td>
        <span class="p-label--information">Updated</span>
      </td>
      <td>3.0.0</td>
      <td>We've updated the labels component by introducing new semantic class names consistend with tinted chips.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/chip">Chips</a></th>
      <td>
        <span class="p-label--information">Updated</span>
      </td>
      <td>3.0.0</td>
      <td>We've added tinted chips. The tints are based on the semantic colours (positive, caution, negative) plus a dark blue one that matches the blue used in the information flavour of the notification component.</td>
    </tr>
  </tbody>
</table>

## Components removed in 3.0

<table aria-label="What's new in Vanilla {{versionMinor}}">
  <thead>
    <tr>
      <th style="width: 20%">Component</th>
      <th style="width: 15%">Status</th>
      <th style="width: 10%">Version</th>
      <th style="width: 55%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <!-- 3.00 -->
    <tr>
      <th><a href="/docs/patterns/notification#deprecated">Notifications structure</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.33.0</td>
      <td>The following notification classes have been deprecated: <code>.p-notification__response</code>, <code>.p-notification__status</code></td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#neutral">Button / Neutral</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.32.0</td>
      <td>The neutral button variant <code>p-button--neutral</code> is deprecated, please use default <code>p-button</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#dropdown">Navigation / Sub-navigation</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.31.0</td>
      <td>The <code>.p-subnav</code> class previously could theoretically be used outside of the main <code>.p-navigation</code> component, which was not intended. It has been deprecated, and succeeded by the <code>.p-navigation__item--dropdown-toggle</code> class.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/logo-section">Inline images</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.28.0</td>
      <td>The inline images component has now been deprecated. Please use the logo section component instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#expanding">Tables expanding</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.26.0</td>
      <td>We renamed and deprecated <code>p-table-expanding</code> and <code>p-table-expanding__panel</code>. Use <code>p-table--expanding</code> and <code>p-table__expanding-panel</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#sortable">Tables sorting</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.26.0</td>
      <td>We removed <code>p-table--sortable</code> class name. Sorting can be enabled on any table by adding <code>aria-sort</code> attributes.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/accordion">Accordions</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.26.0</td>
      <td>We deprecated the previous accordion tab patterns, <code>.p-accordion__tab</code> and <code>.p-accordion__tab--with-title .p-accordion__title</code>, in favour of a more accessible pattern. Please use <code>.p-accordion__heading .p-accordion__tab</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/grid">Grid - "orphan" columns</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.24.0</td>
      <td>We deprecated the use of `.col` classes without a direct parent with a class `.row`.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#active">Active button</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.23.0</td>
      <td>The <code>is-active</code> class was deprecated and given a more appropriate name: <code>is-processing</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#copyable">Code copyable</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.22.0</td>
      <td><code>.p-code-copyable</code> has been deprecated and will be removed in the v3.0 release. Please use <code>.p-code-snippet .p-code-snippet__block--icon</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#numbered">Code numbered</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.22.0</td>
      <td><code>.p-code-numbered</code> has been deprecated and will be removed in the v3.0 release. Please use <code>.p-code-snippet .p-code-snippet__block--numbered</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons#standard">Icons - Contextual Menu</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.21.0</td>
      <td>The <code>p-icon--contextual-menu</code> has been deprecated and will be removed in future release v3.0. Please use existing <code>.p-icon--chevron-down</code> and <code>.p-icon--chevron-up</code> icons instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/breadcrumbs#deprecated-markup">Breadcrumbs</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.18.0</td>
      <td>Top level <code>&lt;ul&gt;</code> with a class <code>.p-breadcrumbs</code> is now deprecated for the Breadcrumbs pattern.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/forms#deprecated-base-checkboxes">Checkbox and radio buttons elements</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.17.0</td>
      <td>Base styled checkboxes and radio buttons (on <code>&lt;input type="checkbox"&gt;</code> or <code>&lt;input type="radio"&gt;</code> elements) are deprecated and they will be reverted to native browser inputs in future version of Vanilla. Please use on bWe added new layout styles for building responsive full-screen applications.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons#standard">Icons - Question</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.12.0</td>
      <td>The <code>p-icon--question</code> has been deprecated will be removed in future release v3.0. Please use existing `.p-icon--help` icon instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation">Navigation</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.8.0</td>
      <td>Navigation classes <code>p-navigation__links</code>, <code>p-navigation__link</code>, and classless <code>&lt;a&gt;</code> are deprecated and will be removed in future release v3.0. Please use new class names (<code>p-navigation__items</code>, <code>p-navigation__item</code>, <code>p-navigation__link</code>) instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/typography#heading-classes">Heading classes</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.7.0</td>
      <td>Heading classes with numbers as words (<code>p-heading--one</code>, <code>--two</code>, ...) are deprecated and will be removed in future release v3.0. Please use class names with numbers (<code>p-heading--1</code>, <code>--2</code>, ...) instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons/#social">Social icons</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>2.5.0</td>
      <td>We will be removing <code>p-icon--canonical</code> and <code>p-icon--ubuntu</code> from social icon set in future release v3.0</td>
    </tr>
  </tbody>
</table>

## Upgrade guide

During the development of Vanilla v2 several CSS class names or SCSS mixins and placeholders have been deprecated and will be removed in the upcoming release v3.0.

See [the upgrade guide](/docs/upgrade-guide-v3) to learn about all the breaking changes that will happen when these deprecated features are removed and how to update the code for a future version of Vanilla.

## Status key

<div class="row">
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-label--positive">New</span>
      <p class="p-card__content">Newly released components, utilities or settings that are safe to use in projects.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-label--negative">Deprecated</span>
      <p class="p-card__content">These components, utilities or settings are in the process of being removed and should no longer be used in projects.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-label--caution">In progress</span>
      <p class="p-card__content">Design spec and code implementation are not yet finished.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-label--information">Updated</span>
      <p class="p-card__content">These are existing components, utilities or settings that have been updated either through design or code.</p>
    </div>
  </div>
</div>
