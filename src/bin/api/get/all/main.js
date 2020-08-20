/*jslint node: true */

'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var util = require('util');
var cfg = require('st/cfg/cfg.js');

/**
 * Module exports.
 */
module.exports = function(server, handler) {
   
   //
   // GET: /*
   // 
   // Errors:
   //
   //
   server.get('*', function (req, res, next) {
       
    logger.debug('GET: *: Handling request');
    try {

        logger.debug('GET: *: processing request - checking req.headers.host = %s', 
        	req.headers.host);
        
        var port = cfg.get().port;
        logger.debug('GET: *: reading port from cfg file. port = ', port);
        var urls = require('st/db/paths_urls_data.js').urls;

        //TODO: Refactor: Use regexp instead
		    var cadillacsubdomain = 'cadillac'
        var expectedurl = cadillacsubdomain + '.' + urls.domain;
        var expectedurlwithwww = 'www.' + cadillacsubdomain + '.' + urls.domain;
        logger.debug('GET: *: expected url = %s, actual url = %s', expectedurl, req.headers.host);
        if(req.headers.host == expectedurl || req.headers.host == expectedurlwithwww) {
            var target = '/' + urls.wedding + '/' + urls.attractions + '/cadillac'
        	logger.info('GET: *: redirecting %s subdomain to ', cadillacsubdomain, target)
    		req.url = '/wesela/atrakcje/cadillac'
    	}
  		next();
        
    } catch(err) {
        var errMsg = util.format('GET: *: Error while processing  request. Error = %s', err.message);
        logger.error(errMsg);
        //TODO: Redirect to error page
    }
   });
};
