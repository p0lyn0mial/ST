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
   // GET: /restauracja
   // 
   // Errors:
   //
   //
   server.get('/restauracja', function (req, res) {
       
    logger.debug('GET: restauracja: Handling request');
    try {

        logger.debug('GET: restauracja: processing request - calling handler.process method');
        handler.process()
        .then(function(result) {
            logger.debug('GET: restauracja: request ended successfully, model = %j', result);
            
            
            result.contact = require('st/db/contact_data.js').restaurant;
            result.urls = require('st/db/paths_urls_data.js').urls;
            result.paths = require('st/db/paths_urls_data.js').paths;

            var other = require('st/db/contact_data.js').other;
            result.title = 'Restauracja ' + other.restaurantname + ' - ' + other.city;
            
            res.render('restauracja/index', result);
        })
        .fail(function(err) {
            var errMsg = util.format('GET: restauracja: Error while processing restauracja request. Error = %s', err.message);
            logger.error(errMsg);
            //TODO: Redirect to error page
        })
        .done();
        
    } catch(err) {
        var errMsg = util.format('GET: restauracja: Error while processing  request. Error = %s', err.message);
        logger.error(errMsg);
        //TODO: Redirect to error page
    }
   });
};