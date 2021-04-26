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

<div class="embedded-example"><a href="/docs/examples/patterns/tabs/" class="js-example">
View example of the tabs pattern
</a></div>

<div class="p-strip is-shallow">
  <h3>Usage</h3>
  <div class="row">
    <div class="col-4">
      <div class="p-notification--positive">
        <p class="p-notification__response"><span class="p-notification__status">Do:</span>Use when there are multiple categories, views or panes of content.</p>
      </div>
      <img class="p-image--bordered" src="https://assets.ubuntu.com/v1/252d5420-navigation-tabs-color-do.png" alt="Tabs do">
    </div>
    <div class="col-4">
      <div class="p-notification--negative">
        <p class="p-notification__response"><span class="p-notification__status">Don't:</span>Mix tabs that contain only text, with tabs that contain icons.</p>
      </div>
      <img class="p-image--bordered" src="https://assets.ubuntu.com/v1/6a4ffc61-navigation-tabs-color-don%27t.png" alt="Tabs don't">
    </div>
  </div>
</div>

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
