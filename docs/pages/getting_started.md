---
template: page.hbt
collection: pages
title: Getting Started
---

## Hotlinking

On [the project homepage](http://ubuntudesign.github.io/vanilla-framework), find the link to the latest build to add directly into your markup:

``` html
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-x.x.x.min.css" />
```

## Local usage

Install the Node package into your project:

``` bash
npm install vanilla-framework  # Installs at ./node_modules/vanilla-framework
```

Then reference it from your own Sass files, with optional settings:

 ```javascript
gulp.task('sass', function() {
  return gulp.src('[your-sass-directory]/**/*.scss')
  .pipe(sass({
    includePaths: ['node_modules']
  }))
});
 ```

 Note: This example uses Gulp but the same principle should apply for your preferred task runner of choice.

``` sass
// Optionally override some settings
$brand-color: #ffffff;

// Import the theme
@import "vanilla-framework/scss/vanilla";

// Run the theme
 @include ubuntu-vanilla-theme;
```

You can override any of the settings in [_global-settings.scss](scss/_global-settings.scss).

If you don't want the whole framework, you can just `@include` specific [modules](scss/modules) - e.g. `@include vf-forms`.

## Themes

- [ubuntu-vanilla-theme](https://github.com/ubuntudesign/ubuntu-vanilla-theme) (alpha)
- [canonical-vanilla-theme](https://github.com/ubuntudesign/canonical-vanilla-theme) (alpha)

## Community

Keep up to date with all new developments and upcoming changes with Vanilla.

- Follow us on Twitter [@UbuntuDesigners](http://twitter.com/ubuntudesigners)
- Read our latest blog posts at [Canonical Blog](http://design.canonical.com/topic/development/)
- Talk to the team in IRC on <code>irc.freenode.com</code> and join channel <code>#vanilla-framework</code>
