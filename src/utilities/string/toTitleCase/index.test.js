'use strict';

import { expect } from 'chai';
const toTitleCase = require('./index');

describe('toTitleCase: Converts string to title case', () => {

	it(`should return null if input is invalid`, () => {
		[[1,2,3], true, {}].forEach(input => {
			const actual = toTitleCase(input);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return formatted string`, () => {
		const actual = toTitleCase('the last of the mohicans in a cupboard under the stairs');
		expect(actual).to.equal('The Last of the Mohicans in a Cupboard under the Stairs');
	});

});
