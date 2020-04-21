'use strict';

import React from 'react';
import data from './data';

const MainNavigation = () => {
	return (
		<nav className="main-navigation" data-test="main-navigation">
			<ul className="main-navigation__list">
				{data.map((item, index) => {
					return (
						<li key={index} className="main-navigation__item">
							<a href={item.href}>{item.label}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MainNavigation;
