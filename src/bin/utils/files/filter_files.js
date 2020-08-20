/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var path = require('path');
var _ = require('underscore');


/**
 * Module exports.
 */
module.exports = function(files) {
    var allowedExt = ['.jpg', '.png'];
    logger.debug('Utils:Filter files: Filtering retrieved list of files');
    var filteredfiles = files.filter(function(item) {
        logger.debug('Utils: Filter files: Utilsting file = %s ext', item);
        var fileext = path.extname(item);
        logger.debug('Utils: Filter files: fileext is = %s', fileext);
        
        logger.debug('Utils: Filter files: checking if fileext is on allowed file ext list');
        var result = _.contains(allowedExt, fileext);
        logger.debug('Utils: Filter files: is fileext on allowed file ext list = %s', result);
        return result;
    });

    return filteredfiles;
};