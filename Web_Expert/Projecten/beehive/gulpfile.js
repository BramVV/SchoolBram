const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
gulp.task('sass', function() {
    sass('scss/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('css'));
});
gulp.task('default', function() {
    gulp.watch('scss/*.scss',['sass']);
});