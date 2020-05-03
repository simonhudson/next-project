'use strict';

module.exports = string => {
	if (!string || typeof string !== 'string') return null;
	return string.charAt(0).toUpperCase() + string.slice(1);
};