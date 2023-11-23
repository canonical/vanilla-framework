---
wrapper_template: '_layouts/docs.html'
context:
  title: Tooltips | Components
---

Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element on the screen.

Use tooltips to further explain concepts, terms, or actions that are not immediately clear or well known, but are not necessary for users to complete an action.

Do not use them for information the user needs, it hides important information from the user. For example, the user should not need to scroll over a tooltip to find out that a button is disabled.

Do not use tooltips for disabled elements, such as buttons. It should be clear to the user why the button is disabled, without the tooltip needing to be revealed first.

Do not use tooltips for rich information (such as images and formatted text). Avoid using them over plain text or other places where users will not be able to find them.

<div class="embedded-example"><a href="/docs/examples/patterns/tooltips/default" class="js-example">
View example of the tooltips pattern
</a></div>

## Detached

In some cases you may need the tooltip element to exist outside of the element it is a tooltip for, in which case you can use the `is-detached` class with the `u-hide` utility, and JavaScript to set the desired position of the tooltip.

<div class="embedded-example"><a href="/docs/examples/patterns/tooltips/detached"  data-height="120" class="js-example">
View example of the detached tooltips pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-tooltips;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use tooltips in React by installing our react-component library and importing `Tooltip` component.

[See the documentation for our React `Tooltip` component](https://canonical.github.io/react-components/?path=/docs/tooltip--default-story)

## Related

For an alternative way of displaying discoverable information [view our contextual menu component](/docs/patterns/contextual-menu).
