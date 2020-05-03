'use strict';

import { expect } from 'chai';
const isValidDate = require('./index');
	
describe('isValidDate: Checks value is a valid date', () => {

	it(`should return false when invalid date argument passed`, () => {
		[null, 1, [1,2,3], true, 'hello', new Date('hello')].forEach(value => {
			const actual = isValidDate(value);
			expect(actual).to.equal(false);
		});
	});
	
	it(`should return true when valid date argument passed`, () => {
		const actual = isValidDate(new Date('29 April 1981'));
		expect(actual).to.equal(true);
	});

});
