'use strict';

import { expect } from 'chai';

const assertElementExists = (objectUnderTest, elements) => {
	const doAssertion = (element) => {
		expect(objectUnderTest.exists(element)).to.be.true;
		expect(objectUnderTest.find(element).length).to.equal(1);
	};

	if (Array.isArray(elements)) elements.forEach((element) => doAssertion(element));
	else doAssertion(elements);
};

const assertElementDoesNotExist = (objectUnderTest, elements) => {
	const doAssertion = (element) => {
		expect(objectUnderTest.exists(elements)).to.be.false;
		expect(objectUnderTest.find(elements).length).to.equal(0);
	};

	if (Array.isArray(elements)) elements.forEach((element) => doAssertion(element));
	else doAssertion(elements);
};

module.exports = {
	assertElementExists,
	assertElementDoesNotExist,
};
