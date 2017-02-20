# Vanilla Framework

[![Build Status](https://travis-ci.org/vanilla-framework/vanilla-framework.svg?branch=master)](https://travis-ci.org/vanilla-framework/vanilla-framework)
[![npm version](https://badge.fury.io/js/vanilla-framework.svg)](http://badge.fury.io/js/vanilla-framework)
[![Downloads](http://img.shields.io/npm/dm/vanilla-framework.svg)](https://www.npmjs.com/package/vanilla-framework)
[![devDependency Status](https://david-dm.org/vanilla-framework/vanilla-framework/dev-status.svg)](https://david-dm.org/vanilla-framework/vanilla-framework#info=devDependencies)
[![Chat in #vanilla-framework on Freenode](https://img.shields.io/badge/chat-%23vanilla--framework-blue.svg)](http://webchat.freenode.net/?channels=vanilla-framework)

Vanilla Framework is a simple extensible CSS framework, built using [Sass](http://sass-lang.com/) and is designed to be used either directly or by using themes to extend or supplement its patterns.

[Documentation](https://docs.vanillaframework.io) |
[Project Task Board](https://waffle.io/vanilla-framework/vanilla-framework) | [Join the mailing list](https://lists.ubuntu.com/mailman/listinfo/vanilla-framework)

## Hotlinking

On [the project homepage](http://vanilla-framework.github.io/vanilla-framework), find the link to the latest build to add directly into your markup:

``` html
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-x.x.x.min.css" />
```

## Including Vanilla in your project via NPM

Pull down the latest version of Vanilla into your local `node_modules` folder
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
@import 'vanilla-framework/scss/build';

// Add theme if applicable
```

If you don't want the whole framework, you can just `@include` specific [parts](scss) - e.g. `@include vf-b-forms`.

## Vanilla local development

To develop on Vanilla itself, simply pull down the project and make changes.

To test it locally using our recommended tooling, you need to first install dependencies:

You need to have bundler installed

``` bash
gem install bundler
```

You need to have node and npm. To install follow the [installation instructions](https://docs.npmjs.com/getting-started/installing-node) on this page.

``` bash
bundle install
npm install
```

You can then compile your Sass changes into `build/css/build.css` by running:

``` bash
gulp build
```

Or you can run a local server to view your changes live with:

``` bash
gulp jekyll
```

## Building documentation pages

The documentation available at <https://docs.vanillaframework.io> is built from
the markdown files located in the [`/docs/`](/docs) folder. You can also build the
HTML documentation pages locally as follows:

``` bash
snap install documentation-builder  # Install the documentation-builder tool
documentation-builder --base-directory docs --output-path docs/build
```

Now open the `docs/build/en/index.html` file in your browser.

## Community

Keep up to date with all new developments and upcoming changes with Vanilla.

- Follow us on Twitter [@UbuntuDesigners](http://twitter.com/ubuntudesigners)
- Read our latest blog posts at [Canonical Blog](http://design.canonical.com/topic/development/)
- Talk to the team in IRC on <code>irc.freenode.net</code> and join channel <code>#vanilla-framework</code>

Code licensed [LGPLv3](http://opensource.org/licenses/lgpl-3.0.html) by [Canonical Ltd](http://www.canonical.com/)

With ♥ from Canonical
