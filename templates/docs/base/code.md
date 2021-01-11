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

The code snippet pattern should be used to group related code examples, making them easier to find and understand. It should consist of one or, at most, two code blocks with optional headers for their titles.

**Basic code snippet**

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/code-snippet" class="js-example">
View example of the code snippet
</a></div>

**Code snippet with icon**

A code snippet block can include an icon by using the `.p-code-snippet__block--code` class. By default, it will show the Linux prompt icon, but other icon options are available, using the `.is-windows-prompt` or `.is-url` classes.

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/code-snippet-icon" class="js-example">
View example of the code snippet
</a></div>

### Copyable

<span class="p-label--deprecated">Deprecated</span>

The code copyable element is now deprecated and will be removed in a future version of Vanilla.

It is being replaced by the new [code snippet pattern](/docs/base/code#code-snippets).

### Functionality

Please copy the entire JS in the example, for copy to clipboard functionality.

### Numbered

The code numbered pattern can be used when displaying large blocks of code to enable users to quickly reference a specific line.

<div class="embedded-example"><a href="/docs/examples/patterns/code-numbered/" class="js-example">
View example of the code numbered pattern
</a></div>

### Import

To import just numbered component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_code-numbered';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the code design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Code), which includes the specification in markdown format and a PNG image.
