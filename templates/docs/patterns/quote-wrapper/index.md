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
| Quote (**required**) | Quote text                                                                                  |
| Header               | Header text & CTA. Useful for adding a title/link that describes all of a series of quotes. |
| Signpost image       | Small image to display at the left/top of the quote, such as a logo or a portrait.          |
| Call to action       | A [CTA block](/docs/patterns/cta-block)                                                     |
| Image                | Image to associate with the quote                                                           |
| Source               | Name, title, and organisation of the quote's source                                         |

All examples shown here use `<h2>`-sized quote text. However, this should be changed according to text length.
For short quotes, use `.p-heading--2`.
For medium-sized quotes, use `.p-heading--4`.
For long quotes, use `.p-heading--6`.

## All elements

The following example includes all required and optional elements.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large" class="js-example">
View example of the quote wrapper pattern with large quote text
</a></div>

## Without signpost image

If the quote is not associated with a specific brand or entity, or no logo is available, the logo can be omitted.
Set the second grid column in the quote row to start in the fourth column with <code>.col-start-large-4</code> to make
up for
the space that would normally be taken up by the signpost image.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large-no-signpost" class="js-example">
View example of the quote wrapper pattern with large quote text, without a signpost image.
</a></div>

## Without citation

When no citation is available or needed, the citation row can be omitted, and the quote body does not need to be wrapped
in a nested grid.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large-no-citation" class="js-example">
View example of the quote wrapper pattern with large quote text, without a citation.
</a></div>

## Minimal

The minimal quote wrapper pattern includes only the quote text.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/large-minimal" class="js-example">
View example of the quote wrapper pattern with all optional content removed.
</a></div>

## Import

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
