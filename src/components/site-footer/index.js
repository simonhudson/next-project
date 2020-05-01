'use strict';

import React from 'react';
import { Wrapper, Text } from './index.styles';

const SiteFooter = (props) => {
	const currentYear = new Date().getFullYear();

	return (
		<props.theme.layout.Wrap>
			<Wrapper data-test="footer">
				<Text data-test="footer__copyright">Copyright {currentYear}</Text>
			</Wrapper>
		</props.theme.layout.Wrap>
	);
};

export default SiteFooter;
