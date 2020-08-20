/*jslint node: true */

'use strict';

/**
 * Module dependencies.
 */

var app = require('st/app.js');
var util = require('util');
var Q = require('q');
var cfg = require('st/cfg/cfg.js');

/**
 * Enter routine
 * 
 */
app.init()
.then(function() {
    var logger = require('st/utils/logger/logger.js');
   
    //TODO: Port should be passed as a command line arg
    var instance = app.server.listen(cfg.get().port, function() {
        var msg = util.format('Starting server at %s:%d', 
        	instance.address().address, 
        	instance.address().port);
        console.log(msg);
        logger.info(msg);
        
        logger.debug('Server: Subscribing for SIGINT - aka. Ctrl+C - event. This event will be handled via app.deInit method');
        process.on('SIGINT', app.deInit);
    });
})
.fail(function(err) {
   console.log('Error: Unable to start the server. Reason = %s', err.message);
})
.done();