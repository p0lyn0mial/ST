/*jslint node: true */

'use strict';

/**
 * Module dependencies.
 */

var express = require('express')();
var cfg = require('st/cfg/cfg.js');
var Q = require('q');

/**
 * Module object.
 */
var app = {
    server: null,
    init: function() {
        var deferred = Q.defer();
        app.server = express;

        cfg.init()
        .then(function() {
            var logger = require('st/utils/logger/logger.js');
            logger.info('App: Initializing app module');
            logger.debug('App: configuration file intialized successfully');
            

            logger.debug('App: Initializing API module');
            require('st/api/api.js')(app.server);
            logger.debug('App: API module has been intialized');

            logger.info('App: Moudle has been intialized');
            deferred.resolve();
        })
        .fail(function(err) {
            deferred.reject(err);
        })
        .done();

        return deferred.promise;
    },
    deInit: function() {
        var logger = require('st/utils/logger/logger.js');
        logger.debug('App: Deinitializing app module called.');
        logger.info('App: Exiting.');

        // FIXME This is a workaround for https://github.com/flatiron/winston/issues/228
        // If we exit immediately winston does not get a chance to write the last log message.
        // So we wait a short time before exiting
        setTimeout( function() {
            process.exit();
        }, 500); 
    }
};

/**
 * Module exports.
 */
module.exports = app;