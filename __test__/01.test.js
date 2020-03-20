const { isPositiveInteger, isPlayMovie } = require('../01.module')
    // 因在終端機使用者輸入的值都是 string，所以皆以 string 做測試。
describe('JS01', () => {
    describe('過濾使用者輸入的內容', () => {
        it('若輸入任何符號，則要求重新輸入，例如：(´・3・`)', function() {
            const case1 = "(´・3・`)";
            const result = isPositiveInteger(case1);
            expect(result).toBeFalsy();
        })
        it('若輸入任何英文，則要求重新輸入，例如：7pupu', function() {
            const case2 = "7pupu";
            const result = isPositiveInteger(case2);
            expect(result).toBeFalsy();
        })
        it('若輸入負數，則要求重新輸入，例如：-10', function() {
            const case3 = "-10";
            const result = isPositiveInteger(case3);
            expect(result).toBeFalsy();
        })
        it('若輸入小數，則要求重新輸入，例如：1.68', function() {
            const case4 = "1.68";
            const result = isPositiveInteger(case4);
            expect(result).toBeFalsy();
        })
        it('若輸入空值，要求重新輸入', function() {
            const case5 = "";
            const result = isPositiveInteger(case5);
            expect(result).toBeFalsy();
        })
        it('若輸入有效數字，將字串轉為數字，例如：18', function() {
            const case6 = "18";
            const result = isPositiveInteger(case6);
            expect(result).toBeTruthy();
        })
    })
    describe('是否要播放電影', () => {
        it('若輸入人數大於 0 人，則顯示播放電影', function() {
            const numberOfCustomer = 1;
            const result = isPlayMovie(numberOfCustomer);
            expect(result).toBeTruthy();
        })
        it('若輸入人數等於 0 人，則顯示不播放電影', function() {
            const numberOfCustomer = 0;
            const result = isPlayMovie(numberOfCustomer);
            expect(result).toBeFalsy();
        })
    });
});