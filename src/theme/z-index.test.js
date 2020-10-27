'use strict';

import zIndex from './z-index';

describe('theme/z-index', () => {

	it('should return expected values', () => {
		expect(zIndex).toEqual([
            'access-nav',
            'site-header'
        ]);
    });
    
});
