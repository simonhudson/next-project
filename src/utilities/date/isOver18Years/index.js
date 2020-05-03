'use strict';

const moment = require('moment');
const toISOString = require('~/utilities/date/toISOString');

module.exports = date => {
    if (!date) return null;
    date = moment(toISOString(date));
    const diff = Math.floor(moment.duration(moment().diff(date)).as('months'));
    if (isNaN(diff)) return null;
    return diff >= 18;
};
