const { filtNumber, getResult } = require('../01.module')
    // 因在終端機使用者輸入的值都是 string，所以皆以 string 做測試。
describe('電影院是否要播放電影', () => {
    describe('過濾使用者輸入非有效數字的內容', () => {
        it('輸入符號，要求重新輸入', function() {
            const case1 = "(´・ω・`)";
            const result = filtNumber(case1);
            expect(result).toBeTruthy();
        })
        it('輸入英文，要求重新輸入', function() {
            const case2 = "hello";
            const result = filtNumber(case2);
            expect(result).toBeTruthy();
        })
        it('輸入負數，要求重新輸入', function() {
            const case3 = "-10";
            const result = filtNumber(case3);
            expect(result).toBeTruthy();
        })
        it('輸入小數，要求重新輸入', function() {
            const case4 = "1.68";
            const result = filtNumber(case4);
            expect(result).toBeTruthy();
        })
        it('輸入空值，要求重新輸入', function() {
            const case5 = "";
            const result = filtNumber(case5);
            expect(result).toBeTruthy();
        })
    })
    describe('播放電影', () => {
        it('輸入大於 ０ 人，播放電影', function() {
            const numberOfCustomer = 1;
            const result = getResult(numberOfCustomer);
            expect(result).toBeTruthy();
        })
    });
    describe('不播放電影', () => {
        it('輸入 0 人，不播放電影', function() {
            const numberOfCustomer = 0;
            const result = getResult(numberOfCustomer);
            expect(result).toBeFalsy();
        })
    })
});