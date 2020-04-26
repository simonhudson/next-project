'use strict';

import React from 'react';
import DataList from '~/components/data-list';
import { H1 } from '~/theme/typography';
import { Wrap } from '~theme/layout';

const Home = () => {
	return (
		<Wrap>
			<H1>Home page</H1>
			<DataList endpoint="people" />
		</Wrap>
	);
};

export default Home;
