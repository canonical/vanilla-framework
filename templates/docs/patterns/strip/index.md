---
wrapper_template: '_layouts/docs.html'
context:
  title: Strip | Components
---

The strip pattern provides a full width strip container in which to wrap a grid. It is an alternative to the section component, that surrounds its content with a padding both on the top and bottom, and is used usually when a change of the background is needed or to separate different sections of the page.

Strips, similarly to sections, come in 3 sizes: regular (`.p-strip`), [deep](#deep-strip) (`.p-strip is-deep`) and [shallow](#shallow-strip) (`.p-strip is-shallow`).

They fully support [theming](#themes). Changing the theme on the strip component itself will apply the background colour to the entire strip, and affect the theme of the strip content. You can choose between regular strip (with default background of the theme), or highlighted strip (with am alternative lighter version of the background colour).

A `.p-strip` container should always be the parent of a `.row` (from the [Grid pattern](/docs/patterns/grid/)) and never the other way around.

## Regular strip

The strip component is rarely used on its own as a container with just `.p-strip` class name. It is usually combined with other variants described below to provide a specific visual style.

If you believe you need a plain `.p-strip` container, you likely want to use a [section](/docs/patterns/section) instead.

## Themes

The strip component can be used to change the background colour of the section, by applying one of the theme class names, such as `is-dark`, `is-light` or `is-paper`.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/dark/" class="js-example">
View example of the strip dark pattern
</a></div>

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">In Vanilla 4.8.0 with the introduction of new theming system the old <code>p-strip--dark</code> is deprecated. Use a strip with <code>is-dark</code> class instead.</p>
  </div>
</div>

## Highlighted strip

The purpose of the highlighted strip (`.p-strip--highlighted`) is to display content with a lighter version of the background colour based on the current theme.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/highlighted/" class="js-example">
View example of the highlighted strip
</a></div>

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">In Vanilla 4.8.0 with the introduction of new theming system and highlighted strip, the old <code>p-strip--light</code>, <code>p-strip--accent</code> are deprecated. Use a highlighted strip <code>p-strip--highlighted</code> instead.</p>
  </div>
</div>

## Deep strip

This state gives the strip larger vertical padding.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/deep/" class="js-example">
View example of the pattern strip is-deep
</a></div>

## Shallow strip

This state gives the strip smaller vertical padding.

<div class="embedded-example"><a href="/docs/examples/patterns/strips/shallow/" class="js-example">
View example of the pattern strip is-shallow
</a></div>

## Deprecated

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">In Vanilla 4.8.0 with the introduction of new theming system and updated Suru component various legacy strip variants have been deprecated.</p>
  </div>
</div>

The following strip variants are now deprecated and should not be used on any new pages:

Instead of deprecated [Suru strip](/docs/examples/patterns/strips/suru/) (`.p-strip--suru`) and [topped Suru strip](/docs/examples/patterns/strips/suru-topped/) (`.p-strip--suru-topped`) use the new [Suru component](/docs/patterns/suru) instead.

[Strips with arbitrary image backgrounds](/docs/examples/patterns/strips/image/) (`.p-strip--image`) are now also deprecated. For a hero section with a background use the new [Suru component](/docs/patterns/suru) instead.

[Bordered strip](/docs/examples/patterns/strips/is-bordered/) (`.p-strip--bordered`) is now deprecated. If a horizontal line is needed to separate parts of content use standard [sections](/docs/patterns/section) and [the rule component](/docs/patterns/rule) instead.

[Light strips](/docs/examples/patterns/strips/strips-light) (`.p-strip--light`), [white strips](/docs/examples/patterns/strips/white) (`.p-strip--white`) and [accent strips](/docs/examples/patterns/strips/accent) (`.p-strip--accent`) are now deprecated. Use the new [highlighted strip](#highlighted-strip) instead.

[Dark strip](/docs/examples/patterns/strips/strips-dark) (`.p-strip--dark`) is now deprecated. Use the [new theming](#themes) by applying `is-dark` class name to the strip instead.

Legacy documentation of the [deprecated strip variants](/docs/patterns/strip/deprecated/) is available for reference until they are removed in the next major release of Vanilla.

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-strip;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use strip in React by installing our react-component library and importing `Strip` component.

[See the documentation for our React `Strip` component](https://canonical.github.io/react-components/?path=/docs/components-strip--docs)
