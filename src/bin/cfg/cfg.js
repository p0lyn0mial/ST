/*jslint node: true */

'use strict';

/**
 * Module dependencies.
 */
var Q = require('q');
var fs = require('fs');

var cfgData = null;
var wasInitialized = false;

/**
 * Handler object.
 */
var handler = {
  init: function  (argument) {
    var deferred = Q.defer();
   
    var cfgfilename = 'config.json';
    var path = __dirname + '/' + cfgfilename;
    if (!fs.existsSync(path)) {
      var errmsg = 'Cfg: config file was not found in the following path: ' + path;
      deferred.reject(new Error(errmsg));
    }

    fs.readFile(path, function (err, data) {
      if (err) {
        deferred.reject(new Error(err));
      }
      cfgData = JSON.parse(data);
      wasInitialized = true;
      deferred.resolve();
    });

    return deferred.promise;
  },
  get: function () {
    if(wasInitialized) {
      return cfgData;
    } else {
      throw new Error('Cfg not initliazed. Call init method first !');
    }
  }
};

/**
 * Module exports.
 */
module.exports = handler;