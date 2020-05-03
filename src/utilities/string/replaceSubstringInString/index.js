'use strict';

module.exports = (string, toReplace, replaceWith = '') => {
    if (!string || typeof string !== 'string' || !toReplace || typeof toReplace !== 'string') return string;
    toReplace = new RegExp(toReplace, 'ig');
    return string
        .replace(toReplace, replaceWith)
        .replace(/  +/g, ' ')
        .trim();
};
