'use strict';

import spacing from './spacing';

describe('theme/spacing', () => {

	it('should return expected values', () => {
		expect(spacing).toEqual({
            default: 16,
            xsm: 4,
            sm: 8,
            md: 32,
            lg: 64,
            xlg: 96,
        });
    });
    
});
