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
   // GET: /kontakt
   // 
   // Errors:
   //
   //
   server.get('/kontakt', function (req, res) {
       
    logger.debug('GET: kontakt: Handling request');
    try {

        logger.debug('GET: kontakt: processing request - calling handler.process method');
        handler.process()
        .then(function(result) {
            logger.debug('GET: kontakt: request ended successfully, model = %j', result);
            
            var other = require('st/db/contact_data.js').other;
            result.title = 'Kontakt - ' + other.restaurantname + ' - ' + other.city;
            result.data = require('st/db/contact_data.js');
            result.urls = require('st/db/paths_urls_data.js').urls;
            result.paths = require('st/db/paths_urls_data.js').paths;
            
            res.render('kontakt/index', result);
        })
        .fail(function(err) {
            var errMsg = util.format('GET: kontakt: Error while processing kontakt request. Error = %s', err.message);
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