//TODO: output a min and dev version
//TODO: get a test task working

var browserify = require('browserify');
var babel = require('gulp-babel');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var del = require('del');
require('babel-register')({
  presets: ['es2015']

});
var srcDir = 'src/**/*.js';
var testDir = 'test/**/*.js';

gulp.task('default', () => {
  return gulp.src(srcDir)
  .pipe(babel())
  .pipe(gulp.dest('dist'));
});

gulp.task('build', ['rename:dev', 'rename:prod']);

gulp.task('rename:dev', ['bundle'], () => {
  gulp.src('build/main.js')
  .pipe(rename("maduro.js"))
    .pipe(gulp.dest("./dist"));
});

gulp.task('rename:prod', ['bundle'], () => {
  gulp.src('build/main.js')
    .pipe(rename("maduro.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});

gulp.task('watch', ['clean'], () => {
  gulp.watch([srcDir, testDir], ['lint', 'test']);
});

gulp.task('clean', () => {
  del(['build/*', 'dist/*'], {dot: true});
});

gulp.task('lint', () => {
  gulp.src([srcDir])
    .pipe(eslint({
      extends: 'airbnb'
    }))
    .pipe(eslint.format());
});

gulp.task('test', () => {
  gulp.src(testDir, {read: false})
    .pipe(mocha({
      reporter: 'spec',
      compilers: 'js:babel-core/register'
    }))
    .on('error', function(err) {
      gutil.log(err);
      this.emit('end')
    });
});

gulp.task('babel', ['clean'], () => {
  gulp.src([srcDir])
    .pipe(babel({presets:['es2015']}))
    .pipe(gulp.dest('build/'));
});

gulp.task('bundle', ['babel'], () => {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: 'build/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    // Add transformation tasks to the pipeline here.
    .on('error', gutil.log)
    .pipe(gulp.dest('build/'));
});

