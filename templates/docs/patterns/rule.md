---
wrapper_template: '_layouts/docs.html'
context:
  title: Rule | Components
---

The rule component indicates the beginning of a new group of elements. This might be at the section level, or between more granular elements, like paragraphs.

It "anchors" elements that are far apart, and at risk of appearing floating in space.

It indicates the direction in which we want the viewer to read the content.

## Default

<div class="embedded-example"><a href="/docs/examples/patterns/rule/default" class="js-example">
View example of a default horizontal rule
</a></div>

## Muted

You can add a muted rule to make it less prominent by using the `p-rule--muted` class name. This is useful for separating smaller blocks of content without drawing too much attention to the rule itself.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/muted" class="js-example">
View example of a muted horizontal rule
</a></div>

## Highlighted

You can add a highlight to a rule to make it stand out more by using `p-rule--highlight` class name. This is useful for drawing attention to a section of content.

Highlighted rule can also be accented by adding `is-accent` modifier class.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/highlight" class="js-example">
View example of a highlighted rule
</a></div>

## Dark theme

To use rule component on dark background, add `is-dark` modifier class.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/dark" class="js-example">
View example of a highlighted rule on dark background
</a></div>

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
