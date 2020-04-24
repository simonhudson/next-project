'use strict';

import React from 'react';
import { Wrapper, Text } from './index.styles';
import LoadingImage from './loading.svg';

const Loading = (props) => {
	return (
		<Wrapper data-test="loading">
			<img alt="Loading" data-test="loading__img" src={LoadingImage} />
			<Text>Loading&hellip;</Text>
		</Wrapper>
	);
};

export default Loading;
