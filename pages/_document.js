'use strict';

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import SiteHeader from '~/site-header';
import { ServerStyleSheet } from 'styled-components';

class Layout extends Document {
	static getInitialProps({ renderPage }) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();

		// Step 2: Retrieve styles from components in the page
		const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement();

		// Step 4: Pass styleTags as a prop
		return { ...page, styleTags };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Lora:400,700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<SiteHeader />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Layout;
