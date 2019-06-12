---
layout: default
---

## Lists

<hr>

If you want to display lists in a way that is more visually distinctive than the
standard `<ol>` and `<ul>`, we have 7 list styles at your disposal.

### Default

Use the class `.p-list` for a list without bullets and more spacing between
items than the basic lists.

<a href="/examples/patterns/lists/list/"
    class="js-example">
View example of the list pattern
</a>

### Ticked

Add the class `.is-ticked` to each list item to display tick icons.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>The color of the tick icon is set by the <code>$color-accent</code> variable in <code>settings.scss</code>.
  </p>
</div>

<a href="/examples/patterns/lists/lists-ticked/"
    class="js-example">
View example of the ticked list pattern
</a>

### Horizontal divider

Use the class `.p-list--divided` to add horizontal lines between the items.

<a href="/examples/patterns/lists/lists-dividers/"
    class="js-example">
View example of the divided list pattern
</a>

### Ticked with horizontal divider

You can combine both `.is-ticked` and `.p-list--divided` to style a
list with horizontal dividers and tick icons.

<a href="/examples/patterns/lists/lists-dividers-ticked/"
    class="js-example">
View example of the ticked divided list pattern
</a>

### Vertical divider

A divider is used to separate related content items.

<a href="/examples/patterns/lists/divider/"
  class="js-example">
View example of lists with a vertical divider
</a>

### Inline

Apply the class `.p-inline-list` to display all the list items in one line.

<a href="/examples/patterns/lists/lists-inline/"
    class="js-example">
View example of the inline list pattern
</a>

### Middot

Apply the class `.p-inline-list--middot` to add a middot character between
inline list items.

<a href="/examples/patterns/lists/lists-mid-dot/"
    class="js-example">
View example of the middot list pattern
</a>

### Vertical stepped

If you want to display a list of items that form a set of steps — like a
tutorial or instructions — you can use the class `.p-stepped-list`.

<a href="/examples/patterns/lists/lists-stepped/"
    class="js-example">
View example of the stepped list pattern
</a>

### Horizontal stepped

The stepped list should be used for step by step instructions. This pattern is best
used on a `.p-strip--light` as the description sections are displayed in a white
box.

<a href="/examples/patterns/lists/lists-stepped-detailed/"
  class="js-example">
View example of the pattern stepped list detailed
</a>

### Split

If you wish to split the items in a list into two columns above `$breakpoint-medium`, you can do so by adding the class `is-split` to the list element.

<a href="/examples/patterns/lists/lists-split/"
  class="js-example">
View example of the patterns list split
</a>

### Design

For more information [view the lists design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Lists), which includes the specification in markdown format and a PNG image.

### Related

For a more interactive layered lists style [view the list tree component](/patterns/list-tree).
