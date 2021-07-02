---
wrapper_template: '_layouts/docs.html'
context:
  title: Building with Vanilla
---

## Building with Vanilla

<hr>

Here you will find information on how you can use different tools to build Vanilla into production CSS.

### node-sass

To quickly get set up with [`node-sass`](https://github.com/sass/node-sass), add the `node-sass` and `vanilla-framework` packages to your project dependencies:

```
yarn add node-sass vanilla-framework
```

In the script that builds the CSS in your `package.json`, you should include the path to `node_modules` when looking for `@import`s. In this example, we have called the build script `"build-css"`:

```
"build-css": "node-sass --include-path node_modules src --output dist"
```

Make a folder `src/`, create a file inside called `style.scss` and import Vanilla:

```
@import vanilla-framework/scss/vanilla;
@include vanilla;
```

Now run `yarn build-css`, which will convert any Sass files in the `src/` folder to CSS in the `dist/` folder. In this case, `src/style.scss` will compile to `dist/style.css`, which can then be safely included in an HTML file. Your project's folder structure should now look something like this:

<ul class="p-list-tree" aria-multiselectable="true" role="tablist">
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-1-btn" role="tab" aria-controls="sub-1" aria-expanded="false">dist</button>
    <ul class="p-list-tree" id="sub-1" role="tabpanel" aria-hidden="true" aria-labelledby="sub-1-btn">
      <li class="p-list-tree__item">style.css</li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-2-btn" role="tab" aria-controls="sub-2" aria-expanded="false">node_modules</button>
    <ul class="p-list-tree" id="sub-2" role="tabpanel" aria-hidden="true" aria-labelledby="sub-2-btn">
      <li class="p-list-tree__item">modules</li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-3-btn" role="tab" aria-controls="sub-3" aria-expanded="false">src</button>
    <ul class="p-list-tree" id="sub-3" role="tabpanel" aria-hidden="true" aria-labelledby="sub-3-btn">
      <li class="p-list-tree__item">style.scss</li>
    </ul>
  </li>
  <li class="p-list-tree__item">index.html</li>
  <li class="p-list-tree__item">package.json</li>
  <li class="p-list-tree__item">yarn.lock</li>
</ul>

To watch for changes in your Sass files, add the following script to your `package.json`:

```
"watch-css": "yarn build-css && node-sass --watch src/*.scss --output dist"
```

Now if you open an extra terminal and run `yarn watch-css`, the CSS will be rebuilt every time your Sass files are edited and saved.

To provide the same browser support as Vanilla, you should also include [autoprefixer](https://www.npmjs.com/package/autoprefixer) in the build pipeline via [postcss-cli](https://www.npmjs.com/package/postcss-cli).

For more options on configuring `node-sass`, for example minification and autoprefixing, refer to [the node-sass documentation](https://github.com/sass/node-sass).

### Webpack

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
@import 'vanilla-framework/scss/vanilla';
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
  <section class="p-strip--light is-bordered">
    <div class="row">
      <h1>Hello Vanilla!</h1>
      <p>This page has been built using Webpack!</p>
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
      <li class="p-list-tree__item">bundle.js</li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-5-btn" role="tab" aria-controls="sub-5" aria-expanded="false">node_modules</button>
    <ul class="p-list-tree" id="sub-5" role="tabpanel" aria-hidden="true" aria-labelledby="sub-5-btn">
      <li class="p-list-tree__item">modules</li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-6-btn" role="tab" aria-controls="sub-6" aria-expanded="false">src</button>
    <ul class="p-list-tree" id="sub-6" role="tabpanel" aria-hidden="true" aria-labelledby="sub-6-btn">
      <li class="p-list-tree__item">app.js</li>
      <li class="p-list-tree__item">style.scss</li>
    </ul>
  </li>
  <li class="p-list-tree__item">index.html</li>
  <li class="p-list-tree__item">package.json</li>
  <li class="p-list-tree__item">webpack.config.js</li>
  <li class="p-list-tree__item">yarn.lock</li>
</ul>

To provide the same browser support as Vanilla, you should also include [autoprefixer](https://www.npmjs.com/package/autoprefixer) in the build pipeline via [postcss-loader](https://www.npmjs.com/package/postcss-loader).

For more options on configuring Webpack, for example minification and autoprefixing, refer to [the Webpack documentation](https://webpack.js.org/concepts/).

### Gulp

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
@import vanilla-framework/scss/vanilla;
@include vanilla;
```

Now run `gulp build-css`, which will convert any Sass files in the `src/` folder to CSS in the `dist/` folder. In this case, `src/style.scss` will compile to `dist/style.css`, which can then be safely included in an HTML file. Your project's folder structure should now look something like this:

<ul class="p-list-tree" aria-multiselectable="true" role="tablist">
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-7-btn" role="tab" aria-controls="sub-7" aria-expanded="false">dist</button>
    <ul class="p-list-tree" id="sub-7" role="tabpanel" aria-hidden="true" aria-labelledby="sub-7-btn">
      <li class="p-list-tree__item">style.css</li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-8-btn" role="tab" aria-controls="sub-8" aria-expanded="false">node_modules</button>
    <ul class="p-list-tree" id="sub-8" role="tabpanel" aria-hidden="true" aria-labelledby="sub-8-btn">
      <li class="p-list-tree__item">modules</li>
    </ul>
  </li>
  <li class="p-list-tree__item p-list-tree__item--group">
    <button class="p-list-tree__toggle" id="sub-9-btn" role="tab" aria-controls="sub-9" aria-expanded="false">src</button>
    <ul class="p-list-tree" id="sub-9" role="tabpanel" aria-hidden="true" aria-labelledby="sub-9-btn">
      <li class="p-list-tree__item">style.scss</li>
    </ul>
  </li>
  <li class="p-list-tree__item">gulpfile.js</li>
  <li class="p-list-tree__item">index.html</li>
  <li class="p-list-tree__item">package.json</li>
  <li class="p-list-tree__item">yarn.lock</li>
</ul>

If you open an extra terminal and run `gulp watch-css`, the CSS will be rebuilt every time your Sass files are edited and saved.

To provide the same browser support as Vanilla, you should also include [autoprefixer](https://www.npmjs.com/package/autoprefixer) in the build pipeline via [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer).

For more options on configuring `gulp-sass`, for example minification and autoprefixing, refer to [the gulp-sass documentation](https://www.npmjs.com/package/gulp-sass).

### Git submodules

Creating a submodule in the git repo does not add all the code to the project but includes a reference and path to include the framework. You may find this method useful if you're planing to host on Github Pages.

Run this command at the root of your project (replacing vX.X.X with the [release](https://github.com/canonical-web-and-design/vanilla-framework/releases) you wish to use)

```
git submodule add -b vX.X.X -- git@github.com:vanilla-framework/vanilla-framework.git _sass/vanilla-framework
```

By running the following command it will pull down the framework into the correct location.

```
git submodule update
```

<script>
  var listTreeToggle = document.querySelectorAll('.p-list-tree__toggle');
  for (var i = 0; i < listTreeToggle.length; i++) {
    listTreeToggle[i].addEventListener('click', function(e) {
      e.preventDefault();
      var listTree = this.nextElementSibling;
      var expand = this.getAttribute('aria-expanded') === 'true' ? false : true;
      this.setAttribute('aria-expanded', expand);
      listTree.setAttribute('aria-hidden', !expand);
    });
  }
</script>
