'use strict';

import React from 'react';
import { Overlay, Wrap, CloseButton } from './index.styles';
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
				Modal content
			</Wrap>
		</>
	);
};

export default Modal;
