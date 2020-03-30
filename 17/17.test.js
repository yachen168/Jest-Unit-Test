const getResult = require('./17.module')
    // 測試採 3A 原則。
describe('JS17', () => {
    describe('是否正確計算出結果', () => {
        it('一號選手：253，二號選手：251，三號選手：305，四號選手：191', () => {
            const result = getResult();
            expect(result).toMatch(`一號選手：253，二號選手：251，三號選手：305，四號選手：191`);
        })
    });
});