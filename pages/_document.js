import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import MainNavigation from '~/main-navigation';

class Layout extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<MainNavigation />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Layout;
