'use strict';

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';
import SiteHeader from '~/components/site-header';
import Hero from '~/components/hero';
import SiteFooter from '~/components/site-footer';

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	pageProps.currentPage = {
		name: router.route === '/' ? 'home' : router.route.split('/')[1],
		query: router.query,
		route: router.route,
	};

	return (
		<>
			<Head>
				<title>Test Site</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<SiteHeader {...pageProps} />
				<main>
					<Hero {...pageProps} />
					<Component {...pageProps} />
				</main>
				<SiteFooter {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
