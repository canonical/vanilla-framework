# Vanilla Framework

[![Build Status](https://travis-ci.org/canonical-web-and-design/vanilla-framework.svg?branch=master)](https://travis-ci.org/canonical-web-and-design/vanilla-framework)
[![npm version](https://badge.fury.io/js/vanilla-framework.svg)](http://badge.fury.io/js/vanilla-framework)
[![Downloads](http://img.shields.io/npm/dm/vanilla-framework.svg)](https://www.npmjs.com/package/vanilla-framework)
[![devDependency Status](https://david-dm.org/canonical-web-and-design/vanilla-framework/dev-status.svg)](https://david-dm.org/canonical-web-and-design/vanilla-framework#info=devDependencies)
[![Chat in #vanilla-framework on Freenode](https://img.shields.io/badge/chat-%23vanilla--framework-blue.svg)](http://webchat.freenode.net/?channels=vanilla-framework)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io)

Vanilla Framework is a simple extensible CSS framework, built using [Sass](http://sass-lang.com/) and is designed to be used either directly or by using themes to extend or supplement its patterns.

[Documentation](https://docs.vanillaframework.io) |
[Join the mailing list](http://canonical.us3.list-manage2.com/subscribe?u=56dac47c206ba0f58ec25f314&id=36f7d8394e)

## Hotlinking

You can link to the latest build to add directly into your markup like so, by replacing the x values with the [version number you wish to link](https://github.com/canonical-web-and-design/vanilla-framework/releases).

```html
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-x.x.x.min.css" />
```

## Including Vanilla in your project via NPM

Pull down the latest version of Vanilla into your local `node_modules` folder
and save it into your project's dependencies (`package.json`) as follows:

```bash
npm install --save-dev vanilla-framework
```

Now ensure that your SASS builder is including modules from `node_modules`. E.g. for Gulp:

```javascript
// gulpfile.js
gulp.task('sass', function() {
  return gulp.src('[your-sass-directory]/**/*.scss').pipe(
    sass({
      includePaths: ['node_modules']
    })
  );
});
```

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

## Vanilla local development

The simplest way to run Vanilla framework is to first [install Docker](https://docs.docker.com/engine/installation/) (Linux users may need to [add your user to the `docker` group](https://docs.docker.com/engine/installation/linux/linux-postinstall/)), and then use the `./run` script to build the site:

```bash
./run build  # Build the CSS into the ./build/ directory
# or
./run watch  # Dynamically watch for changes to the Sass files and build automatically
```

### Viewing documentation

The documentation for the latest version of Vanilla framework is hosted at <https://docs.vanillaframework.io>.

The documentation markdown files live in the [`docs` folder](/docs), and you can view this documentation in the browser by running:

```bash
./run serve
```

Once the containers are setup, you can visit <http://0.0.0.0:8101/> in your browser to see the documentation.

The [examples directory](/docs/examples) contains example markup for each component of the framework, and these examples can be viewed in the browser at <http://0.0.0.0:8101/examples/>.

## Community

Keep up to date with all new developments and upcoming changes with Vanilla.

- Follow us on Twitter [@vanillaframewrk](https://twitter.com/vanillaframewrk)
- Read our latest blog posts at [Ubuntu Blog](https://blog.ubuntu.com/topics/design)
- Talk to the team in IRC on <code>irc.freenode.net</code> and join channel <code>#vanilla-framework</code>, alternatively join our workspace on [Slack](vanillaframework.slack.com)

Code licensed [LGPLv3](http://opensource.org/licenses/lgpl-3.0.html) by [Canonical Ltd](http://www.canonical.com/)

With ♥ from Canonical
