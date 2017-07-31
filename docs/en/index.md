---
title: Home
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

### Using with Github Pages via Git submodules

Creating a submodule in the git repo does not add all the code to the project but includes a reference and path to include the framework. You may find this method useful if you're planing to host on Github Pages.

Run this command at the root of your project (replacing vX.X.X with the release you wish to use)

```
git submodule add -b vX.X.X -- git@github.com:vanilla-framework/vanilla-framework.git _sass/vanilla-framework
```

By running the following command it will pull down the framework into the correct location.

```
git submodule update
```

### Local development

To make improvements to Vanilla itself, please follow the instructions on the project’s [README.md](https://github.com/vanilla-framework/vanilla-framework#vanilla-framework).

## Getting help

If you have any questions or get stuck, you can file an issue on [GitHub](https://github.com/vanilla-framework/vanilla-framework/issues/new) or ask us a question on [Twitter](https://twitter.com/vanillaframewrk) or [Slack](https://vanillaframework.slack.com).
