---
wrapper_template: '_layouts/docs.html'
context:
  title: Building with Vanilla
---

Here you will find information on how you can use different tools to build
Vanilla into production HTML and CSS.

## Sass

To get set up with [Sass](https://github.com/sass/dart-sass), add the `sass` and `vanilla-framework` packages to your project dependencies:

```
yarn add sass vanilla-framework
```

In the script that builds the CSS in your `package.json`, you should include the path to `node_modules` when looking for `@import`s. In this example, we have called the build script `"build-css"`:

```
"build-css": "sass -w --load-path=node_modules src:dist --style=compressed"
```

Make a folder `src/`, create a file inside called `style.scss` and import Vanilla:

```
@import "vanilla-framework";
@include vanilla;
```

Now run `yarn build-css`, which will convert any Sass files in the `src/` folder to CSS in the `dist/` folder. In this case, `src/style.scss` will compile to `dist/style.css`, which can then be safely included in an HTML file. Your project's folder structure should now look something like this:

<ul class="p-list-tree" aria-multiselectable="true" role="tablist">
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-1-btn" role="tab" aria-controls="sub-1" aria-expanded="false">dist</button>
    <ul class="p-list-tree" id="sub-1" role="tabpanel" aria-hidden="true" aria-labelledby="sub-1-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">style.css</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-2-btn" role="tab" aria-controls="sub-2" aria-expanded="false">node_modules</button>
    <ul class="p-list-tree" id="sub-2" role="tabpanel" aria-hidden="true" aria-labelledby="sub-2-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">modules</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-3-btn" role="tab" aria-controls="sub-3" aria-expanded="false">src</button>
    <ul class="p-list-tree" id="sub-3" role="tabpanel" aria-hidden="true" aria-labelledby="sub-3-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">style.scss</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">index.html</a>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">package.json</a>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">yarn.lock</a>
  </li>
</ul>

To watch for changes in your Sass files, add the following script to your `package.json`:

```
"watch-css":  "yarn build-css && sass --load-path=node_modules -w src:dist --style=compressed"
```

Now if you open an extra terminal and run `yarn watch-css`, the CSS will be rebuilt every time your Sass files are edited and saved.

## Jinja Macros

A variety of Vanilla's components and patterns are offered as
[Jinja macros](https://jinja.palletsprojects.com/templates/#macros), which may
be useful to you if you build sites using the
[Jinja](https://jinja.palletsprojects.com/) templating engine. These macros can
help abstract away some of the complexity of Vanilla's HTML, making producing
complex page layouts simpler and faster.

In order to pull Vanilla's macros into your project, you may need to expose them
to your webserver or templating engine. An example of this using Flask and Jinja
might look like the following:

```python
from flask import Flask
from jinja2 import ChoiceLoader, FileSystemLoader

app = Flask(__name__)

# ChoiceLoader attempts loading templates from each path in successive order
loader = ChoiceLoader([
    FileSystemLoader('templates'),
    FileSystemLoader('node_modules/vanilla-framework/templates/')
])

# Loader supplied to jinja_loader overwrites default jinja_loader
app.jinja_loader = loader

```

After making the macros available to your webserver/templating engine, see the
individual component/pattern docs for import and usage instructions.

Some macros use [Jinja namespaces](https://jinja.palletsprojects.com/en/stable/templates/#jinja-globals.namespace) to allow for
more powerful state management. Jinja namespaces were introduced in Jinja v2.10 - please ensure you are using a compatible version of Jinja.

### Attribute forwarding

Some macros support attribute forwarding, which allows you to pass structured attributes to specific elements within the macro.
This enables macros to apply more structure to the markup they produce and reduce the amount of boilerplate code you need to write.

For example, consider a pattern that accepts images as raw HTML, which are wrapped by the macro in a container that expects the image to have a specific class.
A user would be required to apply that class manually, as with the `p-image-container__image` class in the example below:

```jinja2
{% raw -%}
{{ vf_linked_logo_section(
  title_text="Come for PostgreSQL, get security and support for your entire stack",
  links=[
    {
      "href": "#",
      "text": "Learn more &rsaquo;",
      "label": "Kubeflow",
      "image_html": '
        <img
            {#- we need to apply this class manually, or layouts will be broken -#}
            class="p-image-container__image custom-class"
            src="https://assets.ubuntu.com/v1/cd89477e-kubeflow-logo-container-vert-fill.png"
            alt=""
            width="432"
            height="481"
        />
      '
    },
  {#- more links... -#}
{% endraw %}
```

Going forward, some patterns will support a structured dictionary of attributes that are applied to specific elements within the macro.
This allows the macro to handle more business logic, such as applying required classes to elements.

The macro can apply its own structure to markup, and **forward** your attributes, allowing you to pass additional attributes without needing to know the internal structure of the macro.
An example snippet that produces equivalent markup to the above, using attribute forwarding, is shown below:

```jinja2
{% raw %}
{{ vf_linked_logo_section(
  title_text="Come for PostgreSQL, get security and support for your entire stack",
  links=[
    {
      "href": "#",
      "text": "Learn more &rsaquo;",
      "label": "Kubeflow",
      "image_attrs": {
        "src": "https://assets.ubuntu.com/v1/cd89477e-kubeflow-logo-container-vert-fill.png",
        {#-
            Class is no longer required - macro will apply p-image-container__image
            We can still pass additional classes if needed
        -#}
        "class": "custom-class",
        "alt": "",
        "width": "432",
        "height": "481"
      }
    },
{% endraw %}
```

Any `_attrs` parameter in a macro should be treated as an attribute forwarding parameter.
It applies all attributes to the targeted element, unless otherwise specified in the documentation for that macro.
The macro may also apply its own attributes to the element, which will be merged with the attributes you pass in.

If you use a templating tool that generates raw HTML, you should switch to an output mode that outputs element attributes as a dictionary or object, if available.
For example, [canonicalwebteam.image-template](https://github.com/canonical/canonicalwebteam.image-template/blob/3182710447965de9241944591f3dffc48a17a2d5/README.md#attribute-output) supports an `output_mode="attrs"` option that outputs image attributes as a dictionary, rather than raw HTML.

## Webpack

[Webpack](https://webpack.js.org/) is used to compile JavaScript modules, and can be used to inject Vanilla styles to the DOM. To get set up using Vanilla with Webpack, add the `webpack` and `vanilla-framework` packages to your project dependencies:

```
yarn add webpack webpack-cli vanilla-framework
```

You'll also need to install the required loaders for compiling and bundling Vanilla's Sass files:

```
yarn add node-sass css-loader sass-loader style-loader
```

Make a folder `src/`, create a file inside called `style.scss` and import Vanilla:

```
@import 'vanilla-framework';
@include vanilla;
```

Now, create a `webpack.config.js` file at your project's root, and write the following:

```
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
          }
        ]
      }
    ]
  }
};
```

Create a file called `app.js` inside the `src/` folder, and write the following:

```
import './style.scss';
```

Add a build script to your `package.json` to run the webpack command:

```
"build": "webpack"
```

Now run the command with `yarn build`, which will bundle the code and put in a a `dist/` folder. At the project root, create an `index.html` with the following code:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Vanilla using Webpack</title>
</head>
<body>
  <section class="p-strip">
    <div class="row--25-75">
      <div class="col">
        <h1>Hello Vanilla!</h1>
        <p>This page has been built using Webpack!</p>
      </div>
    </div>
  </section>
  <script src="./dist/bundle.js"></script>
</body>
</html>
```

Opening this `index.html` file should display a title in Vanilla styling, despite not having any CSS.

To enable hot module replacement, you need to add `webpack-dev-server` to your list of packages:

```
yarn add webpack-dev-server
```

And add a `"start"` script to your `package.json` to run it:

```
"start": "webpack serve --open"
```

Now when you run `yarn start`, the Webpack development server will start at `http://localhost:8080/` by default. It should show the same `index.html` file as before, however now you can edit the styles in `src/style.scss` and the page will automatically refresh to reflect the changes.

Your project's folder structure should now look something like this:

<ul class="p-list-tree" aria-multiselectable="true" role="tablist">
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-4-btn" role="tab" aria-controls="sub-4" aria-expanded="false">dist</button>
    <ul class="p-list-tree" id="sub-4" role="tabpanel" aria-hidden="true" aria-labelledby="sub-4-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">bundle.js</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-5-btn" role="tab" aria-controls="sub-5" aria-expanded="false">node_modules</button>
    <ul class="p-list-tree" id="sub-5" role="tabpanel" aria-hidden="true" aria-labelledby="sub-5-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">modules</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-6-btn" role="tab" aria-controls="sub-6" aria-expanded="false">src</button>
    <ul class="p-list-tree" id="sub-6" role="tabpanel" aria-hidden="true" aria-labelledby="sub-6-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">app.js</a>
      </li>
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">style.scss</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">index.html</a>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">package.json</a>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">webpack.config.js</a>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">yarn.lock</a>
  </li>
</ul>

To provide the same browser support as Vanilla, you should also include [autoprefixer](https://www.npmjs.com/package/autoprefixer) in the build pipeline via [postcss-loader](https://www.npmjs.com/package/postcss-loader).

For more options on configuring Webpack, for example minification and autoprefixing, refer to [the Webpack documentation](https://webpack.js.org/concepts/).

## Gulp

To get started with [gulp-sass](https://github.com/dlmanning/gulp-sass), add the following packages to your project:

```
yarn add gulp gulp-sass vanilla-framework
```

Create a file called `gulpfile.js` in your main directory and write:

```
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-css', function() {
  return gulp.src('./src/*.scss')
  .pipe(sass({ includePaths: ['./node_modules'] }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch-css', function() {
  gulp.watch('./src/*.scss', ['build-css']);
});
```

Make a folder `src/`, create a file inside called `style.scss` and import Vanilla:

```
@import vanilla-framework;
@include vanilla;
```

Now run `gulp build-css`, which will convert any Sass files in the `src/` folder to CSS in the `dist/` folder. In this case, `src/style.scss` will compile to `dist/style.css`, which can then be safely included in an HTML file. Your project's folder structure should now look something like this:

<ul class="p-list-tree" aria-multiselectable="true" role="tablist">
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-7-btn" role="tab" aria-controls="sub-7" aria-expanded="false">dist</button>
    <ul class="p-list-tree" id="sub-7" role="tabpanel" aria-hidden="true" aria-labelledby="sub-7-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">style.css</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-8-btn" role="tab" aria-controls="sub-8" aria-expanded="false">node_modules</button>
    <ul class="p-list-tree" id="sub-8" role="tabpanel" aria-hidden="true" aria-labelledby="sub-8-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">modules</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-9-btn" role="tab" aria-controls="sub-9" aria-expanded="false">src</button>
    <ul class="p-list-tree" id="sub-9" role="tabpanel" aria-hidden="true" aria-labelledby="sub-9-btn">
      <li class="p-list-tree__item">
        <a class="p-list-tree__link" tabindex="0">style.scss</a>
      </li>
    </ul>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">gulpfile.js</a>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">index.html</a>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">package.json</a>
  </li>
  <li class="p-list-tree__item">
    <a class="p-list-tree__link" tabindex="0">yarn.lock</a>
  </li>
</ul>

If you open an extra terminal and run `gulp watch-css`, the CSS will be rebuilt every time your Sass files are edited and saved.

To provide the same browser support as Vanilla, you should also include [autoprefixer](https://www.npmjs.com/package/autoprefixer) in the build pipeline via [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer).

For more options on configuring `gulp-sass`, for example minification and autoprefixing, refer to [the gulp-sass documentation](https://www.npmjs.com/package/gulp-sass).

## Git submodules

Creating a submodule in the git repo does not add all the code to the project but includes a reference and path to include the framework. You may find this method useful if you're planing to host on Github Pages.

Run this command at the root of your project (replacing vX.X.X with the [release](https://github.com/canonical/vanilla-framework/releases) you wish to use)

```
git submodule add -- git@github.com:canonical/vanilla-framework.git _sass/vanilla-framework && cd _sass/vanilla-framework && git checkout vX.X.X
```

By running the following command it will pull down the framework into the correct location.

```
git submodule update
```

<script>
  {% include 'docs/examples/patterns/list-tree/_script.js' %}
</script>
