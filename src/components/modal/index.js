'use strict';

import React from 'react';
import { Overlay, Wrap, CloseButton } from './index.styles';

const Modal = (props) => {
	return (
		<>
			<Overlay />
			<Wrap>
				<CloseButton onClick={props.onCloseClick}>Close</CloseButton>
				Modal content
			</Wrap>
		</>
	);
};

export default Modal;
