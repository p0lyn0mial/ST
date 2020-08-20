var gulp = require('gulp');
var rimraf = require('rimraf');
var cfg = require('../config.js');

gulp.task('clean-dist', function (cb) {
    rimraf(cfg.dist, cb);
});