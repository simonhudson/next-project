'use strict';

import { expect } from 'chai';
const replaceSubstringInString = require('./index');

const testValues = [
	{ string: 'test lorem ipsum', expected: 'lorem ipsum', expectedWithReplacement: 'replacement lorem ipsum' },
	{ string: 'Test lorem ipsum', expected: 'lorem ipsum', expectedWithReplacement: 'replacement lorem ipsum' },
	{ string: 'TEST lorem ipsum', expected: 'lorem ipsum', expectedWithReplacement: 'replacement lorem ipsum' },
	{ string: 'tEsT lorem ipsum', expected: 'lorem ipsum', expectedWithReplacement: 'replacement lorem ipsum' },
	{ string: 'lorem TeSt ipsum', expected: 'lorem ipsum', expectedWithReplacement: 'lorem replacement ipsum' },
	{ string: 'lorem ipsum tEsT', expected: 'lorem ipsum', expectedWithReplacement: 'lorem ipsum replacement' },
	{ string: 'lorem test ipsum tEsT', expected: 'lorem ipsum', expectedWithReplacement: 'lorem replacement ipsum replacement' }
];

describe('replaceSubstringInString', () => {

	it(`should return unchanged input if invalid`, () => {
		[[1,2,3], true, {}].forEach(input => {
			const actual = replaceSubstringInString(input);
			expect(actual).to.equal(input);
		});
	});

	it(`should replace substring in string with default replacement`, () => {
		testValues.forEach(test => {
			const { string, expected } = test;
			const actual = replaceSubstringInString(string, 'test');
			expect(actual).to.equal(expected);
		});
	});

	it(`should replace substring in string with specified replacement`, () => {
		testValues.forEach(test => {
			const { string, expectedWithReplacement } = test;
			const actual = replaceSubstringInString(string, 'test', 'replacement');
			expect(actual).to.equal(expectedWithReplacement);
		});
	});

});
