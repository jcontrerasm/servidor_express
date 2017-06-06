
const gulp        = require('gulp'),
      babel       = require('gulp-babel'),
      concat      = require('gulp-concat'),
      uglify      = require('gulp-uglify'),
      stylus      = require('gulp-stylus'),
      inject      = require('gulp-inject'),
      browserSync = require('browser-sync').create(),
      pug         = require('gulp-pug');

// npm install --save-dev gulp-babel babel-preset-es2015
// npm install --save-dev gulp-concat
// npm install --save-dev gulp-uglify
gulp.task('js' , function () {
  gulp.src('./js/src/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/dist/'))
    .pipe(browserSync.stream());
});

// npm install --save-dev gulp-stylus
gulp.task('css', function () {
  gulp.src('./css/src/styles.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/dist/'))
    .pipe(browserSync.stream());
});

// npm install --save-dev gulp-pug
gulp.task('html', function () {
  gulp.src('./html/src/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

// npm install --save-dev gulp-inject
gulp.task('inject', function () {
  let target = gulp.src('./index.html');
  let sources = gulp.src(['./js/dist/*.js', './css/dist/*.css'], {read: false});
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

// npm install browser-sync gulp --save-dev
gulp.task('server', function() {

  browserSync.init({
    server: './'
  });

  gulp.watch('./html/src/*.pug', ['html']);
  gulp.watch('./css/src/*.styl', ['css']);
  gulp.watch('./js/src/*.js', ['js']);

});

gulp.task('default', ['server', 'inject']);