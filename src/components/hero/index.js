'use strict';

import React from 'react';
import { Wrapper, Title } from './index.styles';
import { Wrap } from '~/theme/layout';

// const CONFIG = {
// 	home: {
// 		title: 'Welcome to our site',
// 		useLargeHero: true,
// 	},
// 	about: {
// 		title: 'About us',
// 	},
// };

const Hero = (props) => {
	// if (!props.page || !CONFIG[props.page]) return null;

	return (
		<Wrapper data-test="hero">
			<Wrap>
				<Title data-test="hero__title">Foo</Title>
			</Wrap>
		</Wrapper>
	);
};

export default Hero;
