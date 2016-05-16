var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');



var errorHandler = function (error) {
  'use strict';
  notify.onError({
    message:  "Error: <%= error.message %>",
  })(error);
  console.log('\u0007');
  this.emit('end');
}


gulp.task('sass', function () {
  gulp.src('scss/*.scss')
    .pipe(sass()).on('error', errorHandler)
    .pipe(gulp.dest('./css/'));
});


gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});
