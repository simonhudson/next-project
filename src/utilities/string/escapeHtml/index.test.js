'use strict';

import { expect } from 'chai';
const escapeHtml = require('./index');

describe('escapeHtml: Escapes string for insertion into HTML', () => {
	
	it(`should return null when input is invalid or empty string`, () => {
		[null, true, 10, ''].forEach(input => {
			const actual = escapeHtml(input);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should escape single-quoted HTML`, () => {
		const input = `<div class='my-element'>Hello</div>`;
		const expected = '&lt;div class=&#39;my-element&#39;&gt;Hello&lt;/div&gt;';
		const actual = escapeHtml(input);
		expect(actual).to.equal(expected);
	});
	
	it(`should escape double-quoted HTML`, () => {
		const input = '<div class="my-element">Hello</div>';
		const expected = '&lt;div class=&quot;my-element&quot;&gt;Hello&lt;/div&gt;';
		const actual = escapeHtml(input);
		expect(actual).to.equal(expected);
	});
	
	it(`should escape querystring`, () => {
		const input = 'www.foo.com/?a=1&b=2';
		const expected = 'www.foo.com/?a=1&amp;b=2';
		const actual = escapeHtml(input);
		expect(actual).to.equal(expected);
	});

});
