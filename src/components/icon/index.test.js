'use strict';

import React from 'react';
import { expect } from 'chai';
import Icon from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist, mountWithTheme } from '~/config/tests/utilities';

const baseProps = {
	type: 'bars',
};

describe('Icon', () => {
	let objectUnderTest;
	const selector = `span[data-test="icon"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should return null when no type prop passed', () => {
		const props = cloneDeep(baseProps);
		delete props.type;
		initialise(props);
		assertElementDoesNotExist(objectUnderTest, selector);
	});

	it('should render as expected', () => {
		const props = cloneDeep(baseProps);
		initialise(props);
		assertElementExists(objectUnderTest, selector);
		expect(objectUnderTest.find(selector).hasClass('fa-bars')).to.equal(true);
	});

	const initialise = (props) => (objectUnderTest = mountWithTheme(<Icon {...props} />));
});
