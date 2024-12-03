---
wrapper_template: '_layouts/docs.html'
context:
  title: Quote Wrapper | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A quote wrapper is a pattern used to prominently display a quotation alongside an optional citation, logo, and image.

The quote wrapper pattern is composed of the following elements:

| Element              | Description                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------- |
| Quote (**required**) | Quote text.                                                                                 |
| Header               | Header text & CTA. Useful for adding a title/link that describes all of a series of quotes. |
| Signpost image       | Small image to display at the left/top of the quote, such as a logo or a portrait.          |
| Call to action       | A [CTA block](/docs/patterns/cta-block).                                                    |
| Image                | Image to associate with the quote.                                                          |
| Source               | Name, title, and organisation of the quote's source.                                        |

All examples shown here use `h2`-sized quote text. This can be changed to `h4` or `h6` by using the `quote_size` parameter
of the [Quote Wrapper Jinja macro](#jinja-macro).

## All elements

The following example includes all required and optional elements.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large" class="js-example" data-lang="jinja">
View example of the quote wrapper pattern with large quote text
</a></div>

## Without signpost image

If the quote is not associated with a specific brand or entity, or no logo is available, the logo can be omitted.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large-no-signpost" class="js-example" data-lang="jinja">
View example of the quote wrapper pattern with large quote text, without a signpost image.
</a></div>

## Without citation

If no source is available, the quote can be displayed without a citation.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large-no-citation" class="js-example" data-lang="jinja">
View example of the quote wrapper pattern with large quote text, without a citation.
</a></div>

## Without heading

If no heading is desired, the quote can be displayed without a heading, omitting the title and title link.

The heading should be omitted if the quote is not the first element in its page section.
If the quote is the first element in its section, a heading should be used to introduce the quote and distinguish it from
previous content.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large-no-header" class="js-example" data-lang="jinja">
View example of the quote wrapper pattern with large quote text, without a heading.
</a></div>

## Minimal

The minimal quote wrapper pattern includes only the quote text.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large-minimal" class="js-example" data-lang="jinja">
View example of the quote wrapper pattern with all optional content removed.
</a></div>

## Jinja Macro

The `vf_quote_wrapper` Jinja macro can be used to generate a Quote Wrapper pattern. The API for the macro is shown below.

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
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Text to be displayed as a quote section summary.
        </td>
      </tr>
      <tr>
        <td>
          <code>quote_size</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of:<br>
          <code>'small'</code>,<br>
          <code>'medium'</code>,<br>
          <code>'large'</code>
        </td>
        <td>
          <code>'medium'</code>
        </td>
        <td>
          Size of the quote text.<br><code>'small'</code> for <code>h6</code>,<br><code>'medium'</code> for <code>h4</code>,<br><code>'large'</code> for <code>h2</code>.
        </td>
      </tr>
      <tr>
        <td>
          <code>quote_text</code>
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
          Text of the quote. Do not include quotation marks; they are added by the macro.
        </td>
      </tr>
      <tr>
        <td>
          <code>citation_source_name_text</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Name of the quote's source.
        </td>
      </tr>
      <tr>
        <td>
          <code>
            citation_source_title_text
          </code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Title/role of the quote's source.
        </td>
      </tr>
      <tr>
        <td>
          <code>
            citation_source_organisation_text
          </code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Name of an organisation associated with the quote's source.
        </td>
      </tr>
      <tr>
        <td>
          <code>
            is_shallow
          </code>
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
          Whether the quote should be wrapped in a <a href="/docs/patterns/section#shallow-sections">shallow section</a>.<br>
          If <code>false</code>, a <a href="/docs/patterns/section#regular-sections">regular section</a> is used.
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
          <code>signpost_image</code>
        </td>
        <td>
          No
        </td>
        <td>
          Small image (such as a logo) to place in the left column.
        </td>
      </tr>
      <tr>
        <td>
          <code>heading_link</code>
        </td>
        <td>
          No
        </td>
        <td>
          A link to be displayed in the heading, adjacent to the title.
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
          Contents of a <a href="/docs/patterns/cta-block">CTA block</a> beneath
          the quote.
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
          An image or other media element to be displayed beneath the quote.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Quote Wrapper Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_quote-wrapper.jinja" import vf_quote_wrapper %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
