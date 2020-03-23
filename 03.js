// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
// 試用「邏輯運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。
const rl = require('./readline.module');
const { isPositiveInteger, isHalfPrice } = require('./03.module');

function js03() {
    rl.question("請輸入年齡：", inputAge => {
        if (!isPositiveInteger(inputAge)) {
            console.log(`請輸入有效年齡`);
            return js03();
        }
        console.log(isHalfPrice(inputAge));
        rl.close();
    });
}

js03();