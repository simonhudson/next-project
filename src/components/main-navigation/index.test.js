'use strict';

import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import MainNavigation from './index';
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

const baseProps = {
	currentPage: {
		route: '/',
	},
};

describe('MainNavigation', () => {
	let objectUnderTest;
	const selector = `nav[data-test="main-navigation"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should render as expected', () => {
		const props = cloneDeep(baseProps);
		initialise(props);
		assertElementExists(objectUnderTest, selector);
	});

	const initialise = (props) => (objectUnderTest = mountWithTheme(<MainNavigation {...props} />));
});
