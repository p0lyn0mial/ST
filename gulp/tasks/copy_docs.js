var gulp = require('gulp');

var cfg = require('../config.js');

gulp.task('copy-docs', function() {
  return gulp.src('src/public/docs/**/*', { "base" : "src" })
    .pipe(gulp.dest(cfg.dists3));
});