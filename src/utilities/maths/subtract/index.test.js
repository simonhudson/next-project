'use strict';

import { expect } from 'chai';
const subtract = require('./index');

describe(`subtract: subtracts numeric values`, () => {
	
	it(`should return null when only one integer value is passed`, () => {
		const actual = subtract(3);
		expect(actual).to.equal(null);
	});
	
	it(`should return null when only one string value is passed`, () => {
		const actual = subtract('hello');
		expect(actual).to.equal(null);
	});
	
	it(`should return value when two numeric values are passed`, () => {
		const actual = subtract(5, '3');
		expect(actual).to.equal(2);
	});
	
	it(`should return value when two integer values are passed`, () => {
		const actual = subtract(15, 4);
		expect(actual).to.equal(11);
	});
	
	it(`should handle negative values`, () => {
		const actual = subtract(-5, 3);
		expect(actual).to.equal(-8);
	});
	
});