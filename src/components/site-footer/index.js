'use strict';

import React from 'react';
import { Wrapper, Text } from './index.styles';

const SiteFooter = (props) => {
	const currentYear = new Date().getFullYear();

	return (
		<Wrapper data-test="footer">
			<props.theme.layout.Wrap>
				<Text data-test="footer__copyright">Copyright {currentYear}</Text>
			</props.theme.layout.Wrap>
		</Wrapper>
	);
};

export default SiteFooter;
