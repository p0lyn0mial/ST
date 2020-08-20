'use strict';

var distdirname = 'dist';
var dists3dirname ='dist_s3';
var dists3publicdirname = dists3dirname + '/public';

module.exports = {
  dist: distdirname,
  distapp: distdirname + '/app',
  distassets: distdirname + '/assets',
  dists3: dists3dirname,
  dists3public: dists3publicdirname,
  distcss: dists3publicdirname + '/css',
  distimg: dists3publicdirname + 'img',
  distjs: dists3publicdirname +'/js',
  distnode: distdirname + '/node_modules'
};