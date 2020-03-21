const { isEnglishNames, getOddAlphabet } = require('../06.module');
// 測試採 3A 原則。
// 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe('JS06', () => {
    describe('使用者輸入格式是否正確', () => {
        it('若輸入含任何符號，要求重新輸入，例如：(´・ω・`)', () => {
            const case1 = "(´・ω・`)";
            const result = isEnglishNames(case1);
            expect(result).toBeFalsy();
        })
        it('若輸入含任何數字，要求重新輸入，例如：7pupu', () => {
            const case2 = "7pupu";
            const result = isEnglishNames(case2);
            expect(result).toBeFalsy();
        })
        it('若輸入含任何中文，要求重新輸入，例如：小明', () => {
            const case3 = "小明";
            const result = isEnglishNames(case3);
            expect(result).toBeFalsy();
        })
        it('若輸入空值，要求重新輸入', () => {
            const case4 = " ";
            const result = isEnglishNames(case4);
            expect(result).toBeFalsy();
        })
    });
    describe('顯示第一與三個英文名字中的奇數字母', () => {
        it('若輸入 Yachen、Tony、Mike、Cindy，回傳 YceMk', () => {
            const names = ['Yachen', 'Tony', 'Mike', 'Cindy'];
            const result = getOddAlphabet(names);
            expect(result).toMatch(`YceMk`);
        })
        it('若輸入 Judy、Tim、Wendy、Kelly，回傳 JdWny', () => {
            const names = ['Judy', 'Tim', 'Wendy', 'Kelly'];
            const result = getOddAlphabet(names);
            expect(result).toMatch('JdWny');
        })
    })
});