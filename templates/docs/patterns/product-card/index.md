---
wrapper_template: '_layouts/docs.html'
context:
  title: Product card | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The product card pattern is used to present a promotional or contextual link as
a self-contained, bordered card. The entire card is a single link, with a
heading, a short description, and a trailing arrow icon that indicates the card
is actionable. It is typically placed in a blog article sidebar, above the
newsletter card.

The product card pattern is composed of the following elements:

| Element | Description                                               |
| ------- | --------------------------------------------------------- |
| Card    | Anchor wrapping the whole card, linking to the target URL |
| Heading | <code>h5</code>-styled heading text                       |
| Content | <code>p</code> description text, rendered as raw HTML     |
| Arrow   | Decorative arrow icon indicating the card is actionable   |

## Default

The default product card renders a bordered card that links to the provided
URL, with a heading, description, and trailing arrow.

<div class="embedded-example"><a href="/docs/examples/patterns/product-card/default/" class="js-example" data-lang="jinja">
View example of the product card pattern
</a></div>

## Jinja Macro

The `vf_product_card` Jinja macro can be used to generate a product card pattern. The API for the macro is shown below.

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
          <code>url</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>''</code>
        </td>
        <td>
          Destination the card links to
        </td>
      </tr>
      <tr>
        <td>
          <code>heading</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>''</code>
        </td>
        <td>
          Heading text displayed at the top of the card, using <code>h5</code> styling
        </td>
      </tr>
      <tr>
        <td>
          <code>content</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
            <code>''</code>
        </td>
        <td>
          Description text displayed below the heading; rendered as raw HTML
        </td>
      </tr>
      <tr>
        <td>
          <code>class_name</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>''</code>
        </td>
        <td>
          Additional CSS class(es) appended to the card element
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Product Card Jinja macro, copy the following import statement into
your Jinja template:

```jinja
{% raw -%}
{% from "_macros/vf_product-card.jinja" import vf_product_card %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.
