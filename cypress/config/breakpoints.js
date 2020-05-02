'use strict';

import breakpoints from '../../src/theme/breakpoints';

module.exports = {
	phone: {
		width: breakpoints['phone-p'],
		height: breakpoints['tablet-p'],
	},
	tablet: {
		width: breakpoints['tablet-p'],
		height: breakpoints['tablet-l'],
	},
	desktop: {
		width: breakpoints.desktop,
		height: breakpoints['tablet-l'],
	},
};
