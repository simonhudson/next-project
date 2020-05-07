'use strict';

export const openModal = (e, context) => {
	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	context.setState({ modalVisible: true });
};

export const closeModal = (e, context) => {
	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	context.setState({ modalVisible: false });
};
