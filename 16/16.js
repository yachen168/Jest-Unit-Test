// 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
// 讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果。
const rl = require("../readline.module");
const { isLetters, toCaesarCipher } = require("./16.module");

function js16() {
  rl.question("請輸入五個英文字母：", (inputLetters) => {
    if (!isLetters(inputLetters)) {
      console.log(`格式有誤，請重新輸入五個英文字母`);
      return js16();
    }
    console.log(toCaesarCipher(inputLetters));
    rl.close();
  });
}

js16();
