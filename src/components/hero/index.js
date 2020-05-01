'use strict';

import React from 'react';
import { Wrapper, Title } from './index.styles';

const CONFIG = {
	home: {
		title: 'Welcome to our site',
		useLargeHero: true,
	},
	about: {
		title: 'About us',
	},
	contact: {
		title: 'Get in touch',
	},
};

const Hero = (props) => {
	return (
		<Wrapper data-test="hero">
			<props.theme.layout.Wrap>
				<Title data-test="hero__title">{CONFIG[props.currentPage.name].title}</Title>
			</props.theme.layout.Wrap>
		</Wrapper>
	);
};

export default Hero;
