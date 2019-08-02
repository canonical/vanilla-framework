---
layout: default
---

## Accordion <span class="p-label--updated" style="margin-left: 0.5rem;">Updated</span>

<hr>

The sidebar accordion, used in listing pages or as navigation, can hold multiple navigation items or to be used as a filter for content.

Each tab styling can be changed to open or collapse using `aria-expanded`, set `true` for open and `false` to close. Using JS this can be changed and to point to what each tab controls via `aria-controls`.

`.p-accordion__panel` visibility is affected by `aria-hidden` and again can be manipulated with JS.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>Clicking on the header toggles the display of accordion tabs. Accordion tabs should contain navigation or supplementary information, not main page content.
  </p>
</div>

<a href="/examples/patterns/accordion/"
    class="js-example">
View example of the accordion pattern
</a>

### Design

For more information [view the accordion design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Accordion), which includes the specification in markdown format and a PNG image.
