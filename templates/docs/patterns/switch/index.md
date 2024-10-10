---
wrapper_template: '_layouts/docs.html'
context:
  title: Switch | Components
---

You can use this switch component to display on and off content, such as for settings or simple controls. By changing the `aria-checked` attribute from true or false will animate the switch on/off.

<div class="embedded-example"><a href="/docs/examples/patterns/switch/" class="js-example">
View example of the switch pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-switch;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use switch in React by installing our react-component library and importing `Switch` component.

[See the documentation for our React `Switch` component](https://canonical.github.io/react-components/?path=/docs/components-switch--docs)
