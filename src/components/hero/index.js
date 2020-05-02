'use strict';

import React from 'react';
import { Wrapper, Heading, SubHeading } from './index.styles';
import { layout } from '~/theme';

const CONFIG = {
	home: {
		heading: `Welcome to our site`,
		useLargeHero: true,
	},
	about: {
		heading: 'About us',
	},
	contact: {
		heading: 'Get in touch',
	},
	_error: {
		heading: 'Sorry, something has gone wrong',
	},
	'404': {
		heading: `Sorry, we can't find that page`,
	},
};

const Hero = (props) => {
	const config = CONFIG[props.currentPage.name];
	const heading = config && config.heading ? config.heading : '';
	const subHeading = config && config.subHeading ? config.subHeading : null;
	return (
		<Wrapper data-test="hero">
			<layout.Wrap>
				<Heading data-test="hero__heading">{heading}</Heading>
				{subHeading && <SubHeading>{subHeading}</SubHeading>}
			</layout.Wrap>
		</Wrapper>
	);
};

export default Hero;
