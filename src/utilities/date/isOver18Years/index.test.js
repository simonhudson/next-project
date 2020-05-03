'use strict';

import { expect } from 'chai';
const isOver18Years = require('./index');

const NOW = new Date();
const now = {
    day: NOW.getUTCDate(),
    month: NOW.getUTCMonth() + 1,
    year: NOW.getUTCFullYear()
};

describe('isOver18Years: Check given date is more than 18 years from today', () => {
    it(`should return false when date is not more than 18 years from today`, () => {
        const actual = isOver18Years(`${now.year - 1} ${now.month} ${now.day}`);
        expect(actual).to.equal(false);
    });

    it(`should return true when date is more than 18 years from today`, () => {
        const actual = isOver18Years(
            `${now.year - 19} ${now.month} ${now.day}`
        );
        expect(actual).to.equal(true);
    });
});
