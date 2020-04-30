const { getResult } = require('./10.module')
    // 測試採 3A 原則。
describe('JS10', () => {
    describe('是否正確顯示結果', () => {
        it('顯示結果：質數：3 (索引值為 0) , 質數：13 (索引值為 3) , 質數：11 (索引值為 6)', () => {
            const array = [3, 50, 0, 13, 2, 4, 11];
            const result = getResult(array);
            expect(result).toEqual([{ "index": 0, "value": 3 }, { "index": 3, "value": 13 }, { "index": 6, "value": 11 }]);
        })
    });
});