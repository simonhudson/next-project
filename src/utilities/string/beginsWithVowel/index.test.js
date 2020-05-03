'use strict';

import { expect } from 'chai';
const beginsWithVowel = require('./index');

describe('beginsWithVowel: Checks if string begins with a vowel', () => {
	
	it(`should return false when input is not a string`, () => {
		[null, true, 10].forEach(input => {
			const actual = beginsWithVowel(input);
			expect(actual).to.equal(false);
		});
	});
	
	it(`should return false when string does not begin with vowel`, () => {
		['Hello', 'goodbye'].forEach(input => {
			const actual = beginsWithVowel(input);
			expect(actual).to.equal(false);
		});
	});
	
	it(`should return true when string does begin with vowel`, () => {
		['Apple', 'egg'].forEach(input => {
			const actual = beginsWithVowel(input);
			expect(actual).to.equal(true);
		});
	});
	
});
