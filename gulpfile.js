var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var exec = require('child_process').exec;


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

gulp.task('calcdeps', function () {
  exec('./calcdeps.sh', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
})


gulp.task('watch', function () {
  gulp.watch('scss/**', ['sass']);
  gulp.watch(['js/*', '!js/my-deps.js'], ['calcdeps']);
});
