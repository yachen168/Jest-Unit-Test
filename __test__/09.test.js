const getResultOfMerge = require('../09.module')
    // 測試採 3A 原則。
describe('JS09', () => {
    describe('是否正確執行', () => {
        it('正確顯示合併結果：[10, 10, 10, 10, 10]', () => {
            const result = getResultOfMerge();
            expect(result).toEqual([10, 10, 10, 10, 10]);
        })
    });
});