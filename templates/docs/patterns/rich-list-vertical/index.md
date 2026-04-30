---
wrapper_template: '_layouts/docs.html'
context:
  title: Rich vertical list | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The rich vertical list is a two-column pattern that pairs structured content (title, descriptions, lists, logos, CTAs) with a single media element (image or video) on the opposite column. By default, content is on the left and media is on the right; this can be swapped with `is_flipped`.

Internally, the content column uses [content blocks](/docs/patterns/basic-section#content-blocks) from the [Basic section pattern](/docs/patterns/basic-section), with the per-type configuration for supported `items` following the basic section format. The distinguishing feature is the dedicated media column with per-breakpoint aspect-ratio configuration and an optional auto-height mode.

The rich vertical list pattern is composed of the following elements:

| Element              | Description                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| Title (**required**) | `<h2>` heading, optionally wrapped in a link                                         |
| Items                | Array of supported content blocks: text (description), list, code block, logo block, CTA block |
| Media (**required**) | A single image or video, configured via the `media` parameter                        |

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/ticked" class="js-example" data-lang="jinja">
View example of the rich vertical list pattern
</a></div>

## Layout Options

### Flipped

The horizontal ordering of the rich list columns can be reversed, placing the media on the left and the content on the right.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/ticked-flipped" class="js-example" data-lang="jinja">
View example of the rich vertical list pattern with flipped columns
</a></div>

### Minimal

The only mandatory elements are the title and the media. Items are optional — passing `items=[]` (or omitting it entirely) renders just the title and media columns.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/minimal" class="js-example" data-lang="jinja">
View example of the minimal rich vertical list pattern
</a></div>

## Media

The media column is configured via the `media` parameter. Its key fields are:

- **`type`** — `"image"` (default) or `"video"`.
- **`ratio.large`** — aspect ratio at the large breakpoint. Supported: `"16-9"`, `"3-2"` (default), `"1-1"`, `"2-3"`, `"auto-height"`.
- **`ratio.medium_small`** — aspect ratio at medium and small breakpoints. Supported: `"16-9"`, `"3-2"` (default), `"1-1"`. (`"auto-height"` is not supported here — see Auto-height below.)
- **`fit`** — `"cover"` (default) or `"contain"`. Applies to images only.
- **`attrs`** — passthrough HTML attributes for the underlying `<img>` or `<iframe>` (e.g., `src`, `alt`, `allowfullscreen`).

### Aspect ratios

Set `media.ratio.large` and `media.ratio.medium_small` to control how the media wrapper sizes itself at each breakpoint. The image inside is rendered with `object-fit: cover` (default) or `contain`.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/media-aspect-ratios" class="js-example" data-lang="jinja">
View example of the rich vertical list pattern with different aspect ratios
</a></div>

### Auto-height

Setting `media.ratio.large` to `"auto-height"` makes the media column stretch to match the content column's rendered height on large screens, clamped between a 16:9 minimum and a 2.2:3 maximum of the column's width. Useful when the content varies in length and a fixed aspect ratio leaves awkward whitespace.

`auto-height` is only valid at the large breakpoint. On medium and small screens the columns stack, so `media.ratio.medium_small` falls back to a fixed ratio.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/with-auto-height" class="js-example" data-lang="jinja">
View example of the rich vertical list pattern with auto-height media
</a></div>

### Video

Setting `media.type` to `"video"` renders the media as an embedded iframe inside `.u-embedded-media`. The aspect ratio is fixed at 16:9 by the underlying utility — `media.ratio` and `media.fit` are ignored when `type` is `"video"`.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/with-video" class="js-example" data-lang="jinja">
View example of the rich vertical list pattern with video media
</a></div>

## Padding Variants

The rich vertical list supports customizable padding using the [section pattern](/docs/patterns/section).
By default, the pattern is wrapped in a regular section.

Supported variants:

- **`"default"`** — `p-section` for standard spacing (default)
- **`"deep"`** — `p-section--deep` for maximum spacing
- **`"shallow"`** — `p-section--shallow` for reduced spacing

Please refer to the [section documentation](/docs/patterns/section) for more guidance on padding selection.

## Top Rule Variants

By default, the rich vertical list has a default [horizontal rule](/docs/patterns/rule) at the top.
You can customize this using the `top_rule_variant` parameter.

Supported variants:

- **`"default"`** — Standard horizontal rule
- **`"muted"`** — Lighter/muted horizontal rule

## Items

The `items` array reuses the [basic section content blocks](/docs/patterns/basic-section#content-blocks) model, but the rich vertical list pattern only supports a curated subset of types. Entries with any other type are silently dropped.

Supported types and their per-type configurations:

- **Text** — `type: 'description'`. See [Description block](/docs/patterns/basic-section#description).
- **List** — `type: 'list'`. See [List block](/docs/patterns/basic-section#list).
- **Code block** — `type: 'code-block'`. See [Code block](/docs/patterns/basic-section#code).
- **Logo block** — `type: 'logo-block'`. See [Logo block](/docs/patterns/basic-section#logo-block).
- **CTA block** — `type: 'cta-block'`. See [CTA block](/docs/patterns/basic-section#cta).

## Jinja Macro

The `vf_rich_vertical_list` Jinja macro can be used to generate a rich vertical list pattern. The API for the macro is shown below.

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
    </thead>
    <tbody>
      <tr>
        <td>
          <code>title</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Object</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Title configuration object with <code>text</code> and optional <code>link_attrs</code>.
        </td>
      </tr>
      <tr>
        <td>
          <code>title.text</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          The main title text (rendered as h2).
        </td>
      </tr>
      <tr>
        <td>
          <code>title.link_attrs</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>Object</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Attributes of an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#attributes">anchor element</a>, as a dictionary. See <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding docs</a> for more info.
        </td>
      </tr>
      <tr>
        <td>
          <code>items</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>Array&lt;Object&gt;</code>
        </td>
        <td>
          <code>[]</code>
        </td>
        <td>
          Array of content blocks rendered in order in the content column. Supported types: <code>description</code>, <code>list</code>, <code>code-block</code>, <code>logo-block</code>, <code>cta-block</code>. See <a href="#items">Items</a> for per-type configurations. Entries with any other type are silently dropped.
        </td>
      </tr>
      <tr>
        <td>
          <code>media</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Object</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Media column configuration. See <a href="#media">Media</a> for details.
        </td>
      </tr>
      <tr>
        <td>
          <code>media.type</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'image'</code>,<br>
          <code>'video'</code>
        </td>
        <td>
          <code>'image'</code>
        </td>
        <td>
          The media type rendered in the opposite column.
        </td>
      </tr>
      <tr>
        <td>
          <code>media.ratio.large</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'16-9'</code>,<br>
          <code>'3-2'</code>,<br>
          <code>'1-1'</code>,<br>
          <code>'2-3'</code>,<br>
          <code>'auto-height'</code>
        </td>
        <td>
          <code>'3-2'</code>
        </td>
        <td>
          Aspect ratio of the media wrapper at the large breakpoint. Ignored for <code>type: 'video'</code>.
        </td>
      </tr>
      <tr>
        <td>
          <code>media.ratio.medium_small</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'16-9'</code>,<br>
          <code>'3-2'</code>,<br>
          <code>'1-1'</code>
        </td>
        <td>
          <code>'3-2'</code>
        </td>
        <td>
          Aspect ratio at the medium and small breakpoints. Ignored for <code>type: 'video'</code>.
        </td>
      </tr>
      <tr>
        <td>
          <code>media.fit</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'cover'</code>,<br>
          <code>'contain'</code>
        </td>
        <td>
          <code>'cover'</code>
        </td>
        <td>
          Object-fit applied to the image. Ignored for <code>type: 'video'</code>.
        </td>
      </tr>
      <tr>
        <td>
          <code>media.attrs</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>Object</code>
        </td>
        <td>
          <code>{}</code>
        </td>
        <td>
          Passthrough HTML attributes for the underlying <code>&lt;img&gt;</code> or <code>&lt;iframe&gt;</code>. Typically includes <code>src</code> and <code>alt</code> for images, or <code>src</code> and <code>allowfullscreen</code> for videos.
        </td>
      </tr>
      <tr>
        <td>
          <code>is_flipped</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>false</code>
        </td>
        <td>
          Swap the content and media columns so the media is on the left.
        </td>
      </tr>
      <tr>
        <td>
          <code>padding</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'deep'</code>,<br>
          <code>'shallow'</code>,<br>
          <code>'default'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Padding variant for the entire section. See <a href="/docs/patterns/section">section pattern</a> for details.
        </td>
      </tr>
      <tr>
        <td>
          <code>top_rule_variant</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'default'</code>,<br>
          <code>'muted'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Variant of <a href="/docs/patterns/rule">horizontal rule</a> to display at the top of the section.
        </td>
      </tr>
      <tr>
        <td>
          <code>attrs</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>Object</code>
        </td>
        <td>
          <code>{}</code>
        </td>
        <td>
          Attributes to apply to the section element, as a dictionary. See <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding docs</a> for more info.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Rich Vertical List Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_rich-vertical-list.jinja" import vf_rich_vertical_list %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
