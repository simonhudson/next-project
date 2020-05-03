'use strict';

import { expect } from 'chai';
const hasItems = require('./index');

describe('hasItems: Assert array has items', () => {
		
	it(`should return false when value is not array`, () => {
		[null, 1, 'string', {}].forEach(value => {
			const actual = hasItems(value);
			expect(actual).to.equal(false);
		});
	});
	
	it(`should return false when value is an empty array`, () => {
		const actual = hasItems([]);
		expect(actual).to.equal(false);
	});
	
	it(`should return true when array has items`, () => {
		const actual = hasItems(['1', 2, 'lorem', true]);
		expect(actual).to.equal(true);
	});
	
});