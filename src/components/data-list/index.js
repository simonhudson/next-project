'use strict';

import React, { Component } from 'react';
import { get } from '~/api';
import Loading from '~/components/loading';

class DataList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			data: {
				results: [],
			},
			err: null,
		};
	}

	componentDidMount = async () => {
		this.setState({ isLoading: true });
		const data = await get(this.props.endpoint);
		if (data.data) this.setState({ data: { results: data.data.results }, isLoading: false });
		if (data.err) this.setState({ err: data.err, isLoading: false });
	};

	render = () => {
		return (
			<>
				{this.state.isLoading && <Loading />}
				{this.state.err && !this.state.isLoading && <p>Data could not be loaded</p>}
				{!this.state.err && !this.state.isLoading && this.state.data.results && this.state.data.results.length && (
					<ul>
						{this.state.data.results.map((item, index) => (
							<li key={index}>{item.name}</li>
						))}
					</ul>
				)}
			</>
		);
	};
}

export default DataList;
