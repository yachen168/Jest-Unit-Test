// 寫一個遞迴函數 function umleven(n) 來求算
// 2*4 + 4*6 + 6*8...+(n-2)*n
// (n 最小為 4, 只會出現偶數)
const rl = require("../readline.module");
const { isEvenInt_AtLeastFour, getCalculatedResult } = require("./05.module");

function js05() {
  rl.question("請輸入一個大於等於 4 的偶數：", (n) => {
    // if (isEven(n) && isInt(n) && n > 4)
    if (!isEvenInt_AtLeastFour(n)) {
      console.log(`請重新輸入一個大於等於 4 的偶數`);
      return js05();
    }
    console.log(getCalculatedResult(n));
    rl.close();
  });
}

js05();
