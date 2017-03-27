var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');


gulp.task('lucas', function(){
  console.log("oi eu sou o lucas")
});

gulp.task('css', function () {
    gulp.src('src/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', function() {
    gulp.watch('src/css/**/*.css', ['css','image']);
});
 
gulp.task('image', () =>
    gulp.src('imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imagens'))
);