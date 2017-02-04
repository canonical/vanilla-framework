var gulp = require('gulp');
var shell = require('gulp-shell');

// Watch tasks
gulp.task('jekyll:serve', shell.task([
  'ln -sf ../build/css docs/.',
  'JEKYLL_ENV=development bundle exec jekyll serve -s docs'
]));

