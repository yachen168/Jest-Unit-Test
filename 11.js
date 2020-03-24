// 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元
// ，請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。

const rl = require('./readline.module');
const { isPositiveInteger, getPrice } = require('./11.module')

function js11() {
    rl.question("請輸入所需期數(正整數)：", inputNumber => {
        if (!isPositiveInteger(inputNumber)) {
            console.log(`請重新輸入一個有效期數(正整數)`);
            return js11();
        }
        console.log(getPrice(inputNumber));
        rl.close();
    });
}

js11();