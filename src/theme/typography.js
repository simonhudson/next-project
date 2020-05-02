'use strict';

import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const isValidHeading = (element) => element && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(element.toLowerCase());

const H1 = (props) => {
	const element = isValidHeading(props.element) ? props.element.toLowerCase() : 'h1';

	const StyledH1 = styled[element]`
		color: ${({ theme }) => theme.palette.primary.b};
		font-family: 'Lora', sans-serif;
		font-weight: 400;
		font-size: ${rem(28)};
		margin-bottom: 1rem;
	`;

	return <StyledH1>{props.children}</StyledH1>;
};

const H2 = (props) => {
	const element = isValidHeading(props.element) ? props.element.toLowerCase() : 'h2';

	const StyledH2 = styled[element]`
		color: ${({ theme }) => theme.palette.primary.bodyText};
		font-weight: 400;
		font-size: ${rem(18)};
		margin-bottom: 1rem;
	`;

	return <StyledH2>{props.children}</StyledH2>;
};

export { H1, H2 };
