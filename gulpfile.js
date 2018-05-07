var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets'),
  clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('dist', { read: false })
    .pipe(clean());
});

gulp.task('bundle', function () {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('./dist'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'bundle']);