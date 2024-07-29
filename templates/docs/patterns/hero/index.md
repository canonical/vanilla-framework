---
wrapper_template: '_layouts/docs.html'
context:
  title: Hero | Patterns
---

A hero is a prominent banner section typically used to quickly capture the user's attention after they land on the page.
Depending on the size and composition of your content, you can choose from a variety of hero layouts.

The hero is constructed using the following inputs:

| Input                                                      | Description                                                                                                                                                                            |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>layout</code> (**required**)                         | One of: <ul><li><code>50/50</code></li><li><code>50/50-full-width-image</code></li><li><code>25/75</code></li><li><code>75/25</code></li><li><code>fallback</code> (default)</li></ul> |
| <code>title</code>                                         | Hero title text, displayed as H1                                                                                                                                                       |
| <code>subtitle</code>                                      | Hero subtitle text, displayed as H2                                                                                                                                                    |
| <code>is_split_on_medium</code>                            | Whether the layout is split on medium in 50/50, 25/75, and 75/25 layouts                                                                                                               |
| <code>description</code>                                   | Free paragraph text                                                                                                                                                                    |
| <code>cta</code>                                           | Call to action block                                                                                                                                                                   |
| <code>image</code>                                         | Primary hero image                                                                                                                                                                     |
| <code>signpost_image</code> (**required on 25/75 layout**) | Signpost image                                                                                                                                                                         |

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

### 50/50 with full-width image

The above hero layouts place the hero image in the right column by default. However, this is not suitable for very wide
images.
If you have a very wide image or otherwise want your image to take up the full hero width, place the title by itself in
the first column and place the image in a <code>.p-image-container .is-cover</code> at the same level as the grid columns.
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

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
