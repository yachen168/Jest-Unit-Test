// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
const rl = require('./readline.module');
const { isPositiveInteger, isPlayMovie } = require('./01.module');

function js01() {
    rl.question("請輸入看電影人數：", inputNumber => {
        if (!isPositiveInteger(inputNumber)) {
            console.log(`請重新輸入有效數字`);
            return js01();
        }
        console.log(isPlayMovie(inputNumber));
        rl.close();
    });
}

js01();