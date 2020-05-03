'use strict';

import { expect } from 'chai';
const isEven = require('./index');

describe('isEven: Checks if number is even', () => {
	
	it(`should return null if value is not numeric`, () => {
		['string', [1,2,3], {}].forEach(value => {
			const actual = isEven(value);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return true if numeric integer value is even`, () => {
		const actual = isEven(4);
		expect(actual).to.equal(true);
	});
	
	it(`should return false if numeric integer value is not even`, () => {
		const actual = isEven(9);
		expect(actual).to.equal(false);
	});
	
	it(`should return true if numeric string value is even`, () => {
		const actual = isEven('4');
		expect(actual).to.equal(true);
	});
	
	it(`should return false if numeric string value is not even`, () => {
		const actual = isEven('9');
		expect(actual).to.equal(false);
	});

});