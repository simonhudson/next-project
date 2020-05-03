'use strict';

import { expect } from 'chai';
const stripHtmlTags = require('./index');

describe('stripHtmlTags: Remove opening/closing HTML tags from string', () => {
	
	it(`should return null when input is invalid or empty string`, () => {
		[null, true, 10, ''].forEach(input => {
			const actual = stripHtmlTags(input);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should strip opening/closing HTML tags from string`, () => {
		const actual = stripHtmlTags(`<div class='my-element'>Hello</div>`);
		expect(actual).to.equal(`div class='my-element'Hello/div`);
	});

});
