'use strict';

import React from 'react';
// import { expect } from 'chai';
import Hero from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

const baseProps = {
	page: 'about',
};

describe('Hero', () => {
	let objectUnderTest;
	const selector = `div[data-test="hero"]`;
	const heading = `p[data-test="hero__heading"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	// it('should return null when no page prop passed', () => {
	// 	const props = cloneDeep(baseProps);
	// 	delete props.page;
	// 	initialise(props);
	// 	assertElementDoesNotExist(objectUnderTest, [selector, title]);
	// });

	// it('should return null when invalid page prop passed', () => {
	// 	const props = cloneDeep(baseProps);
	// 	props.page = 'foo';
	// 	initialise(props);
	// 	assertElementDoesNotExist(objectUnderTest, [selector, title]);
	// });

	it('should render as expected', () => {
		const props = cloneDeep(baseProps);
		initialise(props);
		assertElementExists(objectUnderTest, [selector, heading]);
	});

	// it('should render as large hero', () => {
	// 	const props = cloneDeep(baseProps);
	// 	props.page = 'home';
	// 	initialise(props);
	// 	assertElementExists(objectUnderTest, selector);
	// 	expect(objectUnderTest.find(selector).hasClass('hero--large')).to.equal(true);
	// });

	// it('should render with expected title', () => {
	// 	const TESTS = [
	// 		{ page: 'home', title: 'Welcome to our site' },
	// 		{ page: 'about', title: 'About us' },
	// 	];

	// 	TESTS.forEach((test) => {
	// 		const props = cloneDeep(baseProps);
	// 		props.page = test.page;
	// 		initialise(props);
	// 		assertElementExists(objectUnderTest, title);
	// 		expect(objectUnderTest.find(title).text()).to.equal(test.title);
	// 	});
	// });

	const initialise = (props) => (objectUnderTest = mountWithTheme(<Hero {...props} />));
});
