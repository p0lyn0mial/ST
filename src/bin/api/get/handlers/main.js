/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');

/**
 * Handler object.
 */
var handler = {
    process: function() {
        logger.debug('Get:Main:Handler: process function called');
        
        return { title: 'Hey', message: 'Hello there from handler!'};
    }
};

/**
 * Module exports.
 */
module.exports = handler;