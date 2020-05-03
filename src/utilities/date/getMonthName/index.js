'use strict';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

module.exports = (value, truncate) => {
	value = parseInt(value, 10);
	if (isNaN(value) || (value > 12 || value < 0)) return null;
	const index = value - 1;
	truncate = truncate ? truncate : false;
	let monthName = MONTHS[index];
	if (truncate && typeof truncate === 'boolean') monthName = monthName.substr(0, 3);
	return monthName;
};