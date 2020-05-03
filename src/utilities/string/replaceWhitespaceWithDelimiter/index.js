'use strict';

module.exports = (string, delimiter = '-') => {
	if (!string || typeof string !== 'string') return string;
	return string.replace(/\s+/g, delimiter);
};