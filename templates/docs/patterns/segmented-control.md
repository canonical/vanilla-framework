---
wrapper_template: '_layouts/docs.html'
context:
  title: Segmented control | Components
---

Segmented control can be used in two ways:

**Secondary tabs:** if the page already has a set of primary tabs used as navigation, this can be used as a sub-navigation of those primary tabs.

**View switcher:** in the case of a page in which the same piece of content is shown in more than one format, this component can be used as a switcher between the different views.

At smaller breakpoints, this pattern should be swapped out for one more suited to the available width, such as a <a href="https://vanillaframework.io/docs/base/forms#select">select</a>.

<div class="p-notification--information is-inline">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Accessibility:</h5>
    <p class="p-notification__message">This pattern requires the use of JS to handle navigating between tabs using keyboard events i.e. arrow keys. For more information, see <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html">the W3's tab pattern recommendations</a>.</p>
  </div>
</div>

## Default

Use the class `p-segmented-control` to make your tabs appear as a group of buttons.

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">Deprecation warning:</span>
    <span class="p-notification__message"><code>p-tab-buttons</code> and its variants are deprecated and may be removed in future version of Vanilla. Use <code>p-segmented-control</code> instead.</span>
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/segmented-control/default" class="js-example">
View examples of the segmented control pattern
</a></div>

## Dense

By adding the `is-dense` modifier to the `p-segmented-control` element, the buttons will take on a more compact appearance.

<div class="embedded-example"><a href="/docs/examples/patterns/segmented-control/dense" class="js-example">
View examples of the dense segmented control pattern
</a></div>

## With Icons

The pattern also supports the use of icons within each button.

<div class="p-notification--caution is-inline">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Icons:</h5>
    <p class="p-notification__message">If any icons are used, all buttons within the pattern should have an icon, to avoid any potential confusion that could arise from a mix of buttons with and without an icon.</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/segmented-control/icons" class="js-example">
View examples of the segmented control pattern with icons
</a></div>

## Import

To import the segmented control component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-segmented-control;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
