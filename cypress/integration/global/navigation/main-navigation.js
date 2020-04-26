'use strict';

import { mainNavigation } from '../../../config/selectors';
import { breakpoints } from '../../../../src/theme';

/* eslint-disable no-undef */

beforeEach(() => {
	cy.openPage('home');
});

const navigationIsNotInView = (device) => {
	cy.wait(500)
		.get(mainNavigation.overlay)
		.should('not.be.visible')
		.get(mainNavigation.root)
		.then((element) => {
			const rect = element[0].getBoundingClientRect();
			expect(rect.top).to.equal(0);
			expect(rect.left).to.equal(-breakpoints[device]);
		});
};

const navigationIsInView = () => {
	cy.wait(500)
		.get(mainNavigation.overlay)
		.should('be.visible')
		.get(mainNavigation.root)
		.then((element) => {
			const rect = element[0].getBoundingClientRect();
			expect(rect.top).to.equal(0);
			expect(rect.left).to.equal(0);
		});
};

describe('Main navigation', () => {
	describe('Mobile', () => {
		beforeEach(() => cy.setMobile());

		it('should hide navigation on load', () => {
			navigationIsNotInView('phone-p');
		});

		it('should show toggle on load', () => {
			cy.get(mainNavigation.toggle).should('be.visible');
		});

		it('should toggle navigation on toggle click', () => {
			cy.get(mainNavigation.toggle).click();
			navigationIsInView();
			cy.get(mainNavigation.toggle).click();
			navigationIsNotInView('phone-p');
		});
	});
	describe('Tablet', () => {
		describe('Portrait', () => {
			beforeEach(() => cy.setTablet());

			it('should hide navigation on load', () => {
				navigationIsNotInView('tablet-p');
			});

			it('should show toggle on load', () => {
				cy.get(mainNavigation.toggle).should('be.visible');
			});

			it('should toggle navigation on toggle click', () => {
				cy.get(mainNavigation.toggle).click();
				navigationIsInView();
				cy.get(mainNavigation.toggle).click();
				navigationIsNotInView('tablet-p');
			});
		});

		describe('Landscape', () => {
			beforeEach(() => cy.setTablet(true));

			it('should show navigation on load', () => {
				cy.get(mainNavigation.root).should('be.visible').get(mainNavigation.overlay).should('not.be.visible');
			});

			it('should hide toggle on load', () => {
				cy.get(mainNavigation.toggle).should('not.be.visible');
			});
		});
	});
	describe('Desktop', () => {
		beforeEach(() => cy.setDesktop());

		it('should show navigation on load', () => {
			cy.get(mainNavigation.root).should('be.visible').get(mainNavigation.overlay).should('not.be.visible');
		});

		it('should hide toggle on load', () => {
			cy.get(mainNavigation.toggle).should('not.be.visible');
		});
	});
});

/* eslint-enable no-undef */
