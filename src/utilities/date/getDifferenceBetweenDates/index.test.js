'use strict';

import { expect } from 'chai';
const getDifferenceBetweenDates = require('./index');

describe('getDifferenceBetweenDates: Gets difference between dates as specified value', () => {
	
	it(`should return null when no date argument passed`, () => {
		const actual = getDifferenceBetweenDates(null, 'years');
		expect(actual).to.equal(null);
	});
	
	it(`should return null when invalid date argument passed`, () => {
		const actual = getDifferenceBetweenDates('hello', 'years');
		expect(actual).to.equal(null);
	});
	
	it(`should return value as years`, () => {
		const actual = getDifferenceBetweenDates('12 25 1981', 'years', '12 25 1985');
		expect(actual).to.equal(4);
	});
	
	it(`should return value as months`, () => {
		const actual = getDifferenceBetweenDates('2 25 1981', 'months', '12 25 1981');
		expect(actual).to.equal(9);
	});
	
	it(`should return negative value where appropriate`, () => {
		const actual = getDifferenceBetweenDates('12 28 1981', 'days', '12 25 1981');
		expect(actual).to.equal(-3);
	});
	
});