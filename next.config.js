'use strict';

require('dotenv').config();

const setEnvVars = () => {
	const envObj = {};
	const KEYS_TO_SET = ['API_URL'];
	for (let key in process.env) {
		if (KEYS_TO_SET.includes(key)) envObj[key] = process.env[key];
	}
	return envObj;
};

module.exports = {
	env: setEnvVars(),
};
