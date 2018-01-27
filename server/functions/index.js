const functions = require('firebase-functions');
const _ = require('lodash');
const admin = require('firebase-admin');
	
admin.initializeApp(functions.config().firebase);

/*
* Date modified		: 1/27/2018
* Purpose			: To summarize data to visualize number of postings, grouped by positions, by every industry
*/
exports.numberOfPostingsByPositionsPerIndustry = functions.https.onRequest((request, response) => {
	response.header('Access-Control-Allow-Origin', '*');
	admin.database().ref('/data').once('value', (snapshot) => {
		var data = _(snapshot.val())
					.groupBy('industry')
					.map((value, key) => {
						var obj = {};
						obj[key] = _.countBy(value, 'position')
						return obj
					})
					.value();
    	response.status(200).send(data);
 	}).catch((error) => {
 		response.send(error.code).send(error.message);
 	});
});

/*
* Date modified		: 1/27/2018
* Purpose			: To summarize data to visualize total number of postings against number of postings by companies every month
*/
exports.numberOfPostingsByYearPerCompany = functions.https.onRequest((request, response) => {
	response.header('Access-Control-Allow-Origin', '*');
	admin.database().ref('/data').once('value', (snapshot) => {
		var data = _(snapshot.val())
					.groupBy((item) => {
						var dateObj = new Date(item['date_posted']);
						return (dateObj.getMonth() + '-' + dateObj.getFullYear());
					})
					.map((value, key) => {
						var obj = {};
						obj[key] = _.countBy(value, 'companies')
						return obj
					})
					.value();
    	response.status(200).send(data);
 	}).catch((error) => {
 		response.send(error.code).send(error.message);
 	});
});
