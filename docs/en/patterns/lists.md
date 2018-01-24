---
title: Lists
table_of_contents: true
---

## Lists

If you want to display lists in a way that is more visually distinctive than the
 standard ```<ol>``` and ```<ul>```, Vanilla has 7 list styles at your disposal.

### Simple list

Use the class ```.p-list``` for a list without bullets and more spacing between
items than the basic lists.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/list/"
    class="js-example">
    View example of the list pattern
</a>

### List with icon

Add the class ```.is-ticked``` to each list item to display tick icons.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-ticked/"
    class="js-example">
    View example of the ticked list pattern
</a>

### List with dividers

Use the class ```.p-list--divided``` to add horizontal lines between the items.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-dividers/"
    class="js-example">
    View example of the divided list pattern
</a>

### List with icons and dividers

You can combine both ```.is-ticked``` and ```.p-list--divided``` to style a
 list with horizontal dividers and tick icons.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-dividers-ticked/"
    class="js-example">
    View example of the ticked divided list pattern
</a>

### Inline list

Apply the class ```.p-inline-list``` to display all the list items in one line.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-inline/"
    class="js-example">
    View example of the inline list pattern
</a>

### Middot-separated inline list

Apply the class ```.p-inline-list--middot``` to add a middot character between
inline list items.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-mid-dot/"
    class="js-example">
    View example of the middot list pattern
</a>

### Stepped list

If you want to display a list of items that form a set of steps — like a
tutorial or instructions — you can use the class ```.p-list-step```.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-stepped/"
    class="js-example">
    View example of the stepped list pattern
</a>

### Stepped list: detailed

Stepped list should be used for step by step instructions. This pattern is best
used on a `.p-strip--light` as the description sections are displayed in a white
box.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-stepped-detailed/"
  class="js-example">
  View example of the pattern stepped list detailed
</a>

### Ticked list

The color of the tick icon is set by the `$color-accent` variable in `_settings.scss`.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-ticked/"
  class="js-example">
  View example of the pattern list ticked
</a>

### Split list

If you wish to split the items in a list into two columns above `$breakpoint-medium`, you can do so by adding the class `is-split` to the list element.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/lists/lists-split/"
  class="js-example">
  View example of the patterns list split

</a>

<hr />

### Design

* [Lists design](https://github.com/ubuntudesign/vanilla-design/tree/master/Lists)

### Related

* [List tree pattern](/en/patterns/list-tree)
