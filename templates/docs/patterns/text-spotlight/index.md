---
wrapper_template: '_layouts/docs.html'
context:
  title: Text Spotlight | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A Text Spotlight is a prominent section typically used to quickly capture user's attention to specific action items / benefits or advantages of selecting a specific product.

- [Default](#default)
- [Links](#links)

The Text Spotlight pattern is composed of the following elements:

| Element              | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| Title (**required**) | Title text (to be placed in `h2` heading)                                   |
| List (**required**)  | A list of paragraphs separated with horizontal rules (minimum 2, maximum 7) |

## Default

You can use pass default text items in the list.

<div class="embedded-example"><a href="/docs/examples/patterns/text-spotlight/default" class="js-example" data-lang="jinja">
View example of the default text spotlight section
</a></div>

## Links

You can also pass links as text items in the list

<div class="embedded-example"><a href="/docs/examples/patterns/text-spotlight/links" class="js-example" data-lang="jinja">
View example of the text spotlight section with links
</a></div>

## Jinja Macro

The `vf_text-spotlight` Jinja macro can be used to generate a Text Spolight Pattern. The API for the macro is shown below.

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
          <code>h2</code> title text
        </td>
      </tr>
      <tr>
        <td>
          <code>list_items</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;string&gt;</code>
        </td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of text or HTML strings
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Text Spotlight Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_text-spotlight.jinja" import vf_text_spotlight %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
