'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const ToggleButton = styled.button`
    background: 0;
    border: 0;
	height: ${rem(30)};
	position: absolute;
	right: ${rem(10)};
	top: ${rem(10)};
    width: ${rem(30)};

    ${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			display: none;
			`
		)};

}`;

export { ToggleButton };
