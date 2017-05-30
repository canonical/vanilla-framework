---
title: Typography
site_title: Typography | Vanilla framework documentation
---

# Typography

All text in Vanilla uses the Ubuntu typeface.

Vanilla's typographic scale has a base font size of 15 pixels (screens smaller than 768 pixels)
and a font weight of 300.  At the medium breakpoint, the base font size increases to 16
pixels.

## Typographic scale

|               | Small  | Medium | Large  |
| ------------- | -----  | ------ | -----  |
| **p**         |        |        |        |
| font size     | `15px` | `16px` | `16px` |
| line height   | `24px` | `24px` | `24px` |
| margin top    | `18px` | `24px` | `24px` |
| margin bottom | `18px` | `24px` | `24px` |
| <h1>h1</h1>   |        |        |        |
| font size     | `32px` | `40px` | `48px` |
| line height   | `36px` | `48px` | `60px` |
| margin top    | `18px` | `24px` | `24px` |
| margin bottom | `18px` | `24px` | `24px` |
| <h2>h2</h2>   |        |        |        |
| font size     | `26px` | `32px` | `36px` |
| line height   | `30px` | `40px` | `42px` |
| margin top    | `18px` | `24px` | `24px` |
| margin bottom | `18px` | `24px` | `24px` |
| <h3>h3</h3>   |        |        |        |
| font size     | `23px` | `26px` | `28px` |
| line height   | `30px` | `30px` | `36px` |
| margin top    | `18px` | `24px` | `24px` |
| margin bottom | `18px` | `24px` | `24px` |
| <h4>h4</h4>   |        |        |        |
| font size     | `20px` | `22px` | `24px` |
| line height   | `24px` | `30px` | `30px` |
| margin top    | `18px` | `24px` | `24px` |
| margin bottom | `18px` | `24px` | `24px` |
| <h5>h5</h5>   |        |        |        |
| font size     | `18px` | `19px` | `21px` |
| line height   | `24px` | `24px` | `24px` |
| margin top    | `18px` | `24px` | `24px` |
| margin bottom | `18px` | `24px` | `24px` |
| <h6>h6</h6>   |        |        |        |
| font size     | `16px` | `17px` | `17px` |
| line height   | `18px` | `24px` | `24px` |
| margin top    | `18px` | `24px` | `24px` |
| margin bottom | `18px` | `24px` | `24px` |

## Heading classes

Heading classes can be added to text elements to give them the same visual
appearance as the base h1-h6 heading elements without sacrificing correct
heading order and semantics.

Heading classes are not tied to elements and can be freely mixed, for example
you can apply the `p-heading--one` class to an `h3` element if that better
suits your document style and tree.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/headings/mixed/"
    class="js-example">
    View example of the mixed headings pattern
</a>

## Ordered list

Use an ordered list when the order of the items is important.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/lists/ordered-list/"
    class="js-example">
    View example of the base ordered list
</a>

## Unordered list

Use an unordered list when the order of the items isn't important.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/lists/unordered-list/"
    class="js-example">
    View example of the base unordered list
</a>

## Description list

Use a description list when you want to list a group of one or more terms and
descriptions.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/lists/definition-list/"
    class="js-example">
    View example of the base definition list
</a>

## Blockquotes and citations

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/blockquotes/"
    class="js-example">
    View example of the base blockquotes
</a>

## Small text

<small>This is some &lt;small&gt; text with a font size of 13 pixels.</small>

## Strong text

<strong>This is some strong text</strong>

## Superscripted text

<p>This text is <sup>superscripted</sup></p>

## Subscripted text

<p>This text is <sub>subscripted</sub></p>

## Enabling Cyrillic, Greek and Latin fonts

Due to the extra extra weight of loading these fonts they are not imported by
default. To enable Cyrillic, Greek and Latin fonts on Ubuntu please set the
following font setting to true.

``` sass
$font-allow-cyrillic-greek-latin: true;
```

<hr />

## Related

* [Code](/en/base/code)
* [Pull quote pattern](/en/patterns/pull-quote)
* [Lists pattern](/en/patterns/lists)
