'use strict';

import React from 'react';
import { Overlay, Wrap, Inner, CloseButton } from './index.styles';
import Icon from '~/components/icon';

const Modal = (props) => {
	return (
		<>
			<Overlay />
			<Wrap>
				<CloseButton onClick={props.onCloseClick}>
					<Icon type="times" />
					&nbsp;Close
				</CloseButton>
				<Inner>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla tempor urna a luctus.
						Integer non erat id mauris egestas pretium sit amet in nunc.
					</p>
					<p>
						Sed mattis, nulla sed condimentum dignissim, nibh velit elementum massa, nec cursus justo leo
						quis lorem. In sapien arcu, eleifend eu enim ut, commodo feugiat mi. Praesent faucibus ultricies
						sem, vitae blandit felis facilisis sit amet. Praesent ut sollicitudin nulla. Morbi faucibus ex
						non nisl sollicitudin, sit amet facilisis libero ullamcorper.
					</p>
					<p>
						Nam maximus lorem ex, et pretium nisi posuere fermentum. Aenean non luctus purus. Sed placerat
						euismod elit, ac facilisis risus viverra quis. Cras ut est ornare, rhoncus sapien vitae, dictum
						elit. Sed sit amet lacus lacus.
					</p>
				</Inner>
			</Wrap>
		</>
	);
};

export default Modal;
