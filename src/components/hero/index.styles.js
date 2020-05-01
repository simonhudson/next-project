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

const Heading = styled.p`
	font-family: 'Lora', georgia, 'times new roman', serif;
	font-size: ${rem(28)};
	font-weight: 500;
	line-height: 1.2em;
	margin: 0;

	&::after {
		content: '.';
		color: ${({ theme }) => theme.palette.primary.b};
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(46)};
			`
		)};
`;

const SubHeading = styled.p`
	font-family: 'Lora', georgia, 'times new roman', serif;
	font-size: ${rem(14)};
	font-weight: 400;
	line-height: 1.8em;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(22)};
			`
		)};
`;

export { Wrapper, Heading, SubHeading };
