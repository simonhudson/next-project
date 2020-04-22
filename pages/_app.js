'use strict';

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '&/theme';
import '&/css/main.scss';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Test Site</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
