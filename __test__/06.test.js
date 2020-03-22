const { isEnglishNames, getOddAlphabet } = require('../06.module');
// 測試採 3A 原則。
describe('JS06', () => {
    describe('使用者輸入格式是否正確', () => {
        it('若輸入任何符號，要求重新輸入，例如：・ω・、Yachen、Roy、Cindy', () => {
            const names = ['・ω・', 'Yachen', 'Roy', 'Cindy'];
            const result = isEnglishNames(names);
            expect(result).toBeFalsy();
        })
        it('若輸入任何數字，要求重新輸入，例如：7pupu、Yachen、Roy、Cindy', () => {
            const names = ['7pupu', 'Yachen', 'Roy', 'Cindy'];
            const result = isEnglishNames(names);
            expect(result).toBeFalsy();
        })
        it('若輸入任何中文，要求重新輸入，例如：小明、Yachen、Roy、Cindy', () => {
            const names = ['小明', 'Yachen', 'Roy', 'Cindy'];
            const result = isEnglishNames(names);
            expect(result).toBeFalsy();
        })
        it('若輸入空值，要求重新輸入', () => {
            const names = ['', 'Yachen', 'Roy', 'Cindy'];
            const result = isEnglishNames(names);
            expect(result).toBeFalsy();
        })
        it('若輸入格式正確，則開始運作', () => {
            const names = ['Bob', 'Yachen', 'Roy', 'Cindy'];
            const result = isEnglishNames(names);
            expect(result).toBeTruthy();
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