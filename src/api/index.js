'use strict';

import axios from 'axios';

const COMMON_OPTIONS = {
	dataType: 'json',
	mode: 'cors',
};

async function makeRequest(endpoint, method) {
	const responseObj = {
		data: null,
		err: null,
	};
	if (!endpoint || !method) return null;
	const options = { ...COMMON_OPTIONS, method };
	try {
		const res = await axios[method.toLowerCase()](`${process.env.API_URL}/${endpoint}`, options);
		responseObj.data = {
			results: res.data,
			headers: res.headers,
		};
		return responseObj;
	} catch (err) {
		responseObj.err = err;
		return responseObj;
	}
}

export async function get(endpoint) {
	return await makeRequest(endpoint, 'GET');
}
export function post(endpoint) {
	return makeRequest(endpoint, 'POST');
}
export function put(endpoint) {
	return makeRequest(endpoint, 'PUT');
}
export function patch(endpoint) {
	return makeRequest(endpoint, 'PATCH');
}
