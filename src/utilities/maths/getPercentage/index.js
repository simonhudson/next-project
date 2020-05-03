'use strict';

module.exports = (x, y) => {
	if (!x || !y || typeof x !== 'number' || typeof y !== 'number') return null;
	const value = x / y * 100;
	return parseInt(value.toFixed());
};