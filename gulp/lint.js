var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var gutil = require('gulp-util');

gulp.task('lint:scss', function() {
    var path = (gutil.env.file)? gutil.env.file : '**/*.scss';
    return gulp.src('scss/' + path)
    .pipe(scsslint())
    .pipe(scsslint.failReporter());
});
