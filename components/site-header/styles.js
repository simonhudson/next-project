'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Header = styled.header`
	background: ${({ theme }) => theme.palette.primary.a};
	padding: ${rem(20)};

	${({ theme }) =>
		theme.media(
			'tablet-p',
			`
			background: ${theme.palette.primary.b};
			`
		)};
}`;

export { Header };
