'use strict';

// Recursively cleans up empty strings, null values, and undefined values in an object.

module.exports = function cleanUpObject(object) {
	if (typeof object === 'object') {
		for (let key in object) {
			if (object[key] === '' || object[key] === null || object[key] === undefined) delete object[key];
			else if (typeof object[key] === 'object') cleanUpObject(object[key]);
		}
	}
	return object;
};
