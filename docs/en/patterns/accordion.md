---
title: Accordion
table_of_contents: true
---

## Accordion

Sidebar accordion, used in listing pages or as navigation. Can hold multiple navigation items or to be used as a filter of content.

Each tab styling can be changed to open or collapse using `aria-expanded`, set `true` for open and `false` to close. Using JS this can be changed and to point to what each tab controls via `aria-controls`.

`.p-accordion__panel` visibility is effected by `aria-hidden` and again can be manipulated with JS.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>Use to hold filtering items (header and content if available), don't use to display page content.
  </p>
</div>

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/patterns/accordion/"
    class="js-example">
View example of the accordion pattern
</a>

### Design

For more information [view the accordion design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Accordion), which includes the specification in markdown format and a PNG image.
