/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');



/**
 * This are the common data
 * to be stored retrieved from database.
 */
var data = {
	wedding: {
		'name': 'Karolina',
		'phone': '604 509 947',
		'email': 'restauracja@arbi.pl'
	},
	kids: {
		'name': 'Milena',
		'phone': '781 939 949',
		'email': 'lena@starakaszarnia.pl'
	},
	restaurant: {
		'phone': '787 823 100',
		'email': 'restauracja@arbi.pl'
	},
	other: {
		'restaurantname': 'Stara Kaszarnia',
		'city': 'Człuchów'
	}
};


/**
 * Module exports.
 */
module.exports = data;