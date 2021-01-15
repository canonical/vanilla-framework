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

### Code snippet

<span class="p-label--new">New</span>

The code snippet pattern should be used to group related code examples, making them easier to find and understand. It should consist of one or, at most, two code blocks with optional headers for their titles.

**Basic code snippet**

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/code-snippet" class="js-example">
View example of the code snippet
</a></div>

**Code snippet with icon**

A code snippet block can include an icon by using the `.p-code-snippet__block--icon` class. By default, it will show the Linux prompt icon, but other icon options are available, using the `.is-windows-prompt` or `.is-url` classes.

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/code-snippet-icon" class="js-example">
View example of the code snippet
</a></div>

**Code snippet with numbered lines**

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/code-snippet-numbered" class="js-example">
View example of the code snippet
</a></div>

### Copyable

<span class="p-label--deprecated">Deprecated</span>

The code copyable element is now deprecated and will be removed in a future version of Vanilla.

It is being replaced by the new [code snippet pattern](/docs/base/code#code-snippet).

### Numbered

<span class="p-label--deprecated">Deprecated</span>

The code numbered pattern is now deprecated and will be removed in a future version of Vanilla.

It is being replaced by the new [code snippet pattern](/docs/base/code#code-snippet).

### Design

For more information [view the code design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Code), which includes the specification in markdown format and a PNG image.
