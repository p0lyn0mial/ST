var gulp = require('gulp');
var cfg = require('../config.js');

gulp.task('copy-js', function() {
  return gulp.src('src/public/js/**/*', { "base" : "src" })
    .pipe(gulp.dest(cfg.dists3));
});