var gulp       = require('gulp'),
    tsc        = require('gulp-typescript'),
    tslint     = require('gulp-tslint'),
    browserify = require('gulp-browserify');

// Lint typescript
gulp.task('lint', function() {
  return gulp.src('src/ts/**/*.ts')
         .pipe(tslint())
         .pipe(tslint.report('verbose'));
});

gulp.task('compile', function() {
  return gulp.src('src/ts/**/*.ts')
         .pipe(tsc())
         .pipe(gulp.dest('src/js'));
});

gulp.task('default', ['lint', 'compile']);
