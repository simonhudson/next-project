'use strict';

import React, { Component } from 'react';
import MainNavigationToggle from './toggle';
import data from './data';
import { Wrapper } from './styles';

class MainNavigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			toggleClicked: false,
		};
	}

	componentDidMount = () => {};

	toggleMainNavigation = (e) => {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		this.setState({ toggleClicked: true });
		const currentState = this.state.isVisible;
		this.setState({ isVisible: !currentState });
	};

	render = () => {
		return (
			<>
				<MainNavigationToggle onClick={this.toggleMainNavigation} navigationIsVisible={this.state.isVisible} />
				<Wrapper
					isVisible={this.state.isVisible}
					toggleClicked={this.state.toggleClicked}
					data-test="main-navigation"
				>
					<ul className="main-navigation__list">
						{data.map((item, index) => {
							return (
								<li key={index} className="main-navigation__item">
									<a href={item.href}>{item.label}</a>
								</li>
							);
						})}
					</ul>
				</Wrapper>
			</>
		);
	};
}

export default MainNavigation;
