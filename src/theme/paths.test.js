'use strict';

import paths from './paths';

describe('theme/paths', () => {

	it('should return expected values', () => {
		expect(paths).toEqual({
            img: 'assets/imgs/',
            font: 'assets/fonts/',
        });
    });
    
});
