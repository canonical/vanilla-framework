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

<div class="embedded-example"><a href="/docs/examples/patterns/rule/default" class="js-example">View example of a default horizontal rule</a></div>

## Muted

Horizontal rules should be muted by default, except in the following cases:

- when they are placed at the beginning of a section, usually above an h2
- when they are using the highlighted rule variant

Whenever a rule is inside a section, and spans less than the full fixed width of the grid, it should always be muted.

You can add a muted rule by using the `p-rule--muted` class name.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/muted" class="js-example">View example of a muted horizontal rule</a></div>

## Highlighted

If you want to draw more attention to a horizontal rule, you can use the `p-rule--highlighted` class name.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/highlighted" class="js-example">View example of a highlighted horizontal rule</a></div>

## Fixed width

Rules that are placed at the beginning of a section (or as part of a header) should use the default variant and span the full width (100%) of the section.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/full-width" class="js-example">View example of a fixed width horizontal rule</a></div>

## Dark theme

On dark backgrounds rules can be used with `.p-rule--dark` class name.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/dark" class="js-example">View example of a dark horizontal rule</a></div>

## Deprecated

The variants `p-rule--accent` and `p-rule--muted` have been renamed to `p-rule--highlighted` and `p-rule--muted` respectively.

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-rule;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
