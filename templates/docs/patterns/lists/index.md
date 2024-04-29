---
wrapper_template: '_layouts/docs.html'
context:
  title: Lists | Components
---

If you want to display lists in a way that is more visually distinctive than the
standard `<ol>` and `<ul>`, we have 7 list styles at your disposal.

## Bulleted with horizontal divider

Use the class `.p-list--divided` to add horizontal lines between the items and
`.has-bullet` to add bullets.
This is meant to be the new default list style please use this going forward.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-dividers-bulleted/" class="js-example">
View example of the bulleted divided list pattern
</a></div>

## Bulletless with horizontal divider

You can omit the `.has-bullet` class to style a list without them but keep in mind that the bulleted version is to be used as the default.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-dividers/" class="js-example">
View example of the divided list pattern
</a></div>

## Ordered lists with horizontal divider

You can use the class `.p-list--divided` to style an ordered list.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-dividers-ordered/" class="js-example">
View example of the ordered divided list pattern
</a></div>

## Ticked with horizontal divider

You can combine both `.is-ticked` and `.p-list--divided` to style a
list with horizontal dividers and tick icons.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-dividers-ticked/" class="js-example">
View example of the ticked divided list pattern
</a></div>

## Basic

Use the class `.p-list` for a list without bullets and more spacing between
items than the basic lists.

<div class="p-notification--caution">
  <p class="p-notification__content">
    <span class="p-notification__title">Deprecated:</span>
    <span class="p-notification__message">This style will be deprecated in the next major release. Please use the <code>.p-list--divided</code> style instead.</p></span>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/lists/list/" class="js-example">
View example of the list pattern
</a></div>

## Nested Count

If you want nested ordered lists to have numbers based on their parents, you can add the class `p-list--nested-counter` to the ordered list element.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/list-nested-count/" class="js-example">
View example of the pattern nested counter
</a></div>

## Status

Add the `.is-ticked` or `.is-crossed` classes to each list item to display tick/cross icons.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-status/" class="js-example">
View example of the list status pattern
</a></div>

## Inline

Apply the class `.p-inline-list` to display all the list items in one line.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-inline/" class="js-example">
View example of the inline list pattern
</a></div>

## Middot

Apply the class `.p-inline-list--middot` to add a middot character between
inline list items.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-mid-dot/" class="js-example">
View example of the middot list pattern
</a></div>

The utility class `.is-dark` can also be applied to a middot list:

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-mid-dot-dark/" class="js-example">
View example of the middot list with an is-dark class
</a></div>

## Inline stretched

Apply the class `.p-inline-list--stretch` to stretch the list items to fill the full width of the parent container.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-inline-stretch/" class="js-example">
View example of the stretched list pattern
</a></div>

You can use the align utilities to align the content of individual items.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-inline-stretch-align/" class="js-example">
View example of the stretched list pattern with alignment
</a></div>

## Vertical stepped

If you want to display a list of items that form a set of steps — like a
tutorial or instructions — you can use the class `.p-stepped-list`.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-stepped/" class="js-example">
View example of the stepped list pattern with headings
</a></div>

When the steps don't have headings use `<p>` paragraph as `.p-stepped-list__title`.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-stepped-without-headings/" class="js-example">
View example of the stepped list without headings
</a></div>

## Horizontal stepped

The stepped list should be used for step by step instructions.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-stepped-detailed/" class="js-example">
View example of the pattern stepped list detailed
</a></div>

## Split

If you wish to split the items in a list into two columns above `$breakpoint-small`, you can do so by adding the class `is-split` to the list element.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-split/" class="js-example">
View example of the patterns list split
</a></div>

## Related components

To separate non-list content with a responsive divider, see our [Divider component](/docs/patterns/divider).

For a more interactive layered lists style [view the list tree component](/docs/patterns/list-tree).

## Import

To import list patterns into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import '../vanilla';
@include vf-base;

@include vf-p-lists;
```

To include individual list patterns you need to include the `vf-p-list-placeholders` mixin first.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-list-placeholders;

// choose individual list patterns to include
@include vf-p-list;
@include vf-p-list-divided;
@include vf-p-list-item-state;
@include vf-p-inline-list;
@include vf-p-inline-list-middot;
@include vf-p-inline-list-stretch;
@include vf-p-stepped-list;
@include vf-p-stepped-list-detailed;
@include vf-p-list-split;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use lists in React by installing our react-component library and importing `List` component.

[See the documentation for our React `List` component](https://canonical.github.io/react-components/?path=/docs/list--default-story#list)
