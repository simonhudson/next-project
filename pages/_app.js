'use strict';

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '&/theme';
import SiteHeader from '~/site-header';
import '&/css/main.scss';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Test Site</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<SiteHeader {...pageProps} theme={Theme} />
				<Component {...pageProps} theme={Theme} />
			</ThemeProvider>
		</>
	);
};

export default App;
