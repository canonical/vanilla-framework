---
wrapper_template: '_layouts/docs.html'
context:
  title: CTA Section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A CTA section is a prominent section typically used to quickly capture user's attention to a specific action as they scroll down the page.
Depending on the design of call to action buttons or links, you can choose from a variety of layouts:

- [Full width default CTA](#full-width-default-cta)
- [Full width default CTA with same line link](#full-width-default-cta-with-same-line-link)
- [Full width default CTA with multiple links](#full-width-default-cta-with-multiple-partial-links)
- [25-75 default CTA](#25-75-default-cta)
- [25-75 default CTA with same line link](#25-75-default-cta-with-same-line-link)
- [25-75 default CTA with multiple links](#25-75-default-cta-with-multiple-partial-links)
- [Full width with CTA block](#full-width-with-cta-block)
- [25-75 with CTA block](#25-75-with-cta-block)

The CTA section pattern is composed of the following elements:

| Element              | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| Rule                 | [Default rule](/docs/patterns/rule#default)                   |
| Title                | Title text (to be placed in `h2` heading)                     |
| Link                 | Link text (using `h2` style)                                  |
| Description          | Description text (one or more paragraphs)                     |
| Call to action block | [CTA block](/docs/patterns/cta-block) beneath the description |

## Full width default CTA

<div class="embedded-example"><a href="/docs/examples/patterns/cta/full-width-default-cta" class="js-example" data-lang="jinja">
View example of the default full width cta section pattern
</a></div>

## Full width default CTA with same line link

<div class="embedded-example"><a href="/docs/examples/patterns/cta/full-width-default-cta-with-same-line-link" class="js-example" data-lang="jinja">
View example of the default full width cta section pattern with same line link
</a></div>

## Full width default CTA with multiple partial links

<div class="embedded-example"><a href="/docs/examples/patterns/cta/full-width-default-cta-with-multiple-partial-links" class="js-example" data-lang="jinja">
View example of the default full width cta section pattern with multiple partial links
</a></div>

## 25-75 default CTA

<div class="embedded-example"><a href="/docs/examples/patterns/cta/25-75-default-cta" class="js-example" data-lang="jinja">
View example of the 25-75 split default cta section pattern
</a></div>

## 25-75 default CTA with same line link

<div class="embedded-example"><a href="/docs/examples/patterns/cta/25-75-default-cta-with-same-line-link" class="js-example" data-lang="jinja">
View example of the default 25-75 cta section pattern with same line link
</a></div>

## 25-75 default CTA with multiple partial links

<div class="embedded-example"><a href="/docs/examples/patterns/cta/25-75-default-cta-with-multiple-partial-links" class="js-example" data-lang="jinja">
View example of the default 25-75 cta section pattern with multiple partial links
</a></div>

## Full width with CTA block

<div class="embedded-example"><a href="/docs/examples/patterns/cta/full-width-with-cta-block" class="js-example" data-lang="jinja">
View example of the full width cta section with cta block
</a></div>

## 25-75 with CTA block

<div class="embedded-example"><a href="/docs/examples/patterns/cta/25-75-with-cta-block" class="js-example" data-lang="jinja">
View example of the 25-75 split cta section with cta block
</a></div>

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
          <code>layout</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          One of:<br>
          <code>'cta-default-100'</code>,<br>
          <code>'cta-default-25-75'</code>,<br>
          <code>'cta-block-100'</code>,<br>
          <code>'cta-block-25-75'</code>,<br>
        </td>
        <td>
          <code>'cta-default-100'</code>
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
          Yes, when layout = <code>'cta-block-100'</code> or <code>'cta-block-25-75'</code>
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
          <code>link_text</code>
        </td>
        <td>
          Yes, when layout = <code>'cta-default-100'</code> or <code>'cta-default-25-75'</code>
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          <code>h2</code> link text, only applicable to <code>'cta-default-100'</code> and <code>'cta-default-25-75'</code> layouts
        </td>
      </tr>
      <tr>
        <td>
          <code>link_href</code>
        </td>
        <td>
          Yes, when layout = <code>'cta-default-100'</code> or <code>'cta-default-25-75'</code>
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          The actual address of the link, only applicable to <code>'cta-default-100'</code> and <code>'cta-default-25-75'</code> layouts
        </td>
      </tr>
      <tr>
        <td>
          <code>same_line_link_text</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>False</code>
        </td>
        <td>
          Whether the link text should be rendered on the same line with title_text, only applicable to <code>'cta-default-100'</code> and <code>'cta-default-25-75'</code> layouts
        </td>
      </tr>
      <tr>
        <td>
          <code>has_chevron</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>True</code>
        </td>
        <td>
          Whether the link text should have a chevron icon, only applicable to <code>'cta-default-100'</code> and <code>'cta-default-25-75'</code> layouts
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
          No
        </td>
        <td>
          Custom title to support embedded/partial links, only applicable to <code>'cta-default-100'</code> and <code>'cta-default-25-75'</code> layouts 
        </td>
      </tr>
      <tr>
      <tr>
        <td>
          <code>description</code>
        </td>
        <td>
          No
        </td>
        <td>
          Paragraph-style content below the title and subtitle, only applicable to <code>'cta-block-100'</code> or <code>'cta-block-25-75'</code> layouts
        </td>
      </tr>
      <tr>
        <td>
          <code>cta</code>
        </td>
        <td>
          Yes, when layout = <code>'cta-block-100'</code> or <code>'cta-block-25-75'</code>
        </td>
        <td>
          Contents of a <a href="/docs/patterns/cta-block">CTA block</a> beneath
          the title and description, only applicable to <code>'cta-block-100'</code> and <code>'cta-block-25-75'</code> layouts 
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
