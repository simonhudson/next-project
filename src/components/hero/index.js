'use strict';

import React from 'react';
import { Wrapper, Inner, Title } from './index.styles';

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
			<Inner>
				<Title data-test="hero__title">Foo</Title>
			</Inner>
		</Wrapper>
	);
};

export default Hero;
