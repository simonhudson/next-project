'use strict';

import { expect } from 'chai';
const getAverage = require('./index');

describe('getAverage: Calculates average value from array of values', () => {
	
	it(`should return null when input is not an array of integers`, () => {
		[null, 1, 'string', [], ['string', 'string1', 'string2', 'string3'], {}].forEach(value => {
			const actual = getAverage(value);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return value when input array contains single integer`, () => {
		const actual = getAverage([5]);
		expect(actual).to.equal(5);
	});
	
	it(`should return value when input is an array of integers`, () => {
		const actual = getAverage([1, 2, 3, 4, 5]);
		expect(actual).to.equal(3);
	});
	
	it(`should return value when input array contains negative integers`, () => {
		const actual = getAverage([17, 52, 300, 4, -1]);
		expect(actual).to.equal(74);
	});
	
});