'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
	align-items: center;
	background: #fff;
	display: flex;
	height: 150px;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			height: 250px;
			`
		)};
`;

const Title = styled.p`
	color: #0f0f0f;
	font-size: ${rem(28)};
	font-weight: 700;
	margin: 0;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(46)};
			`
		)};
`;

export { Wrapper, Title };
