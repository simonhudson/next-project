'use strict';

import { expect } from 'chai';
const uppercaseFirstCharacter = require('./index');

describe('uppercaseFirstCharacter: Converts first character of string to uppercase', () => {

	it(`should return null when input is invalid or empty string`, () => {
		[null, true, 10, ''].forEach(input => {
			const actual = uppercaseFirstCharacter(input);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return string with uppercase first character`, () => {
		const actual = uppercaseFirstCharacter('lorem Ipsum');
		expect(actual).to.equal('Lorem Ipsum');
	});

});
