---
wrapper_template: '_layouts/docs.html'
context:
  title: Divided section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A divided section is used to create structured content section with a title, a description block and various divided blocks. It
provides a flexible layout system that can accommodate different types of content including text, images, videos, lists,
code blocks, logos, and call-to-action elements, within both the description and divided blocks.
Internally, it utilizes <a href="/docs/patterns/basic-section">Basic section pattern</a>, so the configuration for most of the layout options, as well as for content items is going to be identical.

The divided section pattern is composed of the following elements:

| Element              | Description                                                 |
| -------------------- | ----------------------------------------------------------- |
| Title (**required**) | Main heading text (h2)                                      |
| Blocks               | Array of blocks (either description-block or divided-block) |
| Items                | Array of content items within a block                       |

The default divided section uses a 50/50 grid layout that splits on large screens and stacks on smaller screens.

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/default" class="js-example" data-lang="jinja">
View example of the divided section pattern with default layout
</a></div>

## Layout Options

### Linked Title

Similar to the <a href="/docs/patterns/basic-section#layout-options">Basic section pattern</a>, the title can be made clickable by providing link attributes.

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/linked-title" class="js-example" data-lang="jinja">
View example of the basic section pattern with linked title
</a></div>

### Top Rule variants

Since divided section pattern utilizes the <a href="/docs/patterns/basic-section#layout-options">Basic section pattern</a> internally, it also supports the same top rule variants.

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/top-rule-variants" class="js-example" data-lang="jinja">
View example of the divided section pattern's top rule variants
</a></div>

### Padding Variants

Divided section supports customizable padding options at both the pattern and item level, using
the [section pattern](/docs/patterns/section). The Jinja macro for the pattern applies the section padding automatically.
For more, please see <a href="/docs/patterns/basic-section#layout-options">Basic section pattern's layout options</a>.

### Split Layout

Use `is_split_on_medium=true` to create a 50/50 grid layout that splits on medium screens and above.

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/split-layout-responsive" class="js-example" data-lang="jinja">
View example of the divided section pattern with split layout
</a></div>

Divided section supports customizable padding options at both the pattern and item level, using
the [section pattern](/docs/patterns/section). The Jinja macro for the pattern applies the section padding automatically.
For more, please see <a href="/docs/patterns/basic-section#layout-options">Basic section pattern's layout options</a>.

## Blocks

Blocks in divided section use a flexible model where you can pass an array of blocks representing different types.
These can either be `description-block` or `divided-block`.<br />
Ideally, there should be only one description block, and between 1-9 divided blocks.<br />
Each block can have an array of items, which follow the same model as <a href="/docs/patterns/basic-section#content-blocks">Basic section's content blocks</a>

```json
"blocks": [
  {
    "type": "description-block",
    "items": [
      <Basic section's content blocks>
    ]
  },
  {
    "type": "divided-block",
    "bullet_type": "number" | "bullet" | "status" | "none"
    "items": [
      {
        "title_text" : "Optional text to render as block's heading",
        "contents": [
          <Basic section's content blocks>
        ]
      }
    ]
  },
  ...
]
```

### Description Block

Divided section supports a description block, in the right column right above divided blocks.
It can be used to provide information about the section itself, as well as about the divided blocks that are going to be appearing below.<br />

```json
{
  "type": "description-block",
  "items": [
    <Basic section's content blocks>
  ]
}
```

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/description-only" class="js-example" data-lang="jinja">
View example of the divided section pattern's description block
</a></div>

The items in description block follow the same model as <a href="/docs/patterns/basic-section#content-blocks">Basic section's content blocks</a>, so you can use different types of elements supported by the Basic section pattern. For example, lists, images, videos, notifications, text, and code blocks.

### Divided Block

The divided blocks are subsections, separated by a muted rule and a shallow bottom padding. These can have optional headings, which can have different bullet types such as bullets, numbers or status. The bullets can also be omitted.<br />
Each block can contain 1 to 5 content items. These items also follow the same model as <a href="/docs/patterns/basic-section#content-blocks">Basic section's content blocks</a>.

```json
{
  "type": "divided-block",
  "bullet_type": "number" | "bullet" | "status" | "none"
  "items": [
    {
      "title_text" : "Optional text to render as block's heading",
      "contents": [
        <Basic section's content blocks>
      ]
    }
  ]
}
```

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/no-description" class="js-example" data-lang="jinja">
View example of the divided section pattern's divided block
</a></div>

#### Divided Block with bulleted headings

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/bulleted-list" class="js-example" data-lang="jinja">
View example of the divided section pattern's divided block with bulleted headings
</a></div>

#### Divided Block with checked headings

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/status-list" class="js-example" data-lang="jinja">
View example of the divided section pattern's divided block with checked headings
</a></div>

#### Divided Block with no bullets

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/no-bullets" class="js-example" data-lang="jinja">
View example of the divided section pattern's divided block with no bullets
</a></div>

#### Divided Block with no headings

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/no-headings" class="js-example" data-lang="jinja">
View example of the divided section pattern's divided block with no headings
</a></div>

#### Divided Block with mixed content and bulleted headings

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/mixed-items-with-bullets" class="js-example" data-lang="jinja">
View example of the divided section pattern's divided block with bulleted headings and mixed content
</a></div>

#### Divided Block with mixed content and numbered headings

<div class="embedded-example"><a href="/docs/examples/patterns/divided-section/mixed-items-with-numbered-bullets" class="js-example" data-lang="jinja">
View example of the divided section pattern's divided block with numbered headings and mixed content
</a></div>

## Jinja Macro

The `vf_divided_section` Jinja macro can be used to generate a basic section pattern. The API for the macro is shown
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
          <code>blocks</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;Object&gt;</code>
        </td>
        <td>
          <code>[]</code>
        </td>
        <td>
          Array of blocks to display in the section. See <a href="#blocks">Blocks</a> for configuration details.
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
{% from "_macros/vf_divided-section.jinja" import vf_divided_section %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
