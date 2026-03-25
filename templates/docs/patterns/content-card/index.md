---
wrapper_template: '_layouts/docs.html'
context:
  title: Card | Patterns
---

The content card pattern is a rich card variant designed to display content-heavy items like articles, webinars, or whitepapers. It supports custom column spans and adjusts its layout between vertical and horizontal depending on the space available.

## 2-Column Card

The 2-column layout results in a vertical card with the image at the top and content below.

<div class="embedded-example"><a href="/docs/examples/patterns/content-card/2-column" class="js-example" data-lang="jinja">
View example of the 2-column vertical content card
</a></div>


## 2-Column Card Without Image

The 2-Column Card Without Image

<div class="embedded-example"><a href="/docs/examples/patterns/content-card/2-column-no-image" class="js-example" data-lang="jinja">
View example of the 2-column vertical content card
</a></div>




## Jinja Macro

The `vf_card` Jinja macro can be used to generate a content card pattern. The API for the macro is shown
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
          <code>columns</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code> (2, 4, 6)
        </td>
        <td>
          <code>"2"</code>
        </td>
        <td>
          Grid column span for the card. Options are 2, 4, or 6.
        </td>
      </tr>
      <tr>
        <td>
          <code>heading</code>
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
          H4 title text. Truncated at 3 lines.
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
          <code>Object</code>
        </td>
        <td>
          <code>None</code>
        </td>
        <td>
          Dictionary containing <code>url</code> and <code>alt</code> for the 16:9 image.
        </td>
      </tr>
      <tr>
        <td>
          <code>author</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>None</code>
        </td>
        <td>
          Small text for the author. It is hidden if no image is provided.
        </td>
      </tr>
      <tr>
        <td>
          <code>date</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>None</code>
        </td>
        <td>
          Small text for the publication date. It is hidden if no image is provided.
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
          <code>string</code>
        </td>
        <td>
          <code>None</code>
        </td>
        <td>
          Paragraph text that is hidden by default and revealed via interaction.
        </td>
      </tr>
      <tr>
        <td>
          <code>footer</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>Object</code>
        </td>
        <td>
          <code>None</code>
        </td>
        <td>
          Dictionary containing <code>resource_type</code> (with <code>icon</code> and <code>text</code>) and <code>content_type</code> (read-only chip).
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Content Card Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_card.jinja" import vf_card %}
{%- endraw -%}
```

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-content-card;
```
