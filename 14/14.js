/* 14. 細菌實驗中，原有 b 隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
試寫一遞迴函數。讓使用者輸入分鐘數，並計算在沒有細菌死亡的狀況下，m 分鐘後的細
菌有幾隻。
*/
const rl = require('../readline.module');
const { isPositiveInteger, getNumberOfBacterial } = require('./14.module');

function js14() {
    rl.question("請輸入一開始的細菌數量：", numberOfBacterial => {
        rl.question("請輸入分鐘數(需 ≧ 0)：", time => {
            if (!isPositiveInteger(numberOfBacterial)) {
                console.log(`格式錯誤，請重新輸入一個大於 0 的整數`);
                return js14();
            }
            if (!isPositiveInteger(time)) {
                console.log(`格式錯誤，請重新輸入一個大於 0 的整數`);
                return js14();
            }
            console.log(getNumberOfBacterial(numberOfBacterial, time));
            rl.close();
        });
    });
}

js14();