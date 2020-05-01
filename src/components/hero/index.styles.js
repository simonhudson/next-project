'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
	align-items: center;
	background: #eee;
	display: flex;
	height: 150px;
	margin-bottom: ${rem(20)};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			height: 250px;
			margin-bottom: ${rem(40)};
			`
		)};
`;

const Title = styled.p`
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
