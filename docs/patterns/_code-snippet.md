---
collection: patterns
title: code snippet
---

## .code-snippet

Code snippet should be used when presenting the user with a small snippet of code that they will likely want to copy and paste.

```html
<div class="code-snippet">
    <input class="code-snippet__input" value="sudo apt-get update" readonly="readonly">
    <button class="code-snippet__action">Copy to clipboard</button>
</div>
```

<div class="code-snippet">
    <input class="code-snippet__input" value="sudo apt-get update" readonly="readonly">
    <button class="code-snippet__action">Copy to clipboard</button>
</div>

## .code-snippet--inverse

If you want the code block to be on a dark background, use `.code-snippet--inverse`

```html
<div class="code-snippet--inverse">
    <input class="code-snippet__input" value="sudo apt-get update" readonly="readonly">
    <button class="code-snippet__action">Copy to clipboard</button>
</div>
```

<div class="code-snippet--inverse">
    <input class="code-snippet__input" value="sudo apt-get update" readonly="readonly">
    <button class="code-snippet__action">Copy to clipboard</button>
</div>
