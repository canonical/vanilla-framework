'use strict'

require('es6-promise').polyfill();

var gulp = require('gulp');
var wrench = require('wrench');

/*
  concatenate all *.js / *.coffee files in the 'gulp' folder
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

/* Gulp help instructions triggered as Gulp default task */
gulp.task('help', function() {
  console.log('develop - Watch sass files and generate unminified CSS for development');
  console.log('test  - Lint Sass');
  console.log('build  - Lint Sass files and generate minified CSS for production');
});

/* Gulp default task list */
gulp.task('default', ['help']);
gulp.task('develop', ['watch', 'sass:develop']);
gulp.task('test', ['lint:sass']);
gulp.task('build', ['lint:sass', 'sass:build']);
