'use strict';

/* eslint-disable no-undef */

beforeEach(() => {
	cy.openPage('about');
});

describe('About page', () => {
	it('has expected page heading', () => {
		cy.get('h1').should('be.visible').contains('About');
	});
});
/* eslint-enable no-undef */
