---
wrapper_template: '_layouts/docs.html'
context:
  title: Hero | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A hero is a prominent banner section typically used to quickly capture the user's attention after they land on the page.
Depending on the size and composition of your content, you can choose from a variety of hero layouts:

- [50/50](#5050)
- [50/50 with full-width image](#5050-with-full-width-image)
- [50/50 with no image](#5050-with-no-image)
- [25/75 Signpost](#2575-signpost)
- [75/25](#7525)
- [Fallback](#fallback)
- [Usage with description block](#description)
- [Usage with cta block](#description)
- [Usage with image block](#image)
- [Usage with signpost image block](#signpost-image)

The hero pattern is composed of the following elements:

| Element              | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| Title (**required**) | Title text (to be placed in `h1` heading)                     |
| Subtitle             | Subtitle text (using `h2` style)                              |
| Description          | Description text (one or more paragraphs)                     |
| Call to action block | [CTA block](/docs/patterns/cta-block) beneath the description |
| Image                | Main hero visual                                              |

## 50/50

### 50/50 on large

You can use <code>.row--50-50-on-large</code> to create a 50/50 hero that is split on large screens and stacked on small
and medium screens.
This is useful when your hero contents, especially your image, are not suitably balanced when viewed on medium screens.
This makes your hero somewhat safer to use, as it helps to avoid awkward content sizing on medium screens, making all
content stack vertically.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50" class="js-example" data-lang="jinja">
View example of the hero pattern in 50/50 split
</a></div>

### 50/50 on large and medium

You can use <code>.row--50-50</code> to create a 50/50 hero that is split on large and medium screens.
This is useful when your available vertical space is limited, and your hero contents are suitably balanced to be viewed
side-by-side on medium screens.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50-split-on-medium" class="js-example" data-lang="jinja">
View example of the hero pattern in 50/50 that is split on medium and small
</a></div>

### 50/50 with full width image

The above hero layouts place the hero image in the right column by default. However, this is not suitable for very wide
images.
If you have a very wide image or otherwise want your image to take up the full hero width, place the title by itself in
the first column and place the image in a [cover image container](/docs/patterns/images#cover-image) at the same level as the grid
columns.
This will make the image take up the full width of the hero.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50-full-width-image" class="js-example" data-lang="jinja">
View example of the hero pattern in 50/50 split with a full-width image
</a></div>

### 50/50 with no image

This layout positions the title in the left half of the hero, and the rest of the text content in the right half.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50-no-image" class="js-example" data-lang="jinja">
View example of the hero pattern in 50/50 split with no image
</a></div>

## 25/75 "signpost"

If you have a small image that you want to associate with the hero title, you can use the "signpost" layout.
This places the image in a small column beside the primary hero content.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-signpost" class="js-example" data-lang="jinja">
View example of the hero pattern in 50/50 split
</a></div>

This layout also supports a full-width image. Place the image in a [cover image container](/docs/patterns/images#cover-image) at the same
level as the hero grid columns to make it take full width beneath the rest of the hero. This is identical to the
full-width image layout for the [50/50 layout](#50-50-with-full-width-image).

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-signpost-full-width-image" class="js-example" data-lang="jinja">
View example of the hero pattern in 50/50 split
</a></div>

## 75/25

If you have a large amount of text content to place in the body of the hero and/or a portrait-oriented image, you can
use the 75/25 layout. This places the image in a small column beside the hero text.

The <code>.row--75-25</code> class is used to maintain the 75/25 split on medium screens.
If you find that the image is too tall on small screens, you can use <code>.u-hide--small</code> to hide the image on
small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-75-25" class="js-example" data-lang="jinja">
View example of the hero pattern in 50/50 split
</a></div>

## Fallback

If you have a very large amount of text content that is difficult to balance with the hero image, you can use the
fallback layout.
This places the title and subtitle in their own row above the rest of the hero content.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-fallback" class="js-example" data-lang="jinja">
View example of the hero pattern in fallback configuration
</a></div>

## Blocks

### Description

Description blocks can be used to display elaborative text content.

By default, the description contents are rendered within a `<p>` tag, but you can also use `type:"html"` to render raw HTML
content.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/description-block" class="js-example" data-lang="jinja">
View example of the Hero section with description block
</a></div>

```json
{
  "type": "description",
  "item": {
    "type": "text" | "html",
    "content": "Your content here"
  }
}
```

- **`type`**: Either `"text"` (default) or `"html"`. Text content is wrapped in `<p>` tags, HTML content is rendered as-is.
- **`content`**: The text or HTML content to display.

### CTA

The CTA block allows you to include call-to-action elements within the section.

It supports three types of CTA items:

- **Primary**: 1 main call-to-action button
- **Secondary**: Supporting action buttons
- **Link**: Text link

<div class="embedded-example"><a href="/docs/examples/patterns/hero/cta-block" class="js-example" data-lang="jinja">
View example of the Hero section with CTA block
</a></div>

```json
{
  "type": "cta-block",
  "item": {
    "primary": {
      "content_html": "Primary button text",
      "attrs": {
        "href": "link-url",
        "class": "optional-css-class"
      }
    },
    "secondaries": [
      {
        "content_html": "Secondary button text",
        "attrs": {
          "href": "link-url"
        }
      }
    ],
    "link": {
      "content_html": "Link text",
      "attrs": {
        "href": "link-url"
      }
    }
  }
}
```

- **`primary`**: Optional primary button configuration.
- **`secondaries`**: Optional array of secondary button configurations.
- **`link`**: Optional text link configuration.

Each of the CTA configurations accepts the following properties:

- **`content_html`**: The inner HTML of the CTA item.
- **`attrs`**: Dictionary of button/link attributes. These are applied to the CTA element. If `href` is present, the CTA item will be an `<a>`, otherwise it will be a `<button>`. See [attribute forwarding docs](/docs/building-vanilla#attribute-forwarding) for more info.

### Image

Image block allows you to include an image within the section, and can have configurable aspect ratios and a caption.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/image-block" class="js-example" data-lang="jinja">
View example of the Hero section with image block
</a></div>

```json
{
  "type": "image",
  "item": {
    "aspect_ratio": "16-9" | "3-2" | "",
    "caption_html": "Optional caption with HTML",
    "is_highlighted": "Optional boolean to enable/disable background highlighting. Default is true",
    "attrs": {
      "src": "image-url",
      "alt": "alt-text"
    }
  }
}
```

- **`aspect_ratio`**: Optional aspect ratio constraint. Valid values: `"16-9"`, `"3-2"`, or empty string for default.
- **`caption_html`**: Optional HTML caption. If provided, the image and caption are wrapped in a `<figure>` element.
- **`is_highlighted`**: Optional boolean which defaults to true. Wraps image in a <a href="/docs/patterns/images#highlighted-image">highlighted image
  container</a>.
- **`attrs`**: Dictionary of image attributes (src, alt, class, etc.). The `p-image-container__image` class is automatically applied. See [attribute forwarding docs](/docs/building-vanilla#attribute-forwarding) for more info.

### Signpost image

Signpost image block allows you to include a signpost page, in a small column beside the primary hero content.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/signpost-image-block" class="js-example" data-lang="jinja">
View example of the Hero section with signpost image block
</a></div>

```json
{
  "type": "signpost_image",
  "item": {
    "aspect_ratio": "16-9" | "3-2" | "",
    "caption_html": "Optional caption with HTML",
    "is_highlighted": "Optional boolean to enable/disable background highlighting. Default is true",
    "attrs": {
      "src": "image-url",
      "alt": "alt-text"
    }
  }
}
```

- **`aspect_ratio`**: Optional aspect ratio constraint. Valid values: `"16-9"`, `"3-2"`, or empty string for default.
- **`caption_html`**: Optional HTML caption. If provided, the image and caption are wrapped in a `<figure>` element.
- **`is_highlighted`**: Optional boolean which defaults to true. Wraps image in a <a href="/docs/patterns/images#highlighted-image">highlighted image
  container</a>.
- **`attrs`**: Dictionary of image attributes (src, alt, class, etc.). The `p-image-container__image` class is automatically applied. See [attribute forwarding docs](/docs/building-vanilla#attribute-forwarding) for more info.

## Jinja Macro

The `vf_hero` Jinja macro can be used to generate a hero pattern. The API for the macro is shown below.

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
          <code>layout</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          One of:<br>
          <code>'50/50'</code>,<br>
          <code>'50/50-full-width-image'</code>,<br>
          <code>'75/25'</code>,<br>
          <code>'25/75'</code>,<br>
          <code>'fallback'</code>
        </td>
        <td>
          <code>'fallback'</code>
        </td>
        <td>
          Choice of hero layout
        </td>
      </tr>
      <tr>
        <td>
          <code>title_text</code>
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
          <code>h1</code> title text
        </td>
      </tr>
      <tr>
        <td>
          <code>subtitle_text</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          <code>h2</code> subtitle text
        </td>
      </tr>
      <tr>
        <td>
          <code>is_split_on_medium</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>false</code>
        </td>
        <td>
          Whether the layout is split on tablet-sized devices
        </td>
      </tr>
      <tr>
        <td>
          <code>display_blank_signpost_image_space</code>
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
          whether to leave a blank space where the signpost image would be when using the 25/75 Hero on large screens
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Slots

Hero section slots are now deprecated, and will be removed in the future version of Vanilla. Please visit [blocks](#blocks) for recommended implementation.

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
          <code>description {{ status("deprecated") }}</code>
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
          <code>cta {{ status("deprecated") }}</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          Contents of a <a href="/docs/patterns/cta-block">CTA block</a> beneath
          the title and description
        </td>
      </tr>
      <tr>
        <td>
          <code>image {{ status("deprecated") }}</code>
        </td>
        <td>
          Yes, when <code>layout='50/50-full-width-image'</code>
        </td>
        <td>
          Image content
        </td>
      </tr>
      <tr>
        <td>
          <code>signpost_image {{ status("deprecated") }}</code>
        </td>
        <td>
          Yes, when <code>layout='25/75'</code>
        </td>
        <td>
          Small image (such as a logo) to place in the left column of the
          25/75 Hero
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Hero Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_hero.jinja" import vf_hero %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
