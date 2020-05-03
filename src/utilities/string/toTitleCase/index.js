'use strict';

const EXCLUSIONS = [
	'a',
	'above',
	'across',
	'after',
	'an',
	'and',
	'around',
	'at',
	'before',
	'behind',
	'below',
	'beside',
	'between',
	'but',
	'by',
	'down',
	'during',
	'for',
	'for',
	'from',
	'in',
	'inside',
	'nor',
	'of',
	'off',
	'on',
	'onto',
	'or',
	'out',
	'so',
	'the',
	'through',
	'to',
	'under',
	'up',
	'with',
	'yet',
];

module.exports = string => {
	if (!string || typeof string !== 'string') return null;
	let returnValue = '';
	string.split(/\s+/g).forEach((item, index) => {
		if (index === 0 || !EXCLUSIONS.includes(item.toLowerCase())) returnValue += `${item.charAt(0).toUpperCase() + item.slice(1)} `;
		else returnValue += `${item} `;
	});
	return returnValue.trim();
};