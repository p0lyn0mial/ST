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
   // GET: /wesela/ksiega
   // 
   // Errors:
   //
   //
   server.get('/wesela/ksiega', function (req, res) {
       
    logger.debug('GET: wesela-ksiega: Handling request');
    try {

        logger.debug('GET: wesela-ksiega: processing request - calling handler.process method');
        handler.process()
        .then(function(result) {
            logger.debug('GET: wesela-ksiega: request ended successfully, model = %j', result);
            
            var other = require('st/db/contact_data.js').other;
            result.title = 'Księga weselna - ' + other.restaurantname + ' - ' + other.city;
            result.urls = require('st/db/paths_urls_data.js').urls;
            result.paths = require('st/db/paths_urls_data.js').paths;

            res.render('wesela/ksiega', result);
        })
        .fail(function(err) {
            var errMsg = util.format('GET: wesela-ksiega: Error while processing wesela request. Error = %s', err.message);
            logger.error(errMsg);
            //TODO: Redirect to error page
        })
        .done();
        
    } catch(err) {
        var errMsg = util.format('GET: wesela-ksiega: Error while processing newsFeed request. Error = %s', err.message);
        logger.error(errMsg);
        //TODO: Redirect to error page
    }
   });
};