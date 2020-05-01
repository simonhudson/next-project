'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const H1 = styled.h1`
	color: ${({ theme }) => theme.palette.primary.b};
	font-weight: 500;
	font-size: ${rem(28)};
`;

const H2 = styled.h2`
	color: ${({ theme }) => theme.palette.primary.b};
	font-family: 'Lora', georgia, 'times new roman', serif;
	font-weight: 400;
	font-size: ${rem(28)};
`;

export { H1, H2 };
