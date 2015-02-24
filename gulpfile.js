
var gulp = require('gulp')
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    scsslint = require('gulp-scss-lint');
    minifycss = require('gulp-minify-css');


gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(scsslint())
        .pipe(sass({ style: 'expanded' }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css/'))
        .pipe(notify({ message: 'Great news! your build is complete' }));
});

gulp.task('sass-lite', function() {
    return gulp.src('scss/ubuntu-styles.scss')
        .pipe(sass({ style: 'expanded' }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css/'));
});


gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass-lite']);
});


gulp.task('default', ['sass']);