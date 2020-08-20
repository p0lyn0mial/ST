var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var cfg = require('../config.js');


var data = [
	'src/public/css/bawialnia/**/*.css',
	'src/public/css/catering/**/*.css',
	'src/public/css/custom/**/*.css',
	'src/public/css/foundation/**/*.css',
	'src/public/css/foundation_custom/**/*.css',
	'src/public/css/kontakt/**/*.css',
	'src/public/css/landing/**/*.css',
	'src/public/css/restauracja/**/*.css',
	'src/public/css/slick/**/*.css',
	'src/public/css/slick_custom/**/*.css',
	'src/public/css/wesela/**/*.css'
];

gulp.task('build-css', function() {
  return gulp.src(data)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(cfg.distcss));
});