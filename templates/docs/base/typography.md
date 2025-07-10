---
wrapper_template: '_layouts/docs.html'
context:
  title: Typography | Base elements
---

## The Ubuntu typeface

We use the [Ubuntu typeface](https://design.ubuntu.com/font/) exclusively. It was recently upgraded to a variable font, which features a weight and a width axis. It now also includes true small caps. Number figures to accompany the small caps are currently being finalised and will be available soon.

<table style="table-layout: auto">
<tbody>
  <tr>
    <td><strong>ABCDEFGHIJKLMNOPQRSTUVWXYZ</strong></td>
    <td><strong>abcdefgijklmnopqrstuvwxyz</strong></td>
    <td><strong>01234567890</strong></td>
  </tr>
  <tr>
    <td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
    <td>abcdefgijklmnopqrstuvwxyz</td>
    <td>01234567890</td>
  </tr>
  <tr>
    <td><em>ABCDEFGHIJKLMNOPQRSTUVWXYZ</em></td>
    <td><em>abcdefgijklmnopqrstuvwxyz</em></td>
    <td><em>01234567890</em></td>
  </tr>
  <tr>
    <td><span class="p-text--small-caps">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span></td>
    <td><span class="p-text--small-caps">abcdefgijklmnopqrstuvwxyz</span></td>
    <td><span class="p-text--small-caps">1234567890</span></td>
  </tr>
</tbody>
</table>

## The subset we use

### Width

Even though a width axis is available, allowing text to be condensed, we do not use it in our design system. All text should be set with the width axis at its widest (100).

### Weight

We use a carefully selected set of weights in our heading hierarchy. As a general rule, we reduce the weight of light headings as the font-size increases. We keep the weight of bold headings the same, thereby increasing contrast between light and bold headings as we move up the type scale. The following table provides the full list of weights we use:

<table>
  <thead>
    <tr>
      <th width="50%">Weight</th>
      <th width="50%">Use</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>100</td>
      <td>Display headings</td>
      </tr>
    <tr>
      <td>180</td>
      <td>H2</td>
      </tr>
    <tr>
      <td>275</td>
      <td>H4</td>
      </tr>
    <tr>
      <td>400</td>
      <td>Small text, all UI elements, body text, H6 headings</td>
      </tr>
    <tr>
      <td>550</td>
      <td>H5, H3, H1</td>
    </tr>
  </tbody>
</table>

## Our type scale

Our type scale consists of 8 font sizes, expressed as rems (root em units). For simplicity, going forward we will refer to sizes in pixels, with the assumption that the base rem unit, which is set by browsers, is at its default of 16 pixels. The following table lists the type sizes and what they are used for:

<table>
<thead>
  <tr>
    <th width="10%">Size</th>
    <th width="40%">Use</th>
    <th width="50%">Example</th>
  </tr>
</thead>
<tbody>
<tr>
    <td>12px</td>
    <td>Badges, labels and chips.</td>
    <td><p class="p-text--x-small">Very small text</p></td>
  </tr>
  <tr>
    <td>14px</td>
    <td>Secondary text, side notes, etc.</td>
    <td><small>Small secondary text</small></td>
  </tr>
  <tr>
    <td>16px</td>
    <td>Body text, all component, <code>h5</code> and <code>h6</code> headings.</td>
    <td>
      Standard body text
      <p class="p-heading--5">H5 heading</p>
      <p class="p-heading--6">H6 heading</p>
    </td>
  </tr>
  <tr>
    <td>24px</td>
    <td><code>h3</code> and <code>h4</code> level headings.</td>
    <td>
      <p class="p-heading--4 u-no-padding--top">H4 heading</p>
      <p class="p-heading--3">H3 heading</p>
    </td>
  </tr>
  <tr>
    <td>32px</td>
    <td><code>h1</code> and <code>h2</code> level headings on small and medium screens.</td>
    <td>
      <p class="p-heading--2 u-no-padding--top" style="font-size: 2rem; line-height: 2.5rem">H2 heading (small and medium screens)</p>
      <p class="p-heading--1" style="font-size: 2rem; line-height: 2.5rem">H1 heading (small and medium screens)</p>
    </td>
  </tr>
  <tr>
    <td>40px</td>
    <td><code>h1</code> and <code>h2</code> level headings on large screens.</td>
    <td>
      <p class="p-heading--2 u-no-padding--top" style="font-size: 2.5rem; line-height: 3rem">H2 heading</p>
      <p class="p-heading--1" style="font-size: 2.5rem; line-height: 3rem">H1 heading</p>
    </td>
  </tr>
  <tr>
    <td>64px</td>
    <td>Ad hoc display headings for important bespoke pages on small and medium screens.</td>
    <td><h1 class="p-heading--display" style="font-size: 4rem; line-height: 4.5rem">Ubuntu Pro</h1></td>
  </tr>
  <tr>
    <td>80px</td>
    <td>Ad hoc display headings for important bespoke pages on large screens.</td>
    <td><h1 class="p-heading--display" style="font-size: 5rem; line-height: 5.5rem">Ubuntu Pro</h1></td>
  </tr>
</tbody>
</table>

### The value of `1rem`

Vanilla's typographic scale has a base font-size of `1rem`.

The pixel value of `1rem` depends on the browser (in most cases, `16px`) and the user's browser settings.

In addition to that, Vanilla multiplies that value by <a href="https://github.com/canonical/vanilla-framework/blob/ea6f05b4a90169b36a5e9c5a86ceae40cbddd986/scss/_settings_font.scss#L9">`$font-size-ratio--largescreen`</a> on resolutions above a certain threshold (<a href="https://github.com/canonical/vanilla-framework/blob/ea6f05b4a90169b36a5e9c5a86ceae40cbddd986/scss/_settings_breakpoints.scss#L8">`$font-size-largescreen`</a>). This is done to account for the bigger distance at which larger screens are usually positioned from the viewer.

To disable this behaviour, include the following after you import and include the framework in your `scss`:

```scss
$increase-font-size-on-larger-screens: false;
```

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

## Display headings

Display headings are reserved for the titles of important bespoke pages. They should be used sparingly by adding the `.p-heading--display` class to a `h1` heading element.

<div class="embedded-example"><a href="/docs/examples/patterns/headings/display/" class="js-example">
View example of the display headings pattern
</a></div>

## Accented headings

The accent colour can be sparingly used to highlight headings to help them stand out from the rest of the page.

<div class="embedded-example"><a href="/docs/examples/base/headings/accented/" class="js-example">
View example of the accented headings pattern
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

<div class="embedded-example"><a href="/docs/examples/base/typography/blockquotes/" class="js-example">
View example of the base blockquotes
</a></div>

## Small text

<div class="embedded-example"><a href="/docs/examples/base/typography/small/" class="js-example">
View example of the small text
</a></div>

## Small caps text

Small caps text is used to style column headers in tables. This styling has proved useful in other contexts. To apply it, add the class `p-text--small-caps`.

<div class="embedded-example"><a href="/docs/examples/patterns/text-small-caps/" class="js-example">
View example of the small caps text
</a></div>

{{ status("deprecated") }}

Previously this style was implemented as `.p-text--x-small-capitalised` class name. This name is now deprecated and will be removed in next major version of Vanilla, please use `.p-text--small-caps` instead.

## Text figures

Text figures are numerals designed to echo the varying height and alignment to the baseline of lower-case text.

To apply the text figures styling, wrap the number in a span with the class `u-text-figures`.

<div class="row--50-50">
  <div class="col">
    <div class="p-notification--positive">
      <div class="p-notification__content">
        <h5 class="p-notification__title">When to use:</h5>
        <p class="p-notification__message">Text figures work best when placed within small caps where we've set them as the default and are generally recommended within blocks of lower-case text too, although we haven't set that as a default.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="p-notification--negative">
      <div class="p-notification__content">
        <h5 class="p-notification__title">When not to use:</h5>
        <p class="p-notification__message">Text figures should never be used next to uppercase text. Care should be taken in tables and other scenarios where there is a lot of numeric data.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/utilities/text-figures/" class="js-example">
View example of the old-style numerals
</a></div>

## Baseline alignment: small, extra small and paragraph text

Because of the difference in line heights, small, extra small and paragraph text do not share the same baseline.
In some cases, for example when used on the same line, it can be useful to align them. Use the `u-align-text--small-to-default` `u-align-text--x-small-to-default` classes to achieve baseline alignment.

<div class="embedded-example"><a href="/docs/examples/utilities/align-by-baseline/" class="js-example">
View example of baseline alignment of paragraph, small, extra small text
</a></div>

{{ status("deprecated") }}

Small caps style used to be implemented as extra small text variant with `.p-text--x-small-capitalised` class name that required the `.u-align-text--x-small-to-default` utility to align the baseline. This is not the case any more, so usage of this utility with new `.p-text--small-caps` (and its deprecated equivalent `.p-text--x-small-capitaised`) is deprecated and can be removed.

## Strong text

<div class="embedded-example"><a href="/docs/examples/base/typography/strong/" class="js-example">
View example of the strong text
</a></div>

## Superscripted text

<div class="embedded-example"><a href="/docs/examples/base/typography/sup/" class="js-example">
View example of the superscripted pattern
</a></div>

## Subscripted text

<div class="embedded-example"><a href="/docs/examples/base/typography/sub/" class="js-example">
View example of the subscripted pattern
</a></div>

## Abbreviation

<div class="embedded-example"><a href="/docs/examples/base/typography/abbr/" class="js-example">
View example of the abbreviation pattern
</a></div>

## Font weights

If you are using the variable Ubuntu font, it comes in six weights; thin, light, regular, medium, bold and extra bold.

<div class="embedded-example"><a href="/docs/examples/base/typography/font-weights/" class="js-example">
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

{{ status("deprecated") }}

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
