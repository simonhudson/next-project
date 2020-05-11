'use strict';

import React, { Component } from 'react';
import { get } from '~/api';

class LiveSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				results: [],
			},
			err: null,
		};
		this.liveSearchInput = React.createRef();
		this.liveSearchSuggestions = React.createRef();
	}

	componentDidMount = async () => {
		this.setState({ isLoading: true });
		const data = await get(this.props.endpoint);
		if (data.data) this.setState({ data: { results: data.data.data } });
		this.addEventListeners();
	};

	findMatches = (wordToMatch, liveData) => {
		return this.state.data.results.filter((item) => {
			// if (guest.rsvp === '1') return; // Only show guests who have not RSVP'd
			const regex = new RegExp(wordToMatch, 'gi');
			return item.first_name.match(regex) || item.last_name.match(regex);
		});
	};

	populateInput = (suggestion) => {
		this.liveSearchInput.current.value = suggestion.textContent.trim();
		this.liveSearchSuggestions.current.innerHTML = '';
	};

	displayMatches = () => {
		const matchArray = this.findMatches(this.value, this.state.data.results);
		const html = matchArray
			.map((item) => {
				// const regex = new RegExp(this.liveSearchInput.current.value, 'gi');
				const firstName = item.first_name;
				const lastName = item.last_name;
				const id = item.id;
				return `
	            <li>
	                <a class="js-live-search__suggestion" data-user-id="${id}" href="#">${firstName} ${lastName}</a>
	            </li>
	        `;
			})
			.join('');
		this.liveSearchSuggestions.current.innerHTML = html;

		const suggestions = Array.from(document.querySelectorAll('.js-live-search__suggestion'));
		suggestions.forEach((suggestion) => {
			suggestion.addEventListener('click', (e) => {
				this.populateInput(suggestion);
				e.preventDefault ? e.preventDefault() : (e.returnValue = false);
			});
		});
	};

	addEventListeners = () => {
		['change', 'keyup'].forEach((evt) => {
			this.liveSearchInput.current.addEventListener(evt, this.displayMatches);
		});
	};

	render = () => {
		// const { props, state } = this;
		return (
			<>
				<label htmlFor="js-live-search">Find user&nbsp;</label>
				<input id="js-live-search" ref={this.liveSearchInput} type="text" />
				<div className="js-live-search__suggestions" ref={this.liveSearchSuggestions}></div>
			</>
		);
	};
}
export default LiveSearch;
