'use strict';

import { expect } from 'chai';
const defineArticle = require('./index');

describe('defineArticle: Defines article (e.g "a" / "an") preceding a string', () => {
	
	it(`should return null when input is invalid or empty string`, () => {
		[null, true, 10, ''].forEach(input => {
			const actual = defineArticle(input);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return 'a' when input does not start with vowel`, () => {
		['Hello', 'goodbye'].forEach(input => {
			const actual = defineArticle(input);
			expect(actual).to.equal('a');
		});
	});
	
	it(`should return 'A' when input does not start with vowel and capitalise argument is true`, () => {
		['Hello', 'goodbye'].forEach(input => {
			const actual = defineArticle(input, true);
			expect(actual).to.equal('A');
		});
	});
	
	it(`should return 'an' when input does start with vowel`, () => {
		['Apple', 'egg'].forEach(input => {
			const actual = defineArticle(input);
			expect(actual).to.equal('an');
		});
	});
	
	it(`should return 'An' when input does start with vowel and capitalise argument is true`, () => {
		['Apple', 'egg'].forEach(input => {
			const actual = defineArticle(input, true);
			expect(actual).to.equal('An');
		});
	});
	
});