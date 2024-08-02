---
wrapper_template: '_layouts/docs.html'
context:
  title: Tiered list | Patterns
---

The tiered list pattern is used to easily implement a list of paired titles and
descriptions underneath a top-level title and description. An optional [CTA
block](/docs/patterns/cta-block) is placed at the bottom of the content as well.
Depending on the size and composition of your content, you can choose from a
variety of tiered list layouts:

- [50/50 on desktop with description](#5050-on-desktop-with-description)
- [50/50 on tablet without description](#5050-on-tablet-without-description)
- [50/50 on tablet with description](#5050-on-tablet-with-description)
- [50/50 with description](#5050-with-description)
- [Full-width without description](#full-width-without-description)
- [Full-width with description](#full-width-with-description)

The tiered list pattern is composed of the following elements:

| Element               | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| Title (**required**)  | <code>h2</code> title text                                        |
| Description           | <code>p</code> description text                                   |
| List item title       | Title text/content                                                |
| List item description | Description text/content                                          |
| Call to action block  | [Call to action block](/docs/patterns/cta-block) beneath the list |

## 50/50 on desktop with description

This variant contains a top-level description which is presented side-by-side
with its title on desktop screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-desktop-with-description/" class="js-example">
View example of the tiered list pattern
</a></div>

## 50/50 on tablet without description

This variant does not contain a top-level description and its child list is
presented with its titles side-by-side with its descriptions on tablet screen
sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-tablet-without-description/" class="js-example">
View example of the tiered list pattern
</a></div>

## 50/50 on tablet with description

This variant contains a top-level description and its child list is presented
with its titles side-by-side with its descriptions on tablet screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-tablet-with-description/" class="js-example">
View example of the tiered list pattern
</a></div>

## 50/50 with description

This variant contains a top-level description. Its title and description are
presented side-by-side on desktop screen sizes, and its child list is presented
side-by-side on tablet screen sizes.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/50-50-with-description/" class="js-example">
View example of the tiered list pattern
</a></div>

## Full-width without description

This variant does not contain a top-level description, and both its title and
child list are presented full-width on desktop and tablet screen sizes
respectively.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/full-width-without-description/" class="js-example">
View example of the tiered list pattern
</a></div>

## Full-width with description

This variant contains a top-level description, and its title, description, and
child list are presented full-width on desktop and tablet screen sizes
respectively.

<div class="embedded-example"><a href="/docs/examples/patterns/tiered-list/full-width-with-description/" class="js-example">
View example of the tiered list pattern
</a></div>

## Import

Since Patterns leverage many other parts of Vanilla in their composition and
content, we recommend [importing the entirety of Vanilla](/docs#install) for
full support.
