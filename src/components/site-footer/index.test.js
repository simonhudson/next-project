'use strict';

import React from 'react';
import SiteFooter from './index';
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

describe('SiteFooter', () => {
	let objectUnderTest;
	const selector = `footer[data-test="footer"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should render as expected', () => {
		initialise();
		assertElementExists(objectUnderTest, selector);
	});

	const initialise = () => (objectUnderTest = mountWithTheme(<SiteFooter />));
});
