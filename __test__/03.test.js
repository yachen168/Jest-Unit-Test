const getResult = require('../03.module');

describe('依據顧客年齡進行差別取價', () => {

    it('一般票 400 元：6 歲 < 顧客年齡 < 65 歲', function() {
        const ageOfCostumer = 60;
        const result = getResult(ageOfCostumer);
        expect(result).toMatch('一般票價 $400 元');
    })
    it('優待票 200 元：顧客年齡 ≦ 6 歲或 ≧ 65 歲', function() {
        const ageOfCostumer = 70;
        const result = getResult(ageOfCostumer);
        expect(result).toMatch('優待票價 $200 元');
    })
});