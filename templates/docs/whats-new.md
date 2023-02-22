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
    <!-- 3.12.0 -->
    <tr>
      <th>
        <a href="/docs/base/typography#small-caps-text">
          Small caps text
        </a>
      </th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.12.0</td>
      <td>We updated the style of small caps text and introduced new class name <code>p-text--small-caps</code> in place of previous <code>p-text--x-small-capitalised</code>.</td>
    </tr>
    <tr>
      <th>
        <a href="/docs/base/typography#small-caps-text">
          Extra small capitalised text
        </a>
      </th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>3.12.0</td>
      <td>We are deprecating <code>p-text--x-small-capitalised</code>. New <code>p-text--small-caps</code> should be used instead. At the same time usage of <code>u-align-text--x-small-to-default</code> utility is deprecated with both of these class names as well, as they don't need it anymore.</td>
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
    <!-- 3.11.0 -->
    <tr>
      <th>
        <a href="/docs/layouts/full-width/">
          Full-width layout
        </a>
      </th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>3.11.0</td>
      <td>We are introducing new full-width site layout.
      <p><i class="p-icon--warning"></i> This is an experimental feature, currenly meant for internal use on our design system site and docs.</p></td>
    </tr>
    <!-- 3.10.0 -->
    <tr>
      <th>
        <a href="/docs/patterns/icons">
          Icons
        </a>
      </th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>3.10.0</td>
      <td>We've added new desktop icon <code>.p-icon--desktop</code>.</td>
    </tr>
    <tr>
      <th>
        <a href="/docs/base/typography">
          Typography
        </a>
      </th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.10.0</td>
      <td>We've introduced the new variable Ubuntu font and updated the default font weights.</td>
    </tr>
    <tr>
      <th>
        <a href="/docs/base/typography#enabling-cyrillic-greek-and-latin-fonts">
          <code>$font-use-subset-latin</code>
        </a>
      </th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>3.10.0</td>
      <td>
        the <code>$font-use-subset-latin</code> option has been deprecated and should be removed when updating.
      </td>
    </tr>
    <!-- 3.9.0 -->
    <tr>
      <th>
        <a href="/docs/base/forms">
          Forms
        </a>
      </th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.9.0</td>
      <td>We've updated the visual style of form elements, such as inputs, checkboxes and buttons.</td>
    </tr>
    <!-- 3.8.0 -->
    <tr>
      <th>
        <a href="/docs/patterns/navigation#accordion">
          Side navigation - Accordion
        </a>
      </th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.8.0</td>
      <td>We've added <code>p-side-navigation--accordion</code>, <code>p-side-navigation__accordion-button</code> classes that allow building side navigation with accordions.</td>
    </tr>
    <!-- 3.7.0 -->
    <tr>
      <th>
        <a href="/docs/settings/animation-settings#usage">
          <code>vf-animation</code> mixin
        </a>
      </th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>3.7.0</td>
      <td><code>vf-animation</code> mixin has been deprecated. Please use <code>vf-transition</code> instead.</td>
    </tr>
    <tr>
      <th>
        <a href="/docs/settings/animation-settings#usage">
          <code>vf-transition</code> mixin
        </a>
      </th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>3.7.0</td>
      <td><code>vf-transition</code> mixin replaces deprecated <code>vf-animation</code>.</td>
    </tr>
    <!-- 3.6.0 -->
    <tr>
      <th><a href="/docs/patterns/badge">Badge</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>3.6.0</td>
      <td>We've added a badge component.</td>
    </tr>
    <!-- 3.5.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation - Headings</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.5.0</td>
      <td>We've added a new <code>p-side-navigation__heading</code> and <code>p-side-navigation__heading--linked</code> classes to allow adding headings for side navigation item groups.</td>
    </tr>
    <!-- 3.4.0 -->
     <tr>
      <th><a href="/docs/patterns/pagination">Pagination</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>3.4.0</td>
      <td>We've deprecated the use of the <code>p-navigation</code> class on lists, the class should now be used on the wrapping nav only.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/pagination">Pagination</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.4.0</td>
      <td>We've added a new <code>p-pagination__items</code> class name to the list and moved the <code>p-pagination</code> class to the nav element.</td>
    </tr>
    <!-- 3.3.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.3.0</td>
      <td>We've made some changes to the side navigation, improving accessibility and renaming some classes.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>3.3.0</td>
      <td>We've updated the class names in the side navigation. <code>.is-expanded</code> and <code>.is-collapsed</code> are deprecated and replaced by <code>.is-drawer-expanded</code> and <code>.is-drawer-expanded</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/accordion">Accordion</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.3.0</td>
      <td>We updated the Accordion icon to a chevron which animates on open and close.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/segmented-control">Segmented control</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>3.3.0</td>
      <td>The Tab buttons component has been renamed to Segmented control.</td>
    </tr>
        <tr>
      <th><a href="/docs/patterns/segmented-control">Tab buttons</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>3.3.0</td>
      <td><code>p-tab-buttons</code> has been renamed to <code>p-segmented-control</code>.</td>
    </tr>
    <!-- 3.2.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#expanding-search-box">Navigation - Search</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.2.0</td>
      <td>We added new dropdown for expanding search on small screens.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation">Navigation</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
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
    <!-- 3.1.0 -->
    <tr>
      <th><a href="/docs/patterns/empty-state">Empty state</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>3.1.0</td>
      <td>We've added examples for empty state scenarios.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/lists#nested-count">Ordered list nested counter</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.1.0</td>
      <td>We've updated lists by adding a new class name. It can be used when nested items numbers are required to be set according to their parents.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/slider">Slider</a> and <a href="/docs/patterns/switch">Switch</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.1.0</td>
      <td>We've updated the styling of the Switch and Slider components.</td>
    </tr>
    <!-- 3.0.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation">Expanding search box</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>3.0.0</td>
      <td>We've added an expandable search box, to be used in top navigation.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/labels">Labels</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.0.0</td>
      <td>We've updated the labels component by introducing new semantic class names consistend with tinted chips.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/chip">Chips</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>3.0.0</td>
      <td>We've added tinted chips. The tints are based on the semantic colours (positive, caution, negative) plus a dark blue one that matches the blue used in the information flavour of the notification component.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/switch">Switch</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
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
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The classes <code>.p-notification__response</code>, <code>.p-notification__status</code><code>.p-icon--close</code> have been removed and replaced.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#buttons">Button / Neutral</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The neutral button variant <code>p-button--neutral</code> has been removed, please use default <code>p-button</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#navigation-title">Navigation / Sub-navigation</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The <code>.p-subnav</code> class has been removed and succeeded by the <code>.p-navigation__item--dropdown-toggle</code> class. The children of <code>.p-subnav</code> have been removed and replaced.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#inline-images">Inline images</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The inline images component has now been removed. Please use the logo section component instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#tables">Tables expanding</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We renamed and removed <code>p-table-expanding</code> and <code>p-table-expanding__panel</code>. Use <code>p-table--expanding</code> and <code>p-table__expanding-panel</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#tables">Tables sorting</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We removed <code>p-table--sortable</code> class name. Sorting can be enabled on any table by adding <code>aria-sort</code> attributes.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#accordion">Accordions</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We removed the previous accordion tab patterns, <code>.p-accordion__tab</code> and <code>.p-accordion__tab--with-title .p-accordion__title</code>, in favour of a more accessible pattern. Please use <code>.p-accordion__heading .p-accordion__tab</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#grid">Grid - "orphan" columns</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>We removed the ability to use <code>.col</code> classes without a direct parent with a class <code>.row</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#buttons">Active button</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The <code>is-active</code> class was removed and given a more appropriate name: <code>is-processing</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#code">Code copyable</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td><code>.p-code-copyable</code> has been removed. Please use <code>.p-code-snippet .p-code-snippet__block--icon</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#code">Code numbered</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td><code>.p-code-numbered</code> has been removed. Please use <code>.p-code-snippet .p-code-snippet__block--numbered</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#icons">Icons - Contextual Menu</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The <code>p-icon--contextual-menu</code> has been removed. Please use existing <code>.p-icon--chevron-down</code> and <code>.p-icon--chevron-up</code> icons instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#breadcrumbs">Breadcrumbs</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>Top level <code>&lt;ul&gt;</code> with a class <code>.p-breadcrumbs</code> has been removed and replaced by the breadcrumbs pattern.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#form-elements">Checkbox and radio buttons elements</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>Base styled checkboxes and radio buttons (on <code>&lt;input type="checkbox"&gt;</code> or <code>&lt;input type="radio"&gt;</code> elements) have been removed. Please use checkbox and radio components.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#icons">Icons - Question</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>The <code>p-icon--question</code> has been removed. Please use existing <code>.p-icon--help</code> icon instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#navigation-title">Navigation</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>Navigation classes <code>p-navigation__links</code>, <code>p-navigation__link</code>, and classless <code>&lt;a&gt;</code> have been removed. Please use new class names (<code>p-navigation__items</code>, <code>p-navigation__item</code>, <code>p-navigation__link</code>) instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#headings">Heading classes</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
      </td>
      <td>3.0.0</td>
      <td>Heading classes with numbers as words (<code>p-heading--one</code>, <code>--two</code>, ...) have been removed. Please use class names with numbers (<code>p-heading--1</code>, <code>--2</code>, ...) instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/migration-guide-to-v3#social-icons">Social icons</a></th>
      <td>
        <span class="p-status-label--negative">Removed</span>
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
      <span class="p-status-label--positive">New</span>
      <p class="p-card__content">Newly released components, utilities or settings that are safe to use in projects.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-status-label--negative">Deprecated</span>
      <p class="p-card__content">These components, utilities or settings are in the process of being removed and should no longer be used in projects.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-status-label--caution">In progress</span>
      <p class="p-card__content">Design spec and code implementation are not yet finished.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-status-label--information">Updated</span>
      <p class="p-card__content">These are existing components, utilities or settings that have been updated either through design or code.</p>
    </div>
  </div>
  <div class="col-3 u-equal-height">
    <div class="p-card--highlighted">
      <span class="p-status-label--negative">Removed</span>
      <p class="p-card__content">These components, variants or utilities have been removed from Vanilla. They should be removed from projects or updated to their new recommended versions.</p>
    </div>
  </div>
</div>
