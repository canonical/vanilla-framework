---
wrapper_template: '_layouts/docs.html'
context:
  title: Blog | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A blog pattern is used to display a collection of blog articles in a grid layout. Each article can include a title, image, description, author(s), and publication date.

The blog pattern supports two content loading strategies:

- [Dynamic content](#dynamic-content) - Articles are loaded asynchronously using a template
- [Static content](#static-content) - Articles are passed directly to the pattern

The pattern offers two layout variants based on the number of articles:

- [4-block layout](#4-block-layout) (default)
- [3-block layout](#3-block-layout)

The blog pattern is composed of the following elements:

| Element              | Description                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------- |
| Title (**required**) | Title text (using `h4` with muted heading style)                                                           |
| Articles             | 3 or 4 blog article blocks, each containing a 16:9 cover image, title, description, and citation metadata. |

## Dynamic content

For scenarios where articles need to be loaded asynchronously (e.g., from a blog API), the pattern provides a template mode.
This mode creates a template structure that can be populated by external modules like [@canonical/latest-news](https://github.com/canonical/latest-news).
See [the next section](#using-with-latest-news-module) for setup instructions.

To use static content instead, see [static content](#static-content).

Using dynamic content mode introduces some slight variations in pattern usage.

- All content normally passed in via `articles` is assumed to be loaded from an asynchronous data source. The pattern creates `.article-image`, `.article-title`, `.article-link`, `.article-excerpt`, `.article-author`, and `.article-time` objects inside a template element, which should then be populated by JavaScript.
- Layout must be explicitly specified via `template_config.layout` ("3-blocks" or "4-blocks")

By default, the pattern assumes a 4-block layout, just like in static content mode.

<div class="embedded-example"><a href="/docs/examples/patterns/blog/dynamic-responsive" class="js-example" data-lang="jinja" data-height="625">
View example of the blog pattern with dynamic content loading
</a></div>

To show a 3-block layout, the `template_config.layout` parameter must be set to "3-blocks".

<div class="embedded-example"><a href="/docs/examples/patterns/blog/dynamic-3-blocks-responsive" class="js-example" data-lang="jinja" data-height="625">
View example of the blog pattern with dynamic content loading
</a></div>

### Using with latest-news module

To use the blog pattern with the [latest-news module](https://github.com/canonical/latest-news), follow the following steps.

Install `@canonical/latest-news` and configure it, following its [usage instructions](https://github.com/canonical/latest-news/blob/4c7bbf8b3c48456fd66a4d895166c4e4f1c02b84/README.md#usage).
**You must use version 2.1.0 or later**, as earlier versions do not support the `imageClasses` option needed for proper article image styling.

Enable template mode in the blog pattern by passing `template_config`.
This generates the template structure and prepares it for dynamic content.

```jinja
{% raw -%}
{{ vf_blog(
  title={"text": "Latest from our blog"},
  template_config={
    "enabled": True,
    "layout": "3-blocks",  # Must specify layout "3-blocks" or "4-blocks" in template mode.
    "template_container_id": "articles",
    "template_id": "template"
  }
) }}
{%- endraw -%}
```

Populate the template with the latest news articles by calling `canonicalLatestNews.fetchLatestNews()`.

Be sure to match `articlesContainerSelector` with `template_container_id`, `articleTemplateSelector` with `template_id`, and set `limit` to `"3"` or `"4"`.

```javascript
{% raw -%}
canonicalLatestNews.fetchLatestNews({
  // Make sure you add `p-image-container__image` to ensure the article image receives the correct styling.
  imageClasses: ["p-image-container__image"],
  // Use `3` with `template_config.layout="3-blocks"` or `4` with `template_config.layout="4-blocks"`
  limit: "3",
  articlesContainerSelector: "#articles",
  articleTemplateSelector: "#template",
  excerptLength: 180
});
{%- endraw -%}
```

After following the above steps, the blog pattern will render with articles fetched and populated by the latest-news module.

## Static content

The pattern can also render static articles passed into the `articles` parameter.
The layout (3-block or 4-block) is automatically determined based on the number of articles provided.

### 4-block layout

The default layout displays four articles in a grid. On large screens, the title spans the full width while articles are arranged in a 4-column grid.

<div class="embedded-example"><a href="/docs/examples/patterns/blog/static-responsive" class="js-example" data-lang="jinja">
View example of the blog pattern with 4 blocks
</a></div>

### 3-block layout

When exactly three articles are provided, the pattern automatically adjusts to a 3-column grid layout.

<div class="embedded-example"><a href="/docs/examples/patterns/blog/static-3-blocks-responsive" class="js-example" data-lang="jinja">
View example of the blog pattern with 3 blocks
</a></div>

### Custom Fallback Image

Each article can specify its own cover image. If no image is provided, a [fallback image](https://assets.ubuntu.com/v1/94c82a15-blog_fallback_image.png) is used.

<div class="embedded-example"><a href="/docs/examples/patterns/blog/custom-fallback-image" class="js-example" data-lang="jinja">
View example of the blog pattern with custom image
</a></div>

## Jinja Macro

The `vf_blog` Jinja macro can be used to generate a blog pattern. The API for the macro is shown below.

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
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          <code>{}</code>
        </td>
        <td>
          Title configuration with <code>text</code> and optional <code>link_attrs</code> (link attributes)
        </td>
      </tr>
      <tr>
        <td>
          <code>articles</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>Array&lt;object&gt;</code>
        </td>
        <td>
          <code>[]</code>
        </td>
        <td>
          List of article configurations (for static content)
        </td>
      </tr>
      <tr>
        <td>
          <code>template_config</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>object</code>
        </td>
        <td>
          <code>{}</code>
        </td>
        <td>
          Dynamic content configuration:<br>
          - <code>enabled</code>: Enable template mode<br>
          - <code>template_container_id</code>: Container ID<br>
          - <code>template_id</code>: Template ID<br>
          - <code>layout</code>: "3-blocks" or "4-blocks" (required in template mode)
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
          <code>"default"</code>,<br>
          <code>"deep"</code>,<br>
          <code>"shallow"</code>
        </td>
        <td>
          <code>"default"</code>
        </td>
        <td>
          Section padding variant
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
          <code>"default"</code>,<br>
          <code>"muted"</code>
        </td>
        <td>
          <code>"default"</code>
        </td>
        <td>
          Top rule (horizontal line) style
        </td>
      </tr>
      <tr>
        <td>
          <code>fallback_image_url</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>"https://assets.ubuntu.com/v1/94c82a15-blog_fallback_image.png"</code>
        </td>
        <td>
          URL to use for article images when none is provided
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Article Configuration

Each article in the `articles` array accepts the following configuration:

<div style="overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="width: 220px;">Name</th>
        <th style="width: 160px;">Required?</th>
        <th style="width: 160px;">Type</th>
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
          <code>object</code>
        </td>
        <td>
          Title configuration for the article
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
          The title text
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
          <code>object</code>
        </td>
        <td>
          Link attributes object, see <a href="/docs/building-vanilla#attribute-forwarding">attribute forwarding</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>title.attrs</code>
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
          <code>title.heading_level</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>integer</code>
        </td>
        <td>
          Heading level applied to title. One of <code>3</code> or <code>4</code>. Default is <code>3</code><br />
          See <a href="/docs/base/typography#heading-classes">heading classes</a>
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
          <code>object</code>
        </td>
        <td>
          Image configuration for the article
        </td>
      </tr>
      <tr>
        <td>
          <code>image.attrs</code>
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
          <code>description</code>
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
          <code>description.text</code>
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
          <code>description.attrs</code>
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
          <code>description.class</code>
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
          <code>citation</code>
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
          <code>citation.authors</code>
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
          <code>citation.authors[].text</code>
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
          <code>citation.authors[].link_attrs</code>
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
          <code>citation.date</code>
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
          <code>citation.date.text</code>
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
          <code>citation.date.attrs</code>
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

To import the Blog Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_blog.jinja" import vf_blog %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
