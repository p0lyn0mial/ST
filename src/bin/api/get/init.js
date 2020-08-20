/*jslint node: true */

'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');

/**
 * Module exports.
 */
module.exports = function(server) {  
    logger.info('Api:Get: Creating GET API');

     /* GET * */
    logger.debug('Api:Get: Creating default API route');
    require('st/api/get/all/main.js')(server);

    /* GET / */
    logger.debug('Api:Get: Creating default API route');
    require('st/api/get/landing/main.js')(server, 
        require('st/api/get/handlers/landing/main.js'));

    /* GET /wesela */
    logger.debug('Api:Get: Creating wesela API route');
    require('st/api/get/wedding/main.js')(server, 
        require('st/api/get/handlers/wedding/main.js'));

    /* GET /wesela/atrakcje */
    logger.debug('Api:Get: Creating wesela/atrakcje/* API route');
    require('st/api/get/wedding/attractions.js')(server,
        require('st/api/get/handlers/wedding/attractions.js'));

    /* GET /wesela/ksiega */
    logger.debug('Api:Get: Creating wesela/ksiega API route');
    require('st/api/get/wedding/guest_book.js')(server,
        require('st/api/get/handlers/wedding/guest_book.js'));

    /* GET /bawialnia */
    logger.debug('Api:Get: Creating bawialnia API route');
    require('st/api/get/kids/main.js')(server,
        require('st/api/get/handlers/kids/main.js'));

    /* GET /kontakt */
    logger.debug('Api:Get: Creating kontakt API route');
    require('st/api/get/contact/main.js')(server,
        require('st/api/get/handlers/contact/main.js'));

    /* GET /restauracja */
    logger.debug('Api:Get: Creating restauracja API route');
    require('st/api/get/restaurant/main.js')(server,
        require('st/api/get/handlers/restaurant/main.js'));

    /* GET /catering */
    logger.debug('Api:Get: Creating catering API route');
    require('st/api/get/catering/main.js')(server,
        require('st/api/get/handlers/catering/main.js'));
    
    /* GET /checkHealth */
    logger.debug('Api:Get: Creating checkHealth API route');   
    server.get('/checkHealth', function (req, res) {
      res.send('I am OK');
    });
       
    /* GET /sitemap.xml*/
    logger.debug('Api:Get: Creating sitemap API route');
    require('st/api/get/sitemap/main.js')(server);

    logger.info('Api:Get: module has been initilized');
}