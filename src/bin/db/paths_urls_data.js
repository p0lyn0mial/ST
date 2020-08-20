/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var cfg = require('st/cfg/cfg.js');


/**
 * This are the common urls paths data
 * to be stored retrieved from json file.
 */
var data = {
	urls:  {
		'wedding': 'wesela',
		'attractions': 'atrakcje',
		'guest_book': 'ksiega',
		'restaurant': 'restauracja',
		'kids': 'bawialnia',
		'catering': 'catering',
		'contact': 'kontakt',
		'chilli': 'http://chilliobiad.pl',
		'domain': 'starakaszarnia.pl'
	},
	paths: {
		'docs': cfg.get().resources.url + '/docs',
		'img': cfg.get().resources.url + '/img',
		'js': cfg.get().resources.url + '/js',
		'css': cfg.get().resources.url + '/css'
	}
};


/**
 * Module exports.
 */
module.exports = data;