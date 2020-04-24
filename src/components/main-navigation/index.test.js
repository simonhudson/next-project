'use strict';

import React from 'react';
import MainNavigation from './index';
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

describe('MainNavigation', () => {
	let objectUnderTest;
	const selector = `nav[data-test="main-navigation"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should render as expected', () => {
		initialise();
		assertElementExists(objectUnderTest, selector);
	});

	const initialise = (props) => (objectUnderTest = mountWithTheme(<MainNavigation />));
});
