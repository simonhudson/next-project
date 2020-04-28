'use strict';

import React from 'react';
import { Wrapper, Text } from './index.styles';
import { Wrap } from '~/theme/layout';

const SiteFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Wrapper data-test="footer">
			<Wrap>
				<Text data-test="footer__copyright">Copyright {currentYear}</Text>
			</Wrap>
		</Wrapper>
	);
};

export default SiteFooter;
