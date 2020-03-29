const { isEvenInt_AtLeastFour, getCalculatedResult } = require('./05.module')
    // 測試採 3A 原則。
    // 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe('JS05', () => {
    describe('使用者是否輸入正整數', () => {
        it('若輸入任何符號，則要求重新輸入，例如：(´・3・`)', () => {
            const case1 = "(´・3・`)";
            const result = isEvenInt_AtLeastFour(case1);
            expect(result).toBeFalsy();
        })
        it('若輸入任何英文，則要求重新輸入，例如：7pupu', () => {
            const case2 = "7pupu";
            const result = isEvenInt_AtLeastFour(case2);
            expect(result).toBeFalsy();
        })
        it('若輸入奇數，則要求重新輸入，例如：19', () => {
            const case3 = "19";
            const result = isEvenInt_AtLeastFour(case3);
            expect(result).toBeFalsy();
        })
        it('若輸入小於 4 ，則要求重新輸入，例如：2', () => {
            const case4 = "2";
            const result = isEvenInt_AtLeastFour(case4);
            expect(result).toBeFalsy();
        })
        it('若輸入負數 ，則要求重新輸入，例如：-16', () => {
            const case5 = "-16";
            const result = isEvenInt_AtLeastFour(case5);
            expect(result).toBeFalsy();
        })
        it('若輸入小數，則要求重新輸入，例如：1.68', () => {
            const case6 = "1.68";
            const result = isEvenInt_AtLeastFour(case6);
            expect(result).toBeFalsy();
        })
        it('若輸入空值，要求重新輸入', () => {
            const case7 = "";
            const result = isEvenInt_AtLeastFour(case7);
            expect(result).toBeFalsy();
        })
        it('若輸入有效數字，將字串轉為數字，例如：18', () => {
            const case8 = "18";
            const result = isEvenInt_AtLeastFour(case8);
            expect(result).toBeTruthy();
        })
    })
    describe('輸入正確格式數字，則顯示計算結果', () => {
        it('若輸入 4，則顯示結果為 8。(計算過程為 2*4)', () => {
            const case1 = "4";
            const result = getCalculatedResult(case1);
            expect(result).toBe(8);
        })
        it('若輸入 10，則顯示結果為 160。(計算過程為 2*4+4*6+6*8+8*10)', () => {
            const case2 = "10";
            const result = getCalculatedResult(case2);
            expect(result).toBe(160);
        })
        it('若輸入 16，則顯示結果為 672。(計算過程為 2*4+4*6+...+14*16)', () => {
            const case3 = "16";
            const result = getCalculatedResult(case3);
            expect(result).toBe(672);
        })
    });
});