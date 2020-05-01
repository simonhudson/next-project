'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const H1 = styled.h1`
	color: ${({ theme }) => theme.palette.primary.b};
	font-weight: 500;
	font-size: ${rem(28)};
`;

export { H1 };
