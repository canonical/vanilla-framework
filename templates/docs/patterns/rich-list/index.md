---
wrapper_template: '_layouts/docs.html'
context:
  title: Rich list | Patterns
---

The rich list is used to display a list alongside a title, logo section, image, and call-to-action block.

The list inside the rich list is a divided list, which is a list with a horizontal divider between each item.
The list items can be [bulletless](/docs/patterns/lists#bulletless-with-horizontal-divider),
[bulleted](/docs/patterns/lists#bulleted-with-horizontal-divider),
[ticked](/docs/patterns/lists#ticked-with-horizontal-divider),
or [ordered](/docs/patterns/lists#ordered-lists-with-horizontal-divider).

## Vertical

The vertical rich list splits content vertically. By default, text is on the left and the image is on the right.

The vertical rich list pattern is composed of the following elements:

| Element              | Description                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| Title (**required**) | <code>h2</code> title text                                                                     |
| Logo section         | Up to 8 [logo section](/docs/patterns/logo-section) logos                                      |
| Description          | <code>p</code> description text                                                                |
| List                 | A [divided list](/docs/patterns/lists#ticked-with-horizontal-divider) with up to 15 list items |
| Call to action block | [Call to action block](/docs/patterns/cta-block) beneath the description                       |
| Image (**required**) | Main list visual                                                                               |

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list/vertical/ticked" class="js-example">
View example of the vertical rich list pattern
</a></div>

### Flipped

To flip the image and text, simply reverse the ordering of the columns in the markup.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list/vertical/ticked-flipped" class="js-example">
View example of the vertical rich list pattern
</a></div>

### Minimal

The only mandatory elements in the rich vertical list are the title and the image, and one of the other (optional) elements.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list/vertical/minimal" class="js-example">
View example of the vertical rich list pattern
</a></div>

## Import

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
