# ![vanilla](https://assets.ubuntu.com/v1/70041419-vanilla-framework.png?w=35 'Vanilla') Vanilla Framework

[![npm version](https://badge.fury.io/js/vanilla-framework.svg)](http://badge.fury.io/js/vanilla-framework)
[![Downloads](http://img.shields.io/npm/dm/vanilla-framework.svg)](https://www.npmjs.com/package/vanilla-framework)
[![Chat in #vanilla:ubuntu.com on Matrix](https://img.shields.io/badge/chat-%23vanilla:ubuntu.com-blue.svg)](https://matrix.to/#/#vanilla:ubuntu.com)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io)

Vanilla Framework is an extensible CSS framework, built using [Sass](http://sass-lang.com/) and is designed to be used either directly or by using themes to extend or supplement its patterns.

[Documentation](https://vanillaframework.io/docs) |

## Table of contents

- [Using Vanilla](#using-vanilla)
  - [Hotlinking](#hotlinking)
  - [Including Vanilla in your project via NPM](#including-vanilla-in-your-project-via-npm)
- [Developing Vanilla](#developing-vanilla)
- [Community](#community)

## Using Vanilla

### Hotlinking

You can link to the latest build to add directly into your markup like so, by replacing the x values with the [version number you wish to link](https://github.com/canonical/vanilla-framework/releases).

```html
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla_framework_version_x_x_x_min.css" />
```

### Including Vanilla in your project via NPM or yarn

To get set up with Sass, add the `sass` and `vanilla-framework` packages to your project dependencies:

```bash
yarn add sass vanilla-framework
```

In the script that builds the CSS in your `package.json`, you should include the path to `node_modules` when looking for `@imports`. In this example, we have called the build script `"build-css"`:

```
"build-css": "sass -w --load-path=node_modules src:dist --style=compressed"
```

Make a folder `src/`, create a file inside called `style.scss` and import Vanilla:

```sass
// Import the theme
@import 'vanilla-framework';
@include vanilla;

// Optionally override some settings
$color-brand: #ffffff;

// Add theme if applicable
```

If you don't want the whole framework, you can just `@include` specific [parts](scss) - e.g. `@include vf-b-forms`.

Now run `yarn build-css`, which will convert any Sass files in the `src/` folder to CSS in the `dist/` folder.

To watch for changes in your Sass files, add the following script to your `package.json`

```
"watch-css":  "yarn build-css && sass --load-path=node_modules -w src:dist --style=compressed"
```

## Developing Vanilla

If you're looking to contribute to the Vanilla project itself, [start here](/CONTRIBUTING.md).

- [Code of conduct](/CONTRIBUTING.md#code-of-conduct)
- [Reporting bugs and issues](/CONTRIBUTING.md#reporting-bugs-and-issues)
- [Working with the Vanilla project](/CONTRIBUTING.md#working-with-the-vanilla-project)
- [Pull requests](/CONTRIBUTING.md#pull-requests)
- [Releasing Vanilla](/CONTRIBUTING.md#releasing-vanilla)

## Community

Keep up to date with all new developments and upcoming changes with Vanilla.

- Read our latest blog posts at [Ubuntu Blog](https://blog.ubuntu.com/topics/design)
- Stay in touch with us on [Matrix](https://matrix.to/#/#vanilla:ubuntu.com)

Code licensed [LGPLv3](https://opensource.org/license/lgpl-3-0/) by [Canonical Ltd](http://www.canonical.com/)

With ♥ from Canonical
