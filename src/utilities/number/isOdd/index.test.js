'use strict';

import { expect } from 'chai';
const isOdd = require('./index');

describe('isOdd: Checks if number is odd', () => {
	
	it(`should return null if value is not numeric`, () => {
		['string', [1,2,3], {}].forEach(value => {
			const actual = isOdd(value);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return true if numeric integer value is odd`, () => {
		const actual = isOdd(5);
		expect(actual).to.equal(true);
	});
	
	it(`should return false if numeric integer value is not odd`, () => {
		const actual = isOdd(10);
		expect(actual).to.equal(false);
	});
	
	it(`should return true if numeric string value is odd`, () => {
		const actual = isOdd('5');
		expect(actual).to.equal(true);
	});
	
	it(`should return false if numeric string value is not odd`, () => {
		const actual = isOdd('10');
		expect(actual).to.equal(false);
	});

});