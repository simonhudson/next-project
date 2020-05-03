'use strict';

const moment = require('moment');
const VALID_UNITS = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];

module.exports = (date, unit, startDate) => {
	if (!date || !unit || VALID_UNITS.indexOf(unit.toLowerCase()) < 0) return null;
	startDate = startDate ? new Date(startDate) : new Date(); // If we don't specify a startDate, default to now
	date = new Date(date);
	if (isNaN(date)) return null;
	const diff = Math.floor(moment.duration(moment(startDate).diff(date)).as(unit));
	return diff;
};
