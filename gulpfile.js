var gulp = require('gulp');
  browserify = require('gulp-browserify'),
  rename = require('gulp-rename');

gulp.task('bundle', function() {
  gulp.src('src/app.js')
    .pipe(browserify({
      transform: ['mithrilify', 'babelify']
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('dist/'))
});