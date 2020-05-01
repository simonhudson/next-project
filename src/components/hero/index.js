'use strict';

import React from 'react';
import { Wrapper, Title } from './index.styles';

const CONFIG = {
	home: {
		title: 'Welcome to our site.',
		useLargeHero: true,
	},
	about: {
		title: 'About us.',
	},
	contact: {
		title: 'Get in touch.',
	},
	_error: {
		title: 'Sorry, something has gone wrong.',
	},
	'404': {
		title: `Sorry, we can't find that page`,
	},
};

const Hero = (props) => {
	const title = CONFIG[props.currentPage.name] ? CONFIG[props.currentPage.name].title : '';
	return (
		<Wrapper data-test="hero">
			<props.theme.layout.Wrap>
				<Title data-test="hero__title">{title}</Title>
			</props.theme.layout.Wrap>
		</Wrapper>
	);
};

export default Hero;
