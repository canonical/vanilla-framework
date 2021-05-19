# ![vanilla](https://assets.ubuntu.com/v1/70041419-vanilla-framework.png?w=35 'Vanilla') Vanilla Framework

[![CircleCI build status](https://circleci.com/gh/canonical-web-and-design/vanilla-framework.svg?style=shield)](https://circleci.com/gh/canonical-web-and-design/vanilla-framework)
[![npm version](https://badge.fury.io/js/vanilla-framework.svg)](http://badge.fury.io/js/vanilla-framework)
[![Downloads](http://img.shields.io/npm/dm/vanilla-framework.svg)](https://www.npmjs.com/package/vanilla-framework)
[![devDependency Status](https://david-dm.org/canonical-web-and-design/vanilla-framework/dev-status.svg)](https://david-dm.org/canonical-web-and-design/vanilla-framework#info=devDependencies)
[![Chat in #vanilla-framework on Freenode](https://img.shields.io/badge/chat-%23vanilla--framework-blue.svg)](http://webchat.freenode.net/?channels=vanilla-framework)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io)

Vanilla Framework is an extensible CSS framework, built using [Sass](http://sass-lang.com/) and is designed to be used either directly or by using themes to extend or supplement its patterns.

[Documentation](https://vanillaframework.io/docs) |
[Join the mailing list](http://canonical.us3.list-manage2.com/subscribe?u=56dac47c206ba0f58ec25f314&id=36f7d8394e)

## Table of contents

- [Using Vanilla](#using-vanilla)
  - [Hotlinking](#hotlinking)
  - [Including Vanilla in your project via NPM](#including-vanilla-in-your-project-via-npm)
- [Developing Vanilla](#developing-vanilla)
- [Community](#community)

## Using Vanilla

### Hotlinking

You can link to the latest build to add directly into your markup like so, by replacing the x values with the [version number you wish to link](https://github.com/canonical-web-and-design/vanilla-framework/releases).

```html
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-x.x.x.min.css" />
```

### Including Vanilla in your project via NPM

Pull down the latest version of Vanilla into your local `node_modules` folder
and save it into your project's dependencies (`package.json`) as follows:

```bash
npm install --save-dev vanilla-framework
```

Now ensure that your SASS builder is including modules from `node_modules`. E.g. for Gulp:

```javascript
// gulpfile.js
gulp.task('sass', function () {
  return gulp.src('[your-sass-directory]/**/*.scss').pipe(
    sass({
      includePaths: ['node_modules'],
    })
  );
});
```

Please note, that to provide the best browser support you should also include [autoprefixer](https://www.npmjs.com/package/autoprefixer) as a build step.

Then reference it from your own Sass files, with optional settings:

```sass
// Optionally override some settings
$color-brand: #ffffff;

// Import the theme
@import 'vanilla-framework/scss/vanilla';
@include vanilla;

// Add theme if applicable
```

If you don't want the whole framework, you can just `@include` specific [parts](scss) - e.g. `@include vf-b-forms`.

## Developing Vanilla

If you're looking to contribute to the Vanilla project itself, [start here](/CONTRIBUTING.md).

- [Code of conduct](/CONTRIBUTING.md#code-of-conduct)
- [Reporting bugs and issues](/CONTRIBUTING.md#reporting-bugs-and-issues)
- [Working with the Vanilla project](/CONTRIBUTING.md#working-with-the-vanilla-project)
- [Pull requests](/CONTRIBUTING.md#pull-requests)
- [Releasing Vanilla](/CONTRIBUTING.md#releasing-vanilla)

## Community

Keep up to date with all new developments and upcoming changes with Vanilla.

- Follow us on Twitter [@vanillaframewrk](https://twitter.com/vanillaframewrk)
- Read our latest blog posts at [Ubuntu Blog](https://blog.ubuntu.com/topics/design)

Code licensed [LGPLv3](http://opensource.org/licenses/lgpl-3.0.html) by [Canonical Ltd](http://www.canonical.com/)

With ♥ from Canonical
