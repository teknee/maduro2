//TODO: output a min and dev version
//TODO: get a test task working

var browserify = require('browserify');
var babel = require('gulp-babel');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist'));
});

gulp.task('javascript', () => {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: 'src/index.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // Add transformation tasks to the pipeline here.
    .pipe(babel())
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});
