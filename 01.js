// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { isPositiveInteger, isPlayMovie } = require('./01.module');

function js01() {
    rl.question("請輸入看電影人數：", inputNumber => {
        if (!isPositiveInteger(inputNumber)) {
            console.log(`請重新輸入有效數字`);
            return js01();
        } else {
            if (isPlayMovie(inputNumber)) {
                console.log(`人數 ${inputNumber} 人，照常播放電影`);
            } else {
                console.log(`人數 ${inputNumber} 人，不播放電影`);
            }
        }
        rl.close();
    });
}

js01();