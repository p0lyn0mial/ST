var gulp = require('gulp');
var gzip = require('gulp-gzip');
var tar = require('gulp-tar');
var cfg = require('../config.js');


gulp.task('gzip-dist', function() {
	gulp.src(cfg.dist + '/**')
	.pipe(tar(cfg.dist + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'));
});