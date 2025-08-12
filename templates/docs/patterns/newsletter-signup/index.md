---
wrapper_template: '_layouts/docs.html'
context:
  title: Newsletter signup | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

Newsletter signup is a form which allows users to subscribe to a newsletter for updates.

- [25-75](#25-75)
- [50-50](#50-50)
- [col-2](#col-2)
- [col-4](#col-4)

The Newsletter signup pattern is composed of the following elements:

| Element                                 | Description                                       |
| --------------------------------------- | ------------------------------------------------- |
| Title (**required**)                    | Title text (to be placed in `h2` or `h3` heading) |
| - `h2` for `50-50` and `25-75` variants |
| - `h3` for `col-2` and `col-4` variants |
| Description (**required**)              | Description text (one or more paragraphs)         |
| Label + input (**required**)            | Single-line input field with label                |
| Label + checkbox (**required**)         | Checkbox with a label                             |
| Button (**required**)                   | Single default button                             |

## 25-75

This is the default variant. It consists of a 25-75 split, with title on the left, and description(s) with form on the right.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/25-75" class="js-example" data-lang="jinja">
View example of the 25-75 newsletter signup
</a></div>

## 50-50

THis variant consists of a 50-50 split, with title on the left, and description(s) with form on the right.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/50-50" class="js-example" data-lang="jinja">
View example of the 50-50 newsletter signup
</a></div>

## 2-col

This variant is used within a grid, and takes up 2 columns on large/medium and 4 columns on small dimensions.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/2-col" class="js-example" data-lang="jinja">
View example of the 2-col newsletter signup
</a></div>

## 4-col

This variant is also used within a grid, and takes up 4 columns on all dimensions.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/4-col" class="js-example" data-lang="jinja">
View example of the 4-col newsletter signup
</a></div>

## Jinja Macro

The `vf_newsletter_signup` Jinja macro can be used to generate a Newsletter signup pattern. The API for the macro is shown below.

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
          <code>h2/h3</code> title text<br/>
          <code>h2</code> for <code>`25-75`, `50-50` variants</code><br/>
          <code>h3</code> for <code>`2-col`, `4-col` variants</code><br/>
        </td>
      </tr>
      <tr>
        <td>
          <code>input_label</code>
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
          Label for the input field
        </td>
      </tr>
      <tr>
        <td>
          <code>checkbox_label</code>
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
          Label for the checkbox
        </td>
      </tr>
      <tr>
        <td>
          <code>layout</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>25-75</code>
        </td>
        <td>
          Variant of the newsletter signup pattern<br/>
          One of <code>`25-75`</code>, <code>`50-50`</code>, <code>`2-col`</code>, <code>`4-col`</code>
        </td>
      </tr>
      <tr>
        <td>
          <code>formId</code>
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
          Marketo form id
        </td>
      </tr>
      <tr>
        <td>
          <code>returnURL</code>
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
          URL to return to after form submission
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
      <tr>
        <td>
          <code>description</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          Paragraph-style content. One or more paragraphs
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Newsletter signup Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_newsletter-signup.jinja" import vf_newsletter_signup %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
