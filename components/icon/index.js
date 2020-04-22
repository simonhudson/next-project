'use strict';

import React from 'react';

const Icon = (props) => {
	if (!props.type) return null;

	return <span className={`fa fa-${props.type}`} aria-hidden="true" data-test="icon"></span>;
};

export default Icon;
