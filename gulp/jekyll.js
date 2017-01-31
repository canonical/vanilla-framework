var gulp = require('gulp');
var shell = require('gulp-shell');

// Watch tasks
gulp.task('jekyll', shell.task([
  'jekyll serve'
]));
