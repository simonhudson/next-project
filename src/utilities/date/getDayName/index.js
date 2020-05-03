'use strict';

const DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
];

module.exports = (value, truncate) => {
	value = parseInt(value, 10);
	if (isNaN(value) || (value > 7 || value < 0)) return null;
	const index = value - 1;
	truncate = truncate ? truncate : false;
	let dayName = DAYS[index];
	if (truncate && typeof truncate === 'boolean') dayName = dayName.substr(0, 3);
	return dayName;
};