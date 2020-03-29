const { isPositiveInteger, getPrice } = require('./11.module')
    // 測試採 3A 原則。
    // 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe('JS11', () => {
    describe('使用者是否輸入正整數', () => {
        it('若輸入任何符號，則要求重新輸入，例如：(´・3・`)', () => {
            const case1 = "(´・3・`)";
            const result = isPositiveInteger(case1);
            expect(result).toBeFalsy();
        })
        it('若輸入任何英文，則要求重新輸入，例如：7pupu', () => {
            const case2 = "7pupu";
            const result = isPositiveInteger(case2);
            expect(result).toBeFalsy();
        })
        it('若輸入負數，則要求重新輸入，例如：-10', () => {
            const case3 = "-10";
            const result = isPositiveInteger(case3);
            expect(result).toBeFalsy();
        })
        it('若輸入小數，則要求重新輸入，例如：1.68', () => {
            const case4 = "1.68";
            const result = isPositiveInteger(case4);
            expect(result).toBeFalsy();
        })
        it('若輸入 0，則要求重新輸入', () => {
            const case4 = "0";
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
    })
    describe('輸入格式正確，顯示結果', () => {
        it('若輸入 1，則顯示價錢：$395', () => {
            const case1 = "1";
            const result = getPrice(case1);
            expect(result).toMatch(`價錢為 $395 元`);
        })
        it('若輸入 5，則顯示價錢：$2195', () => {
            const case2 = "5";
            const result = getPrice(case2);
            expect(result).toMatch(`價錢為 $2195 元`);
        })
        it('若輸入 12，則顯示價錢：$2195', () => {
            const case2 = "12";
            const result = getPrice(case2);
            expect(result).toMatch(`價錢為 $5495 元`);
        })
    });
});