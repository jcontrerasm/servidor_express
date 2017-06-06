
const gulp        = require('gulp'),
      babel       = require('gulp-babel'),
      concat      = require('gulp-concat'),
      uglify      = require('gulp-uglify'),
      stylus      = require('gulp-stylus'),
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
    .pipe(gulp.dest('js/dist/'));
});

// npm install --save-dev gulp-stylus
gulp.task('css', function () {
  gulp.src('./css/src/styles.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/dist/'));
});

// npm install --save-dev gulp-pug
gulp.task('html', function () {
  gulp.src('./html/src/*.pug')
    .pipe(pug({

    }))
    .pipe(gulp.dest('html/dist'));
});

gulp.task('watch', function() {

  browserSync.init({
    server: './html/dist/'
  });

  gulp.watch('./js/src/*.js', ['js']).on('change', browserSync.reload);
  gulp.watch('./css/src/*.styl', ['css']).on('change', browserSync.reload);
  gulp.watch('./html/src/*.pug', ['html']).on('change', browserSync.reload);
});

gulp.task('default', ['watch']);