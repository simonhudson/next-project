'use strict';

import { expect } from 'chai';
const replaceWhiteSpaceWithDelimiter = require('./index');

const ORIGINAL_STRING = 'lorem Ipsum  dolor   foo'; 

describe('replaceWhiteSpaceWithDelimiter: Replaces spaces in string with specified delimiter', () => {
	
	it(`should return unchanged input if invalid`, () => {
		[[1,2,3], true, {}].forEach(input => {
			const actual = replaceWhiteSpaceWithDelimiter(input);
			expect(actual).to.equal(input);
		});
	});
	
	it(`should return formatted string using default delimiter`, () => {
		const actual = replaceWhiteSpaceWithDelimiter(ORIGINAL_STRING);
		expect(actual).to.equal('lorem-Ipsum-dolor-foo');
	});
	
	it(`should return formatted string using specified delimiter`, () => {
		const actual = replaceWhiteSpaceWithDelimiter(ORIGINAL_STRING, '+');
		expect(actual).to.equal('lorem+Ipsum+dolor+foo');
	});

});