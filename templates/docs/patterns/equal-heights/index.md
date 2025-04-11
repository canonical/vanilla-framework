---
wrapper_template: '_layouts/docs.html'
context:
  title: Equal heights | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

Docs TBD pending design approval of the examples, and design, engineering, content approval of the spec

- 4 columns
  - [Default](/docs/examples/patterns/equal-heights/4-columns-responsive)
  - [No description](/docs/examples/patterns/equal-heights/4-columns-no-description-responsive)
  - [No CTA](/docs/examples/patterns/equal-heights/4-columns-no-cta-responsive)
- 3 columns
  - [Default](/docs/examples/patterns/equal-heights/3-columns-responsive)
  - [No description](/docs/examples/patterns/equal-heights/3-columns-no-description-responsive)
  - [No CTA](/docs/examples/patterns/equal-heights/3-columns-no-cta-responsive)
- Edge cases
  - [Minimal contents](/docs/examples/patterns/equal-heights/minimal-responsive) (title, at least 3 columns, and column title & image for each column)
  - [Mixed column contents](/docs/examples/patterns/equal-heights/mixed-column-items-responsive) - inconsistent presence of column elements
