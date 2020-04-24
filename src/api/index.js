'use strict';

const COMMON_OPTIONS = {
	dataType: 'json',
	mode: 'cors',
};

const makeRequest = (endpoint, method) => {
	if (!endpoint || !method) return null;
	const options = { ...COMMON_OPTIONS, method };
	return new Promise((resolve, reject) => {
		fetch(`${process.env.API_URL}/${endpoint}`, options)
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
};

export function get(endpoint) {
	return makeRequest(endpoint, 'GET');
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
