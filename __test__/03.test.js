const { isInteger, isOriginPrice } = require('../03.module');
// 測試採 3A 原則。
// 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe('JS03', () => {
    describe('使用者是否輸入正整數', () => {
        it('若輸入含任何符號，要求重新輸入，例如：(´・3・`)', () => {
            const case1 = "(´・ω・`)";
            const result = isInteger(case1);
            expect(result).toBeFalsy();
        })
        it('若輸入含任何英文，要求重新輸入，例如：7pupu', () => {
            const case2 = "7pupu";
            const result = isInteger(case2);
            expect(result).toBeFalsy();
        })
        it('若輸入負數，要求重新輸入，例如：-10', () => {
            const case3 = "-10";
            const result = isInteger(case3);
            expect(result).toBeFalsy();
        })
        it('若輸入小數，要求重新輸入，例如：1.68', () => {
            const case4 = "1.68";
            const result = isInteger(case4);
            expect(result).toBeFalsy();
        })
        it('若輸入空值，要求重新輸入', () => {
            const case5 = "";
            const result = isInteger(case5);
            expect(result).toBeFalsy();
        })
        it('若輸入有效數字，將字串轉為數字，例如：18', () => {
            const case6 = "18";
            const result = isInteger(case6);
            expect(result).toBeTruthy();
        })
    });
    describe('根據顧客年齡顯示票價', () => {
        it('一般票 400 元：6 歲 < 顧客年齡 < 65 歲', () => {
            const ageOfCostumer = "60";
            const result = isOriginPrice(ageOfCostumer);
            expect(result).toBeTruthy();
        })
        it('優待票 200 元：顧客年齡 ≦ 6 歲或 ≧ 65 歲', () => {
            const ageOfCostumer = "70";
            const result = isOriginPrice(ageOfCostumer);
            expect(result).toBeFalsy();
        })
    })
});