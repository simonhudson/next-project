'use strict';

import React from 'react';
import MainNavigation from '~/main-navigation';
import { Header } from './styles';

const SiteHeader = (props) => {
	return (
		<Header {...props}>
			<MainNavigation />
		</Header>
	);
};

export default SiteHeader;
