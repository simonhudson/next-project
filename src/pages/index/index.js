'use strict';

import React from 'react';
import DataList from '~/components/data-list';
import { layout, typography } from '~/theme';

const Home = (props) => {
	return (
		<layout.Wrap>
			<typography.H1>Develop branch</typography.H1>
			<p>This page has been rendered on the server. You can turn JavaScript off and it will still be visible</p>
			<p>The content below has been rendered on the client</p>
			<DataList endpoint="users" />
		</layout.Wrap>
	);
};

export default Home;
