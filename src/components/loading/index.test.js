'use strict';

import React from 'react';
import Loading from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

describe('Loading', () => {
	let objectUnderTest;
	const selector = `div[data-test="loading"]`;
	const img = `img[data-test="loading__img"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should render as expected', () => {
		const props = cloneDeep();
		initialise(props);
		assertElementExists(objectUnderTest, selector);
		assertElementExists(objectUnderTest, img);
	});

	const initialise = (props) => (objectUnderTest = mountWithTheme(<Loading />));
});
