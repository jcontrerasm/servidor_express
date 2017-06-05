
const gulp        = require('gulp'),
      babel       = require('gulp-babel'),
      concat      = require('gulp-concat'),
      uglify      = require('gulp-uglify'),
      stylus      = require('gulp-stylus'),
      //browserSync = require('browser-sync').create(),
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
  console.log('Compilacion de JS finalizada.');
});

// npm install --save-dev gulp-stylus
gulp.task('css', function () {
  gulp.src('./css/src/styles.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/dist/'));
  console.log('Compilacion de CSS finalizada.');
});

// npm install --save-dev gulp-pug
gulp.task('html', function () {
  gulp.src('./html/src/*.pug')
    .pipe(pug({

    }))
    .pipe(gulp.dest('html/dist'));
  console.log('Compilacion de HTML finalizada.');
});

gulp.task('watch', function() {
  gulp.watch('./js/src/*.js', ['js'])
  gulp.watch('./css/src/*.styl', ['css'])
  gulp.watch('./html/src/*.pug', ['html'])
  console.log('Se estan observando los cambios en HTML,CSS Y JS.');
});

gulp.task('default', ['watch']);