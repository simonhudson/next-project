'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.footer`
	border-top: 1px solid ${({ theme }) => theme.palette.primary.bodyText};
	padding: ${rem(20)} 0;
`;

const Text = styled.p`
	font-size: ${rem(14)};
`;

export { Wrap, Text };
