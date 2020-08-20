var gulp = require('gulp');
var cfg = require('../config.js');
var gulpif = require('gulp-if');

gulp.task('make-debug-version', function() {
	gulp.src(cfg.dists3public + '/**/*')
	.pipe(gulpif(args.isDebug(), gulp.dest(cfg.dist + '/app/public')))
    //.pipe(gulp.dest(cfg.dist + '/app/public'));
});