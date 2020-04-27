'use strict';

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';
import SiteHeader from '~/components/site-header';
import Hero from '~/components/hero';
import SiteFooter from '~/components/site-footer';
import '&/css/main.scss';

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	pageProps.currentPage = {
		query: router.query,
		route: router.route,
	};
	return (
		<>
			<Head>
				<title>Test Site</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<SiteHeader {...pageProps} theme={Theme} />
				<Hero />
				<Component {...pageProps} theme={Theme} />
				<SiteFooter />
			</ThemeProvider>
		</>
	);
};

export default App;
