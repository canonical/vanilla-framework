---
wrapper_template: '_layouts/docs.html'
context:
  title: Tabs | Components
---

# Tabs

<hr>

Tabs organise and allow navigation between groups of content that are related and at the same level of hierarchy.

To select the active tab add the attribute `aria-selected="true"` and that list item will have the correct styling.

To horizontally align the tab list with other content, the whole tab set can be contained within a `.row` element to provide correct gutters.

There are two contexts in which this pattern can be used: as navigation, and as controls for panes of content.

## Navigation

The tabs pattern can be used as an alternative way to display a list of links.

<div class="embedded-example"><a href="/docs/examples/patterns/tabs/navigation" class="js-example">
View example of the tabs navigation pattern
</a></div>

## Content

When you need to group a number of related blocks of content within an area on the page, the tabs pattern can be used, and will require JavaScript to handle interaction with each tab, and the toggling of their associated content panes.

<div class="p-notification--information is-inline">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Accessibility:</h5>
    <p class="p-notification__message">This variant of the tab pattern requires the use of JS to handle navigating between tabs using keyboard events i.e. arrow keys. For more information, see <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html">the W3's tab pattern recommendations</a>.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/tabs/content" class="js-example">
View example of the tabs content pattern
</a></div>

## Accessibility

### How it works

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

The component can be navigated to via the keyboard: pressing the `Tab` key will highlight the active tab, and navigating between the tabs is achieved by pressing the `Left` and `Right` keys. When a new tab is selected, the corresponding panel is automatically shown.

This component does not have a semantic counterpart in HTML, so it uses several WAI-ARIA tools to aid assistive technology:

- The tabs are contained within a wrapper that has `role=”tablist”`, indicating to assistive technology that this component is not just a series of buttons or links.
- Individual tabs use several `aria` attributes:
  - `role=”tab”`
  - `aria-selected`, which takes a boolean value to indicate whether it is the currently selected tab.
  - `aria-controls`, which references the ID of the tab panel it controls
- Tab panels also have several `aria` attributes:
  - `role=”tabpanel”`,
  - `aria-labelledby`, which references the ID of the tab it is controlled by

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Tab text should be concise and make it clear what content they link to/nest.
- There should be a clear relationship between the tabs and the tab panels.
- JavaScript should be used to handle both mouse and keyboard interactions.
- Content included in tab panels should also be accessible, i.e. images should include appropriate `alt` text.
- Avoid tabs that wrap over more than one line. This can make it harder for users to distinguish the selected tab from its content.

### Resources

- [Example of Tabs with Automatic Activation](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html)
- [WAI-ARIA practices: Tabs](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel)
- Guidelines:
  - [1.3.1: Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)
  - [2.1.1: Keyboard Accessible](https://www.w3.org/TR/WCAG21/#keyboard)
  - [2.1.2: No Keyboard Trap](https://www.w3.org/TR/WCAG21/#no-keyboard-trap)

## Import

To import just the standard tab component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-tabs;
```

To import the tab button component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-tab-buttons;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
