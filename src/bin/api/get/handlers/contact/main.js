/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var Q = require('q');
/**
 * Handler object.
 */
var handler = {
    process: function() {
        logger.debug('Get:Contact handler: process function called');

        var deferred = Q.defer();
        var model = {};
        deferred.resolve(model);

        return deferred.promise;
    }
};

/**
 * Module exports.
 */
module.exports = handler;