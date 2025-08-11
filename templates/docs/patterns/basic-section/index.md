---
wrapper_template: '_layouts/docs.html'
context:
  title: Basic section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A basic section is used to create structured content sections with a title, subtitle, and various content blocks. It
provides a flexible layout system that can accommodate different types of content including text, images, videos, lists,
code blocks, logos, and call-to-action elements.

The basic section pattern is composed of the following elements:

| Element              | Description                                                                             |
| -------------------- | --------------------------------------------------------------------------------------- |
| Label                | Optional muted heading above the title                                                  |
| Title (**required**) | Main heading text (h2)                                                                  |
| Subtitle             | Subtitle text with configurable heading level                                           |
| Items                | Array of content blocks (descriptions, images, videos, lists, code blocks, logos, CTAs) |

The default basic section uses a 50/50 grid layout that splits on large screens and stacks on smaller screens.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/mixed-content" class="js-example" data-lang="jinja">
View example of the basic section pattern with mixed content
</a></div>

## Layout Options

### With Label

Basic sections can include a muted heading label above the main title.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/with-label" class="js-example" data-lang="jinja">
View example of the basic section pattern with label
</a></div>

### Linked Title

The title can be made clickable by providing link attributes.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/linked-title" class="js-example" data-lang="jinja">
View example of the basic section pattern with linked title
</a></div>

### Subtitle

The subtitle is an optional text displayed below the main title, with a configurable heading level (h4 or h5).

By default, the subtitle is rendered as an h4 element, but you can change it to h5 by setting the `heading_level` property.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/subtitle-heading-levels" class="js-example" data-lang="jinja">
View example of the basic section pattern with subtitle heading levels
</a></div>

### Split Layout

Use `is_split_on_medium=true` to create a 50/50 grid layout that splits on medium screens and above.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/split-layout-responsive" class="js-example" data-lang="jinja">
View example of the basic section pattern with split layout
</a></div>

### Top Rule variants

By default, the basic section has a [default horizontal rule](/docs/patterns/rule#default) at the top.
You can also use [muted](/docs/patterns/rule#muted) or [highlighted](/docs/patterns/rule#highlighted) rules, or disable the rule entirely using the `top_rule_variant` parameter.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/top-rule-variants" class="js-example" data-lang="jinja">
View example of the basic section pattern's top rule variants
</a></div>

### Padding Variants

Basic sections support customizable padding options at both the pattern and item level, using
the [section pattern](/docs/patterns/section). The Jinja macro for the pattern applies the section padding automatically.

#### Pattern level

By default, the pattern is wrapped in a [regular section](/docs/patterns/section#regular-sections).

For different spacing needs, you may instead use a [deep section](/docs/patterns/section#deep-sections) or a [shallow section](/docs/patterns/section#shallow-sections) by changing the `padding` parameter.

Please refer to the [section documentation](/docs/patterns/section) for more guidance on padding selection.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/padding-variants" class="js-example" data-lang="jinja">
View example of the basic section pattern with different padding options
</a></div>

#### Block level

Each item within the section can also have its own padding applied using the `padding` property.
By default, items have no additional padding, but you can set `padding: "shallow"` to increase spacing around the item.

The last block will always have no additional padding, regardless of the item padding setting.
This way, the [pattern padding](#pattern-level) is the only padding at the bottom of the pattern.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/item-padding" class="js-example" data-lang="jinja">
View example of the basic section pattern with item padding options
</a></div>

## Content Blocks

The basic section pattern uses a flexible block model where you can pass an array of items representing different
content types. Each item has a `type` that determines the block behavior and an `item` object containing the specific configuration.

### Description

Description blocks can be used to display elaborative text content.

By default, the description contents are rendered within a `<p>` tag, but you can also use `type:"html"` to render raw HTML
content.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/description-variants" class="js-example" data-lang="jinja">
View example of the basic section pattern with different description variants
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

### Media

Image and video blocks allow you to embed rich media content.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/media-variants" class="js-example" data-lang="jinja">
View example of the basic section pattern with different media variants
</a></div>

#### Images

Images are automatically wrapped in the <a href="/docs/patterns/images#highlighted-image">highlighted image
container</a> and can have configurable <a href="/docs/patterns/images#image-container-with-aspect-ratio">aspect
ratios</a> and a [caption](/docs/patterns/images#image-with-caption).

```json
{
  "type": "image",
  "item": {
    "aspect_ratio": "16-9" | "3-2" | "",
    "caption_html": "Optional caption with HTML",
    "attrs": {
      "src": "image-url",
      "alt": "alt-text"
    }
  }
}
```

- **`aspect_ratio`**: Optional aspect ratio constraint. Valid values: `"16-9"`, `"3-2"`, or empty string for default.
- **`caption_html`**: Optional HTML caption. If provided, the image and caption are wrapped in a `<figure>` element.
- **`attrs`**: Dictionary of image attributes (src, alt, class, etc.). The `p-image-container__image` class is automatically applied. See [attribute forwarding docs](/docs/building-vanilla#attribute-forwarding) for more info.

#### Videos

Videos are automatically embedded in an iframe using the <a href="/docs/utilities/embedded-media">embedded media
utility</a>.

```json
{
  "type": "video",
  "item": {
    "attrs": {
      "src": "video-url",
      "allowfullscreen": ""
    }
  }
}
```

- **`attrs`**: Dictionary of iframe attributes. Videos are automatically wrapped in the `u-embedded-media` utility. See [attribute forwarding docs](/docs/building-vanilla#attribute-forwarding) for more info.

### List

Lists use the <a href="/docs/patterns/lists">list pattern</a> to display various types of lists.

- **Bullet lists**: Standard bullet points
- **Numbered lists**: Ordered lists
- **Status lists**: Lists with tick or cross icons
- **Default lists**: Simple unordered lists (no icon or numbering)
- **Nested lists**: Hierarchical list structures

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/list-variants" class="js-example" data-lang="jinja">
View example of the basic section pattern with different list variants
</a></div>

```json
{
  "type": "list",
  "item": {
    "list_items": [
      {
        "list_item_type": "bullet" | "tick" | "cross" | "number" | "",
        "content": "List item content",
        "sublist": {
          "list_items": [...]
        }
      }
    ]
  }
}
```

- **`list_item_type`**: Type of list item. If any item is `"number"`, the entire list becomes ordered.
- **`content`**: HTML content of the list item.
- **`sublist`**: Optional nested list configuration.

### Code

The <a href="/docs/base/code">code pattern</a> allows you to display pre-formatted code snippets.
Contents are wrapped in a `<pre>` tag and automatically dedented to remove leading whitespace.

Contents may also be wrapped in a `<code>` tag to indicate a code block.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/code-variants" class="js-example" data-lang="jinja">
View example of the basic section pattern with different code variants
</a></div>

```json
{
  "type": "code-block",
  "item": {
    "content": "Your code here",
    "is_code_snippet": true | false
  }
}
```

- **`content`**: The code content.
- **`is_code_snippet`**: If `true`, content is wrapped in `<code>` tags within the `<pre>` tag.

### Logo

Logos may be displayed with the <a href="/docs/patterns/logo-section">logo section pattern</a> (in the case of a simple
list of logos), or the <a href="/docs/patterns/linked-logo-section">linked logo section pattern</a> (in the case of clickable logos).

We recommend against using both the logo block and linked logo block in the same section, as it can lead to confusion.

#### Logo section

The logo section is suitable for displaying logos in a flow layout.
If you would like to include links to learn more about logo items, use the [linked logo block](#linked-logo-block)
instead of this logo block.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/logo-section" class="js-example" data-lang="jinja">
View example of the basic section pattern with a logo section block
</a></div>

```json
{
  "type": "logo-block",
  "item": {
    "is_fixed_width": true | false,
    "logos": [
      {
        "attrs": {
          "src": "logo-url",
          "alt": "alt-text",
          "class": "optional-css-class"
        },
        "has_line_break_after": true | false
      }
    ]
  }
}
```

- **`is_fixed_width`**: Whether to wrap logos in a [fixed-width container](/docs/patterns/grid#fixed-width-containers) (default: `true`).
- **`logos`**: Array of logo objects. Each logo element has the following properties:
  - **`attrs`**: Dictionary of image attributes for the logo. The `p-image-container__image` class is applied automatically. See [attribute forwarding docs](/docs/building-vanilla#attribute-forwarding) for more info.
  - **`has_line_break_after`**: Whether to include a line break after the logo (hidden on small screens). Use this to force a logo to a new line, avoiding orphaned logos on the last line. See the [logo section documentation](/docs/patterns/logo-section#line-breaks) for more information.

#### Linked logo block

The linked logo block uses the [linked logo section pattern](/docs/patterns/linked-logo-section) to display clickable
logos.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/linked-logo-block" class="js-example" data-lang="jinja">
View example of the basic section pattern with the linked logo section block
</a></div>

Linked logo sections within the basic section always have no title and no top horizontal rule, in order to incorporate
them into the basic section layout.

```json
{
  "type": "linked-logo-block",
  "item": {
    "links": [
      {
        "href": "link-url",
        "text": "Link text",
        "label": "Aria label",
        "image_attrs": {
          "src": "logo-url",
          "alt": "alt-text",
          "width": "200",
          "height": "100"
        }
      }
    ]
  }
}
```

- **`links`**: Array of link objects. Each link element has the following properties:
  - **`href`**: URL the logo links to.
  - **`text`**: Text for the link (used as the link text).
  - **`label`**: Aria label for the link (for accessibility).
  - **`image_attrs`**: Dictionary of image attributes for the logo. `p-image-container__image` is applied automatically. See [attribute forwarding docs](/docs/building-vanilla#attribute-forwarding) for more info.

### CTA

The CTA block allows you to include call-to-action elements within the section.

It supports three types of CTA items:

- **Primary**: 1 main call-to-action button
- **Secondary**: Supporting action buttons
- **Link**: Text link

We recommend against using the CTA item as a standalone item in the section.
Instead, you should use the [CTA Section](/docs/patterns/cta-section) pattern.

<div class="embedded-example"><a href="/docs/examples/patterns/basic-section/cta-variants" class="js-example" data-lang="jinja">
View example of the basic section pattern with cta variants
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

## Jinja Macro

The `vf_basic_section` Jinja macro can be used to generate a basic section pattern. The API for the macro is shown
below.

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
          Title configuration object with <code>text</code> and optional <code>link_attrs</code>
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
          The main title text (rendered as h2)
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
      </tr>
      <tr>
        <td>
          <code>label_text</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>""</code>
        </td>
        <td>
          Muted heading text displayed above the title
        </td>
      </tr>
      <tr>
        <td>
          <code>subtitle</code>
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
          Subtitle configuration object with <code>text</code> and optional <code>heading_level</code>
        </td>
      </tr>
      <tr>
        <td>
          <code>subtitle.text</code>
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
          Subtitle text displayed below the title
        </td>
      </tr>
      <tr>
        <td>
          <code>subtitle.heading_level</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>number</code>
        </td>
        <td>
          <code>4</code>
        </td>
        <td>
          Heading level for the subtitle (4-5)
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
          Array of content blocks to display in the section. See <a href="#content-blocks">Content Blocks</a> for configuration details.
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
          Padding variant for the entire section
        </td>
      </tr>
      <tr>
        <td>
          <code>is_split_on_medium</code>
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
          Whether to split the layout on medium screens and above
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
          <code>`highlighted`</code>,<br>
          <code>'none'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Variant of <a href="/docs/patterns/rule">horizontal rule</a> to display at the top of the section."
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Basic Section Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_basic-section.jinja" import vf_basic_section %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
