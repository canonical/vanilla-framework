---
title: Home table_of_contents: True
---

## Get started

You can use Vanilla in your projects in a few different ways.

### Install via npm

The recommended way to get Vanilla is through [npm](https://www.npmjs.com/):

`npm install --save-dev vanilla-framework`

This will pull down the latest version into your local `node_modules` folder and save it into your project's dependencies in `package.json`.

Now when you build Sass, make sure to include modules from node_modules. E.g. for [node-sass](https://github.com/sass/node-sass):

`$ node-sass --include-path node_modules {file}.scss {file}.css`

Finally, reference it from your own Sass files, with optional settings:

```
// Optionally override some settings
$color-brand: #ffffff;

// Import the theme
@import 'vanilla-framework/scss/vanilla';
```

If you don't need the whole framework, you can just include specific parts, e.g. `@include vf-b-forms`.

### Hotlink

Alternatively, you can add Vanilla directly to your markup:

`<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-x.x.x.min.css" />`

### Download

Download the latest version of Vanilla from [GitHub](https://github.com/vanilla-framework/vanilla-framework/releases/)

### Local development

To make improvements to Vanilla itself, please follow the instructions on the project’s [README.md](https://github.com/vanilla-framework/vanilla-framework#vanilla-framework).

## Guidelines

If you want to propose new patterns or improvements to Vanilla, make sure to follow these guidelines, which help to keep Vanilla robust and accessible:

- [Accessibility guidelines]()
- [Browser support]()
- [Coding standards]()

## Getting help

If you have any questions or get stuck, you can file an issue on [GitHub](https://github.com/vanilla-framework/vanilla-framework/issues/new) or ask us a question on [Twitter](https://twitter.com/vanillaframewrk) or [Slack](https://vanillaframework.slack.com).
