'use strict';

import React from 'react';
import MainNavigation from '~/main-navigation';
import { Header } from './styles';

const SiteHeader = (props) => {
	return (
		<Header style="background: green" data-test="site-header">
			<MainNavigation />
		</Header>
	);
};

export default SiteHeader;
