'use strict';

module.exports = values => {
	if (!values || !Array.isArray(values) || !values.length) return null;
	const average = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
	return isNaN(average) ? null : average;
};