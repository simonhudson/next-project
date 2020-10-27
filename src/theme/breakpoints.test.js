'use strict';

import breakpoints from './breakpoints';

describe('theme/breakpoints', () => {

	it('should return expected values', () => {
		expect(breakpoints).toEqual({
            'phone-p': 420,
            'tablet-p': 768,
            'tablet-l': 1024,
            desktop: 1200,
        });
    });
    
});
