var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var es = require('event-stream');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('lint', function() {
  return gulp.src(['js/*.js', 'js/**/*.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});;

gulp.task('sass', function() {
  return gulp.src('styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles'));
})

gulp.task('inject', function() {
  var mainApp = gulp.src('./js/*.js');
  var appModules = gulp.src('./js/**/*.js');

  return gulp.src('index.html')
  .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
  .pipe(inject(gulp.src(['./js/*.js', './js/**/*.js'])))
  .pipe(gulp.dest('./'));
});

gulp.task('server', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['js/*.js', 'js/**/*.js', 'styles/*.scss'], ['lint', 'inject', 'sass']);
});

gulp.task('default', ['lint', 'inject', 'server', 'sass', 'watch']);

function onError(err) {
  gutil.beep();
  gutil.log('error', gutil.colors.cyan(err));
}
