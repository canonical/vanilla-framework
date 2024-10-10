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

## Theming

Tooltips use the inverse theme of their background to contrast them from surrounding content. By default, this works by inverting the theme applied to the document body.
For example, tooltips inside a `<body class="is-dark">` will use the light theme.

If a tooltip is inside of an element with a different theme than the document body, you should apply the theme class (`.is-dark`, `.is-light`, or `.is-paper`)
of the tooltip's background to the tooltip element, so that the tooltip inverts the theme of its background, not the document body.

For example, if you have a tooltip inside a dark-themed element on a light-themed page, add the `.is-dark` class to the `.p-tooltip` to ensure that the tooltip uses the light theme.

<div class="embedded-example"><a href="/docs/examples/patterns/tooltips/nesting-theme-override-light" class="js-example">
View example of the tooltips pattern with a light theme override
</a></div>

Conversely, if you have a tooltip inside a light-themed element on a dark-themed page, add the `.is-light` class to the `.p-tooltip` to ensure that the tooltip uses the dark theme.

<div class="embedded-example"><a href="/docs/examples/patterns/tooltips/nesting-theme-override-dark" class="js-example">
View example of the tooltips pattern with a dark theme override
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

[See the documentation for our React `Tooltip` component](https://canonical.github.io/react-components/?path=/docs/components-tooltip--docs)

## Related

For an alternative way of displaying discoverable information [view our contextual menu component](/docs/patterns/contextual-menu).
