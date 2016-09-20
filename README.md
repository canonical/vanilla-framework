# Vanilla Framework

[![Build Status](https://travis-ci.org/ubuntudesign/vanilla-framework.svg?branch=master)](https://travis-ci.org/ubuntudesign/vanilla-framework)
[![npm version](https://badge.fury.io/js/vanilla-framework.svg)](http://badge.fury.io/js/vanilla-framework)
[![Downloads](http://img.shields.io/npm/dm/vanilla-framework.svg)](https://www.npmjs.com/package/vanilla-framework)
[![devDependency Status](https://david-dm.org/ubuntudesign/vanilla-framework/dev-status.svg)](https://david-dm.org/ubuntudesign/vanilla-framework#info=devDependencies)
[![Chat in #vanilla-framework on Freenode](https://img.shields.io/badge/chat-%23vanilla--framework-blue.svg)](http://webchat.freenode.net/?channels=vanilla-framework)

A simple extensible CSS framework, written in [Sass](http://sass-lang.com/).

Vanilla Framework contains a basic CSS grid and pattern classes, and is designed to be extended either directly or by creating extension themes.

[Project homepage](http://ubuntudesign.github.io/vanilla-framework) | [Documentation](http://ubuntudesign.github.io/vanilla-framework/docs/) |
[Project Task Board](https://waffle.io/ubuntudesign/vanilla-framework) | [Join the mailing list](https://lists.ubuntu.com/mailman/listinfo/vanilla-framework)

## Hotlinking

On [the project homepage](http://ubuntudesign.github.io/vanilla-framework), find the link to the latest build to add directly into your markup:

``` html
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-x.x.x.min.css" />
```

## Including Vanilla in your project

Pull down the latest version of Vanilla into your local `node_modules` folder,
and save it into your project's dependencies (`package.json`) as follows:

``` bash
npm install --save-dev vanilla-framework
```

Now ensure that your SASS builder is including modules from `node_modules`. E.g. for Gulp:

``` javascript
// gulpfile.js
gulp.task('sass', function() {
  return gulp.src('[your-sass-directory]/**/*.scss')
  .pipe(sass({
    includePaths: ['node_modules']
  }))
});
```

Then reference it from your own Sass files, with optional settings:

``` sass
// Optionally override some settings
$color-brand: #ffffff;

// Import the theme
@import "vanilla-framework/scss/vanilla";

// Run the theme
 @include ubuntu-vanilla-theme;
```

If you don't want the whole framework, you can just `@include` specific [modules](scss/modules) - e.g. `@include vf-b-forms`.

## Themes

- [ubuntu-vanilla-theme](https://github.com/ubuntudesign/ubuntu-vanilla-theme) (alpha)
- [canonical-vanilla-theme](https://github.com/ubuntudesign/canonical-vanilla-theme) (alpha)

## Vanilla local development

To develop on Vanilla itself, simply pull down the project and make changes.

Once you've made your changes you can use the `run` script to build and test your code:

``` bash
./run        # List available commands
./run build  # Build the CSS
./run watch  # Watch files and rebuild when changes happen
./run test   # Run the
```

## Community

Keep up to date with all new developments and upcoming changes with Vanilla.

- Follow us on Twitter [@UbuntuDesigners](http://twitter.com/ubuntudesigners)
- Read our latest blog posts at [Canonical Blog](http://design.canonical.com/topic/development/)
- Talk to the team in IRC on <code>irc.freenode.com</code> and join channel <code>#vanilla-framework</code>

Code licensed [LGPLv3](http://opensource.org/licenses/lgpl-3.0.html) by [Canonical Ltd.](http://www.canonical.com/).

With ♥ from Canonical
