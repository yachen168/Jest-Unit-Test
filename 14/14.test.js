const { isPositiveInteger, getNumberOfBacterial } = require('./14.module')
    // 測試採 3A 原則。
    // 因在終端機輸入的值都是 string，所以皆以 string 做測試。
describe('JS11', () => {
    describe('使用者是否輸入 ≧ 0 的整數', () => {
        it('若輸入任何符號，則要求重新輸入，例如：(´・3・`)', () => {
            const numberOfBacterial = "(´・3・`)";
            const numberOfTime = "14"
            const result = isPositiveInteger(numberOfBacterial, numberOfTime);
            expect(result).toBeFalsy();
        })
        it('若輸入任何英文，則要求重新輸入，例如：7pupu', () => {
            const numberOfBacterial = "7pupu";
            const numberOfTime = "14"
            const result = isPositiveInteger(numberOfBacterial, numberOfTime);
            expect(result).toBeFalsy();
        })
        it('若輸入任何負數，則要求重新輸入，例如：-10', () => {
            const numberOfBacterial = "-10";
            const numberOfTime = "14"
            const result = isPositiveInteger(numberOfBacterial, numberOfTime);
            expect(result).toBeFalsy();
        })
        it('若輸入任何小數，則要求重新輸入，例如：1.68', () => {
            const numberOfBacterial = "1.68";
            const numberOfTime = "14"
            const result = isPositiveInteger(numberOfBacterial, numberOfTime);
            expect(result).toBeFalsy();
        })
        it('若輸入任何空值，要求重新輸入', () => {
            const numberOfBacterial = "";
            const numberOfTime = "14"
            const result = isPositiveInteger(numberOfBacterial, numberOfTime);
            expect(result).toBeFalsy();
        })
        it('若輸入有效數字，將字串轉為數字，例如：18', () => {
            const numberOfBacterial = "18";
            const numberOfTime = "14"
            const result = isPositiveInteger(numberOfBacterial, numberOfTime);
            expect(result).toBeTruthy();
        })
    })
    describe('輸入格式正確，計算結果', () => {
        it('若初始細菌 0 隻，無論經過幾分鐘細菌皆為 0.00 隻', () => {
            const numberOfBacterial = "0";
            const numberOfTime = "20";
            const result = getNumberOfBacterial(numberOfBacterial, numberOfTime);
            expect(result).toMatch(`細菌有 0.00`);
        })
        it('若初始細菌 1 隻，經過 1 分鐘後，細菌有 1.04 隻', () => {
            const numberOfBacterial = "1";
            const numberOfTime = "1";
            const result = getNumberOfBacterial(numberOfBacterial, numberOfTime);
            expect(result).toMatch('細菌有 1.04 隻');
        })
        it('若初始細菌 1 隻，經過 20 分鐘後，細菌有 2.00 隻', () => {
            const numberOfBacterial = "1";
            const numberOfTime = "20";
            const result = getNumberOfBacterial(numberOfBacterial, numberOfTime);
            expect(result).toMatch('細菌有 2.00 隻');
        })
        it('若初始細菌 1 隻，經過 40 分鐘後，細菌有 4.00 隻', () => {
            const numberOfBacterial = "1";
            const numberOfTime = "40";
            const result = getNumberOfBacterial(numberOfBacterial, numberOfTime);
            expect(result).toMatch('細菌有 4.00 隻');
        })
        it('若初始細菌 4 隻，經過 20 分鐘後，細菌有 8.00', () => {
            const numberOfBacterial = "4";
            const numberOfTime = "20";
            const result = getNumberOfBacterial(numberOfBacterial, numberOfTime);
            expect(result).toMatch('細菌有 8.00 隻');
        })
        it('若初始細菌 4 隻，經過 80 分鐘後，細菌有 64.00 隻', () => {
            const numberOfBacterial = "4";
            const numberOfTime = "80";
            const result = getNumberOfBacterial(numberOfBacterial, numberOfTime);
            expect(result).toMatch('細菌有 64.00 隻');
        })
    });
});