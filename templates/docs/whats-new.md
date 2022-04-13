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
    <!-- 3.2.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#expanding-search-box">Navigation - Search</a></th>
      <td>
        <span class="p-label--information">Updated</span>
      </td>
      <td>3.2.0</td>
      <td>We added new dropdown for expanding search on small screens.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation">Navigation</a></th>
      <td>
        <span class="p-label--information">Updated</span>
      </td>
      <td>3.2.0</td>
      <td>We added new style of the logos to main navigation.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/status-labels">Status labels</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>3.2.0</td>
      <td>New name for what was previously the Label component.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/status-labels">Labels</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>3.2.0</td>
      <td><code>p-label</code> has been renamed to <code>p-status-label</code>.</td>
    </tr>
  </tbody>
</table>

## Previously in Vanilla v3

<table aria-label="Previously in Vanilla v3">
  <thead>
    <tr>
      <th style="width: 20%">Component</th>
      <th style="width: 15%">Status</th>
      <th style="width: 10%">Version</th>
      <th style="width: 55%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <!-- 3.1.0 -->
    <tr>
      <th><a href="/docs/patterns/empty-state">Empty state</a></th>
      <td>
        <span class="p-label--positive">New</span>
      </td>
      <td>3.1.0</td>
      <td>We've added examples for empty state scenarios.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/lists#nested-count">Ordered list nested counter</a></th>
      <td>
        <span class="p-label--information">Updated</span>
      </td>
      <td>3.1.0</td>
      <td>We've updated lists by adding a new class name. It can be used when nested items numbers are required to be set according to their parents.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/slider">Slider</a> and <a href="/docs/patterns/switch">Switch</a></th>
      <td>
        <span class="p-label--information">Updated</span>
      </td>
      <td>3.1.0</td>
      <td>We've updated the styling of the Switch and Slider components.</td>
    </tr>
    <!-- 3.0.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation">Expanding search box</a></th>
      <td>
        <span class="p-label--positive">New</span>
      </td>
      <td>3.0.0</td>
      <td>We've added an expandable search box, to be used in top navigation.</td>
    </tr>
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
    <tr>
      <th><a href="/docs/patterns/switch">Switch</a></th>
      <td>
        <span class="p-label--information">Updated</span>
      </td>
      <td>3.0.0</td>
      <td>We've updated the HTML structure of the switch component. The <code>p-switch</code> class should be placed on the the wrapping label element instead of on the input.</td>
    </tr>
  </tbody>
</table>

## Components removed in 3.0

The table below lists all the removed components and utilities in 3.0. For more information about how migrate to Vanilla 3.0 from previous versions, see [the migration guide](/docs/migration-guide-to-v3).

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
      <th><a href="/docs/migration-guide-to-v3#notifications">Notifications structure</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The classes <code>.p-notification__response</code>, <code>.p-notification__status</code><code>.p-icon--close</code> have been removed and replaced.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#buttons">Button / Neutral</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The neutral button variant <code>p-button--neutral</code> has been removed, please use default <code>p-button</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#navigation-title">Navigation / Sub-navigation</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The <code>.p-subnav</code> class has been removed and succeeded by the <code>.p-navigation__item--dropdown-toggle</code> class. The children of <code>.p-subnav</code> have been removed and replaced.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#inline-images">Inline images</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The inline images component has now been removed. Please use the logo section component instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#tables">Tables expanding</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We renamed and removed <code>p-table-expanding</code> and <code>p-table-expanding__panel</code>. Use <code>p-table--expanding</code> and <code>p-table__expanding-panel</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#tables">Tables sorting</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We removed <code>p-table--sortable</code> class name. Sorting can be enabled on any table by adding <code>aria-sort</code> attributes.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#accordion">Accordions</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We removed the previous accordion tab patterns, <code>.p-accordion__tab</code> and <code>.p-accordion__tab--with-title .p-accordion__title</code>, in favour of a more accessible pattern. Please use <code>.p-accordion__heading .p-accordion__tab</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#grid">Grid - "orphan" columns</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We removed the ability to use <code>.col</code> classes without a direct parent with a class <code>.row</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#buttons">Active button</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The <code>is-active</code> class was removed and given a more appropriate name: <code>is-processing</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#code">Code copyable</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td><code>.p-code-copyable</code> has been removed. Please use <code>.p-code-snippet .p-code-snippet__block--icon</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#code">Code numbered</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td><code>.p-code-numbered</code> has been removed. Please use <code>.p-code-snippet .p-code-snippet__block--numbered</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#icons">Icons - Contextual Menu</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The <code>p-icon--contextual-menu</code> has been removed. Please use existing <code>.p-icon--chevron-down</code> and <code>.p-icon--chevron-up</code> icons instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#breadcrumbs">Breadcrumbs</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>Top level <code>&lt;ul&gt;</code> with a class <code>.p-breadcrumbs</code> has been removed and replaced by the breadcrumbs pattern.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#form-elements">Checkbox and radio buttons elements</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>Base styled checkboxes and radio buttons (on <code>&lt;input type="checkbox"&gt;</code> or <code>&lt;input type="radio"&gt;</code> elements) have been removed. Please use checkbox and radio components.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#icons">Icons - Question</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The <code>p-icon--question</code> has been removed. Please use existing <code>.p-icon--help</code> icon instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#navigation-title">Navigation</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>Navigation classes <code>p-navigation__links</code>, <code>p-navigation__link</code>, and classless <code>&lt;a&gt;</code> have been removed. Please use new class names (<code>p-navigation__items</code>, <code>p-navigation__item</code>, <code>p-navigation__link</code>) instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#headings">Heading classes</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>Heading classes with numbers as words (<code>p-heading--one</code>, <code>--two</code>, ...) have been removed. Please use class names with numbers (<code>p-heading--1</code>, <code>--2</code>, ...) instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#social-icons">Social icons</a></th>
      <td>
        <span class="p-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We've removed <code>p-icon--canonical</code> and <code>p-icon--ubuntu</code> from social icon set.</td>
    </tr>
  </tbody>
</table>

To see what changed in Vanilla v2, see the [changelog for v2](/docs/changelog-v2) page.

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
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-label--negative">Removed</span>
      <p class="p-card__content">These components, variants or utilities have been removed from Vanilla. They should be removed from projects or updated to their new recommended versions.</p>
    </div>
  </div>
</div>
