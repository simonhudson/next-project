'use strict';

import React, { Component } from 'react';
import Link from 'next/link';
import MainNavigationToggle from './toggle';
import data from './data';
import { Wrapper, Overlay, List, Item, ItemLink } from './index.styles';

class MainNavigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			toggleClicked: false,
		};
	}

	componentDidMount = () => {};

	toggle = (e) => {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		this.setState({ toggleClicked: true });
		const currentState = this.state.isVisible;
		this.setState({ isVisible: !currentState });
	};

	open = () => this.setState({ isVisible: true });
	close = () => this.setState({ isVisible: false });

	render = () => {
		return (
			<>
				<MainNavigationToggle onClick={this.toggle} navigationIsVisible={this.state.isVisible} />
				{this.state.isVisible && <Overlay />}
				<Wrapper
					isVisible={this.state.isVisible}
					toggleClicked={this.state.toggleClicked}
					data-test="main-navigation"
				>
					<List>
						{data.map((item, index) => {
							return (
								<Item key={index}>
									<Link href={item.href}>
										<ItemLink onClick={this.close} href={item.href}>
											{item.label}
										</ItemLink>
									</Link>
								</Item>
							);
						})}
					</List>
				</Wrapper>
			</>
		);
	};
}

export default MainNavigation;
