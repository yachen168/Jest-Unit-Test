// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function js01() {

    rl.question("請輸入人數：", inputNumber => {
        function isPlayMovie() {
            const positiveInteger = /^[0-9]+$/;
            const isNumberOfCustomer = positiveInteger.test(inputNumber);
            if (!isNumberOfCustomer) {
                console.log('請輸入正確數字');
                return js01();
            }
            getResult();
            rl.close();
        }

        function getResult() {
            if (inputNumber != 0) {
                console.log("照常播放電影");
            } else {
                console.log("不播放電影");
            }
        }
        isPlayMovie();
    });

}
js01();