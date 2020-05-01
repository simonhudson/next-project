'use strict';

const users = require('./mock-data');

export default (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	const user = users.filter((user) => user.id.toString() === req.query.id);
	if (!user || !user.length) return res.end('No user found');
	res.end(JSON.stringify(user[0]));
};
