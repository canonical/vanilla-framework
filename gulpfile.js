'use strict'

var
// defaults
consoleLog = false, // set true for metalsmith file and meta content logging
devBuild = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production'),
pkg = require('./package.json'),

// main directories
dir = {
  base: __dirname + '/',
  lib: __dirname + '/lib/',
  source: './src/',
  dest: './build/'
},

// template config
templateConfig = {
  engine:     'handlebars',
  directory:  dir.source + 'templates/',
  partials:   dir.source + 'partials/',
  default:    'default.hbt'
},

siteMeta = {
  devBuild: devBuild,
  version:  pkg.version,
  name:     'Vanilla Framework',
  desc:     'A living Pattern Library showcasing Vanilla Framework',
  author:   'Canonical Web Team',
  contact:  'https://twitter.com/craigbuckler',
  // domain:    devBuild ? 'http://127.0.0.1' : 'https://rawgit.com', // set domain
  // rootpath:  devBuild ? null  : '/sitepoint-editors/metalsmith-demo/master/build/' // set absolute path (null for relative)
},

// modules
gulp = require('gulp'),
rename = require('gulp-rename'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
notify = require('gulp-notify'),
gutil = require('gulp-util'),
scsslint = require('gulp-scss-lint'),
cssnano = require('gulp-cssnano'),
util = require('util'),
concat = require('gulp-concat'),
// Metalmsith - pattern library generation
metalsmith = require('metalsmith'),
markdown   = require('metalsmith-markdown'),
layouts = require('metalsmith-layouts'),
collections = require('metalsmith-collections'),
browserSync = require('metalsmith-browser-sync');

/* Generate Pattern Library with Metalsmith */
gulp.task('metalsmith', function() {
  metalsmith(dir.base)
    .clean(!devBuild) // clean folder before a production build
    .source(dir.source) // source folder (src/)
    .destination(dir.dest) // build folder (build/)
    .metadata(siteMeta) // add metadata to every page
    .use(markdown()) // convert markdown to html
    .use(layouts(templateConfig)) // layout templating
    .use(collections({
      patterns: 'src/patterns/*.hbt'
    }))
    .use(browserSync())
    .build(function (err) { // build or error log
        if(err) console.log(err)
    })
});

/* Gulp instructions start here */
gulp.task('help', function() {
  console.log('sass - Generate the min and unminified css from sass');
  console.log('build - Generate css');
  console.log('watch - Watch sass files and generate unminified css');
  console.log('test - Lints Sass');
});

/* Helper functions */
function throwSassError(sassError) {
  throw new gutil.PluginError({
    plugin: 'sass',
    message: util.format(
      "Sass error: '%s' on line %s of %s",
      sassError.message,
      sassError.line,
      sassError.file
    )
  });
}

gulp.task('metalsmith-js', function () {
  return gulp.src('src/lib/**/*.js') // Get source files with gulp.src
    .pipe(concat('metalsmith.js'))
    .pipe(gulp.dest('build/js/')) // Outputs the file in the destination folder
})

gulp.task('sasslint', function() {
  var path = (gutil.env.file)? gutil.env.file : '**/*.scss';
  return gulp.src('scss/' + path)
    .pipe(scsslint())
    .pipe(scsslint.failReporter());
});

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({
      style: 'expanded',
      errLogToConsole: true,
      onError: throwSassError
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('demo/css/'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('build', ['sasslint', 'sass']);

gulp.task('sass-lite', function() {
  return gulp.src('scss/build.scss')
    .pipe(sass({ style: 'expanded', errLogToConsole: true }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('build/css/'))
    .pipe(gulp.dest('demo/css/'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass-lite']);
  gulp.watch('src/lib/**/*.js', ['metalsmith-js']);
  gulp.watch('**/*.hbt', ['metalsmith']);
});

gulp.task('test', ['sasslint']);

gulp.task('dev', ['metalsmith', 'metalsmith-js', 'sass','watch']);

gulp.task('default', ['help']);
