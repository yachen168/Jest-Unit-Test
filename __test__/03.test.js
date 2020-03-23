const { isPositiveInteger, isHalfPrice } = require('../03.module');
// 測試採 3A 原則。
// 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe('JS03', () => {
    describe('使用者是否輸入正整數', () => {
        it('若輸入含任何符號，要求重新輸入，例如：(´・3・`)', () => {
            const case1 = "(´・ω・`)";
            const result = isPositiveInteger(case1);
            expect(result).toBeFalsy();
        })
        it('若輸入含任何英文，要求重新輸入，例如：7pupu', () => {
            const case2 = "7pupu";
            const result = isPositiveInteger(case2);
            expect(result).toBeFalsy();
        })
        it('若輸入負數，要求重新輸入，例如：-10', () => {
            const case3 = "-10";
            const result = isPositiveInteger(case3);
            expect(result).toBeFalsy();
        })
        it('若輸入小數，要求重新輸入，例如：1.68', () => {
            const case4 = "1.68";
            const result = isPositiveInteger(case4);
            expect(result).toBeFalsy();
        })
        it('若輸入空值，要求重新輸入', () => {
            const case5 = "";
            const result = isPositiveInteger(case5);
            expect(result).toBeFalsy();
        })
        it('若輸入有效數字，將字串轉為數字，例如：18', () => {
            const case6 = "18";
            const result = isPositiveInteger(case6);
            expect(result).toBeTruthy();
        })
    });
    describe('一般價 400 元，優待票 200 元(顧客年齡 ≦ 6 歲或 ≧ 65 歲)', () => {
        it('輸入 60 歲，顯示票價 400 元', () => {
            const ageOfCostumer = "60";
            const result = isHalfPrice(ageOfCostumer);
            expect(result).toMatch(`400 元`);
        })
        it('輸入 3 歲，顯示票價 200 元', () => {
            const ageOfCostumer = "3";
            const result = isHalfPrice(ageOfCostumer);
            expect(result).toMatch(`200 元`);
        })
    })
});