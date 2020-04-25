/* 8. 試寫一程式， 讓使用者輸入一正整數 n 值， 並撰寫一遞迴函數來
求算當 n 值不斷除以 3 時， 最少要除多少次， 小數點後第 2 位會等於 0。*/
const rl = require('../readline.module');
const { isPositiveInteger, getResultOfDivided } = require('./08.module');

function js08() {
    rl.question("請輸入一個正整數：", inputNumber => {
        if (!isPositiveInteger(inputNumber)) {
            console.log(`請重新輸入一個正整數`);
            return js08();
        }
        const result = getResultOfDivided(inputNumber, timesOfDivide = 1);
        console.log(`須除以 ${result.timesOfDivide} 次，此時為 ${result.resultAfterDivided}`);
        rl.close();
    });
}

js08();