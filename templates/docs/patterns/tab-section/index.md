---
wrapper_template: '_layouts/docs.html'
context:
  title: Tab section | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

A tab section is used to organize related content into separate tabs within a section. It combines a title, optional
description, and optional call-to-action with a tabbed interface that can contain various types of [content blocks](#content-blocks).

The tab section pattern is composed of the following elements:

| Element              | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| Title (**required**) | Main heading text (h2)                                                                       |
| Description          | Optional description text                                                                    |
| Call-to-Action       | Optional CTA buttons/links                                                                   |
| Tabs (**required**)  | [Tabs](/docs/patterns/tabs#content) that hold a variety of [content blocks](#content-blocks) |

## Layout Options

The tab section pattern supports responsive grid layouts that adapt to different screen sizes.

**Note:** the blocks supported vary by layout. See [layout-specific content blocks](#layout-specific-content-blocks) for details.

### Full-width

The full-width layout spans the entire content area with the tabs taking up all available space.

Allowed content block types:

- Quote
- Linked logo
- Logo block
- Blog

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width" class="js-example" data-lang="jinja">
View example of the tab section pattern with full-width layout
</a></div>

### 50-50 Layout

The 50-50 layout creates a two-column grid that splits evenly on large screens.
The left column contains the title (and optional description/CTA), while the right column (50% width) contains the tabs.

Allowed content block types:

- Linked logo
- Logo block
- Divided section
- Blog
- Basic section

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/50-50" class="js-example" data-lang="jinja">
View example of the tab section pattern with 50-50 layout
</a></div>

### 25-75 Layout

The 25-75 layout creates an asymmetrical two-column layout where the left column (25%) contains the title
(and optional description/CTA), and the right column (75%) contains the tabs.

Allowed content block types:

- Linked logo
- Logo block
- Blog

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/25-75" class="js-example" data-lang="jinja">
View example of the tab section pattern with 25-75 layout
</a></div>

## Top Rule Variants

By default, the tab section has a default horizontal rule at the top.
You can customize this or disable it entirely using the `top_rule_variant` parameter.

Supported variants:

- **`"default"`** - Standard horizontal rule
- **`"muted"`** - Lighter/muted horizontal rule
- **`"none"`** - No rule displayed

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width" class="js-example" data-lang="jinja">
View example of the tab section pattern with different top rule variants
</a></div>

## Padding Variants

Tab sections support customizable padding options using the [section pattern](/docs/patterns/section).
By default, the pattern is wrapped in a regular section with default padding.

For different spacing needs, you may instead use:

- **`"deep"`** - p-section--deep for maximum spacing
- **`"shallow"`** - p-section--shallow for reduced spacing
- **`"default"`** - p-section for standard spacing (default)

Please refer to the [section documentation](/docs/patterns/section) for more guidance on padding selection.

## Title Options

### Basic Title

The title is the main heading of the section, rendered as an h2 by default.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width" class="js-example" data-lang="jinja">
View example of the tab section pattern with basic title
</a></div>

### Linked title

The title can be made into a link by providing link attributes.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width-linked-title" class="js-example" data-lang="jinja">
View example of the tab section pattern with linked title
</a></div>

```json
{
  "text": "Your title here",
  "link_attrs": {
    "href": "#"
  }
}
```

- **`text`**: The title text to display
- **`link_attrs`**: HTML attributes for the anchor element (href, class, etc.)
- **`heading_level`**: Optional. Heading level (2, 3, or 4). Default: 2

### Custom heading level

You can customize the heading level of the title.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width-custom-heading-level" class="js-example" data-lang="jinja">
View example of the tab section pattern with custom heading level
</a></div>

```json
{
  "text": "Your title here",
  "heading_level": 3
}
```

## Description

Add a description to provide context or additional information.

```json
{
  "content": "Your description text here",
  "type": "text"
}
```

- **`content`**: The description text or HTML content
- **`type`**: Optional. Either `"text"` (default) or `"html"`. Text content is wrapped in `<p>` tags, HTML content is
  rendered as-is.

## Call-to-action

Add CTA buttons and/or links to encourage user action.

```json
{
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
```

- **`primary`**: Optional primary button configuration
- **`secondaries`**: Optional array of secondary button configurations (typically 0-2)
- **`link`**: Optional text link configuration

Each CTA configuration accepts:

- **`content_html`**: The inner HTML of the CTA item
- **`attrs`**: HTML attributes for the button/link. If `href` is present, the element will be an `<a>` tag, otherwise a
  `<button>` tag.

## Content blocks

Tab sections use a flexible block model where each tab contains a single content block.
The type of block determines what configuration is required.

**Note:** Different layouts support different content block types.
When you provide a tab with an unsupported block type for the selected layout, it will be silently skipped.
Always ensure your content blocks match your chosen layout:

| Block Type      | Full-width | 50-50 | 25-75 |
| --------------- | ---------- | ----- | ----- |
| Quote           | ✓          | ✗     | ✗     |
| Linked Logo     | ✓          | ✓     | ✓     |
| Logo Block      | ✓          | ✓     | ✓     |
| Divided Section | ✗          | ✓     | ✗     |
| Blog            | ✓          | ✓     | ✓     |
| Basic Section   | ✗          | ✓     | ✗     |

### Quote block

Quote blocks display testimonials or highlighted quotes with optional attribution and images.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width-quote-single" class="js-example" data-lang="jinja">
View example of the tab section pattern with a quote tab
</a></div>

```json
{
  "type": "quote",
  "name": "quote-tab",
  "tab_html": "Quote",
  "item": {
    "signpost": {
      "image": {
        "html": "<img src=\"image-url\" alt=\"Logo\">"
      }
    },
    "citation": {
      "name": "Person name",
      "organisation": "Organization",
      "title": "Job title"
    },
    "body": {
      "size": "large",
      "text": "The quote text here"
    },
    "cta": {
      "html": "<a href=\"#\">Learn more &rsaquo;</a>"
    },
    "image": {
      "html": "<img src=\"image-url\" alt=\"\">"
    },
    "has_divider": false
  }
}
```

- **`signpost`** (Object, Optional) - Signpost configuration with image
- **`citation`** (Object, Optional) - Attribution details (name, organisation, title)
- **`body`** (Object, Optional) - Quote body with:
  - **`size`**: "small", "medium", or "large"
  - **`text`**: The quote text
- **`cta`** (Object, Optional) - Call-to-action HTML
- **`image`** (Object, Optional) - Additional image HTML
- **`has_divider`** (Boolean, Optional) - Whether to show a divider. Default: false

### Linked Logo Block

The linked logo block displays a set of clickable logos.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width-linked-logo-single" class="js-example" data-lang="jinja">
View example of the tab section pattern with a linked logo tab
</a></div>

```json
{
  "type": "linked-logo",
  "name": "partners",
  "tab_html": "Partners",
  "item": {
    "links": [
      {
        "href": "link-url",
        "text": "Link text",
        "label": "Aria label",
        "image_attrs": {
          "src": "logo-url",
          "alt": "alt-text",
          "width": "200",
          "height": "100"
        }
      }
    ]
  }
}
```

- **`links`** (Array, Required) - Array of link objects. Each link has:
  - **`href`**: URL the logo links to
  - **`text`**: Text for the link
  - **`label`**: Aria label for accessibility
  - **`image_attrs`**: Image attributes (src, alt, width, height, etc.)

### Logo Block

The logo block displays a cloud of logos.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width-logos-single" class="js-example" data-lang="jinja">
View example of the tab section pattern with a logos tab
</a></div>

```json
{
  "type": "logo-block",
  "name": "logos",
  "tab_html": "Logos",
  "item": {
    "is_fixed_width": true,
    "logos": [
      {
        "attrs": {
          "src": "logo-url",
          "alt": "alt-text",
          "class": "optional-css-class"
        },
        "has_line_break_after": false
      }
    ]
  }
}
```

- **`is_fixed_width`** (Boolean, Optional) - Whether to wrap logos in a fixed-width container. Default: true
- **`logos`** (Array, Required) - Array of logo objects with:
  - **`attrs`**: Image attributes (src, alt, class, etc.)
  - **`has_line_break_after`**: Whether to force a line break after this logo

### Divided Section Block

The divided section block displays [divided section content blocks](/docs/patterns/divided-section#content-blocks).

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/50-50-divided-single" class="js-example" data-lang="jinja">
View example of the tab section pattern with a quote tab
</a></div>

```json
{
  "type": "divided-section",
  "name": "divided",
  "tab_html": "Divided",
  "item": {
    "blocks": [
      {
        "type": "description",
        "item": {
          "type": "text",
          "content": "Content here"
        }
      }
    ]
  }
}
```

- **`blocks`** (Array, Required) - Array of content blocks following the [divided section block schema](/docs/patterns/divided-section#blocks).

### Blog Block

The blog block displays a grid of blog articles.

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/full-width-blog-single" class="js-example" data-lang="jinja">
View example of the tab section pattern with a blog tab
</a></div>

```json
{
  "type": "blog",
  "name": "articles",
  "tab_html": "Blog",
  "item": {
    "articles": [
      {
        "title": {
          "text": "How to enable Real-time Ubuntu on your machine",
          "link_attrs": {
            "href": "#"
          }
        },
        "description": {
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        "metadata": {
          "authors": [
            {
              "text": "John Doe",
              "link_attrs": {
                "href": "#"
              }
            }
          ],
          "date": {
            "text": "15 March 2025"
          }
        }
      },
      {
        "title": {
          "text": "How to enable Real-time Ubuntu on your machine",
          "link_attrs": {
            "href": "#"
          }
        },
        "description": {
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        "metadata": {
          "authors": [
            {
              "text": "John Doe",
              "link_attrs": {
                "href": "#"
              }
            }
          ],
          "date": {
            "text": "15 March 2025"
          }
        }
      }
    ]
  }
}
```

- **`articles`** (Array, Required) - Array of article objects
- **`template_config`** (Object, Optional) - Additional template configuration for dynamically pulling blog articles. See [dynamic blog](/docs/patterns/blog#dynamic) for details.

### Basic Section Block

The basic section block allows you to embed [basic section content blocks](/docs/patterns/basic-section#content-blocks).

<div class="embedded-example"><a href="/docs/examples/patterns/tab-section/50-50-basic-section-single" class="js-example" data-lang="jinja">
View example of the tab section pattern with a basic section tab
</a></div>

```json
{
  "type": "basic-section",
  "name": "section",
  "tab_html": "Section",
  "item": {
    "items": [
      {
        "type": "description",
        "item": {
          "type": "text",
          "content": "Content here"
        }
      }
    ]
  }
}
```

- **`items`** (Array, Required) - Array of basic section content blocks. See [basic section content blocks](/docs/patterns/basic-section#content-blocks) for details.

## Jinja Macro

The `vf_tab_section` Jinja macro can be used to generate a tab section pattern. The API for the macro is shown below.

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
          Title configuration object with <code>text</code> and optional <code>link_attrs</code> and <code>heading_level</code>
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
          The main title text (rendered as h2 by default)
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
          <code>number</code>
        </td>
        <td>
          <code>2</code>
        </td>
        <td>
          Heading level for the title (2, 3, or 4)
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
          <code>Object</code>
        </td>
        <td>
          <code>{}</code>
        </td>
        <td>
          Description configuration object with <code>content</code> and optional <code>type</code>. Only displayed in 50-50 and 25-75 layouts.
        </td>
      </tr>
      <tr>
        <td>
          <code>description.content</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>""</code>
        </td>
        <td>
          Description text or HTML content
        </td>
      </tr>
      <tr>
        <td>
          <code>description.type</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>"text" | "html"</code>
        </td>
        <td>
          <code>"text"</code>
        </td>
        <td>
          Content type. "text" wraps content in &lt;p&gt;, "html" renders as-is.
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
          <code>Object</code>
        </td>
        <td>
          <code>{}</code>
        </td>
        <td>
          Call-to-action configuration with <code>primary</code>, <code>secondaries</code>, and/or <code>link</code>. Only displayed in 50-50 and 25-75 layouts.
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
          <code>'full-width'</code>,<br>
          <code>'50-50'</code>,<br>
          <code>'25-75'</code>
        </td>
        <td>
          <code>'50-50'</code>
        </td>
        <td>
          Layout variant for the section. Different layouts allow different content block types.
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
          <code>'default'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Padding variant for the entire section. See <a href="/docs/patterns/section">section pattern</a> for details.
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
          <code>'none'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Variant of <a href="/docs/patterns/rule">horizontal rule</a> to display at the top of the section.
        </td>
      </tr>
      <tr>
        <td>
          <code>tabs</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;Object&gt;</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Array of tab configurations. See <a href="#content-blocks">Content Blocks</a> for structure details. Unsupported blocks for the selected layout will be silently skipped.
        </td>
      </tr>
      <tr>
        <td>
          <code>tabs[].name</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          Auto-generated<br>
          (e.g., "tab-1")
        </td>
        <td>
          Unique identifier for the tab. Auto-generated if not provided.
        </td>
      </tr>
      <tr>
        <td>
          <code>tabs[].type</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          One of:<br>
          <code>'quote'</code>,<br>
          <code>'linked-logo'</code>,<br>
          <code>'logo-block'</code>,<br>
          <code>'divided-section'</code>,<br>
          <code>'blog'</code>,<br>
          <code>'basic-section'</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          The content block type for this tab. Availability depends on the <code>layout</code> parameter.
        </td>
      </tr>
      <tr>
        <td>
          <code>tabs[].item</code>
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
          Configuration specific to the block type. See <a href="#content-blocks">Content Blocks</a> for details on each type.
        </td>
      </tr>
      <tr>
        <td>
          <code>tabs[].tab_html</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          Auto-generated<br>
          (e.g., "Tab 1")
        </td>
        <td>
          HTML content for the tab label. Falls back to 'label', 'title', or auto-generated text if not provided.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Unique section titles

Each tab and tab panel are linked together by their `id` and `aria-controls` attributes.
This relationship is used in JavaScript to show/hide the correct tab panel when a tab button is clicked.

It is important that these identifiers are unique across the page.
If there are any identifier collisions, tabs may control the wrong panel.

To avoid conflicts, tab names are generated using the tab section title and the tab's index in the tab list.
**Take care to avoid duplicate section titles** when using multiple tab sections on the same page, otherwise duplicates
will occur.

## Import

### Jinja Macro

To import the Tab Section Jinja macro, copy the following import statement into your Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_tab-section.jinja" import vf_tab_section %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
