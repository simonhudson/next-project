'use strict';

import React from 'react';
import MainNavigation from '~/components/main-navigation';
import { Header } from './index.styles';

const SiteHeader = (props) => {
	return (
		<Header {...props}>
			<MainNavigation {...props} />
		</Header>
	);
};

export default SiteHeader;
