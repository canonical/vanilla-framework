---
layout: default
---

## Tooltips

<hr>

Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element on the screen.

- They can be used to provide information about concepts/terms/actions that are not self-explanatory or well known.
- An alternative use of tooltips is to provide information on a disabled actionable element, e.g. for disabled buttons, providing information about why they are disabled.

<div class="p-notification--caution">
  <p class="p-notification__response">
    <span class="p-notification__status">Avoid:</span>Using tooltips to provide instructions or guidance. They shouldn't be used to show rich information including images and formatted text and avoid placing over plain text or other places where they are not discoverable.
  </p>
</div>

<a href="/examples/patterns/tooltips/"
    class="js-example">
View example of the tooltips pattern
</a>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

<pre><code>@import 'patterns_tooltips';</code></pre>

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the tooltips design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Tooltips), which includes the specification in markdown format and a PNG image.

### Related

For an alternative way of displaying discoverable information [view our contextual menu component](/patterns/contextual-menu).
