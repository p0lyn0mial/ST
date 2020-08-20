/*jslint node: true */

'use strict';

var cfg = require('st/cfg/cfg.js');

var logger = require('st/utils/logger/create_logger.js')(true, cfg.get().loglevel);
module.exports = logger;