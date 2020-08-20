var gulp = require('gulp');

var cfg = require('../config.js');

gulp.task('copy-src', function() {
  return gulp.src(['src/bin/**/*', 'src/views/**/*', 'src/*.js', 'src/start.sh'], { "base" : "src" })
    .pipe(gulp.dest(cfg.distapp));
});