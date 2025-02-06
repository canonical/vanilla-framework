---
wrapper_template: '_layouts/docs.html'
context:
  title: Rich vertical list | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The rich vertical list is used to display a list alongside a title, logo section, image, and call-to-action block.

The list inside the rich list is a divided list, which is a list with a horizontal divider between each item.
The list items can be [bulletless](/docs/patterns/lists#bulletless-with-horizontal-divider),
[bulleted](/docs/patterns/lists#bulleted-with-horizontal-divider),
[ticked](/docs/patterns/lists#ticked-with-horizontal-divider),
or [ordered](/docs/patterns/lists#ordered-lists-with-horizontal-divider).

By default, text is on the left and the image is on the right.

The rich vertical list pattern is composed of the following elements:

| Element              | Description                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| Title (**required**) | <code>H2</code> title text.                                                                    |
| Logo section         | A [logo section](/docs/patterns/logo-section) component.                                       |
| Description          | <code>p</code> description text.                                                               |
| List                 | A [divided list](/docs/patterns/lists#ticked-with-horizontal-divider) with up to 7 list items. |
| Call to action block | [Call to action block](/docs/patterns/cta-block) beneath the description.                      |
| Image (**required**) | Main list visual.                                                                              |

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/ticked" class="js-example" data-lang="jinja">
View example of the rich vertical list pattern
</a></div>

## Flipped

The horizontal ordering of the rich list columns can also be reversed, creating a flipped layout.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/ticked-flipped" class="js-example" data-lang="jinja">
View example of the rich vertical list pattern
</a></div>

## Minimal

The only mandatory elements in the rich vertical list are the title and the image, and one of the other (optional) elements.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-vertical/minimal" class="js-example" data-lang="jinja">
View example of the rich vertical list pattern
</a></div>

## Jinja Macro

The `vf_rich_vertical_list` Jinja macro can be used to generate a rich vertical list pattern. The API for the macro is shown below.

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
          Title of the rich vertical list.
        </td>
      </tr>
      <tr>
        <td>
          <code>list_item_tick_style</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'bullet'</code>,<br>
          <code>'tick'</code>,<br>
          <code>'number'</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Type of list item tick styling.
        </td>
      </tr>
      <tr>
        <td>
          <code>is_flipped</code>
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
          Whether the list items are flipped so the image is on the left and the text is on the right.
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
          Paragraph-style description of the list.
        </td>
      </tr>
      <tr>
        <td>
          <code>logo_section</code>
        </td>
        <td>
          No
        </td>
        <td>
          A <a href="/docs/patterns/logo-section">logo section</a> component.
        </td>
      </tr>
      <tr>
        <td>
          <code>list_item_[1-7]</code>
        </td>
        <td>
          No
        </td>
        <td>
          Contents of a <code>.p-list__item</code> element for the list item.
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
          Contents of a <a href="/docs/patterns/cta-block">CTA block</a> to display beneath the list.
        </td>
      </tr>
      <tr>
        <td>
          <code>image</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          Main list visual.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Rich Vertical List Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_rich-vertical-list.jinja" import vf_rich_vertical_list %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
