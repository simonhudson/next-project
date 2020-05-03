'use strict';

module.exports = (valueA, valueB) => {
	valueA = parseInt(valueA, 10);
	valueB = parseInt(valueB, 10);
	if (!valueA || (valueA && isNaN(valueA)) || !valueB || (valueB && isNaN(valueB))) return null;
	const returnValue = valueA / valueB;
	return Math.round(returnValue * 100) / 100;
};