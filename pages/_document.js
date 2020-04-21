'use strict';

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import SiteHeader from '~/site-header';

class Layout extends Document {
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
