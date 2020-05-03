'use strict';

import { expect } from 'chai';
const getDayName = require('./index');

describe('getDayName: Return name of day from numeric value', () => {
		
	it(`should return null when value is not numeric`, () => {
		[null, 'string'].forEach(value => {
			const actual = getDayName(value);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return null when numeric argument is less than 0`, () => {
		const actual = getDayName(-1);
		expect(actual).to.equal(null);
	});
	
	it(`should return null when numeric argument is greater than 7`, () => {
		const actual = getDayName(8);
		expect(actual).to.equal(null);
	});
	
	it(`should return value when argument is a numeric string`, () => {
		const actual = getDayName('5');
		expect(actual).to.equal('Friday');
	});
	
	it(`should return value when argument is an integer`, () => {
		const actual = getDayName(3);
		expect(actual).to.equal('Wednesday');
	});
	
	it(`should return a truncated value when specified`, () => {
		const actual = getDayName(2, true);
		expect(actual).to.equal('Tue');
	});
	
});