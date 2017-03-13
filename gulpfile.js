var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');


gulp.task('lucas', function(){
  console.log("oi eu sou o lucas")
});

gulp.task('default', function () {
    gulp.src('src/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat', function () {
  return gulp.src('src/css/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('out/'));
});