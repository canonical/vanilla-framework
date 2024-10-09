---
wrapper_template: '_layouts/docs.html'
context:
  title: Rule | Components
---

The rule component indicates the beginning of a new group of elements. This might be at the section level, or between more granular elements, like paragraphs.

It "anchors" elements that are far apart, and at risk of appearing floating in space.

It indicates the direction in which we want the viewer to read the content.

## Default

Main page sections are often separated by horizontal rules. You can use the `p-rule` class name to create a default horizontal rule.

This is an equivalent of the base `<hr>` element.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/default" class="js-example">
View example of a default horizontal rule
</a></div>

## Muted

Muted rules are usually used within sections of content. You can add a muted rule to make it less prominent by using the `p-rule--muted` class name. This is useful for separating smaller blocks of content without drawing too much attention to the rule itself.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/muted" class="js-example">
View example of a muted horizontal rule
</a></div>

## Highlighted

You can add a highlight to a rule to make it stand out more by using `p-rule--highlight` class name. This is useful for drawing attention to a section of content.

Highlighted rules can also be accented by adding the `is-accent` modifier class.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/highlight" class="js-example">
View example of a highlighted rule
</a></div>

## Fixed width

Often it is useful to add a rule that aligns with content placed in a grid `row` class. One way to do that is to wrap a `p-rule` component in a `row`.

To avoid the need for a wrapping element, add the class `is-fixed-width` directly on the `p-rule`.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/fixed-width/" class="js-example">
View example of the fixed-width rule component
</a></div>

## Dark theme

To use rule component on dark background, add `is-dark` modifier class.

[View example of a highlighted rule on dark background](/docs/examples/patterns/rule/default?theme=dark).

## Deprecated

Rule component replaces the following deprecated styles:

- muted horizontal line `<hr class="is-muted">`: use `p-rule--muted` instead
- fixed width horizontal line `<hr class="is-fixed-width">`: use `<div class="row"><hr class="p-rule"></div>` or `<hr class="p-rule is-fixed-width">` instead
- separator `<hr class="p-separator">`: use rule component nested in a strip or section instead
- bordered strip `<div class="p-strip is-bordered">`: use highlighted strip, or a rule component instead

## Import

To add a rule into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-rule;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
