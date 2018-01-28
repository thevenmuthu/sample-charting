// Server side functions to crunch and summarize data up-to certain level (To the structure that is acceptable by multiple recepients)
const functions = require('firebase-functions');
const _ = require('lodash');
const admin = require('firebase-admin');
	
admin.initializeApp(functions.config().firebase);

// Purpose: To summarize data to visualize number of postings, grouped by positions, by every industry
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


// Purpose: To summarize data to visualize total number of postings against number of postings by industries every month
exports.numberOfPostingsByMonthPerIndustry= functions.https.onRequest((request, response) => {
	response.header('Access-Control-Allow-Origin', '*');
	admin.database().ref('/data').once('value', (snapshot) => {
		var data = _(snapshot.val())
					.groupBy((item) => {
						var dateObj = new Date(item['date_posted']);
						return new Date(dateObj.getFullYear() + '.' + (dateObj.getMonth() + 1) +'.1').getTime();
					})
					.map((value, key) => {
						var obj = {};
						obj[key] = _.countBy(value, 'industry')
						return obj
					})
					.value();

		data.sort((a, b) => {
		    return  parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0]);
		});

    	response.status(200).send(data);
 	}).catch((error) => {
 		response.send(error.code).send(error.message);
 	});
});

// Purpose: To return posting data
exports.postingData = functions.https.onRequest((request, response) => {
	response.header('Access-Control-Allow-Origin', '*');
	admin.database().ref('/data').once('value', (snapshot) => {
		var data = snapshot.val();	
    	response.status(200).send(data);
 	}).catch((error) => {
 		response.send(error.code).send(error.message);
 	});
});
