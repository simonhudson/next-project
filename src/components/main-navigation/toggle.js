'use strict';

import React from 'react';
import Icon from '~/components/icon';
import { ToggleButton } from './toggle.styles';

const MainNavigationToggle = (props) => {
	if (!props) return null;

	return (
		<ToggleButton data-test="main-navigation__toggle" aria-hidden="true" onClick={(e) => props.onClick(e)}>
			<Icon type="bars" />
		</ToggleButton>
	);
};

export default MainNavigationToggle;
