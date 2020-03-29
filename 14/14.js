/* 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
試寫一遞迴函數。讓使用者輸入分鐘數，並計算在沒有細菌死亡的狀況下，m 分鐘後的細
菌有幾隻。
*/
const rl = require('../readline.module');
const { isPositiveInteger, getNumberOfBacterial } = require('./14.module');

function js14() {
    rl.question("請輸入分鐘數(需 ≧ 0)：", inputNumber => {
        const originNumberOfBacterial = 1;
        if (!isPositiveInteger(inputNumber)) {
            console.log(`請重新輸入分鐘數(需 ≧ 0)`);
            return js14();
        }
        console.log(getNumberOfBacterial(originNumberOfBacterial, inputNumber));
        rl.close();
    });
}

js14();