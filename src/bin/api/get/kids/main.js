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
   // GET: /bawialnia
   // 
   // Errors:
   //
   //
   server.get('/bawialnia', function (req, res) {
       
    logger.debug('GET: bawialnia: Handling request');
    try {

        logger.debug('GET: bawialnia: processing request - calling handler.process method');
        handler.process()
        .then(function(result) {
            logger.debug('GET: bawialnia: request ended successfully, model = %j', result);
            
            var other = require('st/db/contact_data.js').other;
            result.title = 'Bawialnia - ' + other.restaurantname + ' - ' + other.city;
            result.contact = require('st/db/contact_data.js').kids;
            result.urls = require('st/db/paths_urls_data.js').urls;
            result.paths = require('st/db/paths_urls_data.js').paths;
            
            res.render('bawialnia/index', result);
        })
        .fail(function(err) {
            var errMsg = util.format('GET: bawialnia: Error while processing bawialnia request. Error = %s', err.message);
            logger.error(errMsg);
            //TODO: Redirect to error page
        })
        .done();
        
    } catch(err) {
        var errMsg = util.format('GET: wesela: Error while processing newsFeed request. Error = %s', err.message);
        logger.error(errMsg);
        //TODO: Redirect to error page
    }
   });
};