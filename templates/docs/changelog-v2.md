---
wrapper_template: '_layouts/docs.html'
context:
  title: Vanilla v2 Changelog
---

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
  <!-- 2.37 -->
    <tr>
      <th><a href="/docs/base/forms#datalist">Forms / Datalist</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.37.0</td>
      <td>We've added documentation for datalist</td>
    </tr>
    <!-- 2.36 -->
    <tr>
      <th><a href="/docs/patterns/accordion#with-tick-elements">Accordion / Tick elements</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.36.0</td>
      <td>We've added a variation of the accordion using tick elements</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/card#content-bleed">Card / Content Bleed</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.36.0</td>
      <td>We added a <code>.p-card__inner</code> element so that it's possible to have a mix of padded and not padded content within a card.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/forms#help-text">Form / Help text</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.36.0</td>
      <td>We added a class name to aligned help text with checkboxes or radio buttons</td>
    </tr>
    <!-- 2.35 -->
    <tr>
      <th><a href="/docs/base/forms#validation">Forms / Validation</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.35.0</td>
      <td>We've updated the styling of the form validation and required patterns</td>
    </tr>
    <!-- 2.34 -->
    <tr>
      <th><a href="/docs/base/forms#password-showhide">Forms / Password toggle</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.34.0</td>
      <td>Password fields now have a show/hide toggle.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/lists#status">Lists / Crossed</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.34.0</td>
      <td>We added a <code>is-crossed</code> modifier class for lists, to complement the existing <code>is-ticked</code> modifier.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/lists#status">Lists / Ticked</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.34.0</td>
      <td>We updated the color of the <code>is-ticked</code> icon on lists to <code>$color-positive</code>, where previously it was <code>$color-accent</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/tabs#tab-buttons">Tabs / Tab Buttons</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.34.0</td>
      <td>We added a new type of tab pattern, `p-tab-buttons`, which can display tabs like a group of buttons.</td>
    </tr>
    <!-- 2.33 -->
    <tr>
      <th><a href="/docs/patterns/links#skip-link">Links / Skip Link</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.33.0</td>
      <td>We added a new link variant, <code>.p-link--skip</code>, that places a link offscreen and is revealed on focus.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/notification">Notifications</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.33.0</td>
      <td>Notifications have been updated with a new appearance, requiring a new HTML structure.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/notification#deprecated">Notifications structure</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.33.0</td>
      <td>The following notification classes have been deprecated: <code>.p-notification__response</code>, <code>.p-notification__status</code></td>
    </tr>
    <!-- 2.32 -->
    <tr>
      <th><a href="/docs/patterns/chip">Labels / Default</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.32.0</td>
      <td>We've added a default label <code>p-label</code></td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#theming">Button / Dark</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.32.0</td>
      <td>We added the dark theme to the buttons.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#neutral">Button / Neutral</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.32.0</td>
      <td>The neutral button variant <code>p-button--neutral</code> is deprecated, please use default <code>p-button</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#overflow">Tables / Overflow</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.32.0</td>
      <td>We introduced the <code>.has-overflow</code> utility for table cells, to aid with the display of components that need to overflow the cell, such as tooltips and contextual menus.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#responsive">Tables / Responsive</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.32.0</td>
      <td>The <code>.p-table--mobile-card</code> previously contained style overrides for the <a href="https://vanillaframework.io/docs/examples/patterns/contextual-menu/default">contextual menu pattern</a>, these have been removed so that contextual menus within responsive tables look and behave the same as they do elsewhere.</td>
    </tr>
    <!-- 2.31 -->
    <tr>
      <th><a href="/docs/patterns/navigation#dropdown">Navigation / Dropdown</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.31.0</td>
      <td>We introduced the <code>.p-navigation__item--dropdown-toggle</code> class, as a replacement for the now deprecated <code>.p-subnav</code> class.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#dropdown">Navigation / Sub-navigation</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.31.0</td>
      <td>The <code>.p-subnav</code> class previously could theoretically be used outside of the main <code>.p-navigation</code> component, which was not intended. It has been deprecated, and succeeded by the <code>.p-navigation__item--dropdown-toggle</code> class.</td>
    </tr>
    <!-- 2.30 -->
    <tr>
      <th><a href="/docs/patterns/buttons#link">Button / Link</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.30.0</td>
      <td>Buttons can now assume the appearance of a standard link.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/lists#theming">Lists / spanider</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.30.0</td>
      <td>We added a dark theme to responsive spanider lists.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/tabs#content">Tabs / Content</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.30.0</td>
      <td>The tab pattern can now be used either as a navigation list, or as controls for panes of content.</td>
    </tr>
    <!-- 2.29 -->
    <tr>
      <th><a href="/docs/layouts/fluid-breakout#toolbar">Fluid breakout - toolbar</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.29.0</td>
      <td>We added support for a toolbar within the fluid-breakout layout.</td>
    </tr>
    <!-- 2.28 -->
    <tr>
      <th><a href="/docs/patterns/modal">Modal footer</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.28.0</td>
      <td>We added the optional footer to the modal pattern.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/logo-section">Logo section</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.28.0</td>
      <td>A new logo section</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/logo-section">Inline images</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.28.0</td>
      <td>The inline images component has now been deprecated. Please use the logo section component instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#empty">Table - empty</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.28.0</td>
      <td>We added a basic styling for the table <code>&lt;caption&gt;</code> in empty tables</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/tooltips#detached">Tooltips - detached</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.28.0</td>
      <td>We added the <code>.is-detached</code> utility, providing a way for tooltips to exist separately from their associated element.</td>
    </tr>
    <!-- 2.27 -->
    <tr>
      <th><a href="/docs/patterns/icons#social">GitHub icon</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.27.0</td>
      <td>We added the GitHub icon <code>.p-icon--github</code> to our social icons set.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#bordered">Code snippet - bordered</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.27.0</td>
      <td>We added the utility class <code>.is-bordered</code> to the code snippet.</td>
    </tr>
    <!-- 2.26 -->
    <tr>
      <th><a href="/docs/patterns/search-and-filter">Search and filter</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.26.0</td>
      <td>We added the new Search and filter component.</td>
    </tr>
    <tr>
      <th><a href="/docs/layouts/application#aside-area">Application layout - animations</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.26.0</td>
      <td>We added <code>is-collapsed</code> class that allows animating the application layout aside panel.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#expanding">Tables expanding</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.26.0</td>
      <td>We renamed and deprecated <code>p-table-expanding</code> and <code>p-table-expanding__panel</code>. Use <code>p-table--expanding</code> and <code>p-table__expanding-panel</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#sortable">Tables sorting</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.26.0</td>
      <td>We removed <code>p-table--sortable</code> class name. Sorting can be enabled on any table by adding <code>aria-sort</code> attributes.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/forms#indeterminate-state-checkbox">Forms / Checkbox indeterminate</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.26.0</td>
      <td>We added indeterminate state checkboxes. If a checkbox has <code>checkbox.indeterminate = true;</code> set via JavaScript, the checkbox will show a state between checked and unchecked.</td>
    </tr>
    <tr>
      <th><a href="/docs/layouts/sticky-footer">Sticky footer</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.26.0</td>
      <td>We added a new <code>.l-site</code> layout, which can accommodate a sticky footer.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/accordion">Accordions</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.26.0</td>
      <td>We deprecated the previous accordion tab patterns, <code>.p-accordion__tab</code> and <code>.p-accordion__tab--with-title .p-accordion__title</code>, in favour of a more accessible pattern. Please use <code>.p-accordion__heading .p-accordion__tab</code>.</td>
    </tr>
    <!-- 2.25 -->
    <tr>
      <th><a href="/docs/base/typography#extra-small-capitalised-text">Typography / Extra small caps</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.25.0</td>
      <td>We added new extra small capitalised text <code>p-text--x-small-capitalised</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/typography#baseline-alignment-small-extra-small-and-paragraph-text">Typography / Baseline alignment</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.25.0</td>
      <td>We added a couple of util classes to help aligning small text on the baseline along default text size.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/separators#muted-horizontal-rule">Separators / Muted</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.25.0</td>
      <td>We added new muted variant of horizontal rule.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/separators#fixed-width-horizontal-rule">Separators / Fixed width</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.25.0</td>
      <td>We added new fixed width variant of horizontal rule to allow aligning it with full 12-column grid layouts.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/lists#middot">Lists / Middot</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.25.0</td>
      <td>We added a dark theme to middot lists.</td>
    </tr>
    <!-- 2.24 -->
    <tr>
      <th><a href="/docs/base/code#dropdowns">Code snippet - Dropdowns</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.24.0</td>
      <td>We added the ability to accommodate multiple selects within a <code>.p-code-snippet__header</code>, either inline, using the <code>.is-stacked</code> utility to class to have the dropdowns below the title.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#inline">Code inline - dark</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.24.0</td>
      <td>We've updated inline <code>code</code> elements to support being nested within a <code>.p-strip--dark</code> element, and to support an <code>.is-dark</code> utility class.</td>
    </tr>
    <tr>
      <th><a href="/docs/layouts/fluid-breakout">Fluid breakout</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.24.0</td>
      <td>We added a new <code>l-fluid-breakout</code> layout that can be used to break out of the constraints of a 12-column grid and allow content to bleed into the page margins on larger screens.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/grid">Grid - "orphan" columns</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.24.0</td>
      <td>We deprecated the use of `.col` classes without a direct parent with a class `.row`.</td>
    </tr>
    <!-- 2.23 -->
    <tr>
      <th><a href="/docs/patterns/buttons#active">Active button</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.23.0</td>
      <td>The <code>is-active</code> class was deprecated and given a more appropriate name: <code>is-processing</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#processing">Processing button</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.23.0</td>
      <td>We renamed <code>is-active</code> button state class to <code>is-processing</code>, which can be combined with <code>disabled</code> when a button needs to indicate a process is occurring while also preventing user interaction.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#code-snippet">Code snippet - Dropdowns</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.23.0</td>
      <td>We add the ability to include a select within in a code snippet, allowing users to switch between related code examples.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#code-snippet">Code snippet</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.23.0</td>
      <td>We added a utility class for <code>.p-code-snippet__block</code> that allows content to wrap, rather than horizontally scroll: <code>.is-wrapped</code>.</td>
    </tr>
    <!-- 2.22 -->
    <tr>
      <th><a href="/docs/base/separators">Separator</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.22.0</td>
      <td>The new <code>p-separator</code> component has been added to be used as a separator between content blocks.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#code-snippet">Code snippet</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.22.0</td>
      <td>The new <code>.p-code-snippet</code> component has been added, to be used to display code examples in a number of different formats.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#copyable">Code copyable</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.22.0</td>
      <td><code>.p-code-copyable</code> has been deprecated and will be removed in the v3.0 release. Please use <code>.p-code-snippet .p-code-snippet__block--icon</code> instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/code#numbered">Code numbered</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.22.0</td>
      <td><code>.p-code-numbered</code> has been deprecated and will be removed in the v3.0 release. Please use <code>.p-code-snippet .p-code-snippet__block--numbered</code> instead.</td>
    </tr>
    <!-- 2.21 -->
    <tr>
      <th><a href="/docs/patterns/icons#standard">Icons - Contextual Menu</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.21.0</td>
      <td>The <code>p-icon--contextual-menu</code> has been deprecated and will be removed in future release v3.0. Please use existing <code>.p-icon--chevron-down</code> and <code>.p-icon--chevron-up</code> icons instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons#additional">Icons - Additional</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.21.0</td>
      <td>We added many more icons, outside of the base icon set. These icons are not included in Vanilla by default, but can be inspanidually included as needed.</td>
    </tr>
    <tr>
      <th><a href="/docs/layouts/application#panels">Application layout - panels</a></th>
      <td>
        <span class="p-status-label--caution">In progress</span>
      </td>
      <td>2.21.0</td>
      <td>We continue working on application layout panels styling. We improved the positioning of the logo, title and controls in panel headers.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#application-layout">Application layout - side navigation</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.21.0</td>
      <td>We implemented and documented improvements for <a href="/docs/patterns/navigation#application-layout">side navigation component</a> for the <a href="/docs/layouts/application#side-navigation">application layout</a>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#sticky">Side navigation - Sticky</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.21.0</td>
      <td>Side navigation component used to be sticky by default. We now introduced new <code>is-sticky</code> variant that should be used to optionally make side navigation sticky.</td>
    </tr>
    <!-- 2.20 -->
    <tr>
      <th><a href="/docs/layouts/application#responsive-application-layout">Application layout panels</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.20.0</td>
      <td>We updated the responsive styles of application layout panels and introduced some class names and variables for more flexible customization options.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#small">Small buttons</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.20.0</td>
      <td>We added an <code>is-small</code> modifier class for buttons, which can be combined with <code>is-dense</code>.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/buttons#small">Active buttons</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.20.0</td>
      <td>We added an <code>is-active</code> state class for buttons, which can be combined with <code>disabled</code> when a button needs to indicate a process is occurring while also preventing user interaction.</td>
    </tr>
    <!-- 2.19 -->
    <tr>
      <th><a href="/docs/base/tables#expanding">Expanding table column placeholder</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.19.2</td>
      <td>We started using <code>aria-hidden="true"</code> attribute to hide the placeholder table header in place of previously used <code>u-hide</code> utility.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/tables#icons">Table icons</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.19.0</td>
      <td>We added a <code>p-table__cell--icon-placeholder</code> class to properly align icons in table cells.</td>
    </tr>
    <!-- 2.18 -->
    <tr>
      <th><a href="/docs/patterns/breadcrumbs">Breadcrumbs</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.18.0</td>
      <td>We updated the markup of the breadcrumbs component to comply with accessibility requirements. The class <code>.p-breadcrumbs</code> is now moved onto a <code>&lt;nav&gt;</code> element, the unordered list has been changed to an ordered one that has a class <code>.p-breadcrumbs__items</code>. </td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/breadcrumbs#deprecated-markup">Breadcrumbs</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.18.0</td>
      <td>Top level <code>&lt;ul&gt;</code> with a class <code>.p-breadcrumbs</code> is now deprecated for the Breadcrumbs pattern.</td>
    </tr>
    <!-- 2.17 -->
    <tr>
      <th><a href="/docs/base/forms#checkbox">Checkbox and radio buttons components</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.17.0</td>
      <td>We introduced new <code>.p-checkbox</code> and <code>.p-radio</code> components. They replace the existing styling of base form inputs.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/forms#deprecated-base-checkboxes">Checkbox and radio buttons elements</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.17.0</td>
      <td>Base styled checkboxes and radio buttons (on <code>&lt;input type="checkbox"&gt;</code> or <code>&lt;input type="radio"&gt;</code> elements) are deprecated and they will be reverted to native browser inputs in future version of Vanilla. Please use on bWe added new layout styles for building responsive full-screen applications.</td>
    </tr>
    <!-- 2.16 -->
    <tr>
      <th><a href="/docs/layouts/application">Application layout</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.16.0</td>
      <td>We added new layout styles for building responsive full-screen applications.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/strip#suru-strip">Suru strip</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.16.0</td>
      <td>We added new strip variants <code>.p-strip--suru</code> and <code>.p-strip--suru-topped</code>.</td>
    </tr>
    <!-- 2.15 -->
    <tr>
      <th><a href="/docs/patterns/chip">Chip</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.15.0</td>
      <td>We added the new <code>.p-chip</code> component to be used to display small actionable pieces of information.</td>
    </tr>
    <!-- 2.14 -->
    <tr>
      <th><a href="/docs/patterns/lists#inline-stretched">List inline stretched</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.14.0</td>
      <td>We added the new <code>.p-inline-list--stretch</code> list variant that arranges items so they span the full width of the parent container.</td>
    </tr>
    <!-- 2.13 -->
    <tr>
      <th><a href="/docs/patterns/accordion#headings">Accordion</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.13.0</td>
      <td>We updated the accordion component with a new <code>.p-accordion__tab--with-title</code> variant that allows using headings in accordion buttons.</td>
    </tr>
    <!-- 2.12 -->
    <tr>
      <th><a href="/docs/base/typography#muted-text">Muted text</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.12.0</td>
      <td>New <code>u-text--muted</code> utility class has been added.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons">Icons</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.12.0</td>
      <td>The icons have been updated to new style.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons#standard">Icons - Question</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.12.0</td>
      <td>The <code>p-icon--question</code> has been deprecated will be removed in future release v3.0. Please use existing `.p-icon--help` icon instead.</td>
    </tr>
    <!-- 2.11.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.11.0</td>
      <td>A no-JS fallback was added for the side navigation toggle functionality on small screens.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation#raw-html">Side navigation</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.11.0</td>
      <td>A new raw HTML variant of the side navigation component.</td>
    </tr>
    <!-- 2.10.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.10.0</td>
      <td>Update to the responsive styling of the side navigation.</td>
    </tr>
    <!-- 2.9.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation#side-navigation">Side navigation</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.9.0</td>
      <td>New side navigation component was added.</td>
    </tr>
    <!-- 2.8.0 -->
    <tr>
      <th><a href="/docs/patterns/navigation">Navigation</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.8.0</td>
      <td>New navigation classes (<code>p-navigation__items</code>, <code>p-navigation__item</code>, <code>p-navigation__link</code>) were added to replace existing (<code>p-navigation__links</code>, <code>p-navigation__link</code>, and classless <code>&lt;a&gt;</code>).</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/navigation">Navigation</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.8.0</td>
      <td>Navigation classes <code>p-navigation__links</code>, <code>p-navigation__link</code>, and classless <code>&lt;a&gt;</code> are deprecated and will be removed in future release v3.0. Please use new class names (<code>p-navigation__items</code>, <code>p-navigation__item</code>, <code>p-navigation__link</code>) instead.</td>
    </tr>
    <!-- 2.7.0 -->
    <tr>
      <th><a href="/docs/patterns/contextual-menu#theming">Contextual menu</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.7.0</td>
      <td>Added dark theme to contextual menu.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/typography#heading-classes">Heading classes</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.7.0</td>
      <td>New heading classes with numbers (<code>p-heading--1</code>, ...) were added for consistency with other class names we use.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/typography#heading-classes">Heading classes</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.7.0</td>
      <td>Heading classes with numbers as words (<code>p-heading--one</code>, <code>--two</code>, ...) are deprecated and will be removed in future release v3.0. Please use class names with numbers (<code>p-heading--1</code>, <code>--2</code>, ...) instead.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/forms/#range">Range input</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.6.0</td>
      <td>Styling of Slider component was added to all <code>&lt;input type="range"&gt;</code> elements by default. This makes <code>p-slider</code> class optional for styling range inputs.</td>
    </tr>
    <tr>
      <th><a href="/docs/base/forms/#checkbox">Checkbox, radio button</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.6.0</td>
      <td>New `is-table-header` added to properly align checkboxes and radio buttons used in table headers.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/slider">Slider</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.6.0</td>
      <td>Styling of Slider component was added to all <code>&lt;input type="range"&gt;</code> elements by default. This makes <code>p-slider</code> class optional for styling range inputs.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/contextual-menu/#indicator">Contextual menu</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.5.0</td>
      <td>Optional state indicator was added to contextual menu</td>
    </tr>
    <tr>
      <th><a href="/docs/utilities/font-metrics/">Font metrics</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.5.0</td>
      <td>Added <code>u-visualise-font-metrics</code> utility to visualise font metrics</td>
    </tr>
    <tr>
      <th><a href="/docs/base/typography/#line-length">Line length</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.5.0</td>
      <td>Added <code>$max-width--default</code> variable and <code>u-no-max-width</code> utility to control line length</td>
    </tr>
    <tr>
      <th><a href="/docs/utilities/table-cell-padding-overlap/">Table cell padding overlap</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.5.0</td>
      <td>Added <code>u-table-cell-padding-overlap</code> utility to overlap table cell padding</td>
    </tr>
    <tr>
      <th><a href="/docs/utilities/truncate/">Truncation</a></th>
      <td>
        <span class="p-status-label--positive">New</span>
      </td>
      <td>2.5.0</td>
      <td>Added <code>u-truncate</code> utility to truncate text with ellipsis</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons/#social">Social icons</a></th>
      <td>
        <span class="p-status-label--information">Updated</span>
      </td>
      <td>2.5.0</td>
      <td>Updated style of social icons. Added new <code>.p-icon--rss</code> and <code>p-icon--email</code> icons.</td>
    </tr>
    <tr>
      <th><a href="/docs/patterns/icons/#social">Social icons</a></th>
      <td>
        <span class="p-status-label--negative">Deprecated</span>
      </td>
      <td>2.5.0</td>
      <td>We will be removing <code>p-icon--canonical</code> and <code>p-icon--ubuntu</code> from social icon set in future release v3.0</td>
    </tr>
  </tbody>
</table>

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
</div>
