// 4. 輸入 n 印出 1+2-3+4-5+6...n 的算式與總和


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { isPositiveInteger, getResult } = require('./04.module')

function js04() {
    rl.question("請輸入一個大於 0 的整數：", inputNumber => {
        if (!isPositiveInteger(inputNumber)) {
            console.log(`請重新輸入一個大於 0 的整數`);
            return js04();
        } else {
            const result = getResult(inputNumber);
            console.log(`總合：${result.equation} = ${result.sum}`)
        }
        rl.close();
    });
}

js04();