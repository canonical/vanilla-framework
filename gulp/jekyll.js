var gulp = require('gulp');
var shell = require('gulp-shell');

// Watch tasks
gulp.task('jekyll:serve', shell.task([
  'JEKYLL_ENV=development bundle exec jekyll serve'
]));

// Build jekyll
gulp.task('jekyll:build', shell.task([
  'JEKYLL_ENV=development bundle exec jekyll build'
]));

