---
wrapper_template: '_layouts/docs.html'
context:
  title: Equal heights | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The equal heights pattern is used to display rich content about multiple items in a grid layout.

The equal heights pattern is composed of the following elements:

| Element                           | Description                                                                                                                                                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| title_text (**required**)         | `H2` title text.                                                                                                                                                                                                             |
| subtitle_text                     | `H4` or `H5` subtitle text, depending on `subtitle_heading_level`.                                                                                                                                                           |
| subtitle_heading_level            | Heading level of the subtitles. May be `4` or `5`. Defaults to `5`.                                                                                                                                                          |
| highlight_images                  | If the images need to be [highlighted](https://vanillaframework.io/docs/patterns/images#highlighted-image). Not added by default.                                                                                            |
| image_aspect_ratio_small          | The aspect ratio to apply to item images on [small screens](/docs/settings/breakpoint-settings). Can be any of the [image container aspect ratio identifiers](/docs/patterns/images#class-reference). Defaults to "square".  |
| image_aspect_ratio_medium         | The aspect ratio to apply to item images on [medium screens](/docs/settings/breakpoint-settings). Can be any of the [image container aspect ratio identifiers](/docs/patterns/images#class-reference). Defaults to "square". |
| image_aspect_ratio_large          | The aspect ratio to apply to item images on [large screens](/docs/settings/breakpoint-settings). Can be any of the [image container aspect ratio identifiers](/docs/patterns/images#class-reference). Defaults to "2-3".     |
| items (**required**)              | An `Array<Object>` of individual item properties.                                                                                                                                                                            |
| items[].title_text (**required**) | The title for the item.                                                                                                                                                                                                      |
| items[].description_html          | The description for the item.                                                                                                                                                                                                |
| items[].image_html                | The image element for the item.                                                                                                                                                                                              |
| items[].cta_html                  | The call to action element for the item.                                                                                                                                                                                     |     |

## 4 columns

If the number of items is divisible by 4, the items will be laid out in 4 columns on large screens.

<div class="embedded-example"><a href="/docs/examples/patterns/equal-heights/4-columns-responsive" class="js-example" data-lang="jinja">
View example of the equal heights pattern
</a></div>

## 3 columns

If the number of items is evenly divisible by 3, but not evenly divisible by 4 (for example, 6 items), the items will be laid out in 3 columns on large screens.

<div class="embedded-example"><a href="/docs/examples/patterns/equal-heights/3-columns-responsive" class="js-example" data-lang="jinja">
View example of the equal heights pattern
</a></div>

## Minimal contents

At a minimum, you should provide a title, at least 3 items, and a title and image for each item.

<div class="embedded-example"><a href="/docs/examples/patterns/equal-heights/minimal-responsive" class="js-example" data-lang="jinja">
View example of the equal heights pattern
</a></div>

## Parameter consistency

The presence of an element in one of the items establishes a visual rhythm that should be upheld by the other items.
For optimal visual consistency, the properties of the individual `items` should be consistent in each invocation
of the pattern. For example, if one item has a `description_html` property, all items should have a `description_html` property.

In the following example, the second and fourth items are missing descriptions, and the third and fourth items are missing CTAs.
This demonstrates what **not** to do with this pattern.

<div class="embedded-example"><a href="/docs/examples/patterns/equal-heights/mixed-column-items-responsive" class="js-example" data-lang="jinja">
View example of the equal heights pattern
</a></div>

## Highlighted Images

To [highlight](https://vanillaframework.io/docs/patterns/images#highlighted-image) images within the pattern, set `highlight_images=True`. This is generally used when images are illustrations.

<div class="embedded-example"><a href="/docs/examples/patterns/equal-heights/4-columns-highlighted-images" class="js-example" data-lang="jinja">
View example of the equal heights pattern
</a></div>

## Jinja Macro

The `vf_equal_heights` Jinja macro can be used to generate an equal heights pattern. The API for the macro is
shown below.

### Parameters

<div style="overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="width: 220px;">Name</th>
        <th style="width: 160px;">Required?</th>
        <th style="width: 160px;">Type</th>
        <th style="width: 160px;">Default</th>
        <th style="width: 250px;">Description</th>
      </tr>
    </thead> <tbody>
      <tr>
        <td>
          <code>title_text</code>
        </td>
        <td>
          Yes </td>
        <td>
          String </td>
        <td>
          N/A
        </td>
        <td>
          <code>H2</code> title text.
        </td>
      </tr>
      <tr>
        <td>
          <code>subtitle_text</code>
        </td>
        <td>
          No </td>
        <td>
          String </td>
        <td>
          N/A
        </td>
        <td>
          <code>H4</code> or <code>H5</code> subtitle text, depending on <code>subtitle_heading_level</code>.
        </td>
      </tr>
      <tr>
        <td>
          <code>subtitle_heading_level</code>
        </td>
        <td>
          No </td>
        <td>
          One of:<br>
          <code>4</code>,<br>
          <code>5</code>
        </td>
        <td>
           <code>5</code>
        </td>
        <td>
          Heading level of the subtitles. May be <code>4</code> or <code>5</code>.
        </td>
      </tr>
      <tr>
        <td>
          <code>highlight_images</code>
        </td>
        <td>
          No </td>
        <td>
          boolean
        </td>
        <td>
           <code>False</code>
        </td>
        <td>
          Whether to <a href="https://vanillaframework.io/docs/patterns/images#highlighted-image">highlight</a> images within the pattern.
        </td>
      </tr>
      <tr>
        <td>
          <code>image_aspect_ratio_small</code>
        </td>
        <td>
          No </td>
        <td>
           String </td>
        <td>
           <code>square</code>
        </td>
        <td>
           The aspect ratio to apply to item images on <a href="/docs/settings/breakpoint-settings">small screens</a>. Can be any of the <a href="/docs/patterns/images#class-reference">image container aspect ratio identifiers</a>.
        </td>
      </tr>
      <tr>
        <td>
          <code>image_aspect_ratio_medium</code>
        </td>
        <td>
          No </td>
        <td>
           String </td>
        <td>
           <code>square</code>
        </td>
        <td>
          The aspect ratio to apply to item images on <a href="/docs/settings/breakpoint-settings">medium screens</a>. Can be any of the <a href="/docs/patterns/images#class-reference">image container aspect ratio identifiers</a>.
        </td>
      </tr>
      <tr>
        <td>
          <code>image_aspect_ratio_large</code>
        </td>
        <td>
          No </td>
        <td>
           String </td>
        <td>
           <code>2-3</code>
        </td>
        <td>
           The aspect ratio to apply to item images on <a href="/docs/settings/breakpoint-settings">large screens</a>. Can be any of the <a href="/docs/patterns/images#class-reference">image container aspect ratio identifiers</a>.
        </td>
      </tr>
      <tr>
        <td>
          <code>items</code>
        </td>
        <td>
          Yes </td>
        <td>
           Array&lt;Object&gt;
        </td>
        <td>
          N/A
        </td>
        <td>
          An <code>Array&lt;Object&gt;</code> of individual item properties.
        </td>
      </tr>
      <tr>
        <td>
          <code>items[].title_text</code>
        </td>
        <td>
          Yes </td>
        <td>
          String </td>
        <td>
          N/A
        </td>
        <td>
          The title for the item.
        </td>
      </tr>
      <tr>
        <td>
           <code>items[].description_html</code>
        </td>
        <td>
          No </td>
        <td>
          String </td>
        <td>
          N/A
        </td>
        <td>
          The description for the item.
        </td>
      </tr>
      <tr>
        <td>
           <code>items[].image_html</code>
        </td>
        <td>
          No </td>
        <td>
           String </td>
        <td>
          N/A
        </td>
        <td>
           The image element for the item.
        </td>
      </tr>
       <tr>
        <td>
           <code>items[].cta_html</code>
        </td>
        <td>
          No </td>
        <td>
          String </td>
        <td>
          N/A
        </td>
        <td>
          The call to action element for the item.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Slots

<div style="overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="width: 220px;">Name</th>
        <th style="width: 160px;">Required?</th>
        <th style="width: 250px;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>description</code>
        </td>
        <td>
          No
        </td>
        <td>
          Paragraph-style content below the title and subtitle
        </td>
      </tr>
      <tr>
        <td>
          <code>cta</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          Contents of a <a href="/docs/patterns/cta-block">CTA block</a> beneath
          the title and description
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Linked Logo section Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_equal-heights.jinja" import vf_equal_heights %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
