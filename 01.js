// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。


function js01() {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("請輸入人數：", inputValue => {
        const regularExpression = /[^0-9]/;
        const numberOfCustomer = regularExpression.test(inputValue);
        if (numberOfCustomer) {
            console.log('請輸入正確數字');
            // return 要加，for recursive。
            return js01();
        } else if (inputValue != 0) {
            console.log("照常播放電影");
        } else {
            console.log("不播放電影");
        }
    });
}
// rl.close();
js01();