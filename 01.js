// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function js01() {

    rl.question("請輸入人數：", inputValue => {

        function testData() {

            // const numberOfCustomer = ;
            if (!isNumberOfCustomer(inputValue)) {
                console.log("請重新輸入有效數字");
                return js01();
            }
        }

        function getResult() {
            if (!Number(inputValue)) {
                console.log("不播放電影");
            } else {
                console.log("照常播放電影");
            }
        }
        testData();
        getResult();
        rl.close();
    });

}
js01();

function isNumberOfCustomer(inputValue) {
    const regularExpression = /^[0-9]+$/;
    return regularExpression.test(inputValue);
}