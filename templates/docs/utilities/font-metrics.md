---
wrapper_template: '_layouts/docs.html'
context:
  title: Font metrics | Utilities
---

Being able to visualise the <a target="_blank" href="https://en.wikipedia.org/wiki/Baseline_(typography)">baseline</a> position, <a target="_blank" href="https://en.wikipedia.org/wiki/Cap_height">cap-height</a> and <a target="_blank" href="https://en.wikipedia.org/wiki/X-height">x-height</a> of a typeface can be helpful, for example when trying to precisely align inline-block elements (like icons) to text.

These properties are not directly accessible via css, but can be obtained from font-editing software like <a target="_blank" href="https://fontforge.github.io/">FontForge</a>. The values are stored in `_settings_font.scss` (the defaults apply to the Ubuntu font family). If you want to use this utility with another font, you will need to change the default values to match your font.

<div class="embedded-example"><a href="/docs/examples/utilities/font-metrics/" class="js-example">
View an example of the font metrics utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-visualise-baseline($horisontal-bleed: 2rem);
```

Then insert a `span` with class `u-visualise-font-metrics` in a heading, paragraph or button.

The `$horisontal-bleed` variable (default value `2rem`) makes the lines protrude on either side of the element, in order to help align adjacent elements. To remove the bleed, use `@include vf-u-visualise-baseline(0)`.

For more information on font metrics, this <a href="http://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align">blog post</a> gives a good overview.

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
