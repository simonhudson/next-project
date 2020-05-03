'use strict';

import { expect } from 'chai';
const cleanUp = require('./index');
	
describe('cleanUp: Recursively removes null/undefined/empty strings from object', () => {

	it(`should return unchanged when input is not an object`, () => {
		[null, 1, 'string', [], {}].forEach(input => {
			const actual = cleanUp(input);
			expect(actual).to.deep.equal(input);
		});
	});
	
	it(`should return a cleaned up object`, () => {
		const input = {
			key1: '1', key2: 2, key3: null, key4: '', key5: [1,2,3], key6: undefined, key7: {}
		};
		const expected = {
			key1: '1', key2: 2, key5: [1,2,3], key7: {}
		};
		const actual = cleanUp(input);
		expect(actual).to.deep.equal(expected);
	});
	
});
