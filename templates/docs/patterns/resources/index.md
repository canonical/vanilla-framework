---
wrapper_template: '_layouts/docs.html'
context:
  title: Resources | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

The resources pattern is used to display a collection of resources. Each resource can include a title, image, description, author(s), and publication date.

It is composed of the following elements:

| Element                         | Description                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Title (**required**)            | Main heading text (h2)                                                                                              |
| Description                     | Pragraph styled description text                                                                                    |
| CTA block                       | CTA with variations of primary/secondary buttons and text links                                                     |
| Resource blocks (**required**)  | Resources with categories, each containing a 16:9 cover image or a logo, title, description, and citation metadata. |

<div class="embedded-example"><a href="/docs/examples/patterns/resources/default" class="js-example" data-lang="jinja">
View example of the default resources pattern
</a></div>

## Usage Examples

### Linked Title

The title can be made clickable by providing link attributes.

<div class="embedded-example"><a href="/docs/examples/patterns/resources/linked-title" class="js-example" data-lang="jinja">
View example of the resources pattern with linked title
</a></div>

### With Description

You can also pass a description, to provide additional information about resources

<div class="embedded-example"><a href="/docs/examples/patterns/resources/section-description" class="js-example" data-lang="jinja">
View example of the resources pattern with section description
</a></div>

### With CTA

You can also pass a CTA block, under the description

<div class="embedded-example"><a href="/docs/examples/patterns/resources/with-cta-and-description" class="js-example" data-lang="jinja">
View example of the resources pattern with description and CTA
</a></div>

### Without images

By providing `has_images: false` to the pattern, you can stop images from rendering

<div class="embedded-example"><a href="/docs/examples/patterns/resources/no-images" class="js-example" data-lang="jinja">
View example of the resources pattern without images
</a></div>

### Without categories

By providing `has_categories: false` to the pattern, you can stop categories from rendering

<div class="embedded-example"><a href="/docs/examples/patterns/resources/no-categories" class="js-example" data-lang="jinja">
View example of the resources pattern without categories
</a></div>

### Text only

By providing both `has_categories: false` and `has_images: false`, the pattern renders only textual content in a 50:50 layout

<div class="embedded-example"><a href="/docs/examples/patterns/resources/no-categories-and-images" class="js-example" data-lang="jinja">
View example of the resources pattern without categories and images
</a></div>

### Without resource description

Resource blocks can also be used without resource descriptions

<div class="embedded-example"><a href="/docs/examples/patterns/resources/no-description" class="js-example" data-lang="jinja">
View example of the resources pattern without resource descriptions
</a></div>

### Mixed images

You can use a 16:9 image for a resource, a logo image, or no image at all

<div class="embedded-example"><a href="/docs/examples/patterns/resources/mixed-images" class="js-example" data-lang="jinja">
View example of the resources pattern with mixed images
</a></div>

### Linked resource

You can make resource title clickable, by providing the `link_attrs`

<div class="embedded-example"><a href="/docs/examples/patterns/resources/linked-resources" class="js-example" data-lang="jinja">
View example of the resources pattern with linked resources
</a></div>

## Jinja Macro

The `vf_resources` Jinja macro can be used to generate a resources pattern. The API for the macro is shown below.

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
          Required
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          <code>{}</code>
        </td>
        <td>
          Title configuration with <code>text</code> and optional <code>link</code> (link attributes)
        </td>
      </tr>
      <tr>
        <td>
          <code>blocks</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;object&gt;</code>
        </td>
        <td>
          <code>[]</code>
        </td>
        <td>
          List of blocks
        </td>
      </tr>
    </tbody>
  </table>
</div>

## API Configuration

There are three different content blocks within the `blocks` array:

1. Description
2. CTA
3. Resources

#### 1. Description

Description blocks can be used to display elaborative text content.

By default, the description contents are rendered within a `<p>` tag, but you can also use `type:"html"` to render raw HTML
content.

```json
{
  "type": "description",
  "item": {
    "type": "text" | "html",
    "content": "Your content here"
  }
}
```

- **`type`**: Either `"text"` (default) or `"html"`. Text content is wrapped in `<p>` tags, HTML content is rendered as-is.
- **`content`**: The text or HTML content to display.

#### 2. CTA

The CTA block allows you to include call-to-action elements within the section.

It supports three types of CTA items:

- **Primary**: 1 main call-to-action button
- **Secondary**: Supporting action buttons
- **Link**: Text link

```json
{
  "type": "cta-block",
  "item": {
    "primary": {
      "content_html": "Primary button text",
      "attrs": {
        "href": "link-url",
        "class": "optional-css-class"
      }
    },
    "secondaries": [
      {
        "content_html": "Secondary button text",
        "attrs": {
          "href": "link-url"
        }
      }
    ],
    "link": {
      "content_html": "Link text",
      "attrs": {
        "href": "link-url"
      }
    }
  }
}
```

- **`primary`**: Optional primary button configuration.
- **`secondaries`**: Optional array of secondary button configurations.
- **`link`**: Optional text link configuration.

Each of the CTA configurations accepts the following properties:

- **`content_html`**: The inner HTML of the CTA item.
- **`attrs`**: Dictionary of button/link attributes. These are applied to the CTA element. If `href` is present, the CTA item will be an `<a>`, otherwise it will be a `<button>`. See [attribute forwarding docs](/docs/building-vanilla#attribute-forwarding) for more info.

#### 3. Resources

The Resources block allows you to specify categories and resource items to appear within those categories.

<div style="overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="width: 330px;">Name</th>
        <th style="width: 160px;">Required?</th>
        <th style="width: 160px;">Type</th>
        <th style="width: 250px;">Description</th>
      </tr>
    </thead>
    <tbody>
          <tr>
        <td>
          <code>render_images</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          Whether to render resource images
        </td>
      </tr>
      <tr>
        <td>
          <code>render_categories</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          Whether to render category names
        </td>
      </tr>
      <tr>
        <td>
          <code>categories</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;object&gt;</code>
        </td>
        <td>
          List of categories, containing category title and resource items
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].title</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;object&gt;</code>
        </td>
        <td>
          Category title text, rendered in <a href="/docs/base/typography#small-caps-text">small caps text</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;object&gt;</code>
        </td>
        <td>
          List of resource items
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].title</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Title configuration for the article
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].title.text</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          The title text
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].title.link</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Link attributes object, see <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].title.attrs</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Title attributes object, see <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].image</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Image configuration for the article
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].image.attrs</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Image attributes object (src, alt, etc.), see <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].description</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Description configuration for the article
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].description.text</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          The description text
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].description.attrs</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Paragraph attributes object, see <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].description.class</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          Additional classes for the description
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].citation</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Citation configuration for the article
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].citation.authors</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>Array&lt;object&gt;</code>
        </td>
        <td>
          List of author objects
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].citation.authors[].text</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          Author name
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].citation.authors[].link</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Link attributes object, see <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].citation.date</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Date configuration
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].citation.date.text</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          Date text
        </td>
      </tr>
      <tr>
        <td>
          <code>categories[].items[].citation.date.attrs</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          Time element attributes object, see <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Resources Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_resources.jinja" import vf_resources %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
