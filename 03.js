// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
// 試用「邏輯運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("請輸入年齡：", age => {
    price = 400;
    discount = 0.5;
    if (age <= 6 || age >= 65) {
        price = price * discount;
    }
    console.log("門票 $" + price + " 元");
    rl.close();
});