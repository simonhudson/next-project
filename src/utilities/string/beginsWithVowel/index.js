'use strict';

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

module.exports = str => (!!str && typeof str === 'string' && VOWELS.includes(str.charAt(0).toLowerCase()));
