---
wrapper_template: '_layouts/docs.html'
context:
  title: Hero | Components
---

A hero is a prominent banner section, typically used to quickly capture the user's attention after they land on the page.
Depending on the size and composition of your content, you can choose from a variety of hero layouts.

## 50/50

### 50/50 on large

You can use <code>.row--50-50-on-large</code> to create a 50/50 hero that is split on large screens, and stacked on small and medium screens.
This is useful when your hero contents, especially your image, are not suitably balanced when viewed on medium screens.
This makes your hero somewhat safer to use, as it helps to avoid awkward content sizing on medium screens, making all content stack vertically.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50" class="js-example">
View example of the hero pattern in 50/50 split
</a></div>

### 50/50 on large and medium

You can use <code>.row--50-50</code> to create a 50/50 hero that is split on large and medium screens.
This is useful when your available vertical space is limited, and your hero contents are suitably balanced to be viewed side-by-side on medium screens.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50-split-on-medium" class="js-example">
View example of the hero pattern in 50/50 that is split on medium and small
</a></div>

### 50/50 with full-width image

The above hero layouts place the hero image in the right column by default. However, this is not suitable for very wide images.
If you have a very wide image or otherwise want your image to take up the full hero width, place the title by itself in the first column,
and place the image by itself outside the grid columns with <code>.p-image-container .is-cover</code>.
This will make the image take up the full width of the hero.

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-50-50-full-width-image" class="js-example">
View example of the hero pattern in 50/50 split with a full-width image
</a></div>

## 25/75 "signpost"

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-signpost" class="js-example">
View example of the hero pattern in 50/50 split
</a></div>

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-signpost-full-width-image" class="js-example">
View example of the hero pattern in 50/50 split
</a></div>

## 75/25

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-75-25" class="js-example">
View example of the hero pattern in 50/50 split
</a></div>

## Fallback

<div class="embedded-example"><a href="/docs/examples/patterns/hero/hero-fallback" class="js-example">
View example of the hero pattern in fallback configuration
</a></div>

## Import

Since Patterns leverage many other parts of Vanilla in their composition and content, we recommend [importing the entirety of Vanilla](/docs#install) for full support.
