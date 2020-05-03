const hasSessionStorage = () => 'sessionStorage' in window && window['sessionStorage'] !== null;

export function getSessionStorage(key) {
	if (!!key && hasSessionStorage()) return sessionStorage.getItem(key);
}

export function setSessionStorage(key, value) {
	if (!!key && !!value && hasSessionStorage()) sessionStorage.setItem(key, value + ''); // Coerce value to a string
}

export function removeSessionStorage(key) {
	if (!!key && hasSessionStorage()) sessionStorage.removeItem(key);
}

export function clearSessionStorage() {
	if (hasSessionStorage()) sessionStorage.clear();
}

export function populateSessionStorageByObject(obj) {
	if (!!obj && hasSessionStorage()) for (let key in obj) setSessionStorage(key, obj[key]);
}

export function getSessionStorageByNamespace(namespace) {
	if (!namespace || !hasSessionStorage()) return;
	let data = {};
	for (let item in sessionStorage) {
		if (item.indexOf(namespace) > -1) data[item] = getSessionStorage(item);
	}
	return data;
}

export function removeSessionStorageByNamespace(namespace) {
	if (!namespace || !hasSessionStorage()) return;
	for (let item in sessionStorage) {
		if (item.indexOf(namespace) > -1) removeSessionStorage(item);
	}
}