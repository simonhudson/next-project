'use strict';

import React from 'react';
import People from '~/components/people';
import { H1 } from '~/theme/typography';

const Home = () => {
	return (
		<>
			<H1>Home page</H1>
			<People />
		</>
	);
};

export default Home;
