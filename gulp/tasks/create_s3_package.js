var gulp = require('gulp');
var runSequence = require('run-sequence');
var cfg = require('../config.js');

gulp.task('create-s3-package', function(callback) {
  runSequence(
  	'build-css',
  	'copy-img', 
  	'copy-js', 
  	'copy-docs', 
  	'copy-from-css', 
  	 callback);
});