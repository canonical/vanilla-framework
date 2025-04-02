---
wrapper_template: '_layouts/docs.html'
context:
  title: Linked logo section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A linked logo section is used to display a list of logos which explicitly link to additional pages or resources.

The linked logo section pattern is composed of the following elements:

| Element                   | Description                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| title_text (**required**) | `H2` title text.                                                                                       |
| Links (**required**)      | A list of image links containing four fields for each link: `href`, `text`, `label`, and `image_html`. |
| Layout                    | Defaults to `full-width`, with additional options for `50-50`, and `25-75` layout splits.              |

### Image variations and considerations

The `image_html` field can be defined using raw html or using the [Canonical image-template module](https://github.com/canonical/canonicalwebteam.image-template/tree/6ebd34c5967f69ac23c97a24bcf6bd703a1ab7ce) as in the following link example:

<pre>
  {
    "href": "#",
    "text": "Learn more&nbsp;&rsaquo;",
    "label": "MLflow",
    "image_html": image(url="https://assets.ubuntu.com/v1/104192d9-mlflow-logo-container-vert-fill.png",
      alt="",
      width="222",
      height="481",
      hi_def=True,
      loading="auto",
      attrs={"class": "p-image-container__image"}
    ) | safe
  },
</pre>

#### Image containers

Each image is wrapped in a [highlighted image container](/docs/patterns/images#highlighted-image) under the hood. To make correct use of this component the `p-image-container__image` class should be added to each to each image.

### Accessibility

Each image in this component is wrapped by an `a` tag which includes an `aria-label` defined in the `label` field. Therefore, this is the label screenreaders will read, `alt` text added to the image itself will be ignored by assistive techjonology.

## Full width

<div class="embedded-example"><a href="/docs/examples/patterns/linked-logo-section/default" class="js-example" data-lang="jinja">
View example of the linked logo section full-width pattern
</a></div>

## 50/50

This variant can be used for adding a header and the logo section in different columns. This should only be used when there’s a maximum of 6 logos to avoid occupying too much vertical space.

<div class="embedded-example"><a href="/docs/examples/patterns/linked-logo-section/50-50" class="js-example" data-lang="jinja">
View example of the linked logo section 50-50 pattern
</a></div>

## 25/75

This variant can be used for adding a header and the logo section in different columns, but can accommodate up to 9 logos. Be aware that the heading only occupies 25% width here, so only very short titles would be appropriate here

<div class="embedded-example"><a href="/docs/examples/patterns/linked-logo-section/25-75" class="js-example" data-lang="jinja">
View example of the linked logo section 25-75 pattern
</a></div>

## Jinja Macro

The `vf_linked_logo_section` Jinja macro can be used to generate a linked logo list pattern. The API for the macro is shown below.

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
      <tbody>
        <tr>
          <td>
            <code>title_text</code>
          </td>
          <td>
            Yes
          </td>
          <td>
            String
          </td>
          <td>
            N/A
          </td>
          <td>
            The text to be displayed as the heading (<code>h2</code>).
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
            <code>'50/50'</code>,<br>
            <code>'25/75'</code>,<br>
            <code>'full-width'</code>
          </td>
          <td>
            <code>full-wdith</code>
          </td>
          <td>
            The intented grid layout for the section.
          </td>
        </tr>
        <tr>
          <td>
            <code>links</code>
          </td>
          <td>
            Yes
          </td>
          <td>
            Array
          </td>
          <td>
            N/A
          </td>
          <td>
            Array of image links, each including <code>href</code>, <code>label</code>, <code>text</code>, and <code>image_html</code> fields.
          </td>
        </tr>
      </tbody>
    </thead>
  </table>
</div>

## Import

### Jinja Macro

To import the Linked Logo section Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_linked_logo_section.jinja" import vf_linked_logo_section %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.
