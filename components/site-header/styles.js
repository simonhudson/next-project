'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Header = styled.header`
	background: #ededed;
	display: flex;
	height: ${rem(80)};
	padding: ${rem(20)};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			justify-content: space-between;
			`
		)};

}`;

export { Header };
