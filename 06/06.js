// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。
const rl = require("../readline.module");
const { isEnglishNames, getOddAlphabet } = require("./06.module");

function js06() {
  rl.question("請輸入第一個英文名字：", (inputName1) => {
    rl.question("請輸入第二個英文名字：", (inputName2) => {
      rl.question("請輸入第三個英文名字：", (inputName3) => {
        rl.question("請輸入第四個英文名字：", (inputName4) => {
          let names = [inputName1, inputName2, inputName3, inputName4];
          if (!isEnglishNames(names)) {
            console.log(`請重新輸入四個正確的英文名字`);
            return js06();
          }
          console.log(getOddAlphabet(names));
          rl.close();
        });
      });
    });
  });
}

js06();
