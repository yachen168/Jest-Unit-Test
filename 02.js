// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("player1 請輸入正整數：", num1 => {
    rl.question("player2 請輸入正整數：", num2 => {
        num1 = num1 % 3;
        num2 = num2 % 3;
        if (num1 == num2) {
            console.log("餘數相同");
        }
        rl.close();
    });
});