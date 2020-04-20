const { findPrimeNumber, getMultiple } = require('./12.module')
    // 測試採 3A 原則。
describe('JS12', () => {
    describe('是否正確顯示 10~20 間的質數', () => {
        it('顯示結果：[ 11, 13, 15, 17, 19 ]', () => {
            const result = findPrimeNumber();
            expect(result).toEqual([11, 13, 17, 19]);
        })
    });
    describe('是否正確顯示 100 以內的倍數', () => {
        it('顯示結果：[11, 22, 33, 44, 55, 66, 77, 88, 99, 13, 26, 39, 52, 65, 78, 91, 17, 34, 51, 68, 85,19, 38, 57, 76, 95]', () => {
            const result = getMultiple();
            expect(result).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 13, 26, 39, 52, 65, 78, 91, 17, 34, 51, 68, 85, 19, 38, 57, 76, 95]);
        })
    });
});