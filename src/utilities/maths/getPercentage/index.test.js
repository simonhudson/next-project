'use strict';

import { expect } from 'chai';
const getPercentage = require('./index');

describe('getPercentage: Calculates x as a percentage of y', () => {
	
	it(`should return null if inputs are invalid`, () => {
		
		const INVALID_INPUT = [
			{ x: null, y: null },
			{ x: 'string', y: 'string' },
			{ x: [1, 2, 3], y: [4, 5, 6] },
			{ x: {}, y: {} }
		];
		INVALID_INPUT.forEach(input => {
			const actual = getPercentage(input.x, input.y);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return value if inputs are valid`, () => {
		
		const VALID_INPUT = [
			{ x: 20, y: 100, expected: 20 },
			{ x: 5, y: 50, expected: 10 },
			{ x: 75, y: 150, expected: 50 },
			{ x: 471, y: 1884, expected: 25 },
			{ x: 13, y: 130, expected: 10 },
			{ x: 12500, y: 10000, expected: 125 }
		];
		VALID_INPUT.forEach(input => {
			const { x, y, expected } = input;
			const actual = getPercentage(x, y);
			expect(actual).to.equal(expected);
		});
	});
	
});