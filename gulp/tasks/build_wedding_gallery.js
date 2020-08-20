var gulp = require('gulp');
var path = require('path');
var cfg = require('../config.js');
var data = require('gulp-data');
var runSequence = require('run-sequence');
var files = [];
var file = require('gulp-file');

gulp.task('create-wedding-gallery-list-file', function (cb) {
	 file('wedding_gallery_list.json', JSON.stringify(files))
    .pipe(gulp.dest(cfg.distassets));
    cb(); 
})

gulp.task('get-wedding-gallery-list-file', function () {
	return gulp.src('src/public/img/wesela/galeria/*', { "base" : "src" })
    .pipe(data(function (file) {
    	files.push(path.basename(file.path));
    }))
})


gulp.task('build-wedding-gallery', function(cb) {
	runSequence(
    'get-wedding-gallery-list-file',
    'create-wedding-gallery-list-file',
  	 cb);
});