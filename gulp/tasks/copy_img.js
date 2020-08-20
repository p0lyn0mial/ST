var gulp = require('gulp');

var cfg = require('../config.js');

gulp.task('copy-img', function() {
  return gulp.src('src/public/img/**/*', { "base" : "src" })
    .pipe(gulp.dest(cfg.dists3));
});