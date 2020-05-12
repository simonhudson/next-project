'use strict';

import React, { Component } from 'react';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.player = React.createRef();
		this.video = React.createRef();
		this.progress = React.createRef();
		this.progressBar = React.createRef();
		this.toggle = React.createRef();
	}

	componentDidMount = () => {
		this.skipButtons = document.querySelectorAll('[data-skip]');
		this.ranges = document.querySelectorAll('.player__slider');
		this.addEventListeners();
	};

	togglePlay = () => {
		const video = this.video.current;
		const method = video.paused ? 'play' : 'pause';
		video[method]();
	};

	updateButton = () => {
		const icon = this.video.current.paused ? '►' : '❚ ❚';
		this.toggle.current.textContent = icon;
	};

	skip = (e) => (this.video.current.currentTime += parseFloat(e.target.dataset.skip));

	handleRangeUpdate = (e) => (this.video.current[this.name] = e.target.value);

	handleProgress = () => {
		const video = this.video.current;
		const percent = (video.currentTime / video.duration) * 100;
		this.progressBar.current.style.flexBasis = `${percent}%`;
	};

	scrub = (e) => {
		const video = this.video.current;
		const scrubTime = (e.offsetX / this.progress.current.offsetWidth) * video.duration;
		video.currentTime = scrubTime;
	};

	addEventListeners = () => {
		const video = this.video.current;
		const ranges = this.ranges;
		const toggle = this.toggle.current;
		const skipButtons = this.skipButtons;
		const progress = this.progress.current;
		video.addEventListener('click', this.togglePlay);
		video.addEventListener('play', this.updateButton);
		video.addEventListener('pause', this.updateButton);
		video.addEventListener('timeupdate', this.handleProgress);

		toggle.addEventListener('click', this.togglePlay);
		skipButtons.forEach((button) => button.addEventListener('click', this.skip));
		ranges.forEach((range) => range.addEventListener('change', this.handleRangeUpdate));
		ranges.forEach((range) => range.addEventListener('mousemove', this.handleRangeUpdate));

		let mousedown = false;
		progress.addEventListener('click', this.scrub);
		progress.addEventListener('mousemove', (e) => mousedown && this.scrub(e));
		progress.addEventListener('mousedown', () => (mousedown = true));
		progress.addEventListener('mouseup', () => (mousedown = false));
	};

	render = () => {
		const { props } = this;
		return (
			<div className="player" ref={this.player}>
				<video className="player__video viewer" ref={this.video} src={props.src}></video>
				<div className="player__controls">
					<div className="progress" ref={this.progress}>
						<div className="progress__filled" ref={this.progressBar}></div>
					</div>
					<button className="player__button toggle" ref={this.toggle} title="Toggle Play">
						►
					</button>
					<input
						type="range"
						name="volume"
						className="player__slider"
						min="0"
						max="1"
						step="0.05"
						value="1"
					/>
					<input
						type="range"
						name="playbackRate"
						className="player__slider"
						min="0.5"
						max="2"
						step="0.1"
						value="1"
					/>
					<button className="player__button player__mute">&#x1f50a;</button>
					<button data-skip="-10" className="player__button">
						&#x23ea;
					</button>
					<button data-skip="25" className="player__button">
						&#x23e9;
					</button>
					<span className="player__time player__button">
						<span className="player__button player__elapsed"></span>&nbsp;/&nbsp;
						<span className="player__button player__duration"></span>
					</span>
					<button className="player__button player__fullscreen">Full screen</button>
				</div>
			</div>
		);
	};
}
export default Video;
