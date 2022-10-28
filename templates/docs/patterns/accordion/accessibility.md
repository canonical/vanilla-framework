---
wrapper_template: '_layouts/docs.html'
context:
  title: Accordion | Components
---

<div class="p-strip is-shallow u-no-padding--top">
<div class="row">
<div class="col-6 col-medium-6">
  <h2>How it works</h2>
</div>

<div class="col-6 col-medium-6">
<p>Accordions are a vertically stacked list of headings. They reduce the need for users to scroll through a lot of content, as the headings act as interactive elements which show or hide the related content.</p>

<p><code>Tab</code> and <code>Shift-Tab</code> are used to navigate forward and backward through each accordion header and all focusable elements in the accordion should be included in the tab order. <code>Enter</code> or <code>Space</code> expand and collapse each accordion panel.</p>

<p>The two main components are:</p>

<ul>
<li>Accordion heading which is the interactive title or thumbnail for each section. The headings can hide or show content.</li>
<li>Accordion panel is the content associated with an accordion heading.</li>
</ul>

</div>
</div>

</div>

<hr/>

<div class="p-strip is-shallow">
<div class="row">
<div class="col-6 col-medium-6">
  <h2>Considerations</h2>
</div>

<div class="col-6 col-medium-6">
<p>This component strives to follow <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 (level AA) guidelines</a>, and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:</p>

<ul>
<li>Accordion titles should be descriptive; it should be obvious what information the content will contain.</li>
<li>Ensure each tab button element is wrapped by a <code>div</code> element with a <code>p-accordion__heading</code> class and the <code>role=heading</code> attribute. This heading should have an appropriate <code>aria-level</code> label, depending on its position in the hierarchy of the page.</li>
<li>If the accordion panel associated with the heading is visible, then the button within the heading div must have <code>aria-expanded=”true”</code></li>
<li>The heading button should have an <code>aria-controls</code> attribute set to the ID of the related accordion panel.</li>
<li>Add the <code>aria-labelledby</code> attribute to the accordion panel, set to the ID of the button heading.</li>
<li>Avoid keyboard traps when adding components to the accordion panel. For example, the user expands an accordion, but is unable to tab to the next focusable element.</li>
</ul>

</div>
</div>

</div>




<hr/>

<div class="p-strip is-shallow">
<div class="row">
<div class="col-6 col-medium-6">
  <h2>Resources</h2>
</div>

<div class="col-6 col-medium-6">

<ul>
<li><a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">W3C WAI-ARIA Accordion (Sections With Show/Hide Functionality)</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html">WAI-ARIA Examples: Accordion</a></li>
<li><a href="https://carbondesignsystem.com/components/accordion/accessibility">Carbon design systems - Accordion accessibility</a></li>
<li>Guidelines:<ul>
<li><a href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1: Info and Relationships</a></li>
<li><a href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1: Keyboard Accessible</a></li>
<li><a href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2: No Keyboard Trap</a></li>
</ul>
</li>
</ul>
</div>
</div>

</div>



