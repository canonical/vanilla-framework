---
wrapper_template: '_layouts/docs.html'
context:
  title: Tab Buttons | Components
---

## Tab Buttons

Tab buttons can be used as secondary tabs or view switchers.

<div class="p-notification--information is-inline">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Accessibility:</h5> 
    <p class="p-notification__message">These patterns require the use of JS to handle navigating between tabs using keyboard events i.e. arrow keys. For more information, see <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html">the W3's tab pattern recommendations</a>.</p>
  </div>
</div>

### Default

Use the class `p-tab-buttons` to make your tabs appear as a group of buttons.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-buttons/default" class="js-example">
View examples of the tab buttons pattern
</a></div>

### Dense

By adding the `is-dense` modifier to the `p-tab-buttons` element, the buttons will take on a more compact appearance.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-buttons/dense" class="js-example">
View examples of the dense tab buttons pattern
</a></div>

### With Icons

The pattern also supports the use of icons within each button.

<div class="p-notification--caution is-inline">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Icons:</h5> 
    <p class="p-notification__message">If any icons are used, all buttons within the pattern should have an icon, to avoid making the interface confusing for users.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/tab-buttons/icons" class="js-example">
View examples of the tab buttons pattern with icons
</a></div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework/scss/vanilla';
@include vf-base;

@include vf-p-tab-buttons;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
