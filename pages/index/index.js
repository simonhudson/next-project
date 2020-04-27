'use strict';

import React from 'react';
import DataList from '~/components/data-list';
import { H1 } from '~/theme/typography';
import { Wrap } from '~theme/layout';

const Home = () => {
	return (
		<Wrap>
			<H1>Home page</H1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum rhoncus velit nec vestibulum. Sed at
				mauris pulvinar, dapibus sapien ac, dictum tortor. Quisque non pellentesque dui, quis sagittis ex.
				Mauris vel ex massa. Pellentesque commodo leo a vulputate imperdiet. Mauris vel tortor ut massa commodo
				facilisis eget nec libero. Proin varius, tellus quis porta hendrerit, massa elit accumsan magna, quis
				tempor neque augue sed eros. Nunc mi magna, porta eget eros ac, volutpat molestie sapien. Sed vehicula
				elementum nisl. Aenean eu eleifend diam. Morbi risus enim, rutrum at diam eu, blandit dictum eros. Etiam
				et sapien ultricies, blandit lectus eleifend, laoreet magna. Integer at velit et justo cursus dapibus.
				Sed est lorem, interdum ut ornare ac, tristique id augue.
			</p>
			<DataList endpoint="people" />
		</Wrap>
	);
};

export default Home;
