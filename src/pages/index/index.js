'use strict';

import React, { Component } from 'react';
import DataList from '~/components/data-list';
import Modal from '~/components/modal';
import Theme from '~/theme';
import VisuallyHidden from '~/components/visually-hidden';
import { openModal, closeModal } from '~/components/modal/methods';
import LiveSearch from '~/components/live-search';
import Video from '~/components/video';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};
	}

	componentDidMount = () => {};

	render = () => {
		const { state } = this;
		return (
			<>
				<Theme.layout.Wrap>
					<VisuallyHidden>This is hidden</VisuallyHidden>
					<Theme.typography.H1>Develop branch test</Theme.typography.H1>
					<Video src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164" />
					<LiveSearch endpoint="users" />
					<p>
						This page has been rendered on the server. You can turn JavaScript off and it will still be
						visible
					</p>
					<button onClick={(e) => openModal(e, this)}>Show modal</button>
					<p>The content below has been rendered on the client</p>
					<DataList endpoint="users" />
				</Theme.layout.Wrap>
				{state.modalVisible && <Modal theme={Theme} onCloseClick={(e) => closeModal(e, this)} />}
			</>
		);
	};
}

export default Home;
