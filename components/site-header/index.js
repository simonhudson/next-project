'use strict';

import React from 'react';
import MainNavigation from '~/main-navigation';
import './css/styles.scss';

const SiteHeader = () => {
	return (
		<header className="site-header" data-test="site-header">
			<MainNavigation />
		</header>
	);
};

export default SiteHeader;
