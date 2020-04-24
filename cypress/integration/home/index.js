'use strict';

/* eslint-disable no-undef */

beforeEach(() => {
	cy.openPage('home');
});

describe('Home page', () => {
	it('has expected page heading', () => {
		cy.get('h1').should('be.visible').contains('Home');
	});
});
/* eslint-enable no-undef */
