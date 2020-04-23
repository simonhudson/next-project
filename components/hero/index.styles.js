'use strict';

import styled from 'styled-components';

const Wrapper = styled.div`
	background: #eee;
	height: 150px;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			height: 250px;
			`
		)};
`;

const Inner = styled.div``;

const Title = styled.p``;

export { Wrapper, Inner, Title };
