'use strict';

import { expect } from 'chai';
const divide = require('./index');

describe(`divide: divide numeric values`, () => {
	
	it(`should return null when only one integer value is passed`, () => {
		const actual = divide(3);
		expect(actual).to.equal(null);
	});
	
	it(`should return null when only one string value is passed`, () => {
		const actual = divide('hello');
		expect(actual).to.equal(null);
	});
	
	it(`should return value when two numeric values are passed`, () => {
		const actual = divide(12, '3');
		expect(actual).to.equal(4);
	});
	
	it(`should return value when two integer values are passed`, () => {
		const actual = divide(12, 4);
		expect(actual).to.equal(3);
	});
	
	it(`should handle single decimal place values`, () => {
		const actual = divide(11, 2);
		expect(actual).to.equal(5.5);
	});
	
	it(`should round to two decimal places`, () => {
		const actual = divide(11, 3);
		expect(actual).to.equal(3.67);
	});
	
});