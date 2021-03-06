'use strict';

import palette from './palette';

describe('theme/palette', () => {

	it('should return expected values', () => {
		expect(palette).toEqual({
            primary: {
                a: '#406eb3',
                b: '#E65100',
                bodyText: '#5d5d5d',
                black: '#333',
                white: '#fff',
            },
            alert: {
                error: '#f00',
                info: '#015cae',
                success: '#01943b',
                warning: '#eeb320',
            },
        });
    });
    
});
