var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

gulp.task('lint:sass', function() {
  return gulp.src('sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
