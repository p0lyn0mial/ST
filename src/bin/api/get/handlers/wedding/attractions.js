/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var logger = require('st/utils/logger/logger.js');
var Q = require('q');


/**
 * This is guest book model 
 * to be stored retrieved from database.
 */
var model = {
	data: [
	  {
	  	title: 'Wata cukrowa',
	  	text: 'Trochę słodkości dla Twoich gości :)',
	  	img: ['wata_1.jpg', 'wata_2.jpg', 'wata_3.jpg']
	  },
	  {
	  	title: 'Stół wiejski',
	  	text: 'Czyli kącik ze swojskim jadłem. Pęta kiełbas, boczek, szynki, schaby, kabanosy, chleb wiejski, smalec i ogórki, to wszystko dla gości spragnionych wyrobów specjalnie przygotowanych na imprezy. Lokal daje możliwość dowozu własnych wyrobów.',
	  	img: ['wiejski_1.jpg']
	  },
	  {
	  	title: 'Kącik lodowy',
	  	text: 'Raj dla lodożerców. 7 wybranych smaków lodów, posypki, polewy, owoce w żelu, bita śmietana, wafelki różnego rodzaju. Wszystko czego dusza zapragnie. Przy kąciku lodowym preferowana jest samoobsługa, co daje jeszcze większą frajdę.',
	  	img: ['lody_1.jpg']
	  },
	  {
	  	title: 'Fontanna czekoladowa',
	  	text: 'Słodka niespodzianka dla gości, szczególnie dla łasuchów. Uatrakcyjnia stół deserowy i jest niezapomnianym elementem wszelkich imprez.',
	  	img: ['fontanna_1.jpg']
	  },
	  {
	  	title: 'Open bar',
	  	text: 'Przeznaczony i dla osób dorosłych, i dla dzieci. Barman serwujący nieskończoną liczbę wyśmienitych drinków alkoholowych i bezalkoholowych to fantastyczna alternatywa dla tych, którzy chcą zakosztować nowych, oryginalnych smaków z całego świata.',
	  	img: ['bar_1.jpg']
	  },
	  {
	  	title: 'Cadillac fleetwood',
	  	text: 'Do ślubu, na urodziny 50-letnim klasykiem. Czemu nie?  6-osobowe auto z kierowcą zapewni komfort podczas całej podróży.',
	  	img: ['cadillac_1.jpg']
	  },
	  /*{
	  	title: 'Grill',
	  	text: 'Świeże, soczyste mięso z grilla przyrządzane przez naszych kucharzy dla Państwa gości. Czy można się temu oprzeć?',
	  	img: ['grill_1.jpg']
	  },
	  {
	  	title: 'Foto budka',
	  	text: '',
	  	img: ['foto_1.jpg']
	  },*/
	  {
	  	title: 'Piwo z kegi',
	  	text: 'Na ochłodę w ciepłe dni. Doskonały dodatek do grilla, choć bardzo często występuje też samodzielnie.',
	  	img: ['piwo_1.jpg']
	  },
	  {
	  	title: 'Czerwony dywan',
	  	text: 'Dla tych, którzy chcą się poczuć jak gwiazdy na gali wręczenia Oscarów.',
	  	img: ['dywan_1.jpg']
	  },
	  {
	  	title: 'Bańki mydlane',
	  	text: 'Aby umilić gościom czas składania życzeń. Ponadto pięknie odbijają światło i są ciekawym elementem zdjęć.',
	  	img: ['banki_1.jpg']
	  },
	]
};

/**
 * Handler object.
 */
var handler = {
    process: function() {
        logger.debug('Get:Atractions handler: process function called');
        var deferred = Q.defer();

        deferred.resolve(model);

        return deferred.promise;
    }
};

/**
 * Module exports.
 */
module.exports = handler;