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
   // GET: /wesela/atrakcje
   // 
   // Errors:
   //
   //
   server.get('/wesela/atrakcje', function (req, res) {
       
    logger.debug('GET: wesela-atrakcje: Handling request');
    try {

        logger.debug('GET: wesela-atrakcje: processing request - calling handler.process method');
        handler.process()
        .then(function(result) {
            logger.debug('GET: wesela-atrakcje: request ended successfully, model = %j', result);
            
            var other = require('st/db/contact_data.js').other;
            result.title = 'Atrakcje weselne - ' + other.restaurantname + ' - ' + other.city;
            result.urls = require('st/db/paths_urls_data.js').urls;
            result.paths = require('st/db/paths_urls_data.js').paths;

            res.render('wesela/atrakcje', result);
        })
        .fail(function(err) {
            var errMsg = util.format('GET: wesela-atrakcje: Error while processing wesela request. Error = %s', err.message);
            logger.error(errMsg);
            //TODO: Redirect to error page
        })
        .done();
        
    } catch(err) {
        var errMsg = util.format('GET: wesela-atrakcje: Error while processing newsFeed request. Error = %s', err.message);
        logger.error(errMsg);
        //TODO: Redirect to error page
    }
   });

   //
   // GET: /wesela/atrakcje/cadillac
   // 
   // Errors:
   //
   //
   server.get('/wesela/atrakcje/cadillac', function (req, res) {
       
    logger.debug('GET: wesela-atrakcje-cadillac: Handling request');
    try {

        var other = require('st/db/contact_data.js').other;
        var model = { };
        model.title = 'Atrakcje weselne Cadillac Fleetwood - ' + other.restaurantname + ' - Trójmiasto ' + ' - ' + other.city;
        model.urls = require('st/db/paths_urls_data.js').urls;
        model.paths = require('st/db/paths_urls_data.js').paths;

        res.render('wesela/atrakcje/cadillac', model);
        
    } catch(err) {
        var errMsg = util.format('GET: wesela-atrakcje-cadillac: Error while processing newsFeed request. Error = %s', err.message);
        logger.error(errMsg);
        //TODO: Redirect to error page
    }
   });
   

};