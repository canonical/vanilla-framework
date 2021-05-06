---
wrapper_template: '_layouts/docs.html'
context:
  title: Lists | Components
---

## Lists

<hr>

If you want to display lists in a way that is more visually distinctive than the
standard `<ol>` and `<ul>`, we have 7 list styles at your disposal.

### Default

Use the class `.p-list` for a list without bullets and more spacing between
items than the basic lists.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/list/" class="js-example">
View example of the list pattern
</a></div>

### Ticked

Add the class `.is-ticked` to each list item to display tick icons.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>The color of the tick icon is set by the <code>$color-accent</code> variable in <code>settings.scss</code>.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-ticked/" class="js-example">
View example of the ticked list pattern
</a></div>

### Horizontal divider

Use the class `.p-list--divided` to add horizontal lines between the items.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-dividers/" class="js-example">
View example of the divided list pattern
</a></div>

### Ticked with horizontal divider

You can combine both `.is-ticked` and `.p-list--divided` to style a
list with horizontal dividers and tick icons.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-dividers-ticked/" class="js-example">
View example of the ticked divided list pattern
</a></div>

### Responsive divider

A responsive divider inserts divider lines between sections of content. On small screens (up to `$breakpoint-medium`), the divider lines appear horizontally. On screens bigger than `$breakpoint-medium`, the divider lines appear vertically, centered in the column gutters.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/divider/" class="js-example">
View example of lists with a responsive divider
</a></div>

### Inline

Apply the class `.p-inline-list` to display all the list items in one line.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-inline/" class="js-example">
View example of the inline list pattern
</a></div>

### Middot

Apply the class `.p-inline-list--middot` to add a middot character between
inline list items.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-mid-dot/" class="js-example">
View example of the middot list pattern
</a></div>

The utility class `.is-dark` can also be applied to a middot list:

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-mid-dot-dark/" class="js-example">
View example of the middot list with an is-dark class
</a></div>

### Inline stretched

Apply the class `.p-inline-list--stretch` to stretch the list items to fill the full width of the parent container.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-inline-stretch/" class="js-example">
View example of the stretched list pattern
</a></div>

You can use the align utilities to align the content of individual items.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-inline-stretch-align/" class="js-example">
View example of the stretched list pattern with alignment
</a></div>

### Vertical stepped

If you want to display a list of items that form a set of steps — like a
tutorial or instructions — you can use the class `.p-stepped-list`.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-stepped/" class="js-example">
View example of the stepped list pattern with headings
</a></div>

When the steps don't have headings use `<p>` paragraph as `.p-stepped-list__title`.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-stepped-without-headings/" class="js-example">
View example of the stepped list without headings
</a></div>

### Horizontal stepped

The stepped list should be used for step by step instructions. This pattern is best
used on a `.p-strip--light` as the description sections are displayed in a white
box.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-stepped-detailed/" class="js-example">
View example of the pattern stepped list detailed
</a></div>

### Split

If you wish to split the items in a list into two columns above `$breakpoint-medium`, you can do so by adding the class `is-split` to the list element.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/lists-split/" class="js-example">
View example of the patterns list split
</a></div>

### Theming

The responsive divider is available in a light and a dark theme. The colours used by both themes in the [colour settings file](https://github.com/canonical-web-and-design/vanilla-framework/blob/master/scss/_settings_colors.scss).
Overriding the colours of individual elements of the responsive is discouraged, as this may lead to accessibility issues, or inconsistencies with other components that use the same theme.

By default, the responsive divider uses the light theme. To change the global default, set `$theme-default-p-divider` to `dark`.

To change the appearance of an individual instance of the responsive divider pattern, you can use the `is-dark` class.

For more details about themes in Vanilla refer to the [Color theming](/docs/settings/color-settings#color-theming) section of the documentation.

<div class="embedded-example"><a href="/docs/examples/patterns/lists/divider-dark/" class="js-example">
View example of the divider list with an is-dark class
</a></div>

### Import

To import list patterns into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_lists';
@include vf-p-lists;
```

To add dividers into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_divider';
@include vf-p-divider;

// grid column classes are used within divider component, so you need to include grid pattern as well
@import 'patterns_grid';
@include vf-p-grid;
```

To include individual list patterns you need to include the `vf-p-list-placeholders` mixin first.

```scss
@import 'patterns_lists';
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

### React

You can use lists in React by installing our react-component library and importing `List` component.

[See the documentation for our React `List` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/list--default-story#list)

### Related

For a more interactive layered lists style [view the list tree component](/docs/patterns/list-tree).
