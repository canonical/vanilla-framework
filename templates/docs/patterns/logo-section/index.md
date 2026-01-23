---
wrapper_template: '_layouts/docs.html'
context:
  title: Logo section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}
{% from "docs/macros/notice.jinja" import documentation_notice %}

{{- pattern_wip_notice() }}

The logo section is a pattern where the logo block serves as the main content, combined with a muted heading, optional description, and a CTA block.

It is composed of the following elements:

| Element              | Description                                      |
| -------------------- | ------------------------------------------------ |
| Title (**required**) | Main heading text (h2)                           |
| Description          | Description text (one or more paragraphs)        |
| Blocks               | Array of blocks (either cta-block or logo-block) |

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/default" class="js-example" data-lang="jinja">
View example of the default logo section
</a></div>

## Layout Options

### Linked Title

The title can be made clickable by providing link attributes.

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/linked-title" class="js-example" data-lang="jinja">
View example of the logo section pattern with linked title
</a></div>

### Padding Variants

Logo section supports customizable padding options at the pattern level, using
the [section pattern](/docs/patterns/section). The Jinja macro for the pattern applies the section padding automatically.

By default, the pattern is wrapped in a <a href="/docs/patterns/section#regular-sections">regular section</a>.
You can also use a <a href="/docs/patterns/section#regular-sections">deep section</a> by changing the <code>padding</code> parameter.

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/padding-variants" class="js-example" data-lang="jinja">
View example of the logo section pattern with different padding variants
</a></div>

## Blocks

Blocks in logo section use a flexible model where you can pass an array of blocks representing different types.
These can either be `CTA Block` or `Logo Block`.

### CTA Block

The CTA block allows you to include call-to-action elements within the section.

It supports three types of CTA items:

- **Primary**: 1 main call-to-action button
- **Secondary**: Supporting action buttons
- **Link**: Text link

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/cta-block" class="js-example" data-lang="jinja">
View example of the logo section pattern with CTA block
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

**Note:** The `cta-block` utilizes <a href="/docs/patterns/basic-section#content-blocks">CTA block</a> from <a href="/docs/patterns/basic-section#layout-options">Basic section pattern</a>

### Logo Block

The logo block is a list of logos, within a fixed width container. The logos are automatically wrapped.

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/no-description-and-cta-block" class="js-example" data-lang="jinja">
View example of the logo section pattern with logo block
</a></div>

```json
{
  "type": "logo-block",
  "item": {
    "logos": [
      {
        "attrs": {
          "src": "image-url",
          "alt": "alt-text"
        }
      }
    ]
  }
}
```

#### Logo section without description

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/no-description" class="js-example" data-lang="jinja">
View example of the logo section pattern without description
</a></div>

#### Logo section without CTA block

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/no-cta-block" class="js-example" data-lang="jinja">
View example of the logo section pattern without CTA block
</a></div>

#### Logo section without description and CTA block

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/no-description-and-cta-block" class="js-example" data-lang="jinja">
View example of the logo section pattern without description and CTA block
</a></div>

#### Default vs Minimal mode

Use the <code>mode</code> parameter to control how much content the pattern renders. Two modes are supported: "default" and "minimal".

- default

  - Renders the title with a top rule, description, CTA, and logo block.
  - Renders the root element as a <code>&lt;section&gt;</code>

- minimal
  - Renders a compact layout that displays only the logo block.
  - Title, description slot and CTA are not rendered (useful inside other patterns or tight page areas).
  - Renders the root element as a <code>&lt;div&gt;</code>

Usage

- Add the mode property at the pattern level when invoking the macro.

##### Example: default

```json
{
  "title": {"text": "Trusted by organizations worldwide"},
  "mode": "default",
  "description": "<p>We power the digital services of many public sector organizations.</p>",
  "blocks": [
    {"type": "logo-block", "item": {"logos": [{"attrs": {"src": "logo.png", "alt": "Org"}}]}},
    {"type": "cta-block", "item": {"link": {"content_html": "Learn more", "attrs": {"href": "/about"}}}}
  ]
}
```

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/default" class="js-example" data-lang="jinja">
View example of the "default" mode Logo section
</a></div>

##### Example: minimal

```json
{
  "title": {"text": "Trusted by organizations worldwide"},
  "mode": "minimal",
  "blocks": [{"type": "logo-block", "item": {"logos": [{"attrs": {"src": "logo.png", "alt": "Org"}}]}}]
}
```

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/minimal" class="js-example" data-lang="jinja">
View example of the "minimal" mode Logo section
</a></div>

## Jinja Macro

The `vf_logo_section` Jinja macro can be used to generate a logo section pattern. The API for the macro is shown
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
          <code>'default'</code>,<br>
          <code>'none'</code>
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
          <code>top_rule_variant</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'default'</code>,<br>
          <code>'none'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Variant of <a href="/docs/patterns/rule">horizontal rule</a> to display at the top of the section."
        </td>
      </tr>
      <tr>
        <td>
          <code>mode</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'default'</code>,<br>
          <code>'minimal'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Layout for the pattern.
          <ul>
            <li>"default": renders a &lt;section&gt; as the root element, and renders title, description and cta (suitable when used standalone).</li>
            <li>"minimal": renders a &lt;div&gt; as the root element, and does not render title, description and cta (suitable when used inside another section).</li>
          </ul>
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
          Descriptive content for the section.<br />
          One or more paragraphs
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Logo Section Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_logo-section.jinja" import vf_logo_section %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
