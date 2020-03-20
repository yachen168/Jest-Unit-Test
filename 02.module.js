// 過濾出整數
function filtNumber(inputNumber1, inputNumber2) {
    const integer = /^-?\d+$/;
    const isInteger1 = integer.test(inputNumber1);
    const isInteger2 = integer.test(inputNumber2);
    return (isInteger1 && isInteger2);
}

// 計算並判斷餘數
function getResult(inputNumber1, inputNumber2) {
    const remainder1 = +inputNumber1 % 3;
    const remainder2 = +inputNumber2 % 3;
    return (remainder1 === remainder2);
}

module.exports = { filtNumber, getResult };