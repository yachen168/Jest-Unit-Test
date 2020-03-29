const { isIntegers, isRemainderEqual } = require('./02.module');
// 測試採 3A 原則。
// 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe('JS02', () => {
    describe('使用者是否輸入整數', () => {
        it('若輸入任何符號，要求重新輸入，例如：(´・3・`)', () => {
            const number1 = "(´・3・`)";
            const number2 = "34";
            const result = isIntegers(number1, number2);
            expect(result).toBeFalsy();
        })
        it('若輸入任何英文，要求重新輸入，例如：7pupu', () => {
            const number1 = "7pupu";
            const number2 = "9";
            const result = isIntegers(number1, number2);
            expect(result).toBeFalsy();
        })
        it('若輸入任何小數，要求重新輸入，例如：1.68', () => {
            const number1 = "1.68";
            const number2 = "9";
            const result = isIntegers(number1, number2);
            expect(result).toBeFalsy();
        })
        it('若輸入空值，要求重新輸入', () => {
            const number1 = "";
            const number2 = "9";
            const result = isIntegers(number1, number2);
            expect(result).toBeFalsy();
        })
        it('若輸入有效數字，將字串轉為數字，例如：18', () => {
            const number1 = "18";
            const number2 = "9";
            const result = isIntegers(number1, number2);
            expect(result).toBeTruthy();
        })
    })
    describe('判斷餘數是否相同', () => {
        it('餘數相同：例如第一個數為 6，第二個數為 9，除以 3 的餘數皆為 0', () => {
            const number1 = "6";
            const number2 = "9";
            const result = isRemainderEqual(number1, number2);
            expect(result).toMatch(`餘數相同`);
        })
        it('餘數不同：例如第一個數為 8，第二個數為 4，除以 3 的餘數分別為 2 與 1', () => {
            const number1 = "8";
            const number2 = "4";
            const result = isRemainderEqual(number1, number2);
            expect(result).toMatch(`餘數不同`);
        })
    })
});