var gulp = require('gulp');

// Watch tasks
gulp.task('watch', function() {
  gulp.watch('scss/**/*', ['sass:develop']);
});
