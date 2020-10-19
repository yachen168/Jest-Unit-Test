/* 14. 細菌實驗中，原有 b 隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
試寫一遞迴函數。讓使用者輸入分鐘數，並計算在沒有細菌死亡的狀況下，m 分鐘後的細
菌有幾隻。
*/
const rl = require("../readline.module");
const { isPositiveInteger, getNumberOfBacterial } = require("./14.module");

function question1() {
  rl.question(
    "請輸入一開始的細菌數量(需為大於 0 的整數)：",
    (numberOfBacterial) => {
      if (!isPositiveInteger(numberOfBacterial)) {
        console.log(`請重新輸入一開始的細菌數量(大於 0 的整數)`);
        return question1();
      }
      question2(numberOfBacterial);
    }
  );
}

function question2(numberOfBacterial) {
  rl.question("請輸入分鐘數(需為大於 0 的整數)：", (time) => {
    if (!isPositiveInteger(time)) {
      console.log(`請重新輸入分鐘數(大於 0 的整數)`);
      return question2(numberOfBacterial);
    }
    console.log(`細菌有 ${getNumberOfBacterial(numberOfBacterial, time)} 隻`);
    rl.close();
  });
}

question1();
