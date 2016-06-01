var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var exec = require('child_process').exec;
var path = require('path');

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

gulp.task('scripts', function() {   
  var command = path.join(__dirname, 'node_modules/google-closure-library/closure/bin/build/closurebuilder.py');
    command += ' --root="' + path.join(__dirname, 'src/') + '"';
    command += ' --root="' + path.join(__dirname, 'node_modules/google-closure-library/') + '"';
    command += ' --namespace="tr.lUserProfile.userProfile"';
    //command += ' --output_mode="script"'
    command += ' --output_mode=compiled'
    command += ' --compiler_jar=compiler.jar'
    command += ' --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS"'
    command += ' --output_file="' + path.join(__dirname, 'js/userProfile.js') + '"';
  console.log(command);
  exec(command);
})

gulp.task('watch', function () {
  gulp.watch('scss/**', ['sass']);
  //gulp.watch(['js/*', '!js/my-deps.js'], ['calcdeps']);
});
