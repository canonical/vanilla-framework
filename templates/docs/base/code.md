---
wrapper_template: '_layouts/docs.html'
context:
  title: Code | Base elements
---

## Code

<hr>

Vanilla gives you multiple ways to display code using the standard HTML elements.

### Inline

When you refer to code inline with other text, use the <code>&lt;code></code> tag.

<div class="embedded-example"><a href="/docs/examples/base/code-inline/" class="js-example">
View example of inline code
</a></div>

### Block

To create a pre-formatted block, use either `<pre>` (where preserving white space is important, but the text is not necessarily code) or `<pre><code>` (to indicate the contents are a piece of code):

**Pre-formatted block:**

<div class="embedded-example"><a href="/docs/examples/base/pre/" class="js-example">
View example of the base pre block
</a></div>

**Pre-formatted code block:**

<div class="embedded-example"><a href="/docs/examples/base/code-block/" class="js-example">
View example of the base code block
</a></div>

### Code Snippets

A code snippet is composed of one or more related components, contained within a `.p-code-snippet` wrapper. Available components are:

<!-- more to come after this initial example: dropdowns, block--numbered, command prompt etc -->

- `.p-code-snippet__header`, which should briefly describe the content it precedes.
- `.p-code-snippet__block`, a class added to a `<pre>` element containing your pre-formatted content. If the content is code, use `<pre><code>`.

**Code snippet:**

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/code-snippet" class="js-example">
View example of the base code snippet
</a></div>

### Copyable

This component should be used when displaying a single line of code, accompanied by a copy icon, which allows users to copy the provided code to their clipboard.

<div class="p-strip is-shallow">
  <div class="row">
     <div class="col-4">
       <div class="p-notification--positive">
        <p class="p-notification__response"><span class="p-notification__status">Do:</span>Use for single line terminal commands, functions or instructions.</p>
       </div>
     </div>
    <div class="col-4">
      <div class="p-notification--negative">
        <p class="p-notification__response"><span class="p-notification__status">Don't:</span>Use for multiline code. If needed, code <a href="#block" class="p-notification__action">block</a> should be used.</p>
      </div>
    </div>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/code-copyable/" class="js-example">
View example of the code copyable pattern
</a></div>

### Functionality

Please copy the entire JS in the example, for copy to clipboard functionality.

### Numbered

The code numbered pattern can be used when displaying large blocks of code to enable users to quickly reference a specific line.

<div class="embedded-example"><a href="/docs/examples/patterns/code-numbered/" class="js-example">
View example of the code numbered pattern
</a></div>

### Import

To import just code copyable or numbered component into your project, copy either or both snippets below and include it in your main Sass file.

```scss
@import 'patterns_code-copyable';
```

```scss
@import 'patterns_code-numbered';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the code design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Code), which includes the specification in markdown format and a PNG image.
