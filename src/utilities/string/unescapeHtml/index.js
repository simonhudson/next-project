'use strict';

module.exports = str => {
	if (!str || typeof str !== 'string' || str.length < 1) return null;
	const returnValue =
		str
			.replace(/&amp;/g , '&')
			.replace(/&lt;/g  , '<')
			.replace(/&gt;/g  , '>')
			.replace(/&#39;/g , "'")
			.replace(/&quot;/g, '"');
	return returnValue;
};
