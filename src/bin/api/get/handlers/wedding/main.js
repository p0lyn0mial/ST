/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var fs = require('fs');
var path = require('path');
var Q = require('q');
var _ = require('underscore');
var filterfiles = require('st/utils/files/filter_files.js');

/**
 * Handler object.
 */
var handler = {
    process: function() {
        logger.debug('Get:Wedding handler: process function called');
        var deferred = Q.defer();
        
        var gallerypath = path.join(__dirname, '/../../../../../../', 'assets/wedding_gallery_list.json');
        logger.debug('Get:Wedding handler: reading directory = %s', gallerypath);
        fs.readFile(gallerypath, function(err, data) {

        	if(err) {
        		logger.error('Get:Wedding handler: Error while reading file = %s. Reason = %s', 
        			gallerypath, err.message);

        		deferred.reject(new Error(err));
        	}

        	logger.debug('Get:Wedding handler: File read successfully content is = ', 
        		data);

            logger.debug('Parsing retrieved data as a JSON');
            var files = JSON.parse(data);

        	logger.debug('Get:Wedding handler: Filtering retrieved list of files');
        	var filteredfiles = filterfiles(files);
            
        	var model = { gallery:filteredfiles };
        	deferred.resolve(model);
        });

        return deferred.promise;
    }
};

/**
 * Module exports.
 */
module.exports = handler;