---
wrapper_template: '_layouts/docs.html'
context:
  title: Accordion | Components
---

## Accordion

<span class="p-label--updated">Updated</span>

<hr>

The sidebar accordion, used in listing pages or as navigation, can hold multiple navigation items or to be used as a filter for content.

Each tab styling can be changed to open or collapse using `aria-expanded`, set `true` for open and `false` to close. Using JS this can be changed and to point to what each tab controls via `aria-controls`.

`.p-accordion__panel` visibility is affected by `aria-hidden` and again can be manipulated with JS.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>Clicking on the header toggles the display of accordion tabs. Accordion tabs should contain navigation or supplementary information, not main page content.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/accordion/default/" class="js-example">
View example of the accordion pattern
</a></div>

### Embedded example test

{% include "docs/examples/patterns/accordion/_default.html" %}
<script>
  {% include "docs/examples/patterns/accordion/_script.js" %}
</script>

<div class="p-code-snippet">
  <div class="p-code-snippet__header">
    <h5 class="p-code-snippet__title">Accordion | Default</h5>

    <div class="p-code-snippet__dropdowns">
      <select class="p-code-snippet__dropdown" name="menu1-select" id="menu1-select">
        <option value="html-panel">HTML</option>
        <option value="js-panel">JS</option>
      </select>
    </div>
  </div>
  <pre id="html-panel" class="p-code-snippet__block language-html"><code>{{ include_file("docs/examples/patterns/accordion/_default.html")}}</code></pre>
  <pre id="js-panel" class="p-code-snippet__block u-hide language-js"><code>{{ include_file("docs/examples/patterns/accordion/_script.js")}}</code></pre>
</div>

<script>
  {% include 'docs/examples/patterns/code-snippet/_script.js' %}
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/keep-markup/prism-keep-markup.min.js"></script>

### Headings

<span class="p-label--new">New</span>

To use headings in the accordion buttons use `.p-accordion__tab--with-title` class on the button and `.p-accordion__title` on the heading element inside it.

Heading levels from `h2` up to `h6` are supported in the accordion pattern. Heading `h1` should not be used in the accordion, as it's reserved for the top-level title of the page. Also, make sure to use the same level of heading in all accordion buttons to ensure the same level in the document hierarchy.

<div class="embedded-example"><a href="/docs/examples/patterns/accordion/headings/" class="js-example">
View example of the accordion pattern with headings
</a></div>

### Functionality

Please ensure the `aria-control` attribute matches an ID of an element. If `aria-expanded` is true, then the accordion will be open by default. When clicking on the `accordion__tab`, you must toggle the `aria-expanded` attribute on the toggle and the `aria-hidden` attribute on the panel.

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_accordion';
@include vf-p-accordion;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the accordion design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Accordion), which includes the specification in markdown format and a PNG image.
