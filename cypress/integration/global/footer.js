'use strict';

import { footer } from '../../config/selectors';

/* eslint-disable no-undef */

beforeEach(() => {
	cy.openPage('home');
});

describe('Footer', () => {
	it('contains copyright text', () => {
		cy.get(footer.copyright).should('be.visible').contains('Copyright 2020');
	});
});
/* eslint-enable no-undef */
