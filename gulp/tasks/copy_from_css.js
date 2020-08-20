var gulp = require('gulp');
var runSequence = require('run-sequence');
var cfg = require('../config.js');


gulp.task('copy-from-css-slick-fonts', function() {
  return gulp.src('src/public/css/slick/fonts/**/*', { "base" : "src/public/css/slick/" })
    .pipe(gulp.dest(cfg.distcss));
});

gulp.task('copy-from-css-slick-loader', function() {
  return gulp.src('src/public/css/slick/ajax-loader.gif', { "base" : "src/public/css/slick/" })
    .pipe(gulp.dest(cfg.distcss));
});

gulp.task('copy-from-css', function(callback) {
  runSequence(
  	'copy-from-css-slick-fonts', 
  	'copy-from-css-slick-loader',
  	 callback);
});