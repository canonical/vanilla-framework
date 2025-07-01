---
wrapper_template: '_layouts/docs.html'
context:
  title: Status labels | Components
---

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">The status label component has been deprecated. Its behavior has been merged into the <a href="/docs/patterns/chip#read-only-new">read-only chip</a>.</p>
  </div>
</div>

Status labels are static elements which you can apply to signify status, tags or any other information you find useful.

<div class="embedded-example"><a href="/docs/examples/patterns/status-labels/" class="js-example">
View example of the status label pattern
</a></div>

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">Deprecation warning:</span>
    <span class="p-notification__message"><code>p-label</code> and its variants are deprecated and may be removed in future version of Vanilla. Use <code>.p-chip.is-readonly.is-inline</code> instead.</span>
  </p>
</div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;
@include vf-p-chip;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use status labels in React by installing our react-component library and importing `StatusLabel` component.

[See the documentation for our React `StatusLabel` component](https://canonical.github.io/react-components/?path=/docs/components-statuslabel--docs)
