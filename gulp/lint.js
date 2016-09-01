var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

gulp.task('lint:sass', function() {
  return gulp.src('scss/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
