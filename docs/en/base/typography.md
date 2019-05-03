---
title: Typography
table_of_contents: true
---

## Typography

<hr>

All text in Vanilla uses the [Ubuntu typeface](https://design.ubuntu.com/font/) , which can be used in your projects.

Vanilla's typographic scale has a base font-size of `1rem` (`16px`) and a font-weight of 300.
The heading sizes h1-h4 follow a modular scale with a base value of 16/14 (~1.143).

- On small to medium screens the ratio is 2:3
- On large screens the ratio is 1:2

This means that the font size is calculated from (16/14)<sup><em>n</em></sup> where _n_ is the point on the modular scale.

### Typographic scale

|                                         | Small-Medium | Large        |
| --------------------------------------- | ------------ | ------------ |
| <h1 class="u-no-margin--bottom">h1</h1> |              |              |
| modular point                           | `6`          | `8`          |
| font size                               | `2.22819rem` | `2.91029rem` |
| line height                             | `3rem`       | `3.5rem`     |
| <h2 class="u-no-margin--bottom">h2</h2> |              |              |
| modular point                           | `4.5`        | `6`          |
| font size                               | `1.83274rem` | `2.22819rem` |
| line height                             | `2.5rem`     | `3rem`       |
| <h3 class="u-no-margin--bottom">h3</h3> |              |              |
| modular point                           | `3`          | `4`          |
| font size                               | `1.49271rem` | `1.70596rem` |
| line height                             | `2rem`       | `2.5rem`     |
| <h4 class="u-no-margin--bottom">h4</h4> |              |              |
| modular point                           | `1.5`        | `2`          |
| font size                               | `1.22176rem` | `1.30612rem` |
| line height                             | `1.5rem`     | `2rem`       |
| <h5 class="u-no-margin--bottom">h5</h5> |              |              |
| modular point                           | `0`          | `0`          |
| font size                               | `1rem`       | `1rem`       |
| line height                             | `1.5rem`     | `1.5rem`     |
| <h6 class="u-no-margin--bottom">h6</h6> |              |              |
| modular point                           | `0`          | `0`          |
| font size                               | `1rem`       | `1rem`       |
| line height                             | `1.5rem`     | `1.5rem`     |
| <p class="u-no-margin--bottom">p</p>    |              |              |
| modular point                           | `0`          | `0`          |
| font size                               | `1rem`       | `1rem`       |
| line height                             | `1.5rem`     | `1.5rem`     |

### Heading classes

Heading classes can be added to text elements to give them the same visual
appearance as the base `h1`-`h6` heading elements without sacrificing correct
heading order and semantics.

In the following example, each heading is actually a `<p>` element that has been
modified to look like a particular heading size.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/headings/default/"
    class="js-example">
View example of the heading pattern
</a>

### Sub-headings

Sub-headings visually convey importance beneath a heading, or a line of text that expands on the meaning of the heading immediately before it.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/sub-headings/"
    class="js-example">
View example of the heading pattern
</a>

### Mixed heading classes

It is also possible to apply heading classes directly to heading elements if that
better suits your document style and tree.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/headings/mixed/"
    class="js-example">
View example of the mixed headings pattern
</a>

### Ordered list

Use an ordered list when the order of the items is important.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/lists/ordered-list/"
    class="js-example">
View example of the base ordered list
</a>

### Unordered list

Use an unordered list when the order of the items isn't important.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/lists/unordered-list/"
    class="js-example">
View example of the base unordered list
</a>

### Definition list

Use a definition list when you want to list a group of one or more terms and
descriptions.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/lists/definition-list/"
    class="js-example">
View example of the base definition list
</a>

### Blockquotes and citations

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/blockquotes/"
    class="js-example">
View example of the base blockquotes
</a>

### Small text

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/small/"
    class="js-example">
View example of the small text
</a>

### Strong text

<strong>This is some strong text</strong>

### Superscripted text

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/sup/"
    class="js-example">
View example of the superscripted pattern
</a>

### Subscripted text

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/sub/"
    class="js-example">
View example of the subscripted pattern
</a>

### Abbreviation

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/abbr/"
    class="js-example">
View example of the abbreviation pattern
</a>

### Font weights

If you are using the Ubuntu font, it comes in five weights; thin, light, regular, medium, and bold.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/font-weights/"
    class="js-example">
View example of the Ubuntu font weights.
</a>

### Enabling Cyrillic, Greek and Latin fonts

Due to the extra weight of loading these fonts they are not imported by
default. To enable Cyrillic, Greek and Latin fonts on Ubuntu please set the
following font setting to true.

```sass
$font-allow-cyrillic-greek-latin: true;
```

### Design

For more information [view the typography design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Typography), which includes the specification in markdown format and a PNG image.

### Related

For more typographic related information view the [code](/en/base/code) and [pull quote pattern](/en/patterns/pull-quote) component or our [font settings](/en/settings/font-settings).
