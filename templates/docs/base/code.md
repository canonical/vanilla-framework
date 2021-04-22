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

An inline `code` element can be nested within a `.p-strip--dark` element, and can also use the `.is-dark` utility class as necessary:

<div class="embedded-example"><a href="/docs/examples/base/code-inline-dark/" class="js-example">
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

The code snippet pattern should be used to group related code examples, making them easier to find and understand. It should consist of one or, at most, two code blocks with optional headers for their titles.

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/default" class="js-example">
View example of the code snippet
</a></div>

### Code snippet with icon

A code snippet block can include an icon by using the `.p-code-snippet__block--icon` class. By default, it will show the Linux prompt icon, but other icon options are available, using the `.is-windows-prompt` or `.is-url` classes.

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/icon" class="js-example">
View example of the code snippet
</a></div>

### Numbered code snippet

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/numbered" class="js-example">
View example of the code snippet
</a></div>

### Dropdowns

A select with the class `.p-code-snippet__dropdown` can be included within a `.p-code-snippet__header`, with a small amount of JS to switch between related code examples.

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/dropdown" class="js-example">
View example of the code snippet
</a></div>

It is also possible to include multiple selects, and an alternative layout is available by adding the `.is-stacked` utility to the `.p-code-snippet__header`, should more horizontal space be required.

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/dropdown-multiple" class="js-example">
View example of the code snippet
</a></div>

### Wrapping

By default, `<pre>` elements do not wrap content, but this can be overridden by adding the `.is-wrapped` utility class to a `.p-code-snippet__block`:

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/wrapping" class="js-example">
View example of the code snippet
</a></div>

### Syntax highlighting

We recommend using [Prism](https://prismjs.com/) for syntax highlighting in the code snippet. Vanilla framework provides a built-in Prism theme, so only JavaScript of Prism library needs to be added to the page, and `language-*` class names to the respective code blocks.

Make sure to include [language support for any required languages](https://prismjs.com/index.html#supported-languages) or [the `autoloader` plug-in](https://prismjs.com/plugins/autoloader/) (that automatically loads needed languages based on used class names).

To correctly support numbered variant of code snippet [the `keep-markup` plug-in](https://prismjs.com/plugins/keep-markup/) is needed to preserve `span` elements around the lines.

JavaScript for [Prism can be downloaded from their download page](https://prismjs.com/download) where it can be bundled with any necessary languages and plug-ins. You can also use [Prism provided by CDN](https://prismjs.com/index.html#basic-usage-cdn).

To avoid using JavaScript library for syntax highlighting you can prepare the code block content by manually wrapping the highlighted elements into `span`s with class names compatible with Prism theme (like `<span class="token keyword">` `<span class="token comment">`).

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/prism" class="js-example">
View example of the code snippet with syntax highlighting
</a></div>

### Bordered

<span class="p-label--new">New</span>

Add the class `.is-bordered` to the `.p-code-snippet` element to visually group the code snippet with another section, for instance the rendered result of the code in the snippet. ```

<div class="embedded-example"><a href="/docs/examples/patterns/code-snippet/is-bordered" class="js-example">
View example of the code snippet with a border
</a></div>

### Copyable

<span class="p-label--deprecated">Deprecated</span>

The code copyable element is now deprecated and will be removed in a future version of Vanilla.

It is being replaced by the new [code snippet pattern](/docs/base/code#code-snippet).

### Numbered

<span class="p-label--deprecated">Deprecated</span>

The code numbered pattern is now deprecated and will be removed in a future version of Vanilla.

It is being replaced by the new [code snippet pattern](/docs/base/code#code-snippet).

### React

You can use code snippet in React by installing our react-component library and importing code snippet component.

[See the documentation for our React `CodeSnippet` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/codesnippet--default-story#code-snippet)
