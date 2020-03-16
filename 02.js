// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getResult = require('./02.module');

function js02() {
    rl.question("請輸入第一個整數：", inputNumber1 => {
        rl.question("請輸入第二個整數：", inputNumber2 => {
            function analyzeData(inputNumber1, inputNumber2) {
                const Integer = /^-?\d+$/;
                const isInteger1 = Integer.test(inputNumber1);
                const isInteger2 = Integer.test(inputNumber2);
                if (!isInteger1 || !isInteger2) {
                    console.log('請重新輸入2個有效整數');
                    return js02();
                }
                getResult(inputNumber1, inputNumber2);
                rl.close();
            }
            analyzeData(inputNumber1, inputNumber2);
        });
    });
}

js02();