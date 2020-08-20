var gulp = require('gulp');
var rimraf = require('rimraf');
var cfg = require('../config.js');

gulp.task('clean-dist-s3', function (cb) {
    rimraf(cfg.dists3, cb);
});