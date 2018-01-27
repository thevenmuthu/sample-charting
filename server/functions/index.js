const functions = require('firebase-functions');
const _ = require('lodash');
const admin = require('firebase-admin');
	
admin.initializeApp(functions.config().firebase);

/*
* Date modified		: 1/27/2018
* Purpose			: To summarize data to visualize number of postings, grouped by positions, by every industry
*/
exports.numberOfPostingsByPositionsPerIndustry = functions.https.onRequest((request, response) => {
	admin.database().ref('/data').once('value', (snapshot) => {
		try {
			var data = _(snapshot.val())
						.groupBy('industry')
						.map(function(value, key) {
							var obj = {};
							obj[key] = _.countBy(value, 'position')
							return obj
						}).value();
        	response.status(200).send(data);
		} catch (e) {
			
		}
 	});
});
