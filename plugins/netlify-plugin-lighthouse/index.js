'use strict';

const lighthouse = require('lighthouse');
const URL = 'https://next.simonhudson.net';

module.exports = {
	onPostBuild: () => {
		console.log(`Running Lighthouse on ${URL}`);
		lighthouse(URL).then((results) => {
			console.log('---------------');
			console.log(results);
			console.log('---------------');
		});
	},
};
