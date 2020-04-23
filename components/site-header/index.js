'use strict';

import React from 'react';
import MainNavigation from '~/main-navigation';
import { Header } from './index.styles';

const SiteHeader = (props) => {
	return (
		<Header {...props}>
			<MainNavigation currentPage="home" />
		</Header>
	);
};

export default SiteHeader;
