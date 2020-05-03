'use strict';

module.exports = obj => {
	if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;

	const orderedObj = {};

	Object.keys(obj)
		.sort()
		.forEach(key => orderedObj[key] = obj[key]);

	return orderedObj;
};
