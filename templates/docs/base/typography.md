---
wrapper_template: '_layouts/docs.html'
context:
  title: Typography | Base elements
---

# Typography

<hr>

All text in Vanilla uses the [Ubuntu typeface](https://design.ubuntu.com/font/) , which can be used in your projects.

Vanilla's typographic scale has a base font-size of `1rem`.

## The value of `1rem`

The pixel value of `1rem` depends on the browser (in most cases, `16px`) and the user's browser settings.

In addition to that, Vanilla multiplies that value by <a href="https://github.com/canonical/vanilla-framework/blob/ea6f05b4a90169b36a5e9c5a86ceae40cbddd986/scss/_settings_font.scss#L9">`$font-size-ratio--largescreen`</a> on resolutions above a certain threshold (<a href="https://github.com/canonical/vanilla-framework/blob/ea6f05b4a90169b36a5e9c5a86ceae40cbddd986/scss/_settings_breakpoints.scss#L8">`$font-size-largescreen`</a>). This is done to account for the bigger distance at which larger screens are usually positioned from the viewer.

To disable this behaviour, include the following after you import and include the framework in your `scss`:

```scss
$increase-font-size-on-larger-screens: false;
```

Text elements in vanilla adhere to a type scale:

- The base of the scale is the paragraph font-size (`1rem`)
- The ratio of the scale is `1.14285714286` (16/14, so both 14 and 16 are members of the scale)

Heading sizes are obtained by taking the ratio to a specified `power` listed in the table below.

## Typographic scale

|             | Small-Medium | Large        |
| ----------- | ------------ | ------------ |
| _<h1>_      |              |              |
| `power`     | `6`          | `8`          |
| font size   | `2.22819rem` | `2.91029rem` |
| line height | `3rem`       | `3.5rem`     |
| _<h2>_      |              |              |
| `power`     | `4.5`        | `6`          |
| font size   | `1.83274rem` | `2.22819rem` |
| line height | `2.5rem`     | `3rem`       |
| _<h3>_      |              |              |
| `power`     | `3`          | `4`          |
| font size   | `1.49271rem` | `1.70596rem` |
| line height | `2rem`       | `2.5rem`     |
| _<h4>_      |              |              |
| `power`     | `1.5`        | `2`          |
| font size   | `1.22176rem` | `1.30612rem` |
| line height | `1.5rem`     | `2rem`       |
| _<h5>_      |              |              |
| `power`     | `1`          | `1`          |
| font size   | `1rem`       | `1rem`       |
| line height | `1.5rem`     | `1.5rem`     |
| _<h6>_      |              |              |
| `power`     | `1`          | `1`          |
| font size   | `1rem`       | `1rem`       |
| line height | `1.5rem`     | `1.5rem`     |
| _<p>_       |              |              |
| `power`     | `1`          | `1`          |
| font size   | `1rem`       | `1rem`       |
| line height | `1.5rem`     | `1.5rem`     |

## Heading classes

Heading classes can be added to text elements to give them the same visual
appearance as the base `h1`-`h6` heading elements without sacrificing correct
heading order and semantics.

In the following example, each heading is actually a `<p>` element that has been
modified to look like a particular heading size.

<div class="embedded-example"><a href="/docs/examples/patterns/headings/default/" class="js-example">
View example of the heading pattern
</a></div>

## Sub-headings

Sub-headings visually convey importance beneath a heading, or a line of text that expands on the meaning of the heading immediately before it.

<div class="embedded-example"><a href="/docs/examples/base/sub-headings/" class="js-example">
View example of the heading pattern
</a></div>

## Mixed heading classes

It is also possible to apply heading classes directly to heading elements if that
better suits your document style and tree.

<div class="embedded-example"><a href="/docs/examples/patterns/headings/mixed/" class="js-example">
View example of the mixed headings pattern
</a></div>

## Line length

Line length, measured in number of characters per line (CPL), has been shown to affect reading speed and comprehension. While there is little consensus on what the optimal CPL value is, most studies test with values between 45 and 95 characters per line. <a href="https://en.wikipedia.org/wiki/Line_length">Wikipedia</a> has a good historical overview and a list of studies on the subject.

The max-width of text elements in Vanilla Framework is limited using the `$text-max-width` variable, currently set to `40em`, or around 90 characters.

Vanilla also includes a utility to unset the max-width where necessary &ndash; `u-no-max-width`:

<div class="embedded-example"><a href="/docs/examples/utilities/max-width-unset/" class="js-example">
View example of how to unset max-width
</a></div>

Overriding or unsetting the `max-width` is reasonable in certain cases:

- to avoid an <a href="https://en.wikipedia.org/wiki/Widows_and_orphans">orphan</a> in some fixed, high-profile text, like a promotional banner or notification.
- when content is wrapped in a text element unintentionally, and fixing the markup is not possible. For example, a CMS or a documentation service might insert `<p>` after every line break, resulting in `<div>`'s or `<iframe>`'s wrapped in `<p>`'s.

## Ordered list

Use an ordered list when the order of the items is important.

<div class="embedded-example"><a href="/docs/examples/base/lists/ordered-list/" class="js-example">
View example of the base ordered list
</a></div>

## Unordered list

Use an unordered list when the order of the items isn't important.

<div class="embedded-example"><a href="/docs/examples/base/lists/unordered-list/" class="js-example">
View example of the base unordered list
</a></div>

## Definition list

Use a definition list when you want to list a group of one or more terms and
descriptions.

<div class="embedded-example"><a href="/docs/examples/base/lists/definition-list/" class="js-example">
View example of the base definition list
</a></div>

## Blockquotes and citations

<div class="embedded-example"><a href="/docs/examples/base/blockquotes/" class="js-example">
View example of the base blockquotes
</a></div>

## Small text

<div class="embedded-example"><a href="/docs/examples/base/small/" class="js-example">
View example of the small text
</a></div>

## Small caps text

Small caps text is used to style column headers in tables. This styling has proved useful in other contexts. To apply it, add the class `p-text--small-caps`.

<div class="embedded-example"><a href="/docs/examples/patterns/text-small-caps/" class="js-example">
View example of the small caps text
</a></div>

<span class="p-status-label--negative">Deprecated</span>

Previously this style was implemented as `.p-text--x-small-capitalised` class name. This name is now deprecated and will be removed in next major version of Vanilla, please use `.p-text--small-caps` instead.

## Baseline alignment: small, extra small and paragraph text

Because of the difference in line heights, small, extra small and paragraph text do not share the same baseline.
In some cases, for example when used on the same line, it can be useful to align them. Use the `u-align-text--small-to-default` `u-align-text--x-small-to-default` classes to achieve baseline alignment.

<div class="embedded-example"><a href="/docs/examples/utilities/align-by-baseline/" class="js-example">
View example of baseline alignment of paragraph, small, extra small text
</a></div>

<span class="p-status-label--negative">Deprecated</span>

Small caps style used to be implemented as extra small text variant with `.p-text--x-small-capitalised` class name that required the `.u-align-text--x-small-to-default` utility to align the baseline. This is not the case any more, so usage of this utility with new `.p-text--small-caps` (and its deprecated equivalent `.p-text--x-small-capitaised`) is deprecated and can be removed.

## Strong text

<div class="embedded-example"><a href="/docs/examples/base/strong/" class="js-example">
View example of the strong text
</a></div>

## Superscripted text

<div class="embedded-example"><a href="/docs/examples/base/sup/" class="js-example">
View example of the superscripted pattern
</a></div>

## Subscripted text

<div class="embedded-example"><a href="/docs/examples/base/sub/" class="js-example">
View example of the subscripted pattern
</a></div>

## Abbreviation

<div class="embedded-example"><a href="/docs/examples/base/abbr/" class="js-example">
View example of the abbreviation pattern
</a></div>

## Font weights

If you are using the variable Ubuntu font, it comes in six weights; thin, light, regular, medium, bold and extra bold.

<div class="embedded-example"><a href="/docs/examples/base/font-weights/" class="js-example">
View example of the Ubuntu font weights.
</a></div>

## Muted text

To reduce the prominence of text, use class `u-text--muted`.

<div class="embedded-example"><a href="/docs/examples/utilities/muted-text/" class="js-example">
View example of the muted-text
</a></div>

## Enabling Cyrillic, Greek and Latin fonts

Due to the extra weight of loading these fonts they are not imported by
default. To enable Cyrillic, Greek and Latin fonts on Ubuntu please set the
following font setting to true.

```sass
$font-allow-cyrillic-greek-latin: true;
```

<span class="p-status-label--negative">Deprecated</span>

In previous versions of Vanilla (`< 3.10.0`) there used to be an option `$font-use-subset-latin` for only importing a part of the Latin subset.

This has been made redundant by the adoption of the variable font and should be removed from your project.

## `font-display` options

The CSS [`font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) option allows you to set a strategy for what backup font is shown while an external font is loading. This is a very subjective decision; however, if you set the following variable to the option you want, it will add it to the typography for you.

```sass
$font-display-option: <auto | block | swap | fallback | optional>;
```

The default value of the `font-display` property on [all fonts used by Vanilla](https://github.com/canonical/vanilla-framework/blob/main/scss/_base_fontfaces.scss) is set to `fallback`.

## Import

To import just this base element into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_headings';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## Related

For more typographic related information view the [code](/docs/base/code) and [pull quote pattern](/docs/patterns/pull-quote) component or our [font settings](/docs/settings/font-settings).
