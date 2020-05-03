'use strict';

const hasLocalStorage = () => 'localStorage' in window && window['localStorage'] !== null;

export function getLocalStorage(key) {
	if (!!key && hasLocalStorage()) {
		return localStorage.getItem(key);
	}
}

export function setLocalStorage(key, value) {
	if (!!key && !!value && hasLocalStorage()) {
		localStorage.setItem(key, value);
	}
}

export function deleteLocalStorage(key) {
	if (!!key && hasLocalStorage()) {
		localStorage.removeItem(key);
	}
}

export function clearLocalStorage() {
	if (hasLocalStorage()) {
		localStorage.clear();
	}
}