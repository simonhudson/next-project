'use strict';

import { expect } from 'chai';
const stripWhiteSpace = require('./index');

describe('stripWhiteSpace: Strip white space from string', () => {
		
	it(`should return unchanged input if invalid`, () => {
		[[1,2,3], true, {}].forEach(input => {
			const actual = stripWhiteSpace(input);
			expect(actual).to.equal(input);
		});
	});
	
	it(`should return string with whitespace removed`, () => {
		const actual = stripWhiteSpace(' lorem Ipsum  dolor   foo  ');
		expect(actual).to.equal('loremIpsumdolorfoo');
	});

});