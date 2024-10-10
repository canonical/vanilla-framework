---
wrapper_template: '_layouts/docs.html'
context:
  title: Slider | Components
---

The `p-slider__wrapper` and `p-slider__input` classes should be used with `<input type="range">` elements
when you want to provide a numeric representation of the slider value, as well as allow the user to specify a value.

<div class="embedded-example"><a href="/docs/examples/patterns/slider/slider-input/" class="js-example">
View example of the slider pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-slider;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use slider in React by installing our react-component library and importing `Slider` component.

[See the documentation for our React `Slider` component](https://canonical.github.io/react-components/?path=/docs/components-slider--docs)
