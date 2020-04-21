'use strict';

import React from 'react';
import Head from 'next/head';
import '&/css/main.scss';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Test Site</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;
