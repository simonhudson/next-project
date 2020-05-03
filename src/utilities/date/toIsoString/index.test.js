'use strict';

import { expect } from 'chai';
const toIsoString = require('./index');

describe('toIsoString: Creates ISO string from date string', () => {

	it(`should return null when invalid date argument passed`, () => {
		[null, 1, [1,2,3], true, 'hello'].forEach(value => {
			const actual = toIsoString(value);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return ISO string when valid date argument passed`, () => {
		const actual = toIsoString('29 April 1981');
		expect(actual).to.equal('1981-04-29T00:00:00.000+01:00');
	});

});
