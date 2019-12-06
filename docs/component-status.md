---
layout: default
permalink: /component-status.html
---

## Component status

<hr>

When we add, make significant updates, or deprecate a component we update their status so that it’s clear what’s available to use. Check back here anytime to see current status information.

### Current status

<table style="margin-bottom: 1rem;">
  <thead>
    <tr>
      <th style="width: 25%">Component</th>
      <th style="width: 25%">Status</th>
      <th style="width: 50%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><a href="/patterns/contextual-menu/#indicator">Contextual menu</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>Optional state indicator was added to contextual menu</td>
    </tr>
    <tr>
      <th><a href="/utilities/font-metrics/">Font metrics</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>Added <code>u-visualise-font-metrics</code> utility to visualise font metrics</td>
    </tr>
    <tr>
      <th><a href="/base/typography/#line-length">Line length</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>Added <code>$max-width--default</code> variable and <code>u-no-max-width</code> utility to control line length</td>
    </tr>
    <tr>
      <th><a href="/utilities/table-cell-padding-overlap/">Table cell padding overlap</a></th>
      <td><div class="p-label--new">New</div></td>
      <td>Added <code>u-table-cell-padding-overlap</code> utility to overlap table cell padding</td>
    </tr>
    <tr>
      <th><a href="/patterns/icons/#social">Social icons</a></th>
      <td><div class="p-label--updated">Updated</div></td>
      <td>Updated style of social icons. Added new <code>.p-icon--rss</code> and <code>p-icon--email</code> icons.</td>
    </tr>
    <tr>
      <th><a href="/patterns/icons/#social">Social icons</a></th>
      <td><div class="p-label--deprecated">Deprecated</div></td>
      <td>We will be removing <code>p-icon--canonical</code> and <code>p-icon--ubuntu</code> from social icon set in future release v3.0</td>
    </tr>
  </tbody>
  <tfoot>
  </tfoot>
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
