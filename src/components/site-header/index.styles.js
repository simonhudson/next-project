'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Header = styled.header`
	background: ${({ theme }) => theme.palette.primary.white};
	display: flex;
	padding: ${rem(30)} 0;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			justify-content: space-between;
			padding: 0 ${rem(20)};
			`
		)};

}`;

export { Header };
