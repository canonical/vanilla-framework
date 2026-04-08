---
wrapper_template: '_layouts/docs.html'
context:
  title: Card | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The **Card** pattern is a rich, highly structured card variant designed to display heavily contextual items like articles, webinars, announcements, or whitepapers. It supports custom column spans and fluidly adjusts its layout between vertical and horizontal orientations depending on the space available. 

Responsive by design, the larger horizontal variants are built to adapt to screen real estate: **6-column cards collapse down to 4 columns and eventually 2 columns** on smaller screens, while **4-column cards collapse down to 2 columns**.

The Card pattern is composed of the following elements:

| Element                | Description                                                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Heading (**required**) | Main title text (h4). Truncated at 3 lines.                                                                                                |
| Link (**required**)    | Makes the entire card's surface area clickable.                                                                                            |
| Image                  | 16:9 aspect ratio thumbnail. Required for 6-column layout.                                                                                 |
| Author & Date          | Displays author name and/or publication date. Hidden if no image is provided.                                                              |
| Footer                 | Contains metadata such as a resource type (with icon) and a content type chip.                                                             |

---

## 2-Column Card

The 2-column layout is the default standard. It results in a vertical card with the image at the top and content stacked below. 

<div class="embedded-example"><a href="/docs/examples/patterns/content-card/2-column" class="js-example" data-lang="jinja">
View example of the 2-column vertical card
</a></div>

### 2-Column Card Without Image

Omitting the image results in a more compact, text-forward vertical card. Note that omitting the image also hides the author and date metadata to preserve layout balance.

<div class="embedded-example"><a href="/docs/examples/patterns/content-card/2-column-no-image" class="js-example" data-lang="jinja">
View example of the 2-column vertical card without image
</a></div>

## 4-Column Card

The 4-column layout results in a horizontal card with the image on the left and the content area filling the remaining space on the right. *Note: 4-column cards collapse down to 2-column vertical layouts on smaller screen dimensions.*

<div class="embedded-example"><a href="/docs/examples/patterns/content-card/4-column" class="js-example" data-lang="jinja">
View example of the 4-column horizontal card
</a></div>

### 4-Column Card Without Image

Removing the image from the 4-column variant creates a clean, wide-format text block, perfect for lists of text-heavy resources. 

<div class="embedded-example"><a href="/docs/examples/patterns/content-card/4-column-no-image" class="js-example" data-lang="jinja">
View example of the 4-column horizontal card without image
</a></div>

## 6-Column Card

The 6-column layout is an expansive horizontal format suited for highly featured content. Because of its width, an image is strictly required for this variant to maintain visual structure. *Note: 6-column cards collapse down to 4-column, and eventually 2-column layouts based on screen dimensions.*

<div class="embedded-example"><a href="/docs/examples/patterns/content-card/6-column" class="js-example" data-lang="jinja">
View example of the 6-column horizontal card
</a></div>

---

## Jinja Macro

The `vf_card` Jinja macro can be used to generate a card pattern. The entire card surface operates as a clickable link, while CSS layer-stacking allows nested elements (like the author's name) to retain their own distinct click targets.

### Parameters

> **Important Note:** When defining the `footer.resource_type.icon`, the string must be a valid Vanilla Framework icon name. The macro automatically prepends the prefix, rendering your string as **`p-icon--{name}`**.

<div style="overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="width: 200px;">Name</th>
        <th style="width: 120px;">Required?</th>
        <th style="width: 140px;">Type</th>
        <th style="width: 120px;">Default</th>
        <th style="width: 300px;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>columns</code></td>
        <td>No</td>
        <td><code>string</code></td>
        <td><code>"2"</code></td>
        <td>Grid column span for the card. Options are <code>2</code>, <code>4</code>, or <code>6</code>.</td>
      </tr>
      <tr>
        <td><code>link</code></td>
        <td>Yes</td>
        <td><code>string</code></td>
        <td><code>None</code></td>
        <td>Link to the referenced item. Stretches to make the entire card clickable.</td>
      </tr>
      <tr>
        <td><code>heading</code></td>
        <td>Yes</td>
        <td><code>string</code></td>
        <td><code>None</code></td>
        <td>The main title text (rendered as h4). Truncated at 3 lines.</td>
      </tr>
      <tr>
        <td><code>image</code></td>
        <td>No*</td>
        <td><code>Object</code></td>
        <td><code>None</code></td>
        <td>Dictionary containing <code>src</code> and <code>alt</code> for the 16:9 image. <em>*Required for the 6-column variant.</em></td>
      </tr>
      <tr>
        <td><code>author</code></td>
        <td>No</td>
        <td><code>string</code></td>
        <td><code>None</code></td>
        <td>Optional string for the author's name. Hidden if no image is provided.</td>
      </tr>
      <tr>
        <td><code>date</code></td>
        <td>No</td>
        <td><code>string</code></td>
        <td><code>None</code></td>
        <td>Optional string for the publication date. Hidden if no image is provided.</td>
      </tr>
      <tr>
        <td><code>footer</code></td>
        <td>No</td>
        <td><code>Object</code></td>
        <td><code>None</code></td>
        <td>Dictionary containing <code>resource_type</code> (with <code>icon</code> and <code>text</code>) and <code>content_type</code> (read-only chip).</td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Card Jinja macro, copy the following import statement into your Jinja template.

{% raw -%}
```jinja
{% from "_macros/vf_card.jinja" import vf_card %}
```
