'use strict';

import React from 'react';
import { Wrap, Text } from './index.styles';

const SiteFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Wrap data-test="footer">
			<Text data-test="footer__copyright">Copyright {currentYear}</Text>
		</Wrap>
	);
};

export default SiteFooter;
