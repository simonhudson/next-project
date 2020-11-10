'use strict';

import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';

const assertElementState = (objectUnderTest, elements, expectedState) => {
	const doAssertion = (element) => {
		expect(objectUnderTest.exists(element)).to.be[expectedState];
		expect(objectUnderTest.find(element).length).to.equal(!!expectedState ? 1 : 0);
	};

	if (Array.isArray(elements)) elements.forEach((element) => doAssertion(element));
	else doAssertion(elements);
};

const assertElementExists = (objectUnderTest, elements) => assertElementState(objectUnderTest, elements, true);
const assertElementDoesNotExist = (objectUnderTest, elements) => assertElementState(objectUnderTest, elements, false);
const mountWithTheme = (childToMount) => mount(shallow(<ThemeProvider theme={Theme}>{childToMount}</ThemeProvider>).get(0));

module.exports = {
	assertElementExists,
	assertElementDoesNotExist,
	mountWithTheme,
};
