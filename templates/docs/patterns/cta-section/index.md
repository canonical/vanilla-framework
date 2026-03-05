---
wrapper_template: '_layouts/docs.html'
context:
  title: CTA Section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A CTA section is a prominent section typically used to quickly capture user's attention to a specific action as they scroll down the page.
Depending on the design of call to action buttons or links, you can choose from a variety of layouts:

- [Default full width](#default-full-width)
- [Default full width cta html](#default-full-width-cta-html)
- [Default 25-75](#default-25-75)
- [Default 25-75 cta html](#default-25-75-cta-html)
- [Block full width](#block-full-width)
- [Block 25-75](#block-25-75)

The CTA section pattern is composed of the following elements:

| Element              | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| Rule                 | [Default rule](/docs/patterns/rule#default)                   |
| Title                | Title text (to be placed in `h2` heading)                     |
| Link                 | Link HTML or Text (using `h2` style)                          |
| Description          | Description text (one or more paragraphs)                     |
| Call to action block | [CTA block](/docs/patterns/cta-block) beneath the description |

## Default full width

You can use <code>default</code> variant with <code>100</code> layout to create a full width container with title and link stacked vertically.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-section/default-full-width" class="js-example" data-lang="jinja">
View example of the default full width cta section pattern
</a></div>

## Default full width links within text

You can also pass text containing multiple partial links.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-section/default-full-width-links-within-text" class="js-example" data-lang="jinja">
View example of the default full width cta section pattern with multiple partial links
</a></div>

## Default 25-75

You can use <code>default</code> variant with <code>25-75</code> layout to create a 25-75 split container with title and link stacked vertically, on the right side.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-section/default-25-75" class="js-example" data-lang="jinja">
View example of the 25-75 split default cta section pattern
</a></div>

## Default 25-75 CTA HTML

You can pass text containing multiple partial links in this variant too.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-section/default-25-75-links-within-text" class="js-example" data-lang="jinja">
View example of the default 25-75 cta section pattern with multiple partial links
</a></div>

## Block full width

You can use <code>block</code> variant with <code>100</code> layout to create full width container, with a required title, an optional description and one or more links/buttons.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-section/block-full-width" class="js-example" data-lang="jinja">
View example of the full width cta section with cta block
</a></div>

## Block 25-75

You can use <code>block</code> variant with <code>25-75</code> layout to create 25-75 split container, with a required title, an optional description and one or more links/buttons on the right side.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-section/block-25-75" class="js-example" data-lang="jinja">
View example of the 25-75 split cta section with cta block
</a></div>

## Blocks

### Description

Description blocks can be used to display elaborative text content.

By default, the description contents are rendered within a `<p>` tag, but you can also use `type:"html"` to render raw HTML
content.

<div class="embedded-example"><a href="/docs/examples/patterns/cta-section/description-block" class="js-example" data-lang="jinja">
View example of the CTA section with description block
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
You may either use  `type:"html"` with `content:"<html-content></html-content>"` to render custom HTML or use  `type:"text"` which supports three types of CTA items:

- **Primary**: 1 main call-to-action button
- **Secondary**: Supporting action buttons
- **Link**: Text link

<div class="embedded-example"><a href="/docs/examples/patterns/cta-section/cta-block" class="js-example" data-lang="jinja">
View example of the CTA section with CTA block
</a></div>

```json
{
  "type": "cta",
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

or

{
  "type": "cta",
  "item": {
    "type": "html",
    "content": "<a href='link-url'>The quick brown fox jumps over the lazy dog &rsaquo;</a>"

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

The `vf_cta_section` Jinja macro can be used to generate a CTA section pattern. The API for the macro is shown below.

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
          <code>variant</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'default'</code>,<br>
          <code>'block'</code>
        </td>
        <td>
          <code>default</code>
        </td>
        <td>
          Choice of CTA variant
        </td>
      </tr>
      <tr>
        <td>
          <code>layout</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          One of:<br>
          <code>'-100'</code>,<br>
          <code>'25-75'</code>
        </td>
        <td>
          <code>100</code>
        </td>
        <td>
          Choice of CTA layout
        </td>
      </tr>
      <tr>
        <td>
          <code>title_text</code>
        </td>
        <td>
          Yes, when variant is <code>'block'</code>
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          <code>h2</code> title text
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
          <code>&lt;Object&gt;</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Attributes to apply to the CTA section. See <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding docs</a> for more info.
        </td>
      </tr>
      <tr>
        <td>
          <code>blocks</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>Array</code>
        </td>
        <td>
          <code>[]</code>
        </td>
        <td>
          List of content blocks for the CTA section. See <a href="#blocks">Blocks</a> for available block types.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Slots

CTA section slots are now deprecated, and will be removed in the future version of Vanilla. Please visit [blocks](#blocks) for recommended implementation.

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
          Paragraph-style content below the title and subtitle, only applicable to <code>'block'</code> variant 
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
          Contents of <a href="/docs/patterns/cta-block">CTA</a> link or block
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the CTA Section Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_cta-section.jinja" import vf_cta_section %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
