const getRestTime = require('./13.module')
    // 測試採 3A 原則。
describe('JS13', () => {
    describe('是否正確顯示結果', () => {
        it('顯示結果：兔子還可休息 3520 秒(取整數)', () => {
            const distance = 1000;
            const speedPerSecond_Turtle = 0.28;
            const speedPerSecond_Rabbit = 20 - 1 / 5;
            const result = getRestTime(speedPerSecond_Turtle, speedPerSecond_Rabbit, distance);
            expect(result).toBe(3520);
        })
    });
});