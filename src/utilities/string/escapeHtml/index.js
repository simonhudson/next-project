'use strict';

module.exports = str => {
	if (!str || typeof str !== 'string' || str.length < 1) return null;
	const returnValue =
		str
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/'/g, '&#39;')
			.replace(/"/g, '&quot;');
	return returnValue;
};
