// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { breakpoints, routes } from '../config';

/* eslint-disable no-undef */

Cypress.Commands.add('openPage', (page) => {
	cy.visit(routes[page]);
});

Cypress.Commands.add('setMobile', (isLandscape = false) => {
	const width = isLandscape ? breakpoints.phone.height : breakpoints.phone.width;
	const height = isLandscape ? breakpoints.phone.width : breakpoints.phone.height;
	cy.viewport(width, height);
});

Cypress.Commands.add('setTablet', (isLandscape = false) => {
	const width = isLandscape ? breakpoints.tablet.height : breakpoints.tablet.width;
	const height = isLandscape ? breakpoints.tablet.width : breakpoints.tablet.height;
	cy.viewport(width, height);
});

Cypress.Commands.add('setDesktop', () => {
	cy.viewport(breakpoints.desktop.width, breakpoints.desktop.height);
});

/* eslint-enable no-undef */
