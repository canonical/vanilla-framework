---
wrapper_template: '_layouts/docs.html'
context:
  title: Rich horizontal list | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The rich horizontal list is used to display a list alongside a title, logo section, image, and call-to-action block.

The list inside the rich list is a <a href="/docs/patterns/list#horizontal-section-new">horizontal section</a>, which is a list with a horizontal divider between each row of items.
The list items can be [bulletless](/docs/patterns/lists#bulletless-with-horizontal-divider),
[bulleted](/docs/patterns/lists#bulleted-with-horizontal-divider),
[ticked](/docs/patterns/lists#ticked-with-horizontal-divider),
or [ordered](/docs/patterns/lists#ordered-lists-with-horizontal-divider).

The rich horizontal list pattern is composed of the following elements:

| Element              | Description                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| Title (**required**) | <code>H2</code> title text.                                                                       |
| Logo section         | A [logo section](/docs/patterns/logo-section) component.                                          |
| Description          | <code>p</code> description text.                                                                  |
| List (**required**)  | A [horizontal section list](/docs/patterns/lists#horizontal-section-new) with up to 8 list items. |
| Call to action block | [Call to action block](/docs/patterns/cta-block) beneath the list.                                |
| Image                | Main list visual.                                                                                 |

## Default

By default, all the pattern elements are vertically stacked.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-horizontal/bulletless-responsive" class="js-example" data-lang="jinja">
View example of the rich horizontal list pattern
</a></div>

## 50/50

The 50/50 layout splits the title, description, and logo section into two columns. This makes use of more horizontal white space, allowing for a more compact layout.

Set the Jinja parameter `variant` to <code>"50/50"</code> to enable the 50/50 layout.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-horizontal/bulletless-50-50-responsive" class="js-example" data-lang="jinja">
View example of the rich horizontal list pattern in the 50/50 layout
</a></div>

## List item styling

By default, the list items have no list item icon, and the list is unordered.
The `list_item_style` Jinja parameter can be set to "bullet", "tick", or "number" to change the list item style.

For example, to create a ticked list, set `list_item_style="tick"`.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-horizontal/ticked-responsive" class="js-example" data-lang="jinja">
View example of the rich horizontal list pattern with tick item styling.
</a></div>

You can create an ordered list by setting `list_item_style="number"`.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-horizontal/ordered-responsive" class="js-example" data-lang="jinja">
View example of the rich horizontal list pattern with numbered item styling.
</a></div>

## Minimal

The only mandatory elements in the rich horizontal list are the title and the list, and one of the other (optional) elements.

<div class="embedded-example"><a href="/docs/examples/patterns/rich-list-horizontal/minimal-responsive" class="js-example" data-lang="jinja">
View example of the rich horizontal list pattern with minimal contents
</a></div>

## Jinja Macro

The `vf_rich_horizontal_list` Jinja macro can be used to generate a rich horizontal list pattern. The API for the macro is shown below.

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
          Title of the rich horizontal list.
        </td>
      </tr>
      <tr>
        <td>
          <code>list_item_style</code>
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
          Type of list item styling.
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
          One of:<br>
          <code>'full-width'</code>,<br>
          <code>'50/50'</code>
        </td>
        <td>
          <code>"full-width"</code>
        </td>
        <td>
          Layout variant selection
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
          <code>logo_section_items</code>
        </td>
        <td>
          No
        </td>
        <td>
          A block of 4-8 <code><a href="/docs/patterns/logo-section">.p-logo-section__item</a></code> elements.
        </td>
      </tr>
      <tr>
        <td>
          <code>list_item_[1-8]</code>
        </td>
        <td>
          Yes, at least 4 items
        </td>
        <td>
          Contents of a <code><a href="/docs/patterns/lists">.p-list__item</a></code> element for the list item.
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
          A call to action (such as links or sign-up buttons) to display beneath the list.
        </td>
      </tr>
      <tr>
        <td>
          <code>image</code>
        </td>
        <td>
          No
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

To import the Rich Horizontal List Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_rich-horizontal-list.jinja" import vf_rich_horizontal_list %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
