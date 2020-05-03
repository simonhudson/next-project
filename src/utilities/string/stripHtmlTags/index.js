'use strict';

module.exports = str => {
	if (!str || typeof str !== 'string' || str.length < 1) return null;
	const returnValue =
		str
			.replace(/</g, '')
			.replace(/>/g, '');
	return returnValue;
};
