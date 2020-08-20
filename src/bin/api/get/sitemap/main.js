/*jslint node: true */

'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var util = require('util');
var sitemap = require('express-sitemap');

/**
 * Module exports.
 */
module.exports = function(server) {
   
   //
   // GET: /sitemap
   // 
   // Errors:
   //
   //
   server.get('/sitemap.xml', function (req, res) {
       
    logger.debug('GET: sitemap: Handling request');
    try {
        logger.debug('GET: sitemap: genereting map object');
        var map = sitemap({
          generate: server,
          url: require('st/db/paths_urls_data.js').urls.domain,
          priority: 1.0,
          lastmod: '2015-05-06',
          route: { 
                   '/checkHealth': {disallow: true, hide: true},
                   '*': {disallow: true},
                   '/sitemap.xml': {disallow: true}
                   //'ALL': {lastmod: '2015-05-06', priority: 1.0}
                 }
        });

        logger.debug('GET: sitemap: calling XMLtoWeb method');
        map.XMLtoWeb(res);
        
    } catch(err) {
        var errMsg = util.format('GET: sitemap: Error while processing  request. Error = %s', err.message);
        logger.error(errMsg);
        //TODO: Redirect to error page
    }
   });
};