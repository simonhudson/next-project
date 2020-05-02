'use strict';

import React, { Component } from 'react';
import Link from 'next/link';
import MainNavigationToggle from './toggle';
import routes from '~/config/routes';
import { Wrapper, Overlay, List, Item, ItemLink } from './index.styles';
import { layout } from '~/theme';

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
		this.state.isVisible ? this.close() : this.open();
		this.toggleScroll();
	};

	toggleScroll = () => {
		const body = document.querySelector('body');
		const NO_SCROLL_CLASS = 'no-scroll';
		const method = this.state.isVisible ? 'remove' : 'add';
		body.classList[method](NO_SCROLL_CLASS);
	};

	open = () => this.setState({ isVisible: true });
	close = () => this.setState({ isVisible: false });

	render = () => {
		const { props, state } = this;
		return (
			<>
				<MainNavigationToggle onClick={this.toggle} navigationIsVisible={state.isVisible} />
				{state.isVisible && <Overlay data-test="main-navigation__overlay" />}
				<Wrapper isVisible={state.isVisible} toggleClicked={state.toggleClicked} data-test="main-navigation">
					<layout.Wrap>
						<List>
							{routes.map((item, index) => {
								return (
									<Item key={index}>
										<Link href={item.href}>
											<ItemLink
												onClick={this.close}
												href={item.href}
												isCurrentPage={props.currentPage.route === item.href}
											>
												{item.label}
											</ItemLink>
										</Link>
									</Item>
								);
							})}
						</List>
					</layout.Wrap>
				</Wrapper>
			</>
		);
	};
}

export default MainNavigation;
