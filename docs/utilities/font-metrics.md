---
layout: default
---

## Font metrics

<hr>

Being able to visualise the baseline position, cap-height and x-height of a typeface can help precisely align inline-block elements (for example icons) to text.

These properties are not directly accessible via css, but can be obtained from font-editing software like FontForge. The values (for the Ubuntu font family) are stored in `_settings_font.scss`. If you want to use this utility with another font, you will need to change the default values to match your font.

<a href="/examples/utilities/font-metrics/"
    class="js-example">
View an example of the font metrics utility
</a>

### Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'utilities_font-metrics';
@include vf-u-visualise-baseline($horisontal-bleed: 2rem);
```

```html
Wrap an anonimous string of text in a span with class `u-visualise-font-metrics`.
```

The 2rem `$horisontal-bleed` variable makes the lines protrude on either side of the element, in order to help align adjacent elements. To hide the bleed, use `@include vf-u-visualise-baseline(0)`.

For more information on font metrics, this <a class="p-link--external" href="http://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align">blog post</a> gives a good overview.

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.
