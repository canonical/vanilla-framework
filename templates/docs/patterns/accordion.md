---
wrapper_template: '_layouts/docs.html'
context:
  title: Accordion | Components
---

# Accordion

<hr>

The sidebar accordion, used in listing pages or as navigation, can hold multiple navigation items or to be used as a filter for content.

Each tab styling can be changed to open or collapse using `aria-expanded`, set `true` for open and `false` to close. Using JS this can be changed and to point to what each tab controls via `aria-controls`.

`.p-accordion__panel` visibility is affected by `aria-hidden` and again can be manipulated with JS.

Each tab `button` element should be wrapped by an element with a `.p-accordion__heading` class, per the [W3C accessibility guidelines on accordions](https://www.w3.org/TR/wai-aria-practices/#wai-aria-roles-states-and-properties).

The wrapping element should either be a heading element or a `div` element with the attributes `role="header"` and `aria-level` set. `aria-level` should be set to the value appropriate within the page hierarchy.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>Clicking on the header toggles the display of accordion tabs. Accordion tabs should contain navigation or supplementary information, not main page content.
  </p>
</div>

**With aria attributes:**

<div class="embedded-example"><a href="/docs/examples/patterns/accordion/default/" class="js-example">
View example of the accordion pattern
</a></div>

**With heading elements:**

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

## Accessibility

### How it works

Accordions are a vertically stacked list of headings. They reduce the need for users to scroll through a lot of content, as the headings act as interactive elements which show or hide the related content.

`Tab` and `Shift-Tab` are used to navigate forward and backward through each accordion header and all focusable elements in the accordion should be included in the tab order. `Enter` or `Space` expand and collapse each accordion panel.

The two main components are:

- Accordion heading which is the interactive title or thumbnail for each section. The headings can hide or show content.
- Accordion panel is the content associated with an accordion heading.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Accordion titles should be descriptive; it should be obvious what information the content will contain.
- Ensure each tab button element is wrapped by a `div` element with a `p-accordion__heading` class and the `role=heading` attribute. This heading should have an appropriate `aria-level` label, depending on its position in the hierarchy of the page.
- If the accordion panel associated with the heading is visible, then the button within the heading div must have `aria-expanded=”true”`
- The heading button should have an `aria-controls` attribute set to the ID of the related accordion panel.
- Add the `aria-labelledby` attribute to the accordion panel, set to the ID of the button heading.
- Avoid keyboard traps when adding components to the accordion panel. For example, the user expands an accordion, but is unable to tab to the next focusable element.

### Resources

- [W3C WAI-ARIA Accordion (Sections With Show/Hide Functionality)](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion)
- [WAI-ARIA Examples: Accordion](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html)
- [Carbon design systems - Accordion accessibility](https://carbondesignsystem.com/components/accordion/accessibility)
- Guidelines:
  - [1.3.1: Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)
  - [2.1.1: Keyboard Accessible](https://www.w3.org/TR/WCAG21/#keyboard)
  - [2.1.2: No Keyboard Trap](https://www.w3.org/TR/WCAG21/#no-keyboard-trap)

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

[See the documentation for our React `Accordion` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/accordion--default-story#accordion)
