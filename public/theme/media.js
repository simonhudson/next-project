'use strict';

import breakpoints from './breakpoints';

module.exports = (media, styles) => `
	@media (min-width: ${breakpoints[media]}px) {
		${styles}
	}
`;
