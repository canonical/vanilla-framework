---
wrapper_template: '_layouts/docs.html'
context:
  title: Data spotlight | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The data spotlight is a pattern where key statistics serve as the main content, supported by short headlines and optional descriptions.

It is composed of the following elements:

| Element               | Description                    |
| --------------------- | ------------------------------ |
| Title (**required**)  | Main heading text (**h2**)     |
| Blocks (**required**) | Array of data spotlight blocks |

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/4-blocks.html" class="js-example" data-lang="jinja">
View example of the data spotlight
</a></div>

## Layout Options

### Linked Title

The title can be made clickable by providing link attributes.

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/linked-title.html" class="js-example" data-lang="jinja">
View example of the data spotlight with linked title
</a></div>

## Data Spotlight Blocks

You can pass an array of data spotlight block objects to this pattern.

```json
{
  "stat": "text" (required),
  "headline": "text" (optional),
  "description": "text" (optional),
  "link": {
    "url": "link-url",
    "text": "link-text"
  } (optional)
}
```

## Variants

Depending on the number of data spotlight blocks provided, there are 3 variants of this pattern.

### 4 blocks

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/4-blocks.html" class="js-example" data-lang="jinja">
View example of the 4 blocks variant of data spotlight
</a></div>

### 3 blocks

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/3-blocks.html" class="js-example" data-lang="jinja">
View example of the 3 blocks variant of data spotlight
</a></div>

### 2 blocks

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/2-blocks.html" class="js-example" data-lang="jinja">
View example of the 2 blocks variant of data spotlight
</a></div>

## Usage Examples

### Without description

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/no-description.html" class="js-example" data-lang="jinja">
View example of the data spotlight without description
</a></div>

### Without CTA

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/no-cta.html" class="js-example" data-lang="jinja">
View example of the data spotlight without CTA
</a></div>

### Without CTA and description

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/no-cta-description.html" class="js-example" data-lang="jinja">
View example of the data spotlight without CTA and description
</a></div>

### Only statistics

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/only-statistics.html" class="js-example" data-lang="jinja">
View example of the data spotlight with only statistics
</a></div>

### Link style heading

<div class="embedded-example"><a href="/docs/examples/patterns/data-spotlight/linked-title.html" class="js-example" data-lang="jinja">
View example of the data spotlight with linked title
</a></div>

## Jinja Macro

The `vf_data_spotlight` Jinja macro can be used to generate a Data spotlight pattern. The API for the macro is shown
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
          The main title text (rendered as <code>h2</code>)
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
          Array of blocks to display in the section. See <a href="#data-spotlight-blocks">Data Spotlight Blocks</a> for configuration details.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Data Spotlight Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_data-spotlight.jinja" import vf_data_spotlight %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
