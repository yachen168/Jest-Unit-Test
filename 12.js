// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("請輸入看電影的人數：", num => {
    if (num < 0 || isNaN(num)) {
        console.log("請輸入有效數字");
    } else if (num == 0) {
        console.log("不播放電影");
    } else {
        console.log("播放電影");
    }
    rl.close();
});