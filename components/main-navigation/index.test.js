'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import MainNavigation from './index';
import { assertElementExists } from '$/tests/utilities';

describe('MainNavigation', () => {
	let objectUnderTest;
	const selector = `nav[data-test="main-navigation"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should render as expected', () => {
		initialise();
		assertElementExists(objectUnderTest, selector);
	});

	const initialise = (props) => (objectUnderTest = shallow(<MainNavigation />));
});
