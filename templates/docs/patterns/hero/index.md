---
wrapper_template: '_layouts/docs.html'
context:
  title: Hero | Patterns
---

A hero is a prominent banner section typically used to quickly capture the user's attention after they land on the page.
Depending on the size and composition of your content, you can choose from a variety of hero layouts:

- [50/50](#5050)
- [50/50 with full-width image](#5050-with-full-width-image)
- [25/75 Signpost](#2575-signpost)
- [75/25](#7525)
- [Fallback](#fallback)

The hero pattern is composed of the following elements:

| Element              | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| Title (**required**) | `h1` title text                                                          |
| Subtitle             | `h2` subtitle text                                                       |
| Description          | `p` description text                                                     |
| Call to action block | [Call to action block](/docs/patterns/cta-block) beneath the description |
| Image                | Main hero visual                                                         |

## Jinja Macro

### Parameters

<table class="p-table--mobile-card">
  <thead>
    <tr>
      <th style="width: 190px; max-width: 30svw;">Name</th>
      <th>Is Required</th>
      <th style="width: 200px; max-width: 20svw;">Type</th>
      <th>Default</th>
      <th style="width: 250px; max-width: 40svw;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-heading="Name"><code>layout</code></td>
      <td data-heading="Is Required">Yes</td>
      <td style="white-space: wrap;" data-heading="Type">
        One of:
        <ul class="p-list">
          <li class="p-list__item has-bullet"><code>'50/50'</code></li>
          <li class="p-list__item has-bullet"><code>'50/50-full-width-image'</code></li>
          <li class="p-list__item has-bullet"><code>'75/25'</code></li>
          <li class="p-list__item has-bullet"><code>'25/75'</code></li>
          <li class="p-list__item has-bullet"><code>'fallback'</code></li>
        </ul>
      </td>
      <td data-heading="Default"><code>'fallback'</code></td>
      <td data-heading="Description">Choice of hero layout.</td>
    </tr>
    <tr>
      <td data-heading="Name"><code>title_text</code></td>
      <td data-heading="Is Required">Yes</td>
      <td data-heading="Type"><code>string</code></td>
      <td data-heading="Default"><code>N/A</code></td>
      <td style="white-space: wrap;" data-heading="Description"><code>h1</code> title text</td>
    </tr>
    <tr>
      <td data-heading="Name"><code>subtitle_text</code></td>
      <td data-heading="Is Required">No</td>
      <td data-heading="Type"><code>string</code></td>
      <td data-heading="Default"><code>N/A</code></td>
      <td style="white-space: wrap;" data-heading="Description"><code>h2</code> subtitle text</td>
    </tr>
    <tr>
      <td data-heading="Name"><code>is_split_on_medium</code></td>
      <td data-heading="Is Required">Yes</td>
      <td data-heading="Type"><code>boolean</code></td>
      <td data-heading="Default"><code>false</code></td>
      <td style="white-space: wrap;" data-heading="Description">Whether the layout is split on tablet-sized devices.</td>
    </tr>
  </tbody>
</table>

### Slots

<table class="p-table--mobile-card">
  <thead>
    <tr>
      <th>Name</th>
      <th>Is Required</th>
      <th style="width: 400px; max-width: 50svw;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-heading="Name"><code>description</code></td>
      <td style="white-space: wrap;" data-heading="Is Required">No</td>
      <td style="white-space: wrap;" data-heading="Description">Paragraph-style content below the title and subtitle.</td>
    </tr>
    <tr>
      <td data-heading="Name"><code>cta</code></td>
      <td style="white-space: wrap;" data-heading="Is Required">Yes</td>
      <td style="white-space: wrap;" data-heading="Description">Contents of a <a href="/docs/patterns/cta-block">Call to action block</a> beneath the title and description.</td>
    </tr>
    <tr>
      <td data-heading="Name"><code>image</code></td>
      <td style="white-space: wrap;" data-heading="Is Required">Yes, when <code>layout='50/50-full-width-image'</code></td>
      <td style="white-space: wrap;" data-heading="Description">Image content.</td>
    </tr>
    <tr>
      <td data-heading="Name"><code>signpost_image</code></td>
      <td style="white-space: wrap;" data-heading="Is Required">Yes, when <code>layout='25/75'</code></td>
      <td style="white-space: wrap;" data-heading="Description">Small image (such as a logo) to place in the left column of the 25/75 Hero.</td>
    </tr>
  </tbody>
</table>

## 50/50

### 50/50 on large

You can use <code>.row--50-50-on-large</code> to create a 50/50 hero that is split on large screens and stacked on small
and medium screens.
This is useful when your hero contents, especially your image, are not suitably balanced when viewed on medium screens.
This makes your hero somewhat safer to use, as it helps to avoid awkward content sizing on medium screens, making all
content stack vertically.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50" class="js-example">
View example of the hero pattern in 50/50 split
</a></div>

### 50/50 on large and medium

You can use <code>.row--50-50</code> to create a 50/50 hero that is split on large and medium screens.
This is useful when your available vertical space is limited, and your hero contents are suitably balanced to be viewed
side-by-side on medium screens.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50-split-on-medium" class="js-example">
View example of the hero pattern in 50/50 that is split on medium and small
</a></div>

### 50/50 with full width image

The above hero layouts place the hero image in the right column by default. However, this is not suitable for very wide
images.
If you have a very wide image or otherwise want your image to take up the full hero width, place the title by itself in
the first column and place the image in a <code>.p-image-container .is-cover</code> at the same level as the grid
columns.
This will make the image take up the full width of the hero.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50-full-width-image" class="js-example">
View example of the hero pattern in 50/50 split with a full-width image
</a></div>

## 25/75 "signpost"

If you have a small image that you want to associate with the hero title, you can use the "signpost" layout.
This places the image in a small column beside the primary hero content.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-signpost" class="js-example">
View example of the hero pattern in 50/50 split
</a></div>

This layout also supports a full-width image. Place the image in a <code>.p-image-container .is-cover</code>at the same
level as the hero grid columns to make it take full width beneath the rest of the hero. This is identical to the
full-width image layout for the [50/50 layout](#50-50-with-full-width-image).

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-signpost-full-width-image" class="js-example">
View example of the hero pattern in 50/50 split
</a></div>

## 75/25

If you have a large amount of text content to place in the body of the hero and/or a portrait-oriented image, you can
use the 75/25 layout. This places the image in a small column beside the hero text.

The <code>.row--75-25</code> class is used to maintain the 75/25 split on medium screens.
If you find that the image is too tall on small screens, you can use <code>.u-hide--small</code> to hide the image on
small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-75-25" class="js-example">
View example of the hero pattern in 50/50 split
</a></div>

## Fallback

If you have a very large amount of text content that is difficult to balance with the hero image, you can use the
fallback layout.
This places the title and subtitle in their own row above the rest of the hero content.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-fallback" class="js-example">
View example of the hero pattern in fallback configuration
</a></div>

## Import

### Jinja Macro

To import the Hero Jinja macro, copy the following import statement into your Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_hero.jinja" import vf_hero %}
{% endraw %}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros) for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
