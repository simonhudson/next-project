'use strict';

import { expect } from 'chai';
const getMonthName = require('./index');

describe('getMonthName: Return name of month from numeric value', () => {
		
	it(`should return null when value is not numeric`, () => {
		[null, 'string'].forEach(value => {
			const actual = getMonthName(value);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return null when numeric argument is less than 0`, () => {
		const actual = getMonthName(-1);
		expect(actual).to.equal(null);
	});
	
	it(`should return null when numeric argument is greater than 12`, () => {
		const actual = getMonthName(13);
		expect(actual).to.equal(null);
	});
	
	it(`should return value when argument is a numeric string`, () => {
		const actual = getMonthName('1');
		expect(actual).to.equal('January');
	});
	
	it(`should return value when argument is an integer`, () => {
		const actual = getMonthName(3);
		expect(actual).to.equal('March');
	});
	
	it(`should return a truncated value when specified`, () => {
		const actual = getMonthName(11, true);
		expect(actual).to.equal('Nov');
	});
	
});