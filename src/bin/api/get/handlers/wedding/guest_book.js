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
	  	title: 'Karolina i Kamil',
	  	text: 'Jesteśmy bardzo zadowoleni z organizacji wesela w Starej Kaszarni. Przesympatyczna współpraca z Panią Karoliną, klimatyczny wystrój, przepyszne jedzenie, wspaniała atmosfera, uśmiechnięta i cierpliwa obsługa, a wszystko dopięte na ostatni guzik. To nasza pierwsza i na pewno nie ostatnia przygoda w Starej Kaszarni :) Dziękujemy, a innym Parom Młodym szczerze polecamy!',
        img: ['kw_1.jpg']
	  },
	  {
	  	title: 'Marta i Michał',
	  	text: 'Wybór restauracji Stara Kaszarnia okazał się niezwykle trafny. Szczególnie miło wspominamy fantastyczną, profesjonalną obsługę dzięki której mogliśmy bawić się do białego rana, nie myśląc o tym czy wszystko idzie zgodnie z planem. Od początku do końca nad wszystkim czuwała Pani Karolina - doradzała i wspierała. Jesteśmy ogromnie wdzięczni wszystkim Pracownikom restauracji, z którymi mieliśmy przyjemność współpracować. Jedzenie - jakość i ilość spełniło nasze oczekiwania w 100%. Jeszcze raz dziękujemy!',
	  	img: ['kw_1.jpg']
	  },
	  {
	  	title: 'Ania i Paweł',
	  	text: 'Super wesele. Piękny lokal oraz wystrój. Bardzo elegancko i gustownie, a co najważniejsze ceny nie są wygurowane:)',
	  	img: ['kw_1.jpg']
	  },
	  {
	  	title: 'Agnieszka',
	  	text: 'Nie byłam w stanie nawet wyobrazić sobie, że moje wesele będzie tak ideale. Dzięki wszystkim osobom pracującym w Starej Kaszarni był to dzień, który ja i moja rodzina wspominamy z wielkim uśmiechem na twarzy.Jedzenie jest przepyszne i jest go bardzo dużo, wódka super zimna, sala klimatyzowana, pięknie przystrojona, kelnerki w białych rękawiczkach, uśmiechnięte, szefowa wszystkiego pilnuje osobiście. Jednym słowem REWELACJA!',
	  	img: ['kw_1.jpg']
	  },
	  {
		title: 'Kasia i Piotr',
		date: '02.08.2014',
		text: 'Zarówno my jak i nasi goście jesteśmy bardzo zadowoleni z organizacji wesela w Restauracji Stara Kaszarnia. Obsługa, dekoracje, jedzenie, atmosfera - wszystko na najwyższym poziomie i dopracowane w każdym szczególe. Szczerze polecamy :)',
		img: ['kw_1.jpg']
	},
	{
		title: 'Paulina & Jakub',
		date: '',
		text: 'To co zobaczyliśmy, posmakowaliśy i odczuliśy podczas zabawy weselnej przeszło nasze najśmielsze oczekiwania. Standard to dbałość o szczegóły, wyrafinowany i jakże niepowtarzalny smak potraw, klimatyczny wystrój ,obsługa chętna do pomocy i cały czas uśiechnięta. Dziękujęmy za zapewnienie nam tak pięknych wspomnień:) Szczególne podziękowania dla Pani Karoliny za profesjonalizm i sympatyczne podejście do tematu.',
		img: ['kw_1.jpg']
	},
	{
		title: 'A & D',
		date: '',
		text: 'Serdecznie dziękujemy za organizację Naszego Wesela. Jesteśmy bardzo zadowoleni z wyboru restauracji Stara Kaszarnia. Wszystko było doskonałe i na najwyższym poziomie. Pyszne jedzenie, profesjonalna i miła obsługa. Goście byli zachwyceni wystrojem sali i smacznym jedzeniem. Polecamy i dziękujemy za wszystko!',
		img: ['kw_1.jpg']
	},
	{
		title: 'Paulina i Paweł',
		date: '',
		text: 'Dziękujemy za: obslugę, która była na najwyższym poziomie, dopracowanie każdego szczegółu związanego z dekoracją wnętrza, za jedzenie, które podbiło serca gości. Dzięki Wam każdy gość stał się ważny! Pozdrawiamy i życzymy wielku tak pięknych wesel jak nasze!',
		img: ['kw_1.jpg']
	},
	{
		title: 'Marta i Damian',
		date: '',
		text: 'Zanim zaręczylismy się wiedzieliśmy, że Nasze Wesele będzie w Starej Kaszarni. Same dobre opinie, piękny wystrój, klasa i dbałość o każdy szczegół - dokładnie tak było! Począwszy od profesjonalizmu Pani Karoliny, piękny wystrój, pyszne jedzenie, wysokiej kultury kelnerów - cieprliwych, spełniających każde życzenie, uśmiechniętych, aż po zadowolonych Gości i nie zapomniane wspomnienia. Gorąco polecamy tą Restaurację!',
		img: ['kw_1.jpg']
	},
	{
		title: 'Sylwia i Zbyszek',
		date: '',
		text: 'Serdecznie dziękujemy za przygotowanie wspaniałego przyjęcia weselnego, profesjonalną obsługę, pyszne jedzenie i bardzo miłą atmosferę. Jesteśmy bardzo zadowoleni z wyboru Państwa restauracji i szczerze polecamy wszystkim, którzy planują tą najważniejszą uroczystość w swoim życiu... pozdrawiamy, Sylwia i Zbyszek',
		img: ['kw_1.jpg']
	},
	{
		title: 'Kamila i Łukasz',
		date: '',
		text: 'Pięknie dziękujemy za to, że dzień, który był dla nas najważniejszy i najpiękniejszy stał się piękną pamiątką za sprawą wielu wspaniałych osób. Dziękujemy Pani Karolinie oraz całej obsłudze restauracji za świetną organizację i wspaniałą atmosferę.',
		img: ['kw_1.jpg']
	},
	{
		title: 'Klaudia i Dawid',
		date: '',
		text: 'To bez wątpienia był najpiękniejszy dzień naszego życia. O jego spełnieniu snuliśmy marzenia, a Stara Kaszarnia spełniła je w każdym calu. Stoły były przepełnione pysznym jedzeniem, które trafiło w gusta każdej osoby, swoją rolę spełniły również Candy bar i Drink bar. Dziękujemy Starej Kaszarni za uczynienie naszego wesela magicznym, już bez wątpienia owianego legendą wśród opowieści rodzinnych!',
		img: ['kw_1.jpg']
	},
	{
		title: 'Damrawa i Paweł',
		date: '',
		text: 'Wesele w Starej Kaszarni to istny raj. Nasi goście byli zachwyceni, My nie wiedzieliśmy czy to co działo się na weselu było snem, czy rzeczywistością ? Chcieliśmy podziękować Pani Karolinie i całej obsłudze restauracji za pełen profesjonalizm od A do Z.',
		img: ['kw_1.jpg']
	},
	{
		title: 'Agnieszka i Wojtek',
		date: '13.09.2014',
		text: 'Nam i gościom bardzo podobała się nasza uroczystość weselna. Jedzenie było pyszne i było go pod dostatkiem. Obsługa była bardzo profesjonalna i miła. Byliśmy zachwyceni także wystrojem. Dodatkowym atutem jest piękne położenie nad jeziorem. Potwierdziły się wcześniejsze, dobre opinie, które słyszeliśmy o tym lokalu. Dziś także my możemy z czystym sumieniem polecić wybór Starej Kaszarni.',
		img: ['kw_1.jpg']
	},
	{
		title: 'Sylwia i Marcin',
		date: '',
		text: 'Mieliśmy wesele w Starej Kaszarni w sierpniu. Obsługa znakomita, jedzenie pyszne !!! Pani Karolina zna się na rzeczy jest konkretna i doradzi każdej młodej parze. Wszyscy goście byli bardzo zadowoleni i my również :) Polecamy!',
		img: ['kw_1.jpg']
	},
	{
		title: 'Marta i Łukasz',
		date: '',
		text: 'Sala bardzo fajna i duża a jeszcze lepsze jedzenie:)',
		img: ['kw_1.jpg']
	}
	]
};

/**
 * Handler object.
 */
var handler = {
    process: function() {
        logger.debug('Get:GuestBook handler: process function called');
        var deferred = Q.defer();

        deferred.resolve(model);

        return deferred.promise;
    }
};

/**
 * Module exports.
 */
module.exports = handler;