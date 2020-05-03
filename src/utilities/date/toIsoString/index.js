'use strict';

const moment = require('moment');

module.exports = date => {
	if (!date || typeof date !== 'string') return null;
	date = new Date(date);
	if (!(date instanceof Date && !isNaN(date))) return null;
	return moment(date).toISOString(true);
};