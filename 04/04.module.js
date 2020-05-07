// 是否為大於 0 的整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^[1-9]\d*$/;
    return positiveInteger.test(inputNumber);
}
// return 結果
function getResult(inputNumber) {
    let equation = '1';
    let total;
    for (let i = 2; i <= +inputNumber; i++) {
        equation += (i % 2) ? ` - ${i}` : ` + ${i}`;
    }
    total = eval(equation);
    return { equation, total };
}

module.exports = { isPositiveInteger, getResult };