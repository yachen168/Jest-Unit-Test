// 10. 宣告一整數陣列 array = [3,50,0,13,2,4,11] 試寫一程式，
// 印出陣列中所包含的質數以及其索引值。

const rl = require("../readline.module");
const { getResult } = require("./10.module");

function js10() {
  const message = getResult([3, 50, 0, 13, 2, 4, 11])
    .map(({ index, value }) => `質數：${value} (索引值為 ${index})`)
    .join(" , ");
  console.log(message);
}
js10();
rl.close();
