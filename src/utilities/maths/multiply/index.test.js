'use strict';

import { expect } from 'chai';
const multiply = require('./index');

describe(`multiply: multiplies numeric values together`, () => {
	
	it(`should return null when only one integer value is passed`, () => {
		const actual = multiply(3);
		expect(actual).to.equal(null);
	});
	
	it(`should return null when only one string value is passed`, () => {
		const actual = multiply('hello');
		expect(actual).to.equal(null);
	});
	
	it(`should return value when two numeric values are passed`, () => {
		const actual = multiply(5, '3');
		expect(actual).to.equal(15);
	});
	
	it(`should return value when two integer values are passed`, () => {
		const actual = multiply(5, 4);
		expect(actual).to.equal(20);
	});
	
	it(`should handle negative values`, () => {
		const actual = multiply(-5, 3);
		expect(actual).to.equal(-15);
	});
	
});