'use strict'

// modules
var
gulp = require('gulp'),
rename = require('gulp-rename'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
gutil = require('gulp-util'),
scsslint = require('gulp-scss-lint'),
cssnano = require('gulp-cssnano'),
util = require('util'),
concat = require('gulp-concat');

/* Gulp instructions start here */
gulp.task('help', function() {
  console.log('build - Generate css');
  console.log('watch - Watch sass files and generate unminified css');
  console.log('test  - Lint Sass');
});

/* Provide details of sass errors */
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

/* Lint the Sass according to .scss-lint.yml */
gulp.task('sass-lint', function() {
  var path = (gutil.env.file)? gutil.env.file : '**/*.scss';
  return gulp.src('scss/' + path)
    .pipe(scsslint())
    .pipe(scsslint.failReporter());
});

/* Build Sass for local development */
gulp.task('sass-develop', function() {
  return gulp.src(['scss/**/*.scss'])
    .pipe(sass({ style: 'expanded', errLogToConsole: true }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('build/css/'));
});

/* Build Sass for Production */
gulp.task('sass-build', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({
      style: 'expanded',
      errLogToConsole: true,
      onError: throwSassError
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css/'));
});

/* Watch Sass for changes then rebuild */
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass-develop']);
});

/* Sass task list */
gulp.task('develop', ['sass-develop', 'watch']);
gulp.task('test', ['sass-lint']);
gulp.task('build', ['sass-build']);
gulp.task('default', ['help']);
