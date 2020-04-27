'use strict';

// Fake users data
const users = require('./mock-data');

export default (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(users));
};
