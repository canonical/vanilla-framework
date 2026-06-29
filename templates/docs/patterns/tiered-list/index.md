---
wrapper_template: '_layouts/docs.html'
context:
  title: Tiered list | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The tiered list pattern is used to easily implement a list of paired titles and
descriptions underneath a top-level title and description. Optional [CTA
blocks](/docs/patterns/cta-block) can be placed at various points in the content
as well. Depending on the size and composition of your content, you can choose
from a variety of tiered list layouts:

- [50/50 on desktop with description](#5050-on-desktop-with-description)
- [50/50 on tablet without description](#5050-on-tablet-without-description)
- [50/50 on tablet with description](#5050-on-tablet-with-description)
- [50/50 with description](#5050-with-description)
- [Full-width without description](#full-width-without-description)
- [Full-width with description](#full-width-with-description)

The tiered list pattern is composed of the following elements:

| Element               | Description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| Title (**required**)  | <code>h2</code> title text                                                          |
| Description           | <code>p</code> description text with optional [CTA block](/docs/patterns/cta-block) |
| Media (optional)      | Image or video to show near description                                             |
| List item title       | Title text/content                                                                  |
| List item description | Description text/content with optional [CTA block](/docs/patterns/cta-block)        |
| Call to action block  | [CTA block](/docs/patterns/cta-block) beneath the list                              |

## 50/50 on desktop with description

This variant contains a top-level description which is presented side-by-side
with its title on desktop screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## 50/50 on tablet without description

This variant does not contain a top-level description and its child list is
presented with its titles side-by-side with its descriptions on tablet screen
sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-tablet-without-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## 50/50 on tablet with description

This variant contains a top-level description and its child list is presented
with its titles side-by-side with its descriptions on tablet screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-tablet-with-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## 50/50 with description

This variant contains a top-level description. Its title and description are
presented side-by-side on desktop screen sizes, and its child list is presented
side-by-side on tablet screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-with-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Full-width without description

This variant does not contain a top-level description, and both its title and
child list are presented full-width on desktop and tablet screen sizes
respectively.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/full-width-without-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Full-width with description

This variant contains a top-level description, and its title, description, and
child list are presented full-width on desktop and tablet screen sizes
respectively.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/full-width-with-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Additional CTA options

In addition to the CTA block placed below the list, you may also add CTA blocks
below the top-level description text, as well as below each list item's
description text.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-description-cta/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-list-item-cta/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Top rule variant

By default the pattern renders a standard horizontal rule at its top. Use the
`top_rule_variant` parameter to render a `muted` or `highlighted` rule, or
`none` to remove it.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/muted-top-rule/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## With media {{ status('new') }}

You can embed an [image](#image) or a [video](#video) near the description.

### Image

You can embed a [default width](#default-width-image) or [full width](#full-width-image) image near the description.
The image may be positioned before or after the description, depending on the variant you choose.
The aspect ratio of the image depends on the variant you choose, and it will be wrapped in an [image container](/docs/patterns/images#image-container-with-aspect-ratio) to ensure it maintains the correct aspect ratio.

**Always apply the `p-image-container__image` class to your image** to ensure the image is styled correctly.

```json
"img_attrs": {
  "src": "image-url",
  "alt": "alt-text",
  "width": "image width",
  "height": "image height",
  "class": "additional image classes"
}
```

#### Default width image

This variant features a default width image positioned before description.

When using the default width image, the image will use half of the page width on large screens.
We recommend following these guidelines when using the default width image:

- Use an image with a width sufficient to fill the page width on all screens.
- By default, the images have `3-2` aspect ratio. You can also set it to `16-9` by using `media_aspect_ratio` attribute.

The following example demonstrates a good usage of the default width image variant:

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-image-before-description" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

#### Full width image

This variant features a full width image positioned before the title and description.

When using the full width image, the image will use the full width of the page on all screens.
We recommend following these guidelines when using the full width image:

- Use an image with a width sufficient to fill the page width on all screens.
- `cinematic` aspect ratio will be automatically applied.

The following example demonstrates a good usage of the full width image variant:

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-full-width-image-before-description" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

### Variable media placement

By default, the media is displayed after the CTA, but you can choose where it should be displayed relative to the description and CTA.
To do this, set the `media_placement` parameter in the Jinja macro to `before_description`, `after_description`, or `after_cta`.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-image-after-description" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

### Video

You may also use this variant to embed a video. Videos are positioned exactly the same as images, but they always have a
16:9 aspect ratio.

When embedding a video with the Jinja macro, follow the following guidelines:

- Use the `video_attrs` param instead of the `img_attrs` param.
- Apply the `u-embedded-media__element` class, which is provided by the [embedded media utility](/docs/utilities/embedded-media).

```json
"video_attrs": {
  "src": "video url",
  "title": "title of the video iframe",
  "allowfullscreen": "boolean - whether to allow full screen",
  "class": "additional classes"
}
```

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-full-width-video-before-description" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Jinja Macro

The `vf_tiered_list` Jinja macro can be used to generate a tiered list pattern. The API for the macro is shown below.

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
          <code>is_description_full_width_on_desktop</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>true</code>
        </td>
        <td>
          Whether the description element should be full-width on desktop
        </td>
      </tr>
      <tr>
        <td>
          <code>is_list_full_width_on_tablet</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>true</code>
        </td>
        <td>
          Whether the list element should be full-width on tablet
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
          Padding variant for the section
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
          <code>'muted'</code>,<br>
          <code>'highlighted'</code>,<br>
          <code>'none'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Variant of the <a href="/docs/patterns/rule">horizontal rule</a> rendered at the top of the pattern
        </td>
      </tr>
      <tr>
        <td>
          <code>img_attrs</code>
        </td>
        <td>
          No
        </td>
        <td><code>object</code></td>
        <td><code>{}</code></td>
        <td>
          Attributes of the image to display near the description.<br/>
          Must have the class <code><a href="/docs/patterns/images">p-image-container__image</a></code>.<br/>
          If the <code>video</code> slot is used, this slot will be ignored.
        </td>
      </tr>
      <tr>
        <td>
          <code>video_attrs</code>
        </td>
        <td>
          No
        </td>
        <td><code>object</code></td>
        <td><code>{}</code></td>
        <td>
          Video to display near the description.<br/>
          Must have the class <code><a href="/docs/utilities/embedded-media">u-embedded-media__element</a></code>.<br/>
          Takes precedence over the <code>image</code> slot, so if both are used, the <code>video</code> will be displayed instead of the <code>image</code>.
        </td>
      </tr>
      <tr>
        <td>
          <code>is_media_full_width</code>
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
          Whether the media should be full-width and displayed in its own row.<br/>
          If the media is a full-width image, a <a href="/docs/patterns/images#image-container-with-aspect-ratio">cinematic (2.4:1 aspect ratio) image container</a> will wrap your image.<br/>
          If the media is a default-width image, a <a href="/docs/patterns/images#image-container-with-aspect-ratio">16:9 image container</a> will wrap your image.<br/>
          If you use the <code>video</code> slot, this parameter will affect the positioning of the video, but will not change its aspect ratio. Videos are always 16:9.
        </td>
      </tr>
      <tr>
        <td>
          <code>media_placement</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of <code>'before_description'</code>, <code>'after_description'</code>, or <code>'after_cta'</code>
        </td>
        <td>
          <code>'after_cta'</code>
        </td>
        <td>
          Whether the media should be full-width and displayed in its own row.<br/>
          If the media is a full-width image, a <a href="/docs/patterns/images#image-container-with-aspect-ratio">cinematic (2.4:1 aspect ratio) image container</a> will wrap your image.<br/>
          If the media is a default-width image, a <a href="/docs/patterns/images#image-container-with-aspect-ratio">16:9 image container</a> will wrap your image.<br/>
          If you use the <code>video</code> slot, this parameter will affect the positioning of the video, but will not change its aspect ratio. Videos are always 16:9.
          `after_description` and `after_cta` will have same effect for full-width media, i.e., media row will be rendered after description + cta combined.
        </td>
      </tr>
      <tr>
        <td>
          <code>media_aspect_ratio</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of <code>'3-2'</code> or <code>'16-9'</code>
        </td>
        <td>
          <code>'3-2'</code>
        </td>
        <td>
          Aspect ratio to apply to media. Only applies to images, and is set to `cinematic` when `is_media_full_width` is true. Videos have `16-9` ratio always.
        </td>
      </tr>
      <tr>
        <td>
          <code>hide_medium</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>'false'</code>
        </td>
        <td>
          Whether to hide media on medium screens
        </td>
      </tr>
      <tr>
        <td>
          <code>hide_small</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>'false'</code>
        </td>
        <td>
          Whether to hide media on small screens
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
          <code>title</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          Title sentence displayed at the top of the pattern
        </td>
      </tr>
      <tr>
        <td>
          <code>description</code>
        </td>
        <td>
          No
        </td>
        <td>
          Description paragraph displayed below the title
        </td>
      </tr>
      <tr>
        <td>
          <code>list_item_title_[1-25]</code>
        </td>
        <td>
          Yes, at least 1
        </td>
        <td>
          Title element of each child list item; max of 25
        </td>
      </tr>
      <tr>
        <td>
          <code>list_item_description_[1-25]</code>
        </td>
        <td>
          Yes, at least 1
        </td>
        <td>
          Description element of each child list item; max of 25
        </td>
      </tr>
      <tr>
        <td>
          <code>cta</code>
        </td>
        <td>
          No
        </td>
        <td>
          Contents of a <a href="/docs/patterns/cta-block">CTA block</a> at the
          bottom of the pattern
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Tiered List Jinja macro, copy the following import statement into
your Jinja template:

```jinja
{% raw -%}
{% from "_macros/vf_tiered-list.jinja" import vf_tiered_list %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

Since Patterns leverage many other parts of Vanilla in their composition and
content, we recommend [importing the entirety of Vanilla](/docs#install) for
full support.
