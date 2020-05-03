'use strict';

import { expect } from 'chai';
const add = require('./index');

describe(`add: adds numeric values together`, () => {
	
	it(`should return null when only one integer value is passed`, () => {
		const actual = add(3);
		expect(actual).to.equal(null);
	});
	
	it(`should return null when only one string value is passed`, () => {
		const actual = add('hello');
		expect(actual).to.equal(null);
	});
	
	it(`should return value when two numeric values are passed`, () => {
		const actual = add(5, '3');
		expect(actual).to.equal(8);
	});
	
	it(`should return value when two integer values are passed`, () => {
		const actual = add(5, 4);
		expect(actual).to.equal(9);
	});
	
	it(`should handle negative values`, () => {
		const actual = add(-5, 3);
		expect(actual).to.equal(-2);
	});
	
});