'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const ToggleButton = styled.button`
    background: 0;
    border: 0;
	height: ${rem(40)};
	position: absolute;
	right: ${rem(10)};
	top: ${rem(10)};
	width: ${rem(40)};
	z-index: 2;

    ${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			display: none;
			`
		)};

	.fa {
		font-size: ${rem(40)};
	}

}`;

export { ToggleButton };
