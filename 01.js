// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const isPlayMovie = require('./01-moudule');

function js01() {
    rl.question("請輸入看電影人數：", inputNumber => {
        function getResult() {
            const positiveInteger = /^[0-9]+$/;
            const isNumberOfCustomer = positiveInteger.test(inputNumber);
            if (!isNumberOfCustomer) {
                console.log('請輸入有效數字');
                return js01();
            }
            isPlayMovie(inputNumber);
            rl.close();
        }
        getResult(inputNumber);
    });
}
js01();