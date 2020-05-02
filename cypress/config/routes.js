'use strict';

import routes from '../../src/config/routes';

const makeRoutes = () => {
	const routeObj = {};
	routes.forEach((route) => (routeObj[route.id] = route.href));
	return routeObj;
};

module.exports = makeRoutes();
