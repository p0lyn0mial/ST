var gulp = require('gulp');
require('require-dir')('./gulp/tasks');
var runSequence = require('run-sequence');
var minimist = require('minimist');


var commandLineArguments = {  string: 'env',  default: { env: process.env.NODE_ENV || 'debug' }};
args = minimist(process.argv.slice(2), commandLineArguments);
args.isDebug = function() {return args.env === 'debug'};

gulp.task('default', function(callback) {
  runSequence(
    'clean-dist',
    'clean-dist-s3',
    'build-wedding-gallery',
    'build-kids-gallery',
  	'copy-src',
    'create-s3-package', 
  	'copy-node-modules',
  	'gzip-dist',
    'make-debug-version',
  	 callback)
});