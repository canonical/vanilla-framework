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

## Tab Buttons

Tab buttons can be used in two ways:

**Secondary tabs:** if the page already has a set of primary tabs used as navigation, as described above, these can be used as a sub-navigation of those primary tabs.

**View switcher:** in the case of a page in which the same piece of content is shown in more than one format, this component can be used as a switcher between the different views.

At smaller breakpoints, this pattern should be swapped out for one more suited to the available width, such as a <a href="https://vanillaframework.io/docs/base/forms#select">select</a>.

<div class="p-notification--information is-inline">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Accessibility:</h5> 
    <p class="p-notification__message">This pattern requires the use of JS to handle navigating between tabs using keyboard events i.e. arrow keys. For more information, see <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html">the W3's tab pattern recommendations</a>.</p>
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
    <p class="p-notification__message">If any icons are used, all buttons within the pattern should have an icon, to avoid any potential confusion that could arise from a mix of buttons with and without an icon.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/tab-buttons/icons" class="js-example">
View examples of the tab buttons pattern with icons
</a></div>

## Import

To import just the standard tab component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework/scss/vanilla';
@include vf-base;

@include vf-p-tabs;
```

To import the tab button component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework/scss/vanilla';
@include vf-base;

@include vf-p-tab-buttons;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use tabs in React by installing our react-component library and importing `Tab` component.

[See the documentation for our React `Tab` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/tabs--default-story#tabs)
