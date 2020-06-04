'use strict';

const lighthouse = require('lighthouse');
const URL = 'https://next.simonhudson.net';

module.exports = {
	onPostBuild: () => {
		console.log(`Running Lighthouse on ${URL}`);
		return lighthouse(URL).then((results) => {
			const resultsJson = results.report;
			console.log('---------------');
			console.log(JSON.stringify(resultsJson));
			console.log('---------------');
		});
	},
};
