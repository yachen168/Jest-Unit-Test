const { isAlphabet, toCaesar } = require('./16.module');
// 測試採 3A 原則。
describe('JS16', () => {
    describe('使用者是否正確輸入五個英文字母', () => {
        it('若輸入任何符號，要求重新輸入，例如：!ABCD', () => {
            const inputAlphabets = '!ABCD';
            const result = isAlphabet(inputAlphabets);
            expect(result).toBeFalsy();
        })
        it('若輸入任何數字，要求重新輸入，例如：ABCD4', () => {
            const inputAlphabets = 'ABCD4';
            const result = isAlphabet(inputAlphabets);
            expect(result).toBeFalsy();
        })
        it('若輸入任何中文，要求重新輸入，例如：哇ABCD', () => {
            const inputAlphabets = '哇ABCD';
            const result = isAlphabet(inputAlphabets);
            expect(result).toBeFalsy();
        })
        it('若輸入任何空值，要求重新輸入，例如：AB CD', () => {
            const inputAlphabets = 'AB CD';
            const result = isAlphabet(inputAlphabets);
            expect(result).toBeFalsy();
        })
        it('若輸入格式正確，則開始執行加密', () => {
            const inputAlphabets = 'ABCDE';
            const result = isAlphabet(inputAlphabets);
            expect(result).toBeTruthy();
        })
    });
    describe('是否正確加密', () => {
        it('若輸入 ABCDE，回傳 DEFGH', () => {
            const inputAlphabets = 'ABCDE';
            const result = toCaesar(inputAlphabets);
            expect(result).toMatch('DEFGH');
        })
        it('若輸入 abcde，回傳 defgh', () => {
            const inputAlphabets = 'abcde';
            const result = toCaesar(inputAlphabets);
            expect(result).toMatch('defgh');
        })
        it('若輸入 xyzab，回傳 abcde', () => {
            const inputAlphabets = 'xyzab';
            const result = toCaesar(inputAlphabets);
            expect(result).toMatch('abcde');
        })
        it('若輸入 Hello，回傳 Khoor', () => {
            const inputAlphabets = 'Hello';
            const result = toCaesar(inputAlphabets);
            expect(result).toMatch('Khoor');
        })
    })
});