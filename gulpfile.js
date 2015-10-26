var gulp = require('gulp');

var sass = require('gulp-sass');
gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./bulid/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.start("sass");
});
 