/*jslint node: true */

'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var express = require('express');
var cfg = require('st/cfg/cfg.js');

/**
 * Module exports.
 */
module.exports = function(server) {
    logger.info('Api: Initializing module');
    
    /* EXPRESS JS INITIALIZATION */
    logger.debug('Api: Setting jade as a express view engine');
    server.set('view engine', 'jade');
    
    logger.debug('Api: Setting directory public as a folder which contains statis assets');
    if(cfg.get().resources.local === 'true') {
      server.use(express.static('public'));  
    }

    /* GET API INITIALIZATION */
    logger.info('Api: Creating GET API');   
    require('st/api/get/init.js')(server);
        
    logger.info('Api: Api module has been initilized');
}