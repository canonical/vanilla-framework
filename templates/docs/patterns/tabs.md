---
wrapper_template: '_layouts/docs.html'
context:
  title: Tabs | Components
---

## Tabs

<hr>

Tabs organise and allow navigation between groups of content that are related and at the same level of hierarchy.

To select the active tab add the attribute `aria-selected="true"` and that list item will have the correct styling.

To horizontally align the tab list with other content, the whole tab set can be contained within a `.row` element to provide correct gutters.

There are two contexts in which this pattern can be used: as navigation, and as controls for panes of content.

### Navigation

The tabs pattern can be used as an alternative way to display a list of links.

<div class="embedded-example"><a href="/docs/examples/patterns/tabs/navigation" class="js-example">
View example of the tabs navigation pattern
</a></div>

### Content

When you need to group a number of related blocks of content within an area on the page, the tabs pattern can be used, and will require JavaScript to handle interaction with each tab, and the toggling of their associated content panes.

Note the differences in markup between this example and the navigation example. Additionally, for [accessibility purposes](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html), it is necessary to include `aria` attributes specific to this use case.

<div class="embedded-example"><a href="/docs/examples/patterns/tabs/content" class="js-example">
View example of the tabs content pattern
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_tabs';
@include vf-p-tabs;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use tabs in React by installing our react-component library and importing `Tab` component.

[See the documentation for our React `Tab` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/tabs--default-story#tabs)
