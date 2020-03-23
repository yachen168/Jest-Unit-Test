// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。
const rl = require('./readline.module');
const { isIntegers, isRemainderEqual } = require('./02.module');

function js02() {
    rl.question("請輸入第一個整數：", inputNumber1 => {
        rl.question("請輸入第二個整數：", inputNumber2 => {
            if (!isIntegers(inputNumber1, inputNumber2)) {
                console.log(`請重新輸入2個有效整數`);
                return js02();
            }
            console.log(isRemainderEqual(inputNumber1, inputNumber2));
            rl.close();
        });
    });
}

js02();