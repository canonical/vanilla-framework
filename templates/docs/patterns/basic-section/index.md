---
wrapper_template: '_layouts/docs.html'
context:
  title: Basic Section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A basic section is used to....

The basic section pattern is composed of the following elements:

| Element | Description |
| ------- | ----------- |

## Jinja Macro

The `vf_basic_section` Jinja macro can be used to generate a basic section pattern. The API for the macro is shown
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
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Basic Section Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_basic-section.jinja" import vf_basic_section %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
