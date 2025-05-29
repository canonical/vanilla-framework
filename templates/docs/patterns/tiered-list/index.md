---
wrapper_template: '_layouts/docs.html'
context:
  title: Tiered list | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The tiered list pattern is used to easily implement a list of paired titles and
descriptions underneath a top-level title and description. Optional [CTA
blocks](/docs/patterns/cta-block) can be placed at various points in the content
as well. Depending on the size and composition of your content, you can choose
from a variety of tiered list layouts:

- [50/50 on desktop with description](#5050-on-desktop-with-description)
- [50/50 on tablet without description](#5050-on-tablet-without-description)
- [50/50 on tablet with description](#5050-on-tablet-with-description)
- [50/50 with description](#5050-with-description)
- [Full-width without description](#full-width-without-description)
- [Full-width with description](#full-width-with-description)

The tiered list pattern is composed of the following elements:

| Element               | Description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| Title (**required**)  | <code>h2</code> title text                                                          |
| Description           | <code>p</code> description text with optional [CTA block](/docs/patterns/cta-block) |
| List item title       | Title text/content                                                                  |
| List item description | Description text/content with optional [CTA block](/docs/patterns/cta-block)        |
| Call to action block  | [CTA block](/docs/patterns/cta-block) beneath the list                              |

## 50/50 on desktop with description

This variant contains a top-level description which is presented side-by-side
with its title on desktop screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## 50/50 on tablet without description

This variant does not contain a top-level description and its child list is
presented with its titles side-by-side with its descriptions on tablet screen
sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-tablet-without-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## 50/50 on tablet with description

This variant contains a top-level description and its child list is presented
with its titles side-by-side with its descriptions on tablet screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-tablet-with-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## 50/50 with description

This variant contains a top-level description. Its title and description are
presented side-by-side on desktop screen sizes, and its child list is presented
side-by-side on tablet screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-with-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Full-width without description

This variant does not contain a top-level description, and both its title and
child list are presented full-width on desktop and tablet screen sizes
respectively.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/full-width-without-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Full-width with description

This variant contains a top-level description, and its title, description, and
child list are presented full-width on desktop and tablet screen sizes
respectively.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/full-width-with-description/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Additional CTA options

In addition to the CTA block placed below the list, you may also add CTA blocks
below the top-level description text, as well as below each list item's
description text.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-description-cta/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-list-item-cta/" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Jinja Macro

The `vf_tiered_list` Jinja macro can be used to generate a tiered list pattern. The API for the macro is shown below.

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
          <code>is_description_full_width_on_desktop</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>true</code>
        </td>
        <td>
          Whether the description element should be full-width on desktop
        </td>
      </tr>
      <tr>
        <td>
          <code>is_list_full_width_on_tablet</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>true</code>
        </td>
        <td>
          Whether the list element should be full-width on tablet
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
          Yes
        </td>
        <td>
          Title sentence displayed at the top of the pattern
        </td>
      </tr>
      <tr>
        <td>
          <code>description</code>
        </td>
        <td>
          No
        </td>
        <td>
          Description paragraph displayed below the title
        </td>
      </tr>
      <tr>
        <td>
          <code>list_item_title_[1-25]</code>
        </td>
        <td>
          Yes, at least 1
        </td>
        <td>
          Title element of each child list item; max of 25
        </td>
      </tr>
      <tr>
        <td>
          <code>list_item_description_[1-25]</code>
        </td>
        <td>
          Yes, at least 1
        </td>
        <td>
          Description element of each child list item; max of 25
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
          Contents of a <a href="/docs/patterns/cta-block">CTA block</a> at the
          bottom of the pattern
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Tiered List Jinja macro, copy the following import statement into
your Jinja template:

```jinja
{% raw -%}
{% from "_macros/vf_tiered-list.jinja" import vf_tiered_list %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

Since Patterns leverage many other parts of Vanilla in their composition and
content, we recommend [importing the entirety of Vanilla](/docs#install) for
full support.
