'use strict';

import React from 'react';
import styled from 'styled-components';

const VisuallyHidden = (props) => {
	const element = props.element ? props.element.toLowerCase() : 'span';

	const StyledVisuallyHidden = styled[element]`
		border: 0;
		clip: rect(0 0 0 0);
		height: 0;
		margin: 0;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 0;
	`;

	return <StyledVisuallyHidden>{props.children}</StyledVisuallyHidden>;
};

export default VisuallyHidden;
