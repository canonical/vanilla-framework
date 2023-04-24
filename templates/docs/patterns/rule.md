---
wrapper_template: '_layouts/docs.html'
context:
  title: Rule | Components
---

# Rule

<hr>

Use the rule component to add horizontal separation between two sections.
It is typically used to visually break up sections of a page or to distinguish between different types of content.

### Default

<div class="embedded-example"><a href="/docs/examples/patterns/rule/default" class="js-example">
View example of a default horizontal rule
</a></div>

### Highlighted

You can add a highlight to a rule to make it stand out more. This is useful for drawing attention to a section of content.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/highlight" class="js-example">
View example of a highlighted rule
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
