---
wrapper_template: '_layouts/docs.html'
context:
  title: Tabs | Components
---

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

## Theming

Tabs use the default inherited theme of the page or parent element. To override the default add `is-dark` or `is-light` class to the contextual menu.

[View example of the dark tabs content pattern](/docs/examples/patterns/tabs/content?theme=dark).

## Import

To import just the standard tab component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-tabs;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use tabs in React by installing our react-component library and importing `Tab` component.

[See the documentation for our React `Tab` component](https://canonical.github.io/react-components/?path=/docs/components-tabs--docs)
