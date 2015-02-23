// Include gulp
// to install the plugins, run the following:
// npm install gulp-rename gulp-ruby-sass gulp-autoprefixer gulp-cache gulp-scss-lint gulp-minify-css gulp-notify --save-dev

var gulp = require('gulp')
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    scsslint = require('gulp-scss-lint');
    minifycss = require('gulp-minify-css');

// Define base folders
var src = 'sass';
var dest = 'css/responsive/latest/';

// Compile CSS from Sass files
gulp.task('sass', function() {
    return gulp.src(src + '/responsive/latest/ubuntu-styles.scss')
        .pipe(scsslint())
        .pipe(sass({ style: 'expanded' }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest(dest))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(dest))
        .pipe(notify({ message: 'Great news! your task is complete' }));
});

// watch for changes in files
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch(src + '*.scss', ['sass']);
});


// default task
gulp.task('default', ['sass']);
