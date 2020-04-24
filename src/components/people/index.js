'use strict';

import React, { Component } from 'react';
import { get } from '~/api';

class People extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				results: [],
			},
		};
	}

	componentDidMount = async () => {
		const data = await get('people');
		this.setState({ data: { results: data.results } });
	};

	render = () => {
		return (
			<>
				<h2>People</h2>
				<ul>
					{this.state.data.results.map((item, index) => (
						<li key={index}>{item.name}</li>
					))}
				</ul>
			</>
		);
	};
}

export default People;
