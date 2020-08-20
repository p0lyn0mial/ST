/*jslint node: true */

'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var util = require('util');
var Q = require('q');

/**
 * Module exports.
 */
module.exports = function(server, handler) {
   
   //
   // GET: /
   // 
   // Errors:
   //
   //
   server.get('/', function (req, res) {
       
    logger.debug('GET: landing: Handling request');
    try {

        logger.debug('GET: landing: processing request - calling handler.process method');
        handler.process()
        .then(function(result) {
            logger.debug('GET: landing: request ended successfully, model = %j', result);
            
            var other = require('st/db/contact_data.js').other;
            result.title = other.restaurantname + ' - Wesela - Imprezy okolicznościowe - Catering' + ' - ' + other.city;
            result.urls = require('st/db/paths_urls_data.js').urls;
            result.paths = require('st/db/paths_urls_data.js').paths;
            
            res.render('landing/index', result);
        })
        .fail(function(err) {
            var errMsg = util.format('GET: landing: Error while processing landing request. Error = %s', err.message);
            logger.error(errMsg);
            //TODO: Redirect to error page
        })
        .done();
        
    } catch(err) {
        var errMsg = util.format('GET: kontakt: Error while processing  request. Error = %s', err.message);
        logger.error(errMsg);
        //TODO: Redirect to error page
    }
   });
};