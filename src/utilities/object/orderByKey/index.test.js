'use strict';

import { expect } from 'chai';
const orderByKey = require('./index');
	
describe('orderByKey: Order object based on key name', () => {

	it(`should return null when input is not an object`, () => {
		['string', [], true, null].forEach(input => {
			const actual = orderByKey(input);
			expect(actual).to.deep.equal(null);
		});
	});
	
	it(`should return an object ordered by key`, () => {
		const input = {
			b: 'value b',
			d: 'value d',
			a: 'value a',
			c: 'value c'
		};
		const expected = {
			a: 'value a',
			b: 'value b',
			c: 'value c',
			d: 'value d'
		};
		const actual = orderByKey(input);
		expect(actual).to.deep.equal(expected);
	});

});