/*jslint node: true */

'use strict';

var winston = require('winston');
var fs = require('fs');

var wasInitialized = false;

module.exports = function (fileLogOutlet, loglevel) {   
   
   if(wasInitialized) {
       return winston;
   } 
    
   if (typeof fileLogOutlet === 'undefined') { 
       fileLogOutlet = false; 
   }
   
   if(fileLogOutlet) {
       var logfilename = 'server.log';
       var logdirname = 'logs';
       
       // CREATE DIR WHERE LOGS WILL BE STORED
       // Note: __dirname points to module path
       // TODO: Error handling
       var path = __dirname + '/../../../' + logdirname;
       if (!fs.existsSync(path)) {
           fs.mkdirSync(path);   
       }
       
       // ADD FILE LOG TRANSPORT
       // TODO: Would be nice to specify log level from configuration file
       // TODO: Add Log rotation ! 
       winston.add(winston.transports.File, { name: 'serverlog', dirname: logdirname, filename: logfilename, level: loglevel});
       winston.remove(winston.transports.Console);  
   } else {
       winston.remove(winston.transports.Console);
       winston.add(winston.transports.Console, {level: loglevel});
   }
   
   wasInitialized = true;
   return winston;
};