'use strict';

module.exports = (str, capitalise = false) => {
	if (!str || typeof str !== 'string' || str.length < 1) return null;
	const startsWithVowel = ['a', 'e', 'i', 'o', 'u'].includes(str.charAt(0).toLowerCase());
	if (startsWithVowel) return capitalise ? 'An' : 'an';
	return capitalise ? 'A' : 'a';
};
