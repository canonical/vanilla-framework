---
wrapper_template: '_layouts/docs.html'
context:
  title: Linked logo section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A linked logo section is used to display a list of logos which explicitly link to additional pages or resources.

The linked logo section pattern is composed of the following elements:

| Element                           | Description                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------- |
| title_text                        | `H2` title text.                                                                          |
| Layout                            | Defaults to `full-width`, with additional options for `50-50`, and `25-75` layout splits. |
| Links (**required**)              | An `Array<Object>` of individual image link properties.                                   |
| Links[].href (**required**)       | The target link for the logo.                                                             |
| Links[].text (**required**)       | The link text for the logo.                                                               |
| Links[].label (**required**)      | The `aria-label` for the logo.                                                            |
| Links[].image_html (**required**) | The logo image element.                                                                   |

## Full width

This is the default layout for this pattern and can be used with a maximum of 8 logos.

<div class="embedded-example"><a href="/docs/examples/patterns/linked-logo-section/default" class="js-example" data-lang="jinja">
View example of the linked logo section full-width pattern
</a></div>

## 50/50

This variant can be used for adding a header and the logo section in different columns. This should only be used when there's a maximum of 6 logos to avoid occupying too much vertical space.

<div class="embedded-example"><a href="/docs/examples/patterns/linked-logo-section/50-50" class="js-example" data-lang="jinja">
View example of the linked logo section 50-50 pattern
</a></div>

## 25/75

This variant can be used for adding a header and the logo section in different columns, but can accommodate up to 9 logos. Be aware that the heading only occupies 25% width here, so only very short titles would be appropriate here.

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
            No
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
            <code>full-width</code>
          </td>
          <td>
            The intended grid layout for the section.
          </td>
        </tr>
        <tr>
          <td>
            <code>top_rule_variant</code>
          </td>
          <td>
            No
          </td>
          <td>
            One of:<br>
            <code>'default'</code>,<br>
            <code>'muted'</code>,<br>
            <code>'highlighted'</code>,<br>
            <code>'none'</code>
          </td>
          <td>
            <code>'default'</code>
          </td>
          <td>
            Type of <a href="/docs/patterns/rule">rule</a> to render at the top of the pattern. Use <code>'none'</code> to hide the top rule.
          </td>
        </tr>
        <tr>
          <td>
            <code>padding</code>
          </td>
          <td>
            No
          </td>
          <td>
            One of:<br>
            <code>'deep'</code>,<br>
            <code>'shallow'</code>,<br>
            <code>'default'</code>,<br>
            <code>'none'</code>
          </td>
          <td>
            <code>'default'</code>
          </td>
          <td>
            Type of padding to apply to the pattern. Use <code>'none'</code> to remove all padding. See <a href="/docs/patterns/section#regular-sections">section padding options</a> for details.
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
            Array of image links.
          </td>
        </tr>
        <tr>
          <td>
            <code>links[].href</code>
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
            Target link for the image.
          </td>
        </tr>
        <tr>
          <td>
            <code>links[].text</code>
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
            Logo link text.
          </td>
        </tr>
        <tr>
          <td>
            <code>links[].label</code>
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
            <code>aria-label</code> for the logo link. This attribute is added to the wrapping `a` tag under the hood and it is this label that screenreaders will read. Additional alt text added to the image element will be ignored by assistive techology and as such can be set to null.   
          </td>
        </tr>
         <tr>
          <td>
            <code>links[].image_attrs</code>
          </td>
          <td>
            Yes (either <code>image_attrs</code> or <code>image_html</code>)
          </td>
          <td>
            <code>Partial&lt;HTMLImageElement&gt;</code>
          </td>
          <td>
            N/A
          </td>
          <td>
            <p>
            Props (as a dictionary) of a logo image element. The <code>p-image-container__image</code> class will be added automatically by the pattern.
            </p>
            <p>
            You can construct these props manually, or use the <a href="https://github.com/canonical/canonicalwebteam.image-template?tab=readme-ov-file#attribute-output">canonicalwebteam.image-template module with <code>output_mode="attrs"</code></a>.
            </p>
            <p>
              If this argument is used, the <code>image_html</code> argument will be ignored.
            </p>
          </td>
        </tr>
          <tr>
          <td>
            <code>links[].image_html</code>
          </td>
          <td>
            Yes (either <code>image_attrs</code> or <code>image_html</code>)
          </td>
          <td>
            HTMLImageElement
          </td>
          <td>
            N/A
          </td>
          <td>
            <p>
                Raw HTML of a logo image element. This can be defined using raw HTML or using the <a href="https://github.com/canonical/canonicalwebteam.image-template/">Canonical image-template module</a>. 
            </p>
            <p>
                Must include the <code>p-image-container__image</code> CSS class to comply with the <a href="/docs/patterns/images#highlighted-image">Highlighted image pattern</a> which wraps each link item under the hood.
            </p>
            <p>
                If you use <code>image_attrs</code> instead of <code>image_html</code>, the <code>p-image-container__image</code> class will be added automatically by the pattern.
            </p>
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
{% from "_macros/vf_linked-logo-section.jinja" import vf_linked_logo_section %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
