---
wrapper_template: '_layouts/docs.html'
context:
  title: Accordion | Components
---

The sidebar accordion, used in listing pages or as navigation, can hold multiple navigation items or to be used as a filter for content.

Each tab styling can be changed to open or collapse using `aria-expanded`, set `true` for open and `false` to close. Using JS this can be changed and to point to what each tab controls via `aria-controls`.

`.p-accordion__panel` visibility is affected by `aria-hidden` and again can be manipulated with JS.

Each tab `button` element should be wrapped by an element with a `.p-accordion__heading` class, per the [W3C accessibility guidelines on accordions](https://www.w3.org/TR/wai-aria-practices/#wai-aria-roles-states-and-properties).

The wrapping element should either be a heading element or a `div` element with the attributes `role="header"` and `aria-level` set. `aria-level` should be set to the value appropriate within the page hierarchy.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">Clicking on the header toggles the display of accordion tabs. Accordion tabs should contain navigation or supplementary information, not main page content.</span>
  </p>
</div>

## Default

<div class="embedded-example"><a href="/docs/examples/patterns/accordion/default/" class="js-example">
View example of the accordion pattern
</a></div>

## With heading elements

<div class="embedded-example"><a href="/docs/examples/patterns/accordion/headings/" class="js-example">
View example of the accordion pattern
</a></div>

## With tick elements

When checkboxes or radio buttons are used inside accordion panels add `has-tick-elements` class name to the panel `p-accordion__panel` element, to properly align tick elements with accordion controls.

<div class="embedded-example"><a href="/docs/examples/patterns/accordion/tick-elements/" class="js-example">
View example of the accordion pattern
</a></div>

## Functionality

Please ensure the `aria-control` attribute matches an ID of an element. If `aria-expanded` is true, then the accordion will be open by default. When clicking on the `accordion__tab`, you must toggle the `aria-expanded` attribute on the toggle and the `aria-hidden` attribute on the panel.

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-accordion;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use accordion in React by installing our react-component library and importing `Accordion` component.

[See the documentation for our React `Accordion` component](https://canonical.github.io/react-components/?path=/docs/components-accordion--docs)
