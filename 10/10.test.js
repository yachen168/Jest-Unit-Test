const { getResult, isPrimeNumber } = require('./10.module')
    // 測試採 3A 原則。
describe('JS11', () => {
    describe('依序判斷每個值是否為質數', () => {
        it('判斷 3 是否為質數，結果為是', () => {
            const num = "3";
            const result = isPrimeNumber(num);
            expect(result).toBeTruthy();
        })
        it('判斷 50 是否為質數，結果為否', () => {
            const num = "50";
            const result = isPrimeNumber(num);
            expect(result).toBeFalsy();
        })
        it('判斷 0 是否為質數，結果為否', () => {
            const num = "0";
            const result = isPrimeNumber(num);
            expect(result).toBeFalsy();
        })
        it('判斷 13 是否為質數，結果為是', () => {
            const num = "13";
            const result = isPrimeNumber(num);
            expect(result).toBeTruthy();
        })
        it('判斷 2 是否為質數，結果為否', () => {
            const num = "2";
            const result = isPrimeNumber(num);
            expect(result).toBeFalsy();
        })
        it('判斷 4 是否為質數，結果為否', () => {
            const num = "4";
            const result = isPrimeNumber(num);
            expect(result).toBeFalsy();
        })
        it('判斷 11 是否為質數，結果為是', () => {
            const num = "11";
            const result = isPrimeNumber(num);
            expect(result).toBeTruthy();
        })
    });
    describe('JS11', () => {
        it('顯示結果：質數：3 (索引值為 0) , 質數：13 (索引值為 3) , 質數：11 (索引值為 6)', () => {
            const array = [3, 50, 0, 13, 2, 4, 11];
            const result = getResult(array);
            expect(result).toMatch(`質數：3 (索引值為 0) , 質數：13 (索引值為 3) , 質數：11 (索引值為 6)`);
        })
    });
});