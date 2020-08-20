var gulp = require('gulp');
var path = require('path');
var cfg = require('../config.js');
var data = require('gulp-data');
var runSequence = require('run-sequence');
var files = [];
var file = require('gulp-file');

gulp.task('create-kids-gallery-list-file', function (cb) {
	 file('kids_gallery_list.json', JSON.stringify(files))
    .pipe(gulp.dest(cfg.distassets));
    cb(); 
})

gulp.task('get-kids-gallery-list-file', function () {
	return gulp.src('src/public/img/bawialnia/galeria/*', { "base" : "src" })
    .pipe(data(function (file) {
    	files.push(path.basename(file.path));
    }))
})


gulp.task('build-kids-gallery', function(cb) {
	runSequence(
    'get-kids-gallery-list-file',
    'create-kids-gallery-list-file',
  	 cb);
});