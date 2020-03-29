const getRestTime = require('.c/13.module')
    // 測試採 3A 原則。
describe('JS09', () => {
    describe('是否正確顯示結果', () => {
        it('顯示結果：兔子還可休息 3520 秒(取整數)', () => {
            const result = getRestTime();
            expect(result).toMatch(`兔子還可休息 3520 秒(取整數)`);
        })
    });
});