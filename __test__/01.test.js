const isPlayMovie = require('../01-moudule');

describe('是否要播放電影', () => {
    it('播放電影: 人數大於 0', function() {
        const NumberOfCustomer = 2;
        expect(isPlayMovie(NumberOfCustomer)).toBeTruthy();
    })

    it('不播放電影: 人數為 0', function() {
        const NumberOfCustomer = 0;
        expect(isPlayMovie(NumberOfCustomer)).toBeFalsy();
    })

});